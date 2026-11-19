export const softwareLicensingId = 'software-licensing';
export const softwareLicensingTitle = 'Software Licensing, Subscriptions & Renewals';

const vendors = {
  sophos: {
    name: 'Sophos',
    category: 'Firewall, Intercept X EDR & XDR',
    zone: 'endpoint',
    badge: 'Synchronised Security',
    headline: 'Sophos Intercept X & Firewall subscription renewals',
    detail: 'Keep Sophos XGS/XG firewall subscriptions, Intercept X Advanced EDR/XDR endpoint licences, email security and MDR entitlements synchronised across remote and office fleets.',
    deliverables: [
      'Appliance serial lookup & Sophos Central tenant verification',
      'Co-term alignment for Xstream Protection & endpoint seat counts',
      'Upgrade paths from standard AV to Intercept X XDR / MDR'
    ]
  },
  fortinet: {
    name: 'Fortinet',
    category: 'FortiGate UTM & FortiGuard Services',
    zone: 'perimeter',
    badge: 'Boundary Security',
    headline: 'FortiGate appliance contracts & FortiGuard renewals',
    detail: 'Renew FortiCare 24x7 support, FortiGuard IPS/web-filtering bundles and multi-site SD-WAN licences before hardware throughput or threat updates lapse.',
    deliverables: [
      'Serial-number contract audit across branch and HQ FortiGates',
      'FortiCare + Unified Threat Protection (UTP) multi-year quotes',
      'Co-terming HA firewall pairs and FortiAP/FortiSwitch entitlements'
    ]
  },
  aruba: {
    name: 'Aruba Networks',
    category: 'Aruba Central & ClearPass NAC',
    zone: 'network',
    badge: 'Cloud Campus Wi-Fi',
    headline: 'Aruba Central cloud management & access control subscriptions',
    detail: 'Manage Foundation and Advanced device subscriptions for Instant On / Campus access points, PoE switches and ClearPass network policy nodes without controller downtime.',
    deliverables: [
      'AP and switch foundation/advanced token sizing by floor',
      'Multi-year renewal scheduling with grace-window continuity',
      'Expansion licences paired with hardware rollouts'
    ]
  },
  vmware: {
    name: 'VMware',
    category: 'vSphere, Virtualisation & Cluster Licensing',
    zone: 'compute',
    badge: 'Virtualisation Stack',
    headline: 'Core-based VMware subscription alignment & renewal planning',
    detail: 'Review host CPU core counts, cluster expansion timelines and ThinkSystem/server maintenance windows so virtualisation renewals stay compliant and budget-predictable.',
    deliverables: [
      'Host CPU & per-core entitlement reconciliation across clusters',
      'vSphere Essentials Plus / Standard / VCF migration planning',
      'Synchronised server AMC & ThinkSystem compute sizing'
    ]
  },
  kaspersky: {
    name: 'Kaspersky',
    category: 'Authorised Business Endpoint & Server AV',
    zone: 'endpoint',
    badge: 'Authorised Partner · Bengaluru',
    headline: 'Kaspersky Endpoint Security & Hybrid Cloud suites',
    detail: 'Authorised Kaspersky commercial licensing for workstations, file servers and mail Gateways—protecting teams against ransomware, phishing and removable-media threats.',
    deliverables: [
      'Kaspersky Endpoint Security for Business Select / Advanced tiers',
      'Server, virtualised workload and mail security seat bundles',
      'Annual key issuance, console onboarding & seat true-ups'
    ]
  },
  seqrite: {
    name: 'Seqrite',
    category: 'Seqrite Endpoint Security, EDR & Enterprise Mobility',
    zone: 'endpoint',
    badge: 'Endpoint, EDR & Mobility',
    headline: 'Seqrite Endpoint Security, EDR & Enterprise Mobility renewals',
    detail: 'Deploy and renew Seqrite Endpoint Security (EPS), HawkkHunt EDR/XDR and Seqrite Enterprise Mobility Management licences for distributed Indian and global office fleets.',
    deliverables: [
      'Seqrite Endpoint Security Business, Total & Cloud multi-year seat renewals',
      'Seqrite EDR & threat-hunting telemetry console onboarding',
      'Seqrite Enterprise Mobility Management (EMM) & device control bundles'
    ]
  },
  codeproof: {
    name: 'Codeproof MDM',
    category: 'Cyber Device Manager · UEM & Kiosk Control',
    zone: 'endpoint',
    badge: 'Unified Device Control',
    headline: 'Streamlined multi-OS mobile, rugged & laptop MDM subscriptions',
    detail: 'Enroll Android, iOS, Windows and rugged handheld fleets into centralised policy management—enforcing app whitelisting, kiosk lockdowns, geo-fencing and remote wipe.',
    deliverables: [
      'Role-based device profile scoping for field teams and kiosks',
      'Annual device licence provisioning & seat additions',
      'Hardware pairing with ThinkPad, tablet and field deployments'
    ]
  }
};

const stages = {
  renewal: { label: 'Upcoming Renewal', note: 'Avoid threat-feed expiry & lapse penalties' },
  coterm: { label: 'Co-Term Consolidation', note: 'Align staggered vendor renewal dates onto one schedule' },
  newseats: { label: 'Net-New / True-Up', note: 'Add compliant endpoints, APs or cores mid-cycle' }
};

const scales = {
  small: { label: '10–50 seats', scope: 'Single-site SMB or branch office stack' },
  mid: { label: '50–250 seats', scope: 'Multi-floor office with firewall HA & server host' },
  enterprise: { label: '250+ enterprise fleet', scope: 'Multi-site IT governance & centralised co-terming' }
};

const categories = [
  ['all', 'All platforms (07)'],
  ['endpoint', 'Endpoint, AV & MDM'],
  ['perimeter', 'Firewalls & UTM'],
  ['network', 'Campus Wi-Fi & NAC'],
  ['compute', 'Servers & Virtualisation']
];

const vendorCategories = {
  sophos: 'endpoint',
  kaspersky: 'endpoint',
  seqrite: 'endpoint',
  codeproof: 'endpoint',
  fortinet: 'perimeter',
  aruba: 'network',
  vmware: 'compute'
};

const zoneLabels = [
  { id: 'endpoint', x: 34, y: 34, title: 'Endpoints & MDM', brands: 'Sophos · Seqrite · Kaspersky · MDM' },
  { id: 'perimeter', x: 34, y: 176, title: 'Perimeter UTM', brands: 'Fortinet · Sophos XGS' },
  { id: 'network', x: 422, y: 34, title: 'Wi-Fi & Access', brands: 'Aruba Central · ClearPass' },
  { id: 'compute', x: 422, y: 176, title: 'Virtualisation Hosts', brands: 'VMware · ThinkSystem' }
];

function topologyDiagramHtml(activeVendorId) {
  const activeZone = vendors[activeVendorId]?.zone || 'endpoint';
  const tracePaths = {
    endpoint: 'M262 126H240V79H218',
    perimeter: 'M262 160H240V221H218',
    network: 'M378 126H400V79H422',
    compute: 'M378 160H400V221H422'
  };
  const traceEnds = {
    endpoint: [262, 126, 218, 79],
    perimeter: [262, 160, 218, 221],
    network: [378, 126, 422, 79],
    compute: [378, 160, 422, 221]
  };
  return `<svg class="license-topology-svg" viewBox="0 0 640 286" role="img" aria-label="Systech co-term license management topology connecting endpoint security, boundary firewalls, Wi-Fi management and virtualisation clusters.">
    <defs>
      <pattern id="lic-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0v20" fill="none" stroke="#e6edf7" stroke-width="0.75"/>
      </pattern>
    </defs>
    <rect width="640" height="286" rx="10" fill="#fbfdff"/>
    <rect width="640" height="286" rx="10" fill="url(#lic-grid)"/>

    <!-- Connector traces from centre hub (320, 143) -->
    ${Object.entries(tracePaths).map(([id, d]) => {
      const isAct = activeZone === id;
      const [sx, sy, ex, ey] = traceEnds[id];
      return `<path class="lic-trace ${isAct ? 'is-active' : ''}" d="${d}" fill="none"/>`
        + (isAct ? `<path class="cutaway-flow cutaway-pulse" d="${d}" fill="none" stroke="#9fc0ff" stroke-width="1.4" stroke-dasharray="5 7" stroke-linecap="round"/>` : '')
        + `<circle cx="${sx}" cy="${sy}" r="${isAct ? '3.5' : '2.4'}" fill="${isAct ? '#0753de' : '#9fb0c7'}"/>`
        + `<circle cx="${ex}" cy="${ey}" r="${isAct ? '3.5' : '2.4'}" fill="${isAct ? '#0753de' : '#9fb0c7'}"/>`;
    }).join('')}

    <!-- Central Systech Co-Term Registry Node with extruded architectural base -->
    <g transform="translate(262 96)">
      <rect x="4" y="5" width="116" height="94" rx="10" fill="#b9cef2" stroke="#1e3a6e" stroke-width="1"/>
      <rect width="116" height="94" rx="10" fill="#0d1117" stroke="#0753de" stroke-width="1.8"/>
      <rect x="0.9" y="0.9" width="114.2" height="92.2" rx="9" fill="none" stroke="rgba(123,168,255,.35)" stroke-width="0.9"/>
      <circle cx="58" cy="28" r="13" fill="rgba(7,83,222,.26)" stroke="#5b95ff" stroke-width="1.5"/>
      <path d="m52 28 4 4 8-8" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="58" y="57" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">Systech Desk</text>
      <text x="58" y="72" text-anchor="middle" fill="#b7ccf0" font-size="9.5">SKU Audit · Co-Term</text>
      <text x="58" y="84" text-anchor="middle" fill="#7ba8ff" font-size="9">Zero-Gap Renewal</text>
    </g>

    <!-- Four Zone Nodes with beveled 3D card depth -->
    ${zoneLabels.map(z => {
      const active = z.id === activeZone;
      return `<g class="lic-zone-node ${active ? 'is-active' : ''}" transform="translate(${z.x} ${z.y})">
        <rect x="3" y="4" width="184" height="76" rx="8" fill="${active ? '#c8dcff' : '#dce6f3'}"/>
        <rect width="184" height="76" rx="8" fill="${active ? '#eef4ff' : '#ffffff'}" stroke="${active ? '#0753de' : '#8fa3bd'}" stroke-width="${active ? '1.8' : '1.15'}"/>
        <rect x="1.5" y="1.5" width="4" height="73" rx="2" fill="${active ? '#0753de' : '#d6e2f2'}"/>
        <circle cx="20" cy="24" r="4.5" fill="${active ? '#0753de' : '#8b9ab0'}"/>
        <text x="32" y="27.5" fill="#0d1117" font-size="12" font-weight="700">${z.title}</text>
        <text x="16" y="48" fill="${active ? '#0753de' : '#57606f'}" font-size="${z.brands.length > 30 ? '9' : '10.2'}" font-weight="600">${z.brands}</text>
        <text x="16" y="64" fill="#6b7788" font-size="9.2">${active ? 'Selected stack track' : 'Covered under annual co-term'}</text>
      </g>`;
    }).join('')}
  </svg>
  <div class="license-mobile-topology" aria-hidden="true">
    <div class="license-mobile-hub">
      <strong>Systech Co-Term Registry</strong>
      <span>SKU Audit · Single Renewal Schedule</span>
    </div>
    <div class="license-mobile-zones">
      ${zoneLabels.map(z => {
        const active = z.id === activeZone;
        return `<div class="license-mobile-zone${active ? ' is-active' : ''}">
          <strong>${z.title}</strong>
          <span>${z.brands}</span>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

export function softwareEnquiryUrl(vendor = 'sophos', stage = 'renewal', scale = 'mid') {
  const query = new URLSearchParams({
    page: 'contact',
    service: 'security',
    topic: softwareLicensingId
  });
  if (vendor) query.set('vendor', vendor);
  if (stage) query.set('stage', stage);
  if (scale) query.set('scale', scale);
  return '?' + query;
}

export function softwareLicensingRequirement(params) {
  if (params.get('topic') !== softwareLicensingId) return '';
  const vendor = vendors[params.get('vendor')];
  const stage = stages[params.get('stage')];
  const scale = scales[params.get('scale')];
  return [
    'Software Licensing & Renewals',
    vendor ? vendor.name : '',
    stage ? stage.label : '',
    scale ? scale.label : ''
  ].filter(Boolean).join(' · ');
}

function renderActiveBrief(vendorId, stageId, scaleId) {
  const vendor = vendors[vendorId] || vendors.sophos;
  const stage = stages[stageId] || stages.renewal;
  const scale = scales[scaleId] || scales.mid;
  return `<div class="license-detail-panel">
    <p class="eyebrow">${vendor.badge} · ${stage.label}</p>
    <h3>${vendor.headline}</h3>
    <p>${vendor.detail}</p>
    <ul class="playbook-list">
      ${vendor.deliverables.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p class="license-scope-note"><strong>Selected scope:</strong> ${vendor.name} · ${stage.label} (${scale.label} — ${scale.scope}). ${stage.note}.</p>
    <div class="actions">
      <a class="button" href="${softwareEnquiryUrl(vendorId, stageId, scaleId)}">Request ${vendor.name} quote →</a>
      <a class="arrow-link" href="?page=microsoft-solutions">Need Microsoft 365 / Copilot? <span aria-hidden="true">→</span></a>
    </div>
  </div>`;
}

export function softwareLicensingPage() {
  const initialVendor = 'sophos';
  const initialStage = 'renewal';
  const initialScale = 'mid';
  return `<div class="wrap software-licensing-page" data-license-explorer data-vendor="${initialVendor}" data-stage="${initialStage}" data-scale="${initialScale}">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=security">Networking &amp; Cybersecurity</a> <span aria-hidden="true">/</span> Software Licensing</nav>
    <header class="wifi-intro">
      <div>
        <p class="eyebrow">IT Subscription &amp; Renewal Desk · Pan-India Supply</p>
        <h1>Software licensing &amp; zero-gap renewals.</h1>
      </div>
      <div>
        <p>Audit, consolidate and renew commercial security, networking, virtualisation and MDM subscriptions across Sophos, Fortinet, Aruba Networks, VMware, Kaspersky, Seqrite, Codeproof and Microsoft under one accountable partner.</p>
        <a class="button" href="${softwareEnquiryUrl(initialVendor, initialStage, initialScale)}">Request renewal schedule</a>
      </div>
    </header>

    <section class="license-configurator" aria-labelledby="license-config-title">
      <div class="license-config-head">
        <div>
          <p class="eyebrow">Interactive Renewal Configurator</p>
          <h2 id="license-config-title">Scope your software track and renewal cycle</h2>
        </div>
        <div class="license-control-pills" role="group" aria-label="Select technology vendor">
          ${Object.entries(vendors).map(([id, v]) => `<button type="button" class="playbook-tab" data-license-vendor="${id}" aria-pressed="${id === initialVendor}">${v.name}</button>`).join('')}
        </div>
      </div>

      <div class="license-secondary-controls">
        <div class="license-control-group">
          <span class="license-control-label">Cycle stage</span>
          <div class="license-mini-pills" role="group" aria-label="Select cycle stage">
            ${Object.entries(stages).map(([id, s]) => `<button type="button" data-license-stage="${id}" aria-pressed="${id === initialStage}">${s.label}</button>`).join('')}
          </div>
        </div>
        <div class="license-control-group">
          <span class="license-control-label">Fleet / Node scale</span>
          <div class="license-mini-pills" role="group" aria-label="Select fleet scale">
            ${Object.entries(scales).map(([id, sc]) => `<button type="button" data-license-scale="${id}" aria-pressed="${id === initialScale}">${sc.label}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="license-stage-grid">
        <figure class="license-topology-frame" id="license-topology-frame">
          ${topologyDiagramHtml(initialVendor)}
          <figcaption>Centralised SKU verification and co-terming across endpoint, firewall, Wi-Fi and cluster workloads</figcaption>
        </figure>
        <div id="license-detail-host" aria-live="polite">
          ${renderActiveBrief(initialVendor, initialStage, initialScale)}
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="license-vendors-title">
      <header class="editorial-heading">
        <div>
          <p class="eyebrow">Supported Software &amp; Security OEMs</p>
          <h2 id="license-vendors-title">Renewals, upgrades &amp; net-new seat provisioning</h2>
        </div>
        <p class="editorial-review">Filter by security layer or compare entitlements across commercial firewall, AV/XDR, cloud Wi-Fi and hypervisor subscriptions.</p>
      </header>
      <div class="case-filter-bar" id="license-filter-bar" role="group" aria-label="Filter software categories">
        ${categories.map(([id, label], idx) => `<button type="button" class="playbook-tab" data-license-filter="${id}" aria-pressed="${idx === 0}">${label}</button>`).join('')}
      </div>
      <div class="license-vendor-grid" id="license-vendor-grid">
        ${Object.entries(vendors).map(([id, v]) => `<article class="license-vendor-card" data-vendor-card="${id}" data-vendor-cat="${vendorCategories[id]}">
          <div class="partner-card-top">
            <h3>${v.name}</h3>
            <span class="partner-tier-pill">${v.badge}</span>
          </div>
          <p class="license-vendor-cat">${v.category}</p>
          <p>${v.detail}</p>
          <ul class="case-deliverable-list">
            ${v.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
          <a class="arrow-link" href="${softwareEnquiryUrl(id, initialStage, initialScale)}">Enquire about ${v.name} <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>
    </section>

    <section class="partners-flagship-strip license-microsoft-strip" aria-label="Related Microsoft licensing">
      <article class="partner-flagship partner-flagship-ms">
        <span class="flagship-tag">Cloud &amp; Productivity Licensing</span>
        <h2>Microsoft 365, Azure, Copilot &amp; Dynamics 365</h2>
        <p>Planning seat true-ups, CSP renewals, Exchange Online migration or Copilot for Microsoft 365? Use Systech’s dedicated Microsoft architecture hub.</p>
        <div class="actions">
          <a class="button" href="?page=microsoft-solutions">Open Microsoft Solutions hub</a>
          <a class="arrow-link" href="?page=contact&service=cloud&topic=microsoft-solutions&focus=licensing">Discuss M365 CSP licensing <span aria-hidden="true">→</span></a>
        </div>
      </article>
      <article class="partner-flagship">
        <span class="flagship-tag">Hardware + Subscription Alignment</span>
        <h2>3-Step Co-Term Governance</h2>
        <ol class="license-governance-steps">
          <li><strong>01 · Serial &amp; Expiry Mapping:</strong> Consolidate appliance serials, user counts and mixed expiry dates.</li>
          <li><strong>02 · Co-Term Quotation:</strong> Align staggered contracts onto one financial-year or multi-year cycle.</li>
          <li><strong>03 · Entitlement Handover:</strong> Zero-gap activation keys, OEM portal transfer and AMC coordination.</li>
        </ol>
      </article>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Renewals Desk · Bengaluru</p><h2>Have upcoming firewall, AV or hypervisor expiries this quarter?</h2><p>Share existing serial numbers or seat counts and Systech prepares a consolidated co-term renewal quote.</p></div><a class="button" href="${softwareEnquiryUrl(initialVendor, initialStage, initialScale)}">Share renewal inventory</a></div></section>`;
}

export function bindSoftwareLicensing(container) {
  if (!container) return;
  const vendorBtns = container.querySelectorAll('[data-license-vendor]');
  const stageBtns = container.querySelectorAll('[data-license-stage]');
  const scaleBtns = container.querySelectorAll('[data-license-scale]');
  const detailHost = container.querySelector('#license-detail-host');
  const topologyHost = container.querySelector('#license-topology-frame');
  const filterBar = container.querySelector('#license-filter-bar');
  const cards = container.querySelectorAll('[data-vendor-card]');

  function refresh() {
    const v = container.dataset.vendor || 'sophos';
    const st = container.dataset.stage || 'renewal';
    const sc = container.dataset.scale || 'mid';
    detailHost.innerHTML = renderActiveBrief(v, st, sc);
    const caption = topologyHost.querySelector('figcaption')?.outerHTML || '';
    topologyHost.innerHTML = topologyDiagramHtml(v) + caption;
  }

  container.addEventListener('click', event => {
    const vBtn = event.target.closest('[data-license-vendor]');
    if (vBtn) {
      container.dataset.vendor = vBtn.dataset.licenseVendor;
      vendorBtns.forEach(b => b.setAttribute('aria-pressed', String(b === vBtn)));
      refresh();
      return;
    }
    const stBtn = event.target.closest('[data-license-stage]');
    if (stBtn) {
      container.dataset.stage = stBtn.dataset.licenseStage;
      stageBtns.forEach(b => b.setAttribute('aria-pressed', String(b === stBtn)));
      refresh();
      return;
    }
    const scBtn = event.target.closest('[data-license-scale]');
    if (scBtn) {
      container.dataset.scale = scBtn.dataset.licenseScale;
      scaleBtns.forEach(b => b.setAttribute('aria-pressed', String(b === scBtn)));
      refresh();
    }
  });

  filterBar?.addEventListener('click', event => {
    const fBtn = event.target.closest('[data-license-filter]');
    if (!fBtn) return;
    const cat = fBtn.dataset.licenseFilter;
    filterBar.querySelectorAll('[data-license-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === fBtn)));
    cards.forEach(card => {
      card.hidden = cat !== 'all' && card.dataset.vendorCat !== cat;
    });
  });
}
