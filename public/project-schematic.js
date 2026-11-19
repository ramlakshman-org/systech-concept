const schematicNodes = {
  workstations: {
    label: 'Workstations',
    tag: 'Edge · Layer 01',
    oem: 'Lenovo ThinkPad & ThinkStation · Apple · ASUS',
    detail: 'Laptops, desktops and dual-display workstations provisioned, imaged and enrolled for every desk.',
    href: '?page=business-computing',
    action: 'Explore business computing',
    plannerHref: '?page=planner&seats=50'
  },
  meeting: {
    label: 'Meeting rooms',
    tag: 'AV & Voice · Layer 01',
    oem: 'Displays · Video Bars · IP-PBX Telephony',
    detail: 'Conference displays, video conferencing bars, acoustic coverage and IP telephony wired to the rack.',
    href: '?page=meeting-rooms-telephony',
    action: 'Explore meeting rooms',
    plannerHref: '?page=planner&seats=50&option=meeting'
  },
  access: {
    label: 'Access & CCTV',
    tag: 'Physical · Layer 01',
    oem: 'eSSL Security · Hikvision · CP Plus · Honeywell',
    detail: 'Biometric door controllers, surveillance cameras and PoE NVR recording unified on the office LAN.',
    href: '?page=cctv-access-control',
    action: 'Explore physical security',
    plannerHref: '?page=planner&seats=50&option=cctv&option=access&view=security'
  },
  network: {
    label: 'Office network',
    tag: 'Core Backbone · Layer 02',
    oem: 'Cisco · Aruba Networks · Fortinet · Sophos',
    detail: 'Structured copper & fibre cabling, managed PoE switching, enterprise Wi-Fi and next-gen firewall rules.',
    href: '?page=network',
    action: 'Follow a secure network',
    plannerHref: '?page=planner&seats=50&view=network'
  },
  servers: {
    label: 'Servers & storage',
    tag: 'On-Premises · Layer 03',
    oem: 'Lenovo ThinkSystem & ThinkAgile · VMware · SAN/NAS',
    detail: 'Rack or hyperconverged compute paired with NAS, SAN or backup storage inside your server closet.',
    href: '?page=servers-hci',
    action: 'Explore servers & HCI',
    plannerHref: '?page=planner&seats=50&option=servers&view=cloud'
  },
  cloud: {
    label: 'Cloud services',
    tag: 'Hybrid · Layer 03',
    oem: 'Microsoft 365 & Azure · AWS · Google Cloud',
    detail: 'Microsoft 365, Azure, AWS or Google Cloud workloads linked securely through your office gateway.',
    href: '?page=cloud-migration',
    action: 'Explore cloud migration',
    plannerHref: '?page=planner&seats=50&view=cloud'
  }
};

const icons = {
  workstations: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  meeting: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="11" rx="2"/><path d="M7 20h10M9.5 10.5h5"/></svg>',
  access: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M9 16.5c.8-1.3 5.2-1.3 6 0"/></svg>',
  network: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2"/><circle cx="7.5" cy="12" r="1"/><circle cx="11.5" cy="12" r="1"/><path d="M15 12h3"/></svg>',
  servers: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.5"/><path d="M8 7.2h2M8 16.8h2M14 7.2h2M14 16.8h2"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18.5h9.2a4.3 4.3 0 0 0 .8-8.5A5.5 5.5 0 0 0 6.8 8.8 3.9 3.9 0 0 0 7.5 18.5Z"/></svg>'
};

export function projectSchematic() {
  const active = schematicNodes.network;
  return `<div class="schematic-card" id="project-schematic" data-active-node="network" aria-label="Interactive office infrastructure schematic">
    <div class="schematic-head">
      <span class="schematic-badge"><span class="live-dot" aria-hidden="true"></span>System topology</span>
      <span class="schematic-hint">Select any layer</span>
    </div>
    <div class="schematic-board">
      <div class="schematic-tier schematic-tier-top" role="group" aria-label="Workplace edge systems">
        ${['workstations', 'meeting', 'access'].map(id => `
          <button type="button" class="schematic-node" data-schematic-node="${id}" aria-pressed="false">
            <span class="schematic-icon">${icons[id]}</span>
            <span class="schematic-node-label">${schematicNodes[id].label}</span>
          </button>`).join('')}
      </div>
      <svg class="schematic-bus-wires" viewBox="0 0 600 42" preserveAspectRatio="none" aria-hidden="true">
        <path class="wire-base wire-workstations" d="M94 0 V21 H300 V42"/>
        <path class="wire-flow wire-workstations" d="M94 0 V21 H300 V42"/>
        <path class="wire-base wire-meeting" d="M300 0 V42"/>
        <path class="wire-flow wire-meeting" d="M300 0 V42"/>
        <path class="wire-base wire-access" d="M506 0 V21 H300 V42"/>
        <path class="wire-flow wire-access" d="M506 0 V21 H300 V42"/>
      </svg>
      <div class="schematic-tier schematic-tier-core">
        <button type="button" class="schematic-node schematic-node-core" data-schematic-node="network" aria-pressed="true">
          <span class="schematic-icon">${icons.network}</span>
          <span class="schematic-core-copy">
            <strong>${schematicNodes.network.label}</strong>
            <span>Structured cabling · Managed switching · Firewall</span>
          </span>
          <span class="schematic-core-tag">Core bus</span>
        </button>
      </div>
      <svg class="schematic-bus-wires" viewBox="0 0 600 42" preserveAspectRatio="none" aria-hidden="true">
        <path class="wire-base wire-servers" d="M235 0 V21 H146 V42"/>
        <path class="wire-flow wire-servers" d="M235 0 V21 H146 V42"/>
        <path class="wire-base wire-cloud" d="M365 0 V21 H454 V42"/>
        <path class="wire-flow wire-cloud" d="M365 0 V21 H454 V42"/>
      </svg>
      <div class="schematic-tier schematic-tier-bottom" role="group" aria-label="Compute and cloud infrastructure">
        ${['servers', 'cloud'].map(id => `
          <button type="button" class="schematic-node" data-schematic-node="${id}" aria-pressed="false">
            <span class="schematic-icon">${icons[id]}</span>
            <span class="schematic-node-label">${schematicNodes[id].label}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="schematic-readout" aria-live="polite">
      <div class="schematic-readout-text">
        <div class="schematic-readout-meta">
          <span class="schematic-tag">${active.tag}</span>
          <span class="schematic-oem">${active.oem}</span>
        </div>
        <p>${active.detail}</p>
      </div>
      <div class="schematic-readout-links">
        <a class="arrow-link" data-schematic-primary href="${active.href}">${active.action} <span aria-hidden="true">→</span></a>
        <a class="arrow-link schematic-planner-link" data-schematic-planner href="${active.plannerHref}">Inspect in floor plan <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>`;
}

export function bindProjectSchematic(container) {
  if (!container) return;
  const buttons = container.querySelectorAll('[data-schematic-node]');
  const tag = container.querySelector('.schematic-tag');
  const oem = container.querySelector('.schematic-oem');
  const detail = container.querySelector('.schematic-readout p');
  const primaryLink = container.querySelector('[data-schematic-primary]');
  const plannerLink = container.querySelector('[data-schematic-planner]');
  container.addEventListener('click', event => {
    const button = event.target.closest('[data-schematic-node]');
    if (!button) return;
    const id = button.dataset.schematicNode;
    const node = schematicNodes[id];
    container.dataset.activeNode = id;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    tag.textContent = node.tag;
    oem.textContent = node.oem;
    detail.textContent = node.detail;
    primaryLink.href = node.href;
    primaryLink.firstChild.textContent = node.action + ' ';
    plannerLink.href = node.plannerHref;
  });
}
