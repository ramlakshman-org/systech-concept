const components = {
  workstation: {
    label: 'Workstation',
    title: 'A workstation joins the office Wi-Fi',
    detail: 'A laptop or Wi-Fi-enabled desktop sends and receives data wirelessly through a nearby access point.'
  },
  access: {
    label: 'Access point',
    title: 'An access point brings Wi-Fi to a work area',
    detail: 'A ceiling-mounted access point serves devices in its coverage area and bridges their traffic onto the wired office network.'
  },
  cable: {
    label: 'Ethernet cabling',
    title: 'Ethernet carries traffic back to the network cabinet',
    detail: 'A wired link runs from the access point to the switch. With compatible Power over Ethernet equipment, the same cable can also power the access point.'
  },
  switch: {
    label: 'Network switch',
    title: 'The switch connects equipment across the office',
    detail: 'The switch forwards local traffic and provides a wired connection for access points, desks and other network devices. Internet-bound traffic goes on to the office gateway.'
  }
};

export const wifiIllustration = {
  id: 'wifi',
  heading: 'Follow the office connection',
  instruction: 'Select a marker on the illustration or step bar to inspect each subsystem.',
  image: 'planner-cutaway.webp',
  width: 773,
  height: 529,
  alt: 'An office cutaway with workstations, a ceiling-mounted access point, Ethernet cabling below the floor and a network switch.',
  caption: 'Illustrative office network',
  components
};

const explorerStacks = {
  wifi: 'Aruba Networks · Cisco · Cat6A PoE+ Switching',
  firewalls: 'Fortinet FortiGate · Sophos · DLP & Email Filtering',
  endpoint: 'Sophos Intercept X EDR/XDR · Endpoint Policies',
  devices: 'Lenovo ThinkPad, ThinkCentre, ThinkStation · Apple · ASUS',
  shared: 'ThinkVision Monitors · HP & Brother Print · Tablets',
  otherBrands: 'Dell · HP · ASUS · Acer · Apple ABM · Printers',
  accessories: 'Genuine Lenovo USB-C/Thunderbolt Docks · Audio · Bags',
  servers: 'Lenovo ThinkSystem · ThinkAgile HCI · AMD EPYC · VMware',
  storage: 'DAS · NAS · SAN Block Storage · LTO Tape Archive',
  cloud: 'Microsoft Azure · AWS · Google Cloud · M365 Identity',
  cabling: 'Structured Cat6A · Optical Fibre Backbones · Patch Panels',
  meeting: 'Boardroom Displays · Video Bars · Acoustics · IP-PBX',
  physical: 'Hikvision · CP Plus · eSSL Biometrics · Honeywell Alarms',
  power: 'Online UPS Sizing · Server Room Continuity · Indoor Boosters',
  repairs: 'Chip-Level Diagnostics · Server & Site Servicing',
  amc: 'Preventive Inspections · Scheduled SLAs · Asset Registers',
  spares: '100% Genuine Lenovo FRU Parts Verified by Model / MTM',
  renewal: 'DDR4/DDR5 RAM & NVMe SSD Refreshes · Multi-Point QC',
  recycling: 'Audited Inventory · Data Sanitization Options · Collection'
};

function buildEnquiryHref(illustration, component) {
  if (illustration.partEnquiry) return illustration.partEnquiry + '&part=' + (component.part || '');
  if (illustration.detailEnquiry) {
    return illustration.detailEnquiry + '&focus=' + encodeURIComponent(component.label);
  }
  return '';
}

export function serviceIllustration(illustration = wifiIllustration) {
  const { id, heading, instruction, image, width, height, alt, caption, components } = illustration;
  const entries = Object.entries(components);
  const [initialId, initial] = entries[0];
  const stackTag = explorerStacks[id] || '';
  const enquiryHref = buildEnquiryHref(illustration, initial);
  const enquiryText = illustration.partEnquiry
    ? 'Enquire about ' + initial.label.toLowerCase()
    : 'Enquire about ' + initial.label.toLowerCase();

  return `<section class="wifi-explorer" data-wifi-explorer="${id}" aria-labelledby="wifi-diagram-heading">
    <div class="wifi-explorer-top">
      <div class="wifi-explorer-heading">
        <h2 id="wifi-diagram-heading">${heading}</h2>
        <p>${instruction || 'Select a marker on the illustration or step bar to inspect each subsystem.'}</p>
      </div>
      ${stackTag ? `<span class="wifi-stack-tag">${stackTag}</span>` : ''}
    </div>
    <div class="wifi-step-bar" role="group" aria-label="Subsystems in diagram">
      ${entries.map(([compId, comp], idx) => `<button type="button" class="wifi-step-pill" data-wifi-node="${compId}" aria-pressed="${compId === initialId}" aria-controls="wifi-component-info">
        <span class="wifi-step-num" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
        <span>${comp.label}</span>
      </button>`).join('')}
    </div>
    <figure class="wifi-cutaway" style="--illustration-width:${width}px">
      <div class="wifi-stage-bar">
        <span class="wifi-stage-title">FIG. 01 — ${heading}</span>
        <span class="wifi-stage-hint">Select node (01–${String(entries.length).padStart(2, '0')})</span>
      </div>
      <div class="wifi-cutaway-scene">
        <img src="assets/${image}" width="${width}" height="${height}" alt="${alt}">
        <div class="wifi-controls" role="group" aria-label="${heading}">
        ${entries.map(([compId, { label, position }], idx) => {
          const stepNum = String(idx + 1).padStart(2, '0');
          return `<button type="button" class="wifi-node" data-wifi-node="${compId}"${position ? ` style="--x:${position[0]}%;--y:${position[1]}%"` : ''} aria-pressed="${compId === initialId}" aria-controls="wifi-component-info" aria-label="${stepNum}: ${label}">
            <em class="wifi-node-idx" aria-hidden="true">${stepNum}</em>
            <span class="wifi-node-tooltip" aria-hidden="true">${label}</span>
          </button>`;
        }).join('')}
        </div>
      </div>
      <figcaption>${caption}</figcaption>
    </figure>
    <div id="wifi-component-info" class="wifi-component-info" aria-live="polite">
      <div class="wifi-info-head">
        <span class="wifi-info-step">01 / ${String(entries.length).padStart(2, '0')}</span>
        <h3>${initial.title}</h3>
      </div>
      <p>${initial.detail}</p>
      ${enquiryHref ? `<a class="arrow-link" data-part-enquiry="true" href="${enquiryHref}"><span data-part-enquiry-label>${enquiryText}</span> <span aria-hidden="true">→</span></a>` : ''}
    </div>
  </section>`;
}

export function bindServiceIllustration(explorer, illustration = wifiIllustration) {
  const buttons = explorer.querySelectorAll('[data-wifi-node]');
  const info = explorer.querySelector('#wifi-component-info');
  const keys = Object.keys(illustration.components);
  const total = String(keys.length).padStart(2, '0');

  explorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-wifi-node]');
    if (!control) return;
    const id = control.dataset.wifiNode;
    const component = illustration.components[id];
    if (!component) return;
    const idx = String(keys.indexOf(id) + 1).padStart(2, '0');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.wifiNode === id)));
    const stepReadout = info.querySelector('.wifi-info-step');
    if (stepReadout) stepReadout.textContent = `${idx} / ${total}`;
    info.querySelector('h3').textContent = component.title;
    info.querySelector('p').textContent = component.detail;
    const partLink = info.querySelector('[data-part-enquiry]');
    if (partLink) {
      partLink.href = buildEnquiryHref(illustration, component);
      partLink.querySelector('[data-part-enquiry-label]').textContent = 'Enquire about ' + component.label.toLowerCase();
    }
  });
}
