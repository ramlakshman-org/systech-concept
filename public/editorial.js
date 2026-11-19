import { verifiedCredentials } from './ecosystem-data.js?v=20261119v4q';

const leadership = [
  ['Anil Navarathna', 'Founder & CEO'],
  ['Sunil Kumar', 'Director'],
  ['Vasuki', 'Director'],
  ['Satheesh R', 'Chief Business Officer, Enterprise Business'],
  ['Ajith R', 'Chief Business Officer, Mid Market'],
  ['Sandeep M H', 'Business Head, Part Sales'],
  ['Shridhara M', 'Head of Finance'],
  ['Bhanu Prakash', 'Head of Technical'],
  ['Kalpa Nayak', 'Head of Procurement'],
  ['Shilpa C M', 'Head of HR & Admin']
];

const gallery = [
  ['office-inauguration', 'New office inauguration', 'Team photo from the new office inauguration'],
  ['team-outing', 'Team outing', 'Team photo from a Systech outing'],
  ['team-celebration', 'Team celebration', 'Team photo from a Systech celebration']
];

const guides = [
  {
    id: 'fibre-cabling',
    title: 'Fibre or copper for your office?',
    summary: 'Choose what runs to each desk and what connects floors, buildings or network cabinets.',
    sections: [
      ['Layout & specification mapping', 'Systech maps desks, access points, cameras, meeting rooms and network cabinets on your floor plan, verifying cable grades and termination specs before procurement.'],
      ['Copper vs. optical fibre', 'Copper Cat6/Cat6A handles local workstation runs and PoE+ endpoints (APs, cameras, access controllers) within 100 m, while single-mode or multi-mode optical fibre connects floor risers and inter-building trunks.'],
      ['Certified handover documentation', 'Every project includes port labelling, path mapping and certified link-test schedules, with Fluke link certification reports, labelled patch panels & tidy rack termination provided at handover.']
    ],
    service: 'structured-cabling',
    action: 'Explore structured and fibre cabling',
    secondary: ['planner', 'Open the interactive floor plan']
  },
  {
    id: 'storage-options',
    title: 'Choose between NAS, SAN, DAS and tape',
    summary: 'Match the storage setup to how people and applications use the data, and how quickly it needs to be recovered.',
    sections: [
      ['Shared file collaboration', 'Systech deploys NAS for team file access over the office LAN, configuring role-based access permissions and automated off-box backup policies from day one.'],
      ['Application & cluster storage', 'DAS attaches directly to a host, while a SAN provides shared block storage over a dedicated storage network across HA clusters. Systech profiles workload IOPS, redundancy and failover RPO/RTO targets prior to sizing.'],
      ['Air-gapped retention & restore tests', 'Enterprise LTO tape and immutable off-site replicas safeguard compliance archives. Systech aligns retention schedules to audit rules and executes documented restore verification at handover.']
    ],
    service: 'storage',
    action: 'Explore storage and backup',
    secondary: ['servers-hci', 'Compare servers and HCI']
  },
  {
    id: 'annual-maintenance-guide',
    title: 'How Systech structures an enterprise IT AMC',
    summary: 'Predictable preventive schedules, transparent spare coverage and guaranteed regional SLAs across endpoints, servers and networks.',
    sections: [
      ['Preventive inspections & asset registers', 'Systematic quarterly/scheduled preventive inspections and documented asset fault registers included across covered endpoints, servers and core network racks.'],
      ['Response SLA & regional escalation', 'Guaranteed response prioritization and escalation path covering Bengaluru, Chennai and Hyderabad, with single-desk ticket intake and defined response-to-resolution targets.'],
      ['Transparent spare-part coverage', 'Standardised comprehensive or non-comprehensive spare coverage defined transparently in every SLA, backed by OEM-verifiable genuine spares and written escalation contacts.']
    ],
    service: 'annual-maintenance',
    action: 'Explore annual maintenance contracts',
    secondary: ['repairs', 'Explore repairs and support']
  },
  {
    id: 'lenovo-fleet',
    title: 'Standardise a business laptop fleet around roles',
    summary: 'Match ThinkPad, ThinkBook and ThinkStation series to mobility, dock standards and spares longevity.',
    sections: [
      ['Role-matched fleet architecture', 'Systech aligns executive mobility cohorts (ThinkPad X/T), commercial rollouts (ThinkBook / L series) and ISV-certified ThinkStation CAD/AI builds with pre-deployment BIOS tagging and image staging.'],
      ['Standardised dock & desk compatibility', 'We lock USB-C/Thunderbolt dock wattage, ThinkVision dual-display outputs and regional keyboard layouts across batches so hot-desks remain 100% interchangeable.'],
      ['MTM-verified spares & Premier warranty', 'Every Lenovo 360 Platinum rollout pairs deployment with MTM-matched genuine FRU battery/keyboard continuity and co-termed multi-year Premier Support terms.']
    ],
    service: 'lenovo-partner',
    action: 'Open Lenovo Platinum hub',
    secondary: ['lenovo-spares', 'Check genuine Lenovo spares']
  },
  {
    id: 'office-wifi-firewall',
    title: 'Connect office Wi-Fi, switching and security together',
    summary: 'Plan wireless density, PoE switching budgets, firewall rules and endpoint EDR/XDR as one architecture.',
    sections: [
      ['Density-calibrated wireless design', 'Systech sizes Aruba and Cisco Wi-Fi 6/7 placements around concurrent client density, glass/concrete attenuation and boardroom voice/video areas—never by floor area alone.'],
      ['Headroom-verified PoE+ switching', 'We engineer combined PoE+ power budgets and fibre/10G uplinks across Wi-Fi APs, IP CCTV cameras, biometric door controllers and IP telephony with segmented VLANs.'],
      ['Unified firewall, EDR & co-term governance', 'Systech integrates Fortinet/Sophos boundary firewalls, endpoint EDR/XDR and Codeproof MDM under unified co-termed renewals so hybrid laptops stay protected off-LAN.']
    ],
    service: 'office-wifi',
    action: 'Explore office Wi-Fi and switching',
    secondary: ['network', 'Walk through a secure network']
  },
  {
    id: 'renewal-ewaste',
    title: 'Decide when to renew devices vs retire them to ITAD',
    summary: 'Assess SSD/RAM headroom on aging laptops and establish clean data-handling before e-waste collection.',
    sections: [
      ['Bench-verified laptop renewal', 'Systech diagnoses 2–4 year old business fleets and installs compatible NVMe SSD, DDR4/DDR5 RAM and genuine battery replacements—extending reliable service life by 18–24 months.'],
      ['Serialised ITAD intake & pickup', 'We capture serial numbers, model families, physical condition and storage media status in an audited register prior to dispatch, offering free pack-and-pickup on qualified lots.'],
      ['Certified media wiping & statutory certs', 'Retiring drives receive certified logical sanitization or physical destruction accompanied by Government-compliant E-Waste Disposal Certificates at completion.']
    ],
    service: 'e-waste-recycling',
    action: 'Explore IT Asset Recovery',
    secondary: ['laptop-renewal', 'Assess laptops for renewal']
  }
];

function textLink(href, label) {
  return `<a class="arrow-link" href="${href}">${label} <span aria-hidden="true">→</span></a>`;
}

const milestones = [
  ['1998', 'Started in IT integration', 'Founded 18 September 1998 in Bengaluru, supplying and servicing PCs and peripherals for SMBs.'],
  ['2003', 'Added cabling & AMC', 'Expanded into structured network cabling and annual maintenance contracts.'],
  ['2006', 'Lenovo SME Partner', 'Signed up as a Lenovo SME partner for Karnataka across commercial computing.'],
  ['2008', 'IBM & Microsoft alliances', 'Became an IBM Business Partner & WSP and added Microsoft enterprise software licensing.'],
  ['2010', 'Lenovo Premium Partner', 'Earned recognition as a Lenovo Premium Business Partner across Bengaluru and Karnataka.'],
  ['2014', 'Reached Lenovo Platinum tier', 'Honoured as a Platinum Lenovo Business Partner backed by dedicated pre-sales and spares support.'],
  ['2018', 'Managed services & consulting', 'Expanded into managed infrastructure services and consulting through strategic mergers.'],
  ['2024', 'Full-stack across India', 'Delivering Business Computing, Digital Infrastructure, Cloud, Enterprise AV, Security & E-Waste nationwide.'],
  ['2026', '28th Anniversary & Lenovo 360 Platinum 2026', 'Celebrates 28 years in enterprise IT, anchoring pan-India hubs across Bengaluru, Chennai and Hyderabad alongside international coordination in Dubai and Hong Kong.']
];

const trustPillars = [
  ['iso', 'ISO 9001:2015 Certified', 'Quality management system governing enterprise sourcing, infrastructure installation and maintenance workflows.'],
  ['lenovo', 'Lenovo 360 Platinum', '2026 Platinum status and 5-Year Contribution recognition across workplace and data centre lines.'],
  ['handover', 'Documented Handover', 'Cable schedules, port maps, asset registers and data-handling clarity before project sign-off.'],
  ['sla', 'Single-Point Accountability', 'Direct escalation between procurement, project engineering, genuine spare sales and AMC technicians.']
];

const trustIcons = {
  iso: '<svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="10"/><path d="m10 14 2.8 2.8L18.5 11"/></svg>',
  lenovo: '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="6" width="20" height="16" rx="2"/><path d="M9 11v6M13 11v6M17 11v6"/></svg>',
  handover: '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="6" y="4" width="16" height="20" rx="2"/><path d="M10 10h8M10 14h8M10 18h5"/></svg>',
  sla: '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 4 23 8v6c0 5-3.8 8.7-9 10-5.2-1.3-9-5-9-10V8z"/><path d="m10.5 14.5 2.5 2.5 5-5"/></svg>'
};

export function companyProfile() {
  return `<section class="editorial-section" id="our-story" aria-labelledby="story-title">
    <header class="editorial-heading company-story-heading">
      <div><h2 id="story-title">Our story</h2><p class="company-founded"><time datetime="1998-09-18">Founded 18 September 1998</time> · Bengaluru HQ · Chennai, Hyderabad, Dubai &amp; Hong Kong</p></div>
      <p>From a Bengaluru PC systems integrator in 1998 to a ₹500CR+ multi-OEM partner serving over 2,000 enterprise and SMB clients across India and beyond—anchoring Bengaluru HQ with hubs in Chennai and Hyderabad alongside Dubai and Hong Kong coordination across business computing, servers, networking, cloud, physical security and lifecycle support.</p>
    </header>
    <ol class="company-milestones" aria-label="Company milestones">
      ${milestones.map(([year, title, copy]) => `<li><time datetime="${year}">${year}</time><h3>${title}</h3><p>${copy}</p></li>`).join('')}
    </ol>
  </section>
  <section class="editorial-section company-principles" aria-label="Mission and vision">
    <div><h2>Our mission</h2><p>Delight enterprise partners with enduring relationships and practical, value-for-money IT integration backed by dependable execution.</p></div>
    <div><h2>Our vision</h2><p>Lead the IT infrastructure industry through continuous engineering rigor, trusted OEM depth and service standards clients rely on for decades.</p></div>
  </section>
  <section class="editorial-section" id="trust-standards" aria-labelledby="trust-title">
    <header class="editorial-heading">
      <h2 id="trust-title">Quality, certifications &amp; governance</h2>
      <p class="editorial-review">Process standards and OEM recognitions behind every hardware rollout, network install and maintenance contract.</p>
    </header>
    <div class="trust-pillars-grid">
      ${trustPillars.map(([iconId, title, copy], index) => `<article class="trust-pillar-card">
        <div class="trust-pillar-top">
          <span class="trust-pillar-seal">${trustIcons[iconId] || ''}</span>
          <span class="leader-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3>${title}</h3>
        <p>${copy}</p>
      </article>`).join('')}
    </div>
  </section>`;
}

export function companyReviews() {
  return `<section class="editorial-section" id="customer-feedback" aria-labelledby="feedback-title">
    <header class="editorial-heading">
      <h2 id="feedback-title">Client &amp; team voices</h2>
      <p class="editorial-review">Long-term enterprise engagements alongside seasoned Systech specialists who deliver them.</p>
    </header>
    <div class="company-quotes">
      <figure>
        <blockquote><p>“We are completely satisfied with all the work we have engaged in with Systech. The support and efforts they put forth towards client satisfaction are truly commendable.”</p></blockquote>
        <figcaption><strong>Vishnu Ramakrishnan</strong><span>Verified Client Review · Long-Term Enterprise Engagement</span></figcaption>
      </figure>
      <figure>
        <blockquote><p>“Systech Services has consistently proven their reliability over the years. Their prompt support and seamless transition to new servers made the recent upgrade smooth. Truly a reliable partner for all our IT needs—defined by expertise and professionalism.”</p></blockquote>
        <figcaption><strong>Mohan Doddaghatta</strong><span>Verified Client Review · Server Migration &amp; Managed Support</span></figcaption>
      </figure>
      <figure>
        <blockquote><p>“Systech provides quick resolution and 100% genuine, OEM-verifiable spare parts—a dependable one-stop IT partner for our operations.”</p></blockquote>
        <figcaption><strong>Jakanmohan K</strong><span>Verified Client Review · Enterprise Support &amp; Genuine Parts</span></figcaption>
      </figure>
      <figure>
        <blockquote><p>“Systech genuinely cares for your growth, both professionally and personally. I have been here for 17 years now and I’m grateful for the recognition and support across the team.”</p></blockquote>
        <figcaption><strong>Guru Prasad</strong><span>Business Manager · 17+ Years at Systech</span></figcaption>
      </figure>
    </div>
    <div class="company-feedback-links">
      ${textLink('?page=case-studies', 'Inspect reference deployment architectures')}
      ${textLink('?page=industries', 'Explore sector playbooks and blueprints')}
      ${textLink('?page=contact&topic=feedback', 'Share client feedback')}
    </div>
  </section>`;
}

export function companyEditorial() {
  return `<section class="editorial-section credentials-ledger" id="capability-profile" aria-labelledby="capability-title">
    <header class="editorial-heading">
      <p class="eyebrow">Enterprise Capability Profile · Vendor Onboarding</p>
      <h2 id="capability-title">Credentials, Awards &amp; Procurement Dossier</h2>
      <p class="editorial-review">Verifiable OEM authorizations, ISO 9001:2015 systems-integration governance, multi-OEM awards and statutory ITAD compliance documentation for enterprise procurement teams.</p>
    </header>
    <div class="actions capability-actions">
      <a class="button" href="?page=contact&service=office&requirements=Requesting+Systech+Enterprise+Capability+Profile+%26+ISO%2FOEM+Certificates">Request Vendor Onboarding &amp; ISO/OEM Pack →</a>
      <button type="button" class="button outline" onclick="window.print()">Print / Save Credential Dossier (PDF)</button>
    </div>
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
          ${textLink(cred.href, cred.actionLabel)}
        </div>
      </article>`).join('')}
    </div>
  </section>
  <section class="editorial-section" id="leadership" aria-labelledby="leadership-title">
    <header class="editorial-heading">
      <h2 id="leadership-title">Leadership &amp; practice heads</h2>
      <p class="editorial-review">Accountable business unit leaders overseeing enterprise systems, mid-market growth, technical delivery and genuine part sales.</p>
    </header>
    <ul class="leadership-list">
      ${leadership.map(([name, role], index) => `<li><span class="leader-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h3>${name}</h3><p>${role}</p></li>`).join('')}
    </ul>
    ${textLink('?page=contact', 'Connect with our leadership or sales desk')}
  </section>
  <section class="editorial-section" id="gallery" aria-labelledby="gallery-title">
    <header class="editorial-heading"><h2 id="gallery-title">Life at Systech</h2></header>
    <div class="company-gallery">
      ${gallery.map(([id, caption, description]) => `<figure>
        <img src="assets/company-${id}.webp" alt="${description}" width="1000" height="824" loading="lazy" decoding="async">
        <figcaption>${caption}</figcaption>
      </figure>`).join('')}
    </div>
    ${textLink('?page=careers', 'Explore careers at Systech')}
  </section>`;
}

const insightCategories = [
  ['all', 'All Briefs (08)'],
  ['workplaces', 'Lenovo & Workplaces'],
  ['cloud', 'Servers & Cloud'],
  ['security', 'Security & Cabling'],
  ['lifecycle', 'AMC & E-Waste']
];

const insights = [
  {
    id: 'lenovo-ai-fleets',
    cat: 'workplaces',
    catLabel: 'Lenovo & Workplaces',
    readTime: '3 min brief',
    title: 'Standardising AI-Ready Lenovo ThinkPad & ThinkStation Fleets',
    summary: 'How enterprise IT teams balance Intel Core Ultra / AMD Ryzen PRO mobility laptops, ThinkBook rollouts and CAD workstations.',
    points: [
      'Separate thin-and-light field cohorts (ThinkPad X/T) from commercial growth seats (ThinkBook) and ISV-certified ThinkStations.',
      'Lock USB-C / Thunderbolt dock wattage and dual-monitor port standards across hot-desks.',
      'Pair device rollouts with genuine FRU spares continuity and Premier Support terms.'
    ],
    href: '?page=lenovo-partner',
    cta: 'Open Lenovo Platinum hub'
  },
  {
    id: 'codeproof-mdm',
    cat: 'security',
    catLabel: 'Security & Cabling',
    readTime: '3 min brief',
    title: 'Centralising Field Fleet Control with Codeproof Cyber Device Manager',
    summary: 'Streamlining Android, iOS, Windows and rugged kiosk policies under one zero-touch endpoint management console.',
    points: [
      'Enforce corporate app whitelists, kiosk lock-mode and remote wipe rules before devices leave HQ.',
      'Track OS patch compliance and geo-location across distributed field teams.',
      'Consolidate annual device subscriptions with endpoint AV and firewall renewals.'
    ],
    href: '?page=software-licensing',
    cta: 'Explore software & MDM licensing'
  },
  {
    id: 'storage-nas-san-das-tape',
    cat: 'cloud',
    catLabel: 'Servers & Cloud',
    readTime: '4 min brief',
    title: 'Architectural Differences: DAS, NAS, SAN & Enterprise Tape',
    summary: 'Choosing local host throughput, shared department file access, multi-host block storage and air-gapped compliance archives.',
    points: [
      'Use NAS for department file collaboration and SAN block volumes for HA cluster hosts.',
      'Size server IOPS alongside ThinkSystem / VMware cluster nodes rather than raw TB alone.',
      'Maintain offline LTO tape or immutable off-site replicas for multi-year retention.'
    ],
    href: '?page=storage',
    cta: 'Compare storage architectures'
  },
  {
    id: 'multi-cloud-aws-azure-gcp',
    cat: 'cloud',
    catLabel: 'Servers & Cloud',
    readTime: '3 min brief',
    title: 'Evaluating Hybrid Cloud Workloads Across Azure, AWS & GCP',
    summary: 'Deciding which line-of-business databases belong on-site on ThinkSystem servers vs. elastic public cloud regions.',
    points: [
      'Map application latency, identity sync (Entra ID / M365) and egress bandwidth prior to migration.',
      'Stage non-disruptive cutover windows with tested rollback snapshots.',
      'Bundle ongoing cloud operations training with CSP or annual support governance.'
    ],
    href: '?page=cloud-migration',
    cta: 'Plan cloud migration'
  },
  {
    id: 'fibre-backbone-cabling',
    cat: 'security',
    catLabel: 'Security & Cabling',
    readTime: '3 min brief',
    title: 'Structured Copper vs. Optical Fibre Campus Backbones',
    summary: 'Avoiding bottlenecks between workstation pods, high-density ceiling Wi-Fi 6/7 APs and floor distribution racks.',
    points: [
      'Run Cat6A for 10G desktop and PoE+ access point drops within 100 m MDF/IDF radii.',
      'Install single-mode or multi-mode optical fibre risers between floors and separate buildings.',
      'Require full Fluke certification plots and matching cabinet port schedules at handover.'
    ],
    href: '?page=structured-cabling',
    cta: 'Explore structured cabling'
  },
  {
    id: 'firewall-edr-renewals',
    cat: 'security',
    catLabel: 'Security & Cabling',
    readTime: '3 min brief',
    title: 'Co-Terming Perimeter Firewalls, Antivirus (Sophos / Kaspersky) & EDR',
    summary: 'Preventing silent threat-feed expiries across Fortinet FortiGate, Sophos Intercept X, Kaspersky and Aruba switching.',
    points: [
      'Map appliance serial numbers and branch renewal dates onto one financial-year co-term.',
      'Combine gateway UTM filtering with endpoint EDR/XDR telemetry for hybrid users.',
      'Audit seat true-ups alongside offboarding workflows.'
    ],
    href: '?page=software-licensing',
    cta: 'Open licensing & renewals desk'
  },
  {
    id: 'boardroom-av-access',
    cat: 'workplaces',
    catLabel: 'Lenovo & Workplaces',
    readTime: '3 min brief',
    title: 'Integrating Boardroom AV, IP Telephony & Biometric Door Access',
    summary: 'Designing conference spaces and secure office entries over the same structured PoE switching core.',
    points: [
      'Size camera framing, table microphones and display scale to actual table dimensions and acoustics.',
      'Place PoE biometric attendance readers and IP CCTV onto segmented physical security VLANs.',
      'Coordinate fire/intrusion alarms with NVR retention policies before interior fit-out.'
    ],
    href: '?page=meeting-rooms-telephony',
    cta: 'Plan meeting rooms & AV'
  },
  {
    id: 'amc-cost-itad',
    cat: 'lifecycle',
    catLabel: 'AMC & E-Waste',
    readTime: '4 min brief',
    title: 'Extending Asset Life with Preventive AMCs, Renewal & Compliant ITAD',
    summary: 'Lower fleet replacement CapEx using SSD/RAM laptop upgrades, SLA maintenance contracts and documented e-waste disposal.',
    points: [
      'Assess 2–4 year old business laptops for NVMe/memory upgrades before default replacement.',
      'Include scheduled preventive inspections and spare-part SLA clarity inside annual AMCs.',
      'Capture serialised media sanitization records prior to certified e-waste collection.'
    ],
    href: '?page=annual-maintenance',
    cta: 'Evaluate IT AMC coverage'
  }
];

export function resourceEditorial() {
  return `<section class="editorial-section" id="insights" aria-labelledby="insights-title">
    <header class="editorial-heading">
      <div>
        <p class="eyebrow">Engineering Library · Systech Perspective</p>
        <h2 id="insights-title">Technical insights &amp; field briefs</h2>
      </div>
      <p class="editorial-review">Concise architecture notes covering Lenovo AI devices, Codeproof MDM, storage, fibre cabling, renewals and IT lifecycle strategy.</p>
    </header>
    <div class="case-filter-bar" id="insights-filter-bar" role="group" aria-label="Filter technical insights">
      ${insightCategories.map(([id, label], idx) => `<button type="button" class="playbook-tab" data-insight-filter="${id}" aria-pressed="${idx === 0}">${label}</button>`).join('')}
    </div>
    <div class="insights-grid" id="insights-grid">
      ${insights.map(item => `<article class="insight-card" data-insight-cat="${item.cat}">
        <div class="insight-card-meta">
          <span class="partner-tier-pill">${item.catLabel}</span>
          <span class="insight-readtime">${item.readTime}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <details class="insight-takeaways">
          <summary>Read architecture takeaways</summary>
          <ul>
            ${item.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </details>
        <div class="insight-card-foot">
          ${textLink(item.href, item.cta)}
        </div>
      </article>`).join('')}
    </div>
  </section>
  <section class="editorial-section" id="buying-guides" aria-labelledby="buying-guides-title">
    <header class="editorial-heading">
      <h2 id="buying-guides-title">Technical buying guides</h2>
      <p class="editorial-review">Practical architecture checklists across cabling, storage, Lenovo fleets, cybersecurity, AMC contracts and ITAD.</p>
    </header>
    <div class="buying-guides">
      ${guides.map(guide => `<details id="${guide.id}">
        <summary><span><strong>${guide.title}</strong><span>${guide.summary}</span></span></summary>
        <div class="buying-guide-content">
          <dl>${guide.sections.map(([title, copy]) => `<div><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl>
          <div class="buying-guide-links">
            ${textLink('?page=' + guide.service, guide.action)}
            ${guide.secondary ? textLink('?page=' + guide.secondary[0], guide.secondary[1]) : ''}
          </div>
        </div>
      </details>`).join('')}
    </div>
  </section>`;
}

export function bindResourcesPage(container) {
  if (!container) return;
  const bar = container.querySelector('#insights-filter-bar');
  const cards = container.querySelectorAll('[data-insight-cat]');
  bar?.addEventListener('click', event => {
    const btn = event.target.closest('[data-insight-filter]');
    if (!btn) return;
    const cat = btn.dataset.insightFilter;
    bar.querySelectorAll('[data-insight-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    cards.forEach(card => {
      card.hidden = cat !== 'all' && card.dataset.insightCat !== cat;
    });
  });
}
