import { whatsappUrl } from './ecosystem-data.js?v=20261119v4u';

export const lenovoPartnerId = 'lenovo-partner';
export const lenovoPartnerTitle = 'Lenovo Platinum Partner';

const scenes = {
  workplace: {
    label: 'Workplace · IDG',
    image: 'devices-mobile.webp',
    title: 'Standardise commercial fleets around real roles',
    detail: 'Compare ThinkPad, ThinkBook, ThinkCentre and ThinkStation systems matched to executive mobility, CAD/AI creation and hybrid conference rooms, shipped ready with compatible USB-C docks and ThinkVision monitors.',
    links: [['business-computing', 'Explore business computing'], ['accessories-peripherals', 'Explore accessories']]
  },
  infrastructure: {
    label: 'Server room · ISG',
    image: 'server-room.webp',
    title: 'Architect Lenovo ThinkSystem & ThinkAgile workloads',
    detail: 'Scope rack, tower, edge and GPU servers—or ThinkAgile hyperconverged nodes—aligned with your virtualisation, database, NAS/SAN storage and backup continuity goals.',
    links: [['servers-hci', 'Explore servers and HCI'], ['storage', 'Explore storage']]
  },
  support: {
    label: 'Genuine spares & bench',
    image: 'repair-laptop.webp',
    title: 'Source 100% genuine FRU components & certified servicing',
    detail: 'Share your Lenovo machine type-model (MTM) or serial number. Systech validates factory FRU part compatibility and arranges certified repairs or preventive maintenance across Bengaluru and India.',
    links: [['lenovo-spares', 'Open component map'], ['repairs-and-maintenance', 'Explore repairs & AMC']]
  }
};

const portfolioTabs = {
  idg: {
    label: 'Commercial Devices (IDG)',
    summary: 'Laptops, AI-ready PCs, desktops, workstations and docks provisioned for corporate scale.',
    items: [
      { name: 'ThinkPad X1, T, L & E Series', cta: 'ThinkPad fleets', spec: 'Enterprise mobility · Intel Core Ultra & AMD Ryzen PRO · Copilot+ ready', detail: 'MIL-STD tested business laptops with hardware security (ThinkShield), fleet manageability and long-life batteries.', service: 'devices', focus: 'ThinkPad commercial fleet' },
      { name: 'ThinkBook & Business Ultrabooks', cta: 'ThinkBook fleets', spec: 'Fast-growing SMBs & modern teams · Aluminium chassis', detail: 'Balance performance, sharp Webcams/audio and value across high-velocity hiring batches.', service: 'devices', focus: 'ThinkBook team fleet' },
      { name: 'ThinkCentre Tiny, Tower & AIO', cta: 'ThinkCentre desktops', spec: 'Compact fixed desks · Minimal footprint VESA mounts', detail: 'Quiet, maintainable office desktops engineered for 24/7 clinical, ops and reception workflows.', service: 'devices', focus: 'ThinkCentre desktops' },
      { name: 'ThinkStation P-Series Workstations', cta: 'ThinkStation workstations', spec: 'ISV certified · CAD, 3D BIM, media & local AI training', detail: 'Multi-GPU and ECC memory workstations tuned for engineering, design and simulation software.', service: 'devices', focus: 'ThinkStation workstations' },
      { name: 'ThinkVision Monitors & Docks', cta: 'monitors & docks', spec: 'USB-C single-cable power · Dual-4K dock ecosystems', detail: 'Ergonomic IPS displays, Smart Collaboration bars and genuine Thunderbolt/USB-C docks matched to each model.', service: 'devices', focus: 'ThinkVision displays and Lenovo docks' },
      { name: 'Pre-Imaging & Rollout Prep', cta: 'pre-imaging & rollout', spec: 'Autopilot HWID capture · BIOS settings & asset tags', detail: 'Devices delivered tagged, imaged and boxed per floor or employee batch to compress IT onboarding time.', service: 'devices', focus: 'Lenovo fleet deployment and imaging' }
    ]
  },
  isg: {
    label: 'Data Centre & Cloud (ISG)',
    summary: 'On-premises compute, hyperconverged clusters, block storage and edge servers.',
    items: [
      { name: 'ThinkSystem Rack & Tower Servers', cta: 'ThinkSystem servers', spec: '1U/2U Enterprise Compute · Dual-socket scalability', detail: 'Mission-critical ERP, database and VMware/Hyper-V hosts sized around memory, IOPS and rack power.', service: 'cloud', focus: 'Lenovo ThinkSystem servers' },
      { name: 'ThinkAgile Hyperconverged (HCI)', cta: 'ThinkAgile HCI', spec: 'Software-defined cluster · Pooled compute + NVMe storage', detail: 'Scale nodes cleanly without separate SAN silos for multi-site branches and private cloud.', service: 'cloud', focus: 'Lenovo ThinkAgile HCI cluster' },
      { name: 'ThinkEdge & Branch Compute', cta: 'ThinkEdge compute', spec: 'Shop-floor, plant & clinic edge nodes', detail: 'Compact thermal-tolerant servers engineered for telemetry, video analytics and branch workloads outside traditional server rooms.', service: 'cloud', focus: 'Lenovo ThinkEdge compute' },
      { name: 'Enterprise Storage & Tape Backup', cta: 'storage & backup', spec: 'SAN, NAS, DAS & LTO offline archive', detail: 'Pair low-latency NVMe block arrays with immutable backup and long-term audit retention.', service: 'cloud', focus: 'Lenovo enterprise storage and backup' }
    ]
  },
  services: {
    label: 'Spares, Premier Support & Lifecycle',
    summary: 'Keep every Lenovo asset productive from warranty extension through responsible end-of-life.',
    items: [
      { name: 'Genuine Lenovo FRU Spares', cta: 'genuine Lenovo spares', spec: 'Verified batteries, keyboards, displays, SSDs & boards', detail: 'Model-verified replacement parts avoiding voltage mismatches, short battery cycles and voided warranties.', service: 'repairs', focus: 'Genuine Lenovo FRU spare parts', isParts: true },
      { name: 'Premier Support & Warranty Extensions', cta: 'Premier Support', spec: 'Priority OEM escalation · Accidental Damage Protection', detail: 'Lock predictable response SLAs and multi-year coverage synced to your depreciation cycle.', service: 'repairs', focus: 'Lenovo warranty extensions & Premier Support' },
      { name: 'Laptop Renewal & Component Upgrades', cta: 'RAM & SSD renewal', spec: 'DDR4/DDR5 RAM & NVMe SSD fleet refreshes', detail: 'Extend functional life by 18–24 months on existing ThinkPad fleets before full capital replacement.', service: 'renewal', focus: 'Lenovo fleet RAM/SSD renewal upgrades' },
      { name: 'Certified ITAD & Buyback Assessment', cta: 'ITAD & recovery', spec: 'Data sanitization options · Handover audit', detail: 'Transition retired ThinkPad or ThinkSystem batches cleanly with collection and documentation.', service: 'renewal', focus: 'Lenovo retired fleet ITAD & recovery' }
    ]
  }
};

const spareFamilies = ['ThinkPad (X1 / T / L / E)', 'ThinkBook', 'IdeaPad / Yoga / LOQ', 'ThinkCentre Desktop', 'ThinkStation Workstation', 'ThinkSystem Server'];

const tactileHardwareShowcase = [
  {
    image: 'assets/bc-thinkpad.webp',
    width: 800,
    height: 520,
    alt: 'Lenovo ThinkPad X1 Carbon and T-Series enterprise commercial laptops',
    cadTag: 'CAD-IDG-01 · MIL-STD-810H · 1.09 KG',
    title: 'ThinkPad X1 Carbon / T-Series',
    copy: 'Intel Core Ultra & AMD Ryzen PRO fleets pre-imaged via Autopilot with BIOS asset tagging and ThinkShield security.',
    href: '?page=bc-thinkpad',
    cta: 'Inspect ThinkPad specs'
  },
  {
    image: 'assets/bc-thinkstation-p.webp',
    width: 800,
    height: 520,
    alt: 'Lenovo ThinkStation P-Series ISV-certified workstation tower and compact systems',
    cadTag: 'CAD-ISV-02 · ECC + DUAL GPU · BIM/AI',
    title: 'ThinkStation P-Series',
    copy: 'ISV-certified Xeon & Threadripper PRO workstations with ECC RDIMMs and multi-GPU RTX Ada compute for CAD and AI.',
    href: '?page=bc-thinkstation-p',
    cta: 'Explore ThinkStation P'
  },
  {
    image: 'assets/bc-thinkpad-detail.webp',
    width: 800,
    height: 520,
    alt: 'Detailed view of Lenovo ThinkPad keyboard deck, ports and factory-matched FRU internals',
    cadTag: 'CAD-FRU-03 · 100% OEM MTM-MATCHED',
    title: 'Genuine FRU Inspection',
    copy: 'Factory-verified OEM batteries, keyboards, LCD panels and thermal assemblies matched by Machine Type-Model (MTM).',
    href: '#spares-finder',
    cta: 'Check MTM / FRU part'
  },
  {
    image: 'assets/bc-thinkcentre.webp',
    width: 800,
    height: 520,
    alt: 'Lenovo ThinkSystem and ThinkCentre enterprise compute chassis',
    cadTag: 'CAD-ISG-04 · THINKCENTRE & THINKSYSTEM',
    title: 'ThinkSystem & Edge Compute',
    copy: 'Compact ThinkCentre Tiny/SFF enterprise desks alongside dual-socket 1U/2U ThinkSystem racks managed via XClarity.',
    href: '?page=servers-hci',
    cta: 'Explore servers &amp; HCI'
  }
];
const sparePartsList = [
  ['battery', 'Battery'],
  ['keyboard', 'Keyboard assembly'],
  ['display', 'Display / LCD panel'],
  ['memory-storage', 'NVMe SSD / RAM module'],
  ['adapter', 'Power adapter / USB-C charger'],
  ['cooling', 'Cooling fan / thermal module'],
  ['housing', 'Hinges, bezel or bottom cover'],
  ['board', 'System board / I/O sub-card']
];

const progression = [
  ['2006', 'Lenovo SME Partner', 'Appointed Lenovo SME partner for Karnataka, scaling structured commercial computing across Bengaluru businesses.'],
  ['2010', 'Premium Business Partner', 'Recognised among Lenovo’s top regional channel partners as enterprise workplace adoption expanded.'],
  ['2014', 'Platinum Business Partner', 'Achieved Platinum tier status, adding dedicated pre-sales sizing, server integration and genuine spares logistics.'],
  ['2026', 'Lenovo 360 Platinum Tier', 'Recognised under Lenovo’s unified 360 Platinum framework spanning IDG devices, ISG data centre and Premier lifecycle services.']
];

const partLabelMap = Object.fromEntries(sparePartsList);

export function lenovoEnquiryRequirement(params) {
  if (params.get('topic') !== lenovoPartnerId && params.get('topic') !== 'lenovo-spares') return '';
  const focus = params.get('focus');
  const family = params.get('family');
  const model = params.get('model');
  const part = params.get('part');
  const pieces = [];
  if (params.get('topic') === 'lenovo-partner') pieces.push('Lenovo Platinum Partner');
  if (focus) pieces.push(focus);
  if (family) pieces.push('Family: ' + family);
  if (model) pieces.push('MTM / Model: ' + model);
  if (part && !focus) pieces.push('Part: ' + (partLabelMap[part] || part));
  return pieces.join(' · ');
}

function scenePanel(scene) {
  return `<h3>${scene.title}</h3><p>${scene.detail}</p>
    <div class="lenovo-scene-links">${scene.links.map(([page, label]) => `<a class="arrow-link" href="?page=${page}">${label} <span aria-hidden="true">→</span></a>`).join('')}</div>`;
}

function portfolioCards(tabId) {
  const tab = portfolioTabs[tabId];
  const gridClass = tab.items.length === 4 ? 'lenovo-matrix-grid lenovo-matrix-grid-two' : 'lenovo-matrix-grid';
  return `<p class="lenovo-tab-summary">${tab.summary}</p>
    <div class="${gridClass}">
      ${tab.items.map(item => {
        const query = new URLSearchParams({
          page: 'contact',
          service: item.service,
          topic: item.isParts ? 'lenovo-spares' : lenovoPartnerId,
          focus: item.focus
        });
        if (item.isParts) query.set('support', 'spares');
        return `<article class="lenovo-matrix-card">
          <span class="lenovo-matrix-spec">${item.spec}</span>
          <h3>${item.name}</h3>
          <p>${item.detail}</p>
          <a class="arrow-link" href="?${query}">Enquire about ${item.cta || item.name} <span aria-hidden="true">→</span></a>
        </article>`;
      }).join('')}
    </div>`;
}

export function lenovoPartnerPage() {
  const initialScene = 'workplace';
  const initialTab = 'idg';
  const whatsappGeneral = whatsappUrl('Hi Systech team, we would like to discuss a Lenovo Platinum Partner quote for our organisation.');
  return `<div class="wrap lenovo-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Lenovo Platinum Partner</nav>
    <header class="wifi-intro lenovo-intro lenovo-flagship-head">
      <div>
        <p class="eyebrow lenovo-location">Bengaluru · Lenovo 360 Platinum Partner</p>
        <h1>Lenovo Platinum Partner</h1>
        <p class="lenovo-sublead">Commercial ThinkPad &amp; ThinkStation fleets, ThinkSystem data centre infrastructure, genuine factory spares and India-wide certified support backed by a Lenovo partnership since 2006.</p>
        <div class="actions lenovo-hero-actions">
          <a class="button" href="?page=contact&service=devices&topic=lenovo-partner">Request bulk Lenovo quote</a>
          <a class="button outline" href="#spares-finder">Genuine spares finder</a>
        </div>
      </div>
      <aside class="lenovo-tier-card" aria-label="Verified Lenovo partnership standing">
        <div class="lenovo-tier-badge">
          <span class="lenovo-red-bar" aria-hidden="true"></span>
          <div>
            <strong>Lenovo 360 Platinum</strong>
            <span>2026 Authorised Tier · Platinum since 2014</span>
          </div>
          <svg class="lenovo-tier-seal" viewBox="0 0 36 36" aria-hidden="true"><rect x="2" y="2" width="32" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M18 8 27 12v6c0 5.4-3.8 9.2-9 10.6C12.8 27.2 9 23.4 9 18v-6z" fill="none" stroke="#e2231a" stroke-width="1.5"/><path d="m14 18 2.8 2.8L22.5 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <dl class="lenovo-tier-facts">
          <div><dt>Partnership milestone</dt><dd>5-Year Lenovo Contribution Excellence Award</dd></div>
          <div><dt>Portfolio scope</dt><dd>IDG Commercial Devices + ISG Servers/HCI + Genuine Spares</dd></div>
          <div><dt>Rollout readiness</dt><dd>Pre-imaged BIOS asset tagging · Pan-India Bengaluru dispatch</dd></div>
          <div><dt>Quality system</dt><dd>ISO 9001:2015 certified procurement &amp; delivery</dd></div>
        </dl>
        <a class="arrow-link" href="${whatsappGeneral}" target="_blank" rel="noopener noreferrer">WhatsApp Lenovo desk <span aria-hidden="true">→</span></a>
      </aside>
    </header>

    <section class="tactile-hardware-strip drafting-frame reveal" aria-labelledby="tactile-hw-heading">
      <div class="tactile-hardware-head">
        <div>
          <p class="coord-marker">HARDWARE TELEMETRY · IDG · ISG · OEM FRU</p>
          <h2 id="tactile-hw-heading">Commercial hardware &amp; data-centre platforms</h2>
        </div>
        <a class="arrow-link" href="?page=business-computing">Explore 16-series catalog <span aria-hidden="true">→</span></a>
      </div>
      <div class="tactile-hw-grid">
        ${tactileHardwareShowcase.map(item => `<article class="tactile-hw-card">
          <span class="tactile-hw-cad-tag">${item.cadTag}</span>
          <div class="tactile-hw-visual">
            <img src="${item.image}" width="${item.width}" height="${item.height}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <a class="arrow-link" href="${item.href}">${item.cta} <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>
    </section>

    <section class="lenovo-explorer" data-lenovo-explorer aria-labelledby="lenovo-explorer-title">
      <div class="lenovo-explorer-head">
        <div>
          <h2 id="lenovo-explorer-title">Explore where Lenovo fits your environment</h2>
          <p>Select a scenario to inspect typical configurations across workplace, server room and repair operations.</p>
        </div>
      </div>
      <figure class="lenovo-illustration">
        <div class="lenovo-scenes" role="group" aria-label="Lenovo usage scenarios">
          ${Object.entries(scenes).map(([id, scene]) => `<button type="button" class="lenovo-scene" data-lenovo-scene="${id}" aria-pressed="${id === initialScene}" aria-controls="lenovo-scene-info">
            <img src="assets/${scene.image}" alt="" loading="lazy">
            <span>${scene.label}</span>
          </button>`).join('')}
        </div>
        <figcaption>Illustrative workplace, infrastructure and service bench setups</figcaption>
      </figure>
      <div class="lenovo-scene-info" id="lenovo-scene-info" aria-live="polite">${scenePanel(scenes[initialScene])}</div>
    </section>

    <section class="lenovo-matrix-section" id="lenovo-portfolio" aria-labelledby="lenovo-portfolio-heading">
      <div class="section-head lenovo-matrix-head">
        <div>
          <p class="eyebrow">Full Lenovo 360 Stack</p>
          <h2 id="lenovo-portfolio-heading">Architect from desk to data centre with one partner</h2>
        </div>
        <div class="lenovo-tab-bar" role="tablist" aria-label="Lenovo portfolio categories">
          ${Object.entries(portfolioTabs).map(([id, tab]) => `<button type="button" role="tab" class="lenovo-tab" data-lenovo-tab="${id}" aria-selected="${id === initialTab}">${tab.label}</button>`).join('')}
        </div>
      </div>
      <div id="lenovo-portfolio-panel" class="lenovo-portfolio-panel" aria-live="polite">
        ${portfolioCards(initialTab)}
      </div>
    </section>

    <section class="lenovo-spares-finder" id="spares-finder" aria-labelledby="spares-finder-heading">
      <div class="spares-finder-copy">
        <p class="eyebrow">Direct FRU &amp; Part Sales Desk</p>
        <h2 id="spares-finder-heading">Check genuine Lenovo spare compatibility</h2>
        <p>Specify your device family, part needed and Machine Type-Model (MTM) or serial code. Systech checks factory FRU equivalence before dispatch so keyboards, batteries and panels match the exact build.</p>
        <ul class="spares-assurance-list">
          <li>100% genuine Lenovo parts aligned by MTM &amp; FRU part number</li>
          <li>Optional installation at Systech’s Bengaluru bench or on-site for AMC clients</li>
          <li>Fleet bulk-spares stocking available for recurring ThinkPad models</li>
        </ul>
      </div>
      <form class="spares-finder-form" id="lenovo-spares-form">
        <label class="field">Lenovo product family
          <select name="family">
            ${spareFamilies.map(f => `<option value="${f}">${f}</option>`).join('')}
          </select>
        </label>
        <label class="field">Component required
          <select name="part">
            ${sparePartsList.map(([id, label]) => `<option value="${id}">${label}</option>`).join('')}
          </select>
        </label>
        <label class="field wide"><span class="field-label">Machine Type-Model (MTM), model name or FRU number <small class="field-optional">(optional)</small></span>
          <input name="model" maxlength="100" placeholder="e.g. ThinkPad T14 Gen 4 · Type 21HD · FRU 5B10W...">
        </label>
        <div class="wide spares-finder-actions">
          <a id="spares-form-cta" class="button" href="?page=contact&service=repairs&topic=lenovo-spares&support=spares&part=battery">Check compatibility via enquiry →</a>
          <a id="spares-wa-cta" class="button outline" href="${whatsappUrl('Hi Systech Part Sales desk, I need a genuine Lenovo battery check.')}" target="_blank" rel="noopener noreferrer">WhatsApp spares desk</a>
        </div>
      </form>
    </section>

    <section class="editorial-section lenovo-progression-section" aria-labelledby="lenovo-history-heading">
      <header class="editorial-heading">
        <h2 id="lenovo-history-heading">Nearly two decades with Lenovo</h2>
        <p class="editorial-review">Sustained partner progression documented across Karnataka and pan-India enterprise delivery.</p>
      </header>
      <ol class="company-milestones" aria-label="Lenovo partnership milestones">
        ${progression.map(([year, title, copy]) => `<li><time datetime="${year}">${year}</time><h3>${title}</h3><p>${copy}</p></li>`).join('')}
      </ol>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Lenovo Platinum Desk · Bengaluru</p><h2>Planning a Lenovo fleet rollout, server refresh or spares order?</h2><p>Share device models, user roles or MTM/FRU codes for structured commercial pricing and compatibility verification.</p></div><a class="button" href="?page=contact&service=devices&topic=lenovo-partner">Request Lenovo quotation</a></div></section>`;
}

export function bindLenovoPartner(explorer) {
  const buttons = explorer.querySelectorAll('[data-lenovo-scene]');
  const info = explorer.querySelector('#lenovo-scene-info');
  explorer.addEventListener('click', event => {
    const button = event.target.closest('button[data-lenovo-scene]');
    if (!button) return;
    const id = button.dataset.lenovoScene;
    buttons.forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    info.innerHTML = scenePanel(scenes[id]);
  });

  const portfolioSection = document.querySelector('#lenovo-portfolio');
  if (portfolioSection) {
    const tabs = portfolioSection.querySelectorAll('[data-lenovo-tab]');
    const panel = portfolioSection.querySelector('#lenovo-portfolio-panel');
    portfolioSection.addEventListener('click', event => {
      const tab = event.target.closest('[data-lenovo-tab]');
      if (!tab) return;
      const id = tab.dataset.lenovoTab;
      if (!Object.hasOwn(portfolioTabs, id)) return;
      tabs.forEach(node => node.setAttribute('aria-selected', String(node === tab)));
      panel.innerHTML = portfolioCards(id);
    });
  }

  const sparesForm = document.querySelector('#lenovo-spares-form');
  if (sparesForm) {
    const formCta = sparesForm.querySelector('#spares-form-cta');
    const waCta = sparesForm.querySelector('#spares-wa-cta');
    const updateSparesLinks = () => {
      const family = sparesForm.elements.family.value;
      const partSelect = sparesForm.elements.part;
      const partId = partSelect.value;
      const partLabel = partSelect.options[partSelect.selectedIndex]?.text || partId;
      const model = sparesForm.elements.model.value.trim();
      const query = new URLSearchParams({
        page: 'contact',
        service: 'repairs',
        topic: 'lenovo-spares',
        support: 'spares',
        part: partId,
        family
      });
      if (model) query.set('model', model);
      formCta.href = '?' + query;
      const waText = `Hi Systech Part Sales desk, please check genuine Lenovo ${partLabel} availability for ${family}${model ? ` (Model/MTM: ${model})` : ''}.`;
      waCta.href = whatsappUrl(waText);
    };
    sparesForm.addEventListener('input', updateSparesLinks);
    sparesForm.addEventListener('change', updateSparesLinks);
    updateSparesLinks();
  }
}
