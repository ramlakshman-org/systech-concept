import {
  enterpriseMetrics,
  clientRoster,
  verifiedCredentials,
  partnerPillars,
  industryPlaybooks,
  referenceBlueprints,
  deploymentCases
} from './ecosystem-data.js?v=20261119v4u';
import { clientBrandLogos, partnerBrandLogos } from './brand-logos.js?v=20261119v4u';

export const partnersId = 'partners';
export const industriesId = 'industries';
export const caseStudiesId = 'case-studies';

const credIcons = {
  lenovo: '<svg class="proof-cred-svg" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5 16.5 5v4.5c0 4.1-2.8 6.9-6.5 8-3.7-1.1-6.5-3.9-6.5-8V5z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m7.2 10 2 2 3.8-4" fill="none" stroke="#e2231a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  iso: '<svg class="proof-cred-svg" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m7 10.2 2 2 4-4.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dossier: '<svg class="proof-cred-svg" viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="2.5" width="12" height="15" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 7h6M7 10.5h6M7 14h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
};

const oemMarquee = [
  { name: 'Lenovo', tier: '360 Platinum', href: '?page=lenovo-partner' },
  { name: 'Microsoft', tier: 'CSP & Azure', href: '?page=microsoft-solutions' },
  { name: 'Cisco', tier: 'Switching', href: '?page=office-wifi' },
  { name: 'Aruba Networks', tier: 'Wi-Fi 6/7', href: '?page=software-licensing' },
  { name: 'Fortinet', tier: 'UTM Firewall', href: '?page=software-licensing' },
  { name: 'Sophos', tier: 'EDR / XDR', href: '?page=software-licensing' },
  { name: 'VMware', tier: 'vSphere', href: '?page=software-licensing' },
  { name: 'Dell', tier: 'Enterprise', href: '?page=business-computing' },
  { name: 'HP', tier: 'Workstations', href: '?page=business-computing' },
  { name: 'Apple', tier: 'Mac & iPad', href: '?page=business-computing' }
];

const facilityProofCards = [
  {
    image: 'assets/bc-thinkpad.webp',
    width: 800,
    height: 520,
    alt: 'Lenovo ThinkPad commercial compute fleet supplied by Systech',
    cadTag: 'HW-01 · COMMERCIAL COMPUTE FLEETS',
    title: 'ThinkPad Enterprise Fleets',
    href: '?page=bc-thinkpad',
    cta: 'Inspect ThinkPad specs'
  },
  {
    image: 'assets/bc-thinkstation-p.webp',
    width: 800,
    height: 520,
    alt: 'Lenovo ThinkStation P-Series workstation for CAD, BIM and AI',
    cadTag: 'HW-02 · CAD & AI WORKSTATIONS',
    title: 'ThinkStation CAD &amp; AI',
    href: '?page=bc-thinkstation-p',
    cta: 'Explore ThinkStation P'
  },
  {
    image: 'assets/company-office-inauguration.webp',
    width: 1000,
    height: 824,
    alt: 'Systech Bengaluru headquarters and staging facility inauguration team',
    cadTag: 'BLR-01 · BENGALURU HQ & STAGING LAB',
    title: 'Bengaluru HQ &amp; Staging Lab',
    href: '?page=company#our-story',
    cta: 'Explore Bengaluru HQ'
  },
  {
    image: 'assets/company-team-celebration.webp',
    width: 1000,
    height: 824,
    alt: 'Systech Bengaluru engineering and delivery leadership team',
    cadTag: 'BLR-02 · 28-YEAR ENGINEERING TEAM',
    title: '100+ Specialists · Est. 1998',
    href: '?page=company#leadership',
    cta: 'Meet leadership team'
  }
];

function caseMetricsBarHtml(metrics) {
  return `<ul class="case-metrics-bar">${(metrics || []).map(m => `<li class="case-metric-pill">${m}</li>`).join('')}</ul>`;
}

function renderClientRoster(ariaLabel = 'Selected client organisations') {
  return `<ul class="client-roster-grid"${ariaLabel ? ` aria-label="${ariaLabel}"` : ''}>
    ${clientRoster.map((c, idx) => `<li><a class="client-roster-link" href="${c.href}"><span class="client-brand-mark" aria-hidden="true">${clientBrandLogos[c.name] || ''}</span><span class="client-roster-copy"><span class="client-roster-name"><span class="client-idx" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span><strong>${c.name}</strong></span><span class="client-sector client-sector-pill">${c.sector}</span></span><span class="client-arrow" aria-hidden="true">→</span></a></li>`).join('')}
  </ul>`;
}

export function enterpriseProofBand() {
  return `<section class="enterprise-proof-band reveal" aria-labelledby="proof-heading">
    <div class="wrap">
      <div class="authority-band-banner drafting-frame">
        <div class="authority-band-grid">
          <div class="authority-band-main">
            <p class="coord-marker">SYS-AUTH // 1998–2026 · BENGALURU HQ · 12.9226° N, 77.5491° E</p>
            <p class="authority-band-display" aria-label="28 Years and 500 Crore plus revenue">28 YRS · ₹500CR+</p>
            <p class="authority-band-subtitle">1998–2026 Multi-OEM Systems Integration · 2,000+ Enterprises</p>
          </div>
          <dl class="authority-band-ledger" aria-label="Verification ledger">
            <div><dt>PARTNER TIER</dt><dd>Lenovo 360 Platinum 2026</dd></div>
            <div><dt>QUALITY SYSTEM</dt><dd>ISO 9001:2015 Certified Delivery</dd></div>
            <div><dt>COVERAGE FOOTPRINT</dt><dd>Bengaluru HQ · Chennai · Hyderabad · Dubai · HK</dd></div>
            <div><dt>ACTIVE FLEET &amp; SLA</dt><dd>2,000+ Enterprise Accounts · Direct L1–L3 Engineers</dd></div>
          </dl>
        </div>
      </div>

      <div class="proof-top-row">
        <div>
          <p class="eyebrow">Verified Track Record · Bengaluru &amp; Pan-India</p>
          <h2 id="proof-heading">Enterprise delivery backed by scale and OEM depth.</h2>
        </div>
        <div class="proof-credentials-pills">
          <a class="credential-badge credential-lenovo" href="?page=lenovo-partner">${credIcons.lenovo}<span class="cred-copy"><strong>2026 Lenovo 360 Platinum</strong><small>Compute · ThinkSystem · FRU Spares</small></span></a>
          <a class="credential-badge" href="?page=company#trust-standards">${credIcons.iso}<span class="cred-copy"><strong>ISO 9001:2015 Certified</strong><small>Audited Quality &amp; SLA Governance</small></span></a>
          <a class="credential-badge" href="?page=company#capability-profile">${credIcons.dossier}<span class="cred-copy"><strong>Capability &amp; Awards Dossier</strong><small>ISO 9001:2015 · OEM Authorizations · Profile</small></span></a>
        </div>
      </div>

      <dl class="scale-metrics-grid">
        ${enterpriseMetrics.map(m => `<div class="scale-metric">
          <dt>${m.value}</dt>
          <dd><strong>${m.label}</strong><span>${m.detail}</span></dd>
        </div>`).join('')}
      </dl>

      <div class="facility-cred-grid" aria-label="Commercial hardware and Bengaluru facility verification">
        ${facilityProofCards.map(card => `<article class="facility-cred-card">
          <span class="facility-cred-cad-tag">${card.cadTag}</span>
          <div class="facility-cred-visual">
            <img src="${card.image}" width="${card.width}" height="${card.height}" alt="${card.alt}" loading="lazy" decoding="async">
          </div>
          <h3>${card.title}</h3>
          <a class="arrow-link" href="${card.href}">${card.cta} <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>

      <div class="proof-outcomes-grid" aria-label="Representative enterprise outcomes">
        ${deploymentCases.slice(0, 3).map(item => `<article class="proof-outcome-card">
          <div class="proof-outcome-head">
            <span class="proof-outcome-sector">${item.sector}</span>
            <span class="proof-outcome-deliverable">${item.deliverables[0]}</span>
          </div>
          ${caseMetricsBarHtml(item.metrics)}
          <h3>${item.title}</h3>
          <div class="proof-outcome-stack">
            ${item.stack.slice(0, 3).map(s => `<span>${s}</span>`).join('')}
          </div>
          <a class="arrow-link" href="?page=case-studies">Inspect reference blueprint <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>

      <div class="client-trust-strip">
        <div class="client-trust-head">
          <span>Trusted by enterprise &amp; multi-site teams</span>
          <div class="client-trust-links">
            <a class="arrow-link" href="?page=case-studies">Reference architectures <span aria-hidden="true">→</span></a>
            <a class="arrow-link" href="?page=industries">Explore sector playbooks <span aria-hidden="true">→</span></a>
          </div>
        </div>
        ${renderClientRoster()}
      </div>

      <div class="oem-marquee-strip" aria-label="Authorised OEM partner ecosystem">
        <div class="oem-marquee-head">
          <span>Authorised OEM Ecosystem</span>
          <a class="arrow-link" href="?page=partners">View all 20+ alliances <span aria-hidden="true">→</span></a>
        </div>
        <div class="oem-marquee-grid">
          ${oemMarquee.map(oem => `<a class="oem-badge" href="${oem.href}"><span class="oem-badge-icon" aria-hidden="true">${partnerBrandLogos[oem.name] || ''}</span><span class="oem-badge-copy"><strong>${oem.name}</strong><small>${oem.tier}</small></span></a>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

export function partnersPage() {
  return `<div class="wrap partners-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> OEM Partners &amp; Ecosystem</nav>
    <header class="partners-intro-hero">
      <div class="partners-intro-copy">
        <p class="eyebrow">Multi-OEM Integration · Single Point of Accountability</p>
        <h1>Authorised technology ecosystem</h1>
        <p class="partners-lead">Systech pairs direct Tier-1 OEM alliances with single-invoice sourcing, pre-deployment integration and ongoing maintenance across compute, cloud, security and building systems.</p>
        <div class="actions">
          <a class="button" href="?page=contact">Request multi-OEM BOM quote</a>
          <a class="arrow-link" href="?page=lenovo-partner">Lenovo 360 Platinum hub <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <figure class="partners-hero-figure">
        <img src="assets/partners-ecosystem.webp" width="780" height="438" alt="Isometric enterprise ecosystem showing commercial laptops, Wi-Fi access point, network firewall switch, server cabinet and hybrid cloud node linked together.">
        <figcaption>Unified endpoint, network security, compute &amp; cloud sourcing</figcaption>
      </figure>
    </header>

    <section class="partners-flagship-strip reveal" aria-label="Lead alliances">
      <article class="partner-flagship partner-flagship-lenovo">
        <div class="flagship-head-row">
          <span class="flagship-tag">Flagship Alliance · Since 2006 · Platinum Since 2014</span>
          <span class="flagship-logo-badge" aria-hidden="true">${partnerBrandLogos.Lenovo || ''}</span>
        </div>
        <h2>Lenovo 360 Platinum Partner</h2>
        <p>Full-stack commercial computing (ThinkPad, ThinkCentre, ThinkStation), ThinkSystem &amp; ThinkAgile data centre systems, and genuine FRU spares verified by MTM.</p>
        <div class="actions">
          <a class="button" href="?page=lenovo-partner">Open Lenovo Platinum hub</a>
          <a class="arrow-link" href="?page=lenovo-partner#spares-finder">Genuine spares lookup <span aria-hidden="true">→</span></a>
        </div>
      </article>
      <article class="partner-flagship partner-flagship-ms">
        <div class="flagship-head-row">
          <span class="flagship-tag">Cloud &amp; Modern Workplace</span>
          <span class="flagship-logo-badge" aria-hidden="true">${partnerBrandLogos.Microsoft || ''}</span>
        </div>
        <h2>Microsoft Solutions &amp; Licensing</h2>
        <p>Microsoft 365 tenant rollouts, Azure cloud workloads, Dynamics 365 CRM/ERP, Copilot readiness and compliant annual enterprise licensing.</p>
        <div class="actions">
          <a class="button outline" href="?page=microsoft-solutions">Explore Microsoft solutions</a>
          <a class="arrow-link" href="?page=software-licensing">Software renewals desk <span aria-hidden="true">→</span></a>
        </div>
      </article>
    </section>

    <section class="editorial-section credentials-ledger reveal" aria-labelledby="partners-credentials-title">
      <header class="editorial-heading">
        <div>
          <p class="eyebrow">Verified Credentials &amp; OEM Authorizations</p>
          <h2 id="partners-credentials-title">Credentials &amp; OEM accountability</h2>
        </div>
        <p class="editorial-review">Active Tier-1 OEM authorizations, ISO 9001:2015 systems-integration governance and statutory ITAD compliance. <a class="arrow-link" href="?page=company#capability-profile">Open Capability &amp; Awards Dossier <span aria-hidden="true">→</span></a></p>
      </header>
      <div class="credential-ledger-grid">
        ${verifiedCredentials.map((cred, idx) => `<article class="credential-ledger-card">
          <div class="credential-ledger-top">
            <span class="partner-tier-pill">${cred.badge}</span>
            <span class="leader-index" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
          </div>
          <h3>${cred.title}</h3>
          <p class="credential-ledger-issuer">${cred.issuer}</p>
          <p class="credential-ledger-detail">${cred.detail}</p>
          <div class="credential-ledger-foot">
            <a class="arrow-link" href="${cred.href}">${cred.actionLabel} <span aria-hidden="true">→</span></a>
          </div>
        </article>`).join('')}
      </div>
    </section>

    <div class="partner-pillars">
      ${partnerPillars.map((pillar, idx) => `<section class="partner-pillar reveal" aria-labelledby="pillar-${pillar.id}">
        <div class="partner-pillar-head">
          <span class="pillar-index" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
          <div>
            <p class="eyebrow">${pillar.eyebrow}</p>
            <h2 id="pillar-${pillar.id}">${pillar.title}</h2>
            <p>${pillar.description}</p>
          </div>
        </div>
        <div class="partner-cards-grid${pillar.partners.length === 4 ? ' partner-cards-grid-two' : ''}">
          ${pillar.partners.map(p => `<article class="partner-card${p.featured ? ' partner-card-featured' : ''}">
            <div class="partner-card-top">
              <div class="partner-card-brand">
                <span class="partner-card-logo" aria-hidden="true">${partnerBrandLogos[p.name] || ''}</span>
                <h3>${p.name}</h3>
              </div>
              <span class="partner-tier-pill">${p.tier}</span>
            </div>
            <p>${p.focus}</p>
            <a class="arrow-link" href="${p.href}">Explore solutions <span aria-hidden="true">→</span></a>
          </article>`).join('')}
        </div>
      </section>`).join('')}
    </div>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Procurement &amp; Sizing Desk</p><h2>Need hardware and licences quoted as one compatible BOM?</h2><p>Share headcount, applications and branch locations so Systech aligns vendor compatibility before purchase.</p></div><a class="button" href="?page=contact">Request a BOM or quote</a></div></section>`;
}

function playbookDetailHtml(pb) {
  const enquiryHref = `?page=contact&service=office&requirements=${encodeURIComponent(pb.enquiryTopic)}`;
  return `<div class="playbook-stage-inner">
    <div class="playbook-overview">
      <p class="eyebrow">Sector Playbook · ${pb.label}</p>
      <h2>${pb.title}</h2>
      <p class="playbook-summary">${pb.summary}</p>
      <h3>Operational priorities solved</h3>
      <ul class="playbook-list">
        ${pb.challenges.map(c => `<li>${c}</li>`).join('')}
      </ul>
      <div class="playbook-stack-block">
        <h3>Recommended infrastructure stack</h3>
        <ul class="playbook-stack-pills">
          ${pb.stack.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="playbook-actions">
        <a class="button" href="${pb.plannerPreset}">Inspect matching floor plan →</a>
        <a class="button outline" href="${enquiryHref}">Scope ${pb.label} rollout</a>
      </div>
    </div>
    <figure class="playbook-visual-card">
      <img src="${pb.image}" width="${pb.imageWidth}" height="${pb.imageHeight}" alt="${pb.imageAlt}">
      <figcaption>Reference architecture · ${pb.label}</figcaption>
    </figure>
  </div>`;
}

export function industriesPage() {
  const requestedSector = new URLSearchParams(location.search).get('sector');
  const sectorAliases = { fintech: 'fintech-bfsi', gcc: 'gcc-tech' };
  const resolvedSector = sectorAliases[requestedSector] || requestedSector;
  const initial = industryPlaybooks.find(pb => pb.id === resolvedSector) || industryPlaybooks[0];
  return `<div class="wrap industries-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Industries &amp; Blueprints</nav>
    <header class="wifi-intro industries-intro">
      <div>
        <p class="eyebrow">Vertical Playbooks · Architecture Blueprints</p>
        <h1>IT built around how your industry operates.</h1>
      </div>
      <div>
        <p>Select your sector to review Systech’s reference stack, compliance priorities and a pre-configured floor-plan layout you can tailor immediately.</p>
        <a class="button" href="?page=planner">Open interactive planner</a>
      </div>
    </header>

    <section class="playbook-explorer" id="industry-playbook-explorer" aria-labelledby="playbook-switcher-title">
      <h2 id="playbook-switcher-title" class="sr">Industry Playbooks</h2>
      <div class="playbook-tabs" role="tablist" aria-label="Select industry">
        ${industryPlaybooks.map(pb => `<button type="button" role="tab" class="playbook-tab" data-industry-id="${pb.id}" aria-selected="${pb.id === initial.id}">${pb.label}</button>`).join('')}
      </div>
      <div id="playbook-stage" class="playbook-stage" aria-live="polite">
        ${playbookDetailHtml(initial)}
      </div>
    </section>

    <section class="editorial-section blueprints-section" aria-labelledby="blueprints-heading">
      <header class="editorial-heading">
        <h2 id="blueprints-heading">Standard Deployment Blueprints</h2>
        <p class="editorial-review">Representative architectural patterns Systech delivers across end-user compute, infrastructure and lifecycle support.</p>
      </header>
      <div class="blueprints-grid">
        ${referenceBlueprints.map((bp, idx) => `<article class="blueprint-card">
          <div class="blueprint-thumb">
            <img src="${bp.image}" width="${bp.imageWidth}" height="${bp.imageHeight}" alt="${bp.imageAlt}" loading="lazy">
          </div>
          <div class="blueprint-card-head">
            <span class="solution-num" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
            <span class="blueprint-tag">${bp.tag}</span>
          </div>
          <h3>${bp.title}</h3>
          <p class="blueprint-flow"><strong>Architecture:</strong> ${bp.architecture}</p>
          <p class="blueprint-outcome"><strong>Handover scope:</strong> ${bp.outcomeScope}</p>
          <a class="arrow-link" href="${bp.href}">Explore blueprint setup <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="industries-clients-heading">
      <header class="editorial-heading">
        <h2 id="industries-clients-heading">Organisations Systech works with</h2>
        <p class="editorial-review">Proven delivery across healthcare, financial technology, clean energy, automotive, manufacturing and enterprise software.</p>
      </header>
      ${renderClientRoster('')}
      <div class="client-roster-footer">
        <a class="arrow-link" href="?page=case-studies">Inspect reference deployment architectures <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Architecture Review · Bengaluru</p><h2>Planning a multi-site refresh, plant link or new floor launch?</h2><p>Bring your floor plan or device target—our engineering team maps the hardware, cabling and support contract together.</p></div><a class="button" href="?page=contact">Book an architecture review</a></div></section>`;
}

export function bindIndustriesPage(container) {
  if (!container) return;
  const tabs = container.querySelectorAll('[data-industry-id]');
  const stage = container.querySelector('#playbook-stage');
  container.addEventListener('click', event => {
    const tab = event.target.closest('[data-industry-id]');
    if (!tab) return;
    const match = industryPlaybooks.find(pb => pb.id === tab.dataset.industryId);
    if (!match) return;
    tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
    stage.innerHTML = playbookDetailHtml(match);
  });
}

function caseCardHtml(item) {
  return `<article class="case-blueprint-card" data-case-id="${item.id}">
    <figure class="case-blueprint-visual">
      <img src="${item.image}" width="${item.width}" height="${item.height}" alt="${item.alt}" loading="lazy">
      <figcaption>${item.sector}</figcaption>
    </figure>
    <div class="case-blueprint-body">
      <p class="case-blueprint-tag">${item.tag}</p>
      <h2>${item.title}</h2>
      ${caseMetricsBarHtml(item.metrics)}
      <div class="case-blueprint-columns">
        <div>
          <h3>Operational challenge</h3>
          <p>${item.challenge}</p>
        </div>
        <div>
          <h3>Deployed architecture</h3>
          <p>${item.architecture}</p>
        </div>
      </div>
      <div class="case-deliverables-row">
        <div>
          <h3>Handover deliverables</h3>
          <ul class="case-deliverable-list">
            ${item.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h3>Verified OEM stack</h3>
          <ul class="playbook-stack-pills">
            ${item.stack.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="actions">
        <a class="button" href="${item.plannerHref}">Open matching setup →</a>
        <a class="button outline" href="${item.enquiryHref}">Request reference BOM &amp; quote</a>
      </div>
    </div>
  </article>`;
}

export function caseStudiesPage() {
  return `<div class="wrap case-studies-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=industries">Industries</a> <span aria-hidden="true">/</span> Reference Architectures</nav>
    <header class="wifi-intro industries-intro">
      <div>
        <p class="eyebrow">Solution Architectures · Multi-OEM Delivery</p>
        <h1>How Systech blueprints come together end to end.</h1>
      </div>
      <div>
        <p>Explore standard delivery patterns connecting endpoint procurement, structured cabling, ThinkSystem compute, cybersecurity and lifecycle spares under one accountable partner.</p>
        <a class="button" href="?page=planner">Open interactive floor planner</a>
      </div>
    </header>
    <div class="case-filter-bar" id="case-filter-bar" role="group" aria-label="Filter reference architectures">
      <button type="button" class="playbook-tab" data-case-filter="all" aria-pressed="true">All architectures (04)</button>
      ${deploymentCases.map(c => `<button type="button" class="playbook-tab" data-case-filter="${c.id}" aria-pressed="false">${c.sector}</button>`).join('')}
    </div>
    <div class="case-blueprint-list" id="case-blueprint-list">
      ${deploymentCases.map(caseCardHtml).join('')}
    </div>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Custom Scoping · Bengaluru &amp; Pan-India</p><h2>Need a bill of materials adapted to your site constraints?</h2><p>Share headcount, applications and handover timelines with Systech’s pre-sales team.</p></div><a class="button" href="?page=contact">Request custom architecture BOM</a></div></section>`;
}

export function bindCaseStudiesPage(container) {
  if (!container) return;
  const bar = container.querySelector('#case-filter-bar');
  const cards = container.querySelectorAll('[data-case-id]');
  bar?.addEventListener('click', event => {
    const btn = event.target.closest('[data-case-filter]');
    if (!btn) return;
    const filter = btn.dataset.caseFilter;
    bar.querySelectorAll('[data-case-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.caseId !== filter;
    });
  });
}
