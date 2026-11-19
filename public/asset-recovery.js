const steps = [
  ['Inventory & Audit', 'Submit retired hardware types, unit counts and site PIN codes to qualify your corporate lot.'],
  ['Quick Buyback Valuation & Settlement', 'Lock commercial buyback pricing and prompt settlement terms for eligible IT assets before collection.'],
  ['Free Pack & Pickup', 'Free Pack & Pickup (qualified corporate lots) with zero-cost site packing, palletisation and insured collection.'],
  ['Certified Data Sanitization', 'Execute verifiable logical data wiping or witnessed physical drive destruction on data-bearing media.'],
  ['Government-Norm E-Waste Disposal Certificate', 'Issue statutory government-norm e-waste disposal certificates alongside final settlement and handover logs.']
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
        <p>Submit your retired IT inventory for commercial valuation, zero-cost site packing and pickup for qualified corporate lots, verifiable data sanitization or drive destruction, and statutory government-compliant disposal certificates.</p></div>
      <a class="button" href="${enquiryLink}">Book e-waste pickup &amp; certificate</a>
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
        <option value="">Select compliance preference</option>
        <option>Certified logical data wiping</option>
        <option>Physical media destruction &amp; witness log</option>
        <option>Statutory e-waste &amp; data compliance certificate required</option>
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
