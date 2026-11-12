const steps = [
  ['Inventory', 'List the retired equipment, approximate quantities and pickup location.'],
  ['Inspection', 'Review what can be collected and flag devices that hold data.'],
  ['Valuation', 'Review any recovery offer for eligible equipment before agreeing to proceed.'],
  ['Collection', 'Agree pickup arrangements, equipment handover and any data-handling requirements.'],
  ['Settlement', 'Confirm the handover documentation and any agreed payment.']
];

const recoveryFields = [
  ['assetTypes', 'Equipment types'],
  ['assetQuantity', 'Approximate quantity'],
  ['pickupLocation', 'Pickup city or PIN code'],
  ['dataHandling', 'Data handling']
];

export function assetRecoveryWorkflow(enquiryLink) {
  return `<section class="asset-recovery" id="asset-recovery" aria-labelledby="asset-recovery-title">
    <header class="asset-recovery-head">
      <div><h2 id="asset-recovery-title">IT Asset Recovery</h2>
        <p>Start with an inventory of your retired equipment. Systech can review it with you and agree the next steps for collection and recovery.</p></div>
      <a class="button" href="${enquiryLink}">Start an asset recovery enquiry</a>
    </header>
    <ol class="asset-recovery-steps">
      ${steps.map(([title, detail], index) => `<li><span class="recovery-step-number" aria-hidden="true">${index + 1}</span><h3>${title}</h3><p>${detail}</p></li>`).join('')}
    </ol>
  </section>`;
}

export function assetRecoveryFields(active) {
  return `<fieldset class="wide recovery-fields" id="recovery-fields"${active ? '' : ' hidden disabled'}>
    <legend>Asset recovery details <span>(optional)</span></legend>
    <div class="recovery-fields-grid">
      <label class="field">Equipment types<input name="assetTypes" maxlength="160" placeholder="Laptops, monitors, servers"></label>
      <label class="field">Approximate quantity<input name="assetQuantity" type="number" min="1" step="1" max="1000000" inputmode="numeric"></label>
      <label class="field">Pickup city or PIN code<input name="pickupLocation" maxlength="100" placeholder="Bengaluru or 560061"></label>
      <label class="field">Data handling<select name="dataHandling">
        <option value="">Select if relevant</option>
        <option>Discuss secure data erasure</option>
        <option>Discuss physical destruction</option>
        <option>Need advice on data handling</option>
        <option>No special handling requested</option>
      </select></label>
    </div>
  </fieldset>`;
}

export function assetRecoveryDraftLines(data) {
  if (data.get('team') !== 'recovery') return [];
  const details = recoveryFields.flatMap(([name, label]) => {
    const value = data.get(name)?.trim();
    return value ? [label + ': ' + value] : [];
  });
  return details.length ? ['', 'Asset recovery details:', ...details] : [];
}
