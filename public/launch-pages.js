const hrEmail = 'hr@teamsystech.com';
const contactEmail = 'contact@teamsystech.com';

const workPillars = [
  [
    'training',
    'Ongoing OEM Enablement',
    'Hands-on training and technical certifications across Lenovo 360 Platinum, Microsoft cloud, Cisco, Aruba, Fortinet and Sophos stacks.'
  ],
  [
    'growth',
    'Long-Term Stability & Tenure',
    'Founded 18 September 1998 in Bengaluru — build multi-year depth alongside practice heads and specialists who have grown with Systech for 10–17+ years.'
  ],
  [
    'balance',
    'Equitable, Supportive Culture',
    'Structured workflows, collaborative project desks and work-life balance policies built to help engineering and commercial teams thrive sustainably.'
  ],
  [
    'ownership',
    'Real Architecture Ownership',
    'Follow engagements from first pre-sales scoping and structured cabling to ThinkSystem deployment, security hardening and long-term AMC care.'
  ]
];

const careerIcons = {
  training: '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="5" width="20" height="14" rx="2"/><path d="M9 23h10M14 19v4M9 12l3 3 7-6"/></svg>',
  growth: '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M5 20h18M7 16v4M12 12v8M17 9v11M22 6v14"/></svg>',
  balance: '<svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="9.5"/><path d="m10 14 3 3 5.5-6"/></svg>',
  ownership: '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="4" width="8" height="8" rx="1.5"/><rect x="16" y="4" width="8" height="8" rx="1.5"/><rect x="10" y="16" width="8" height="8" rx="1.5"/><path d="M8 12v2h12v-2M14 14v2"/></svg>'
};

const careerTracks = {
  presales: {
    label: 'Pre-Sales & Solution Architecture',
    summary: 'Design multi-OEM bills of materials spanning Lenovo fleets, ThinkSystem servers, storage, Wi-Fi switching, firewalls and M365/Azure licensing.',
    skills: 'RFP sizing, OEM portal quoting, site floor-plan review, client architecture walkthroughs'
  },
  network: {
    label: 'Networking, Cabling & Security',
    summary: 'Lead on-site structured Cat6A/fibre builds, Aruba/Cisco LAN rollouts, Fortinet/Sophos firewall rules, CCTV surveillance and biometric access.',
    skills: 'VLANs, UTM firewalls, passive cabling QA, racks & handover documentation'
  },
  field: {
    label: 'IT Repairs, AMC & Lenovo Spares',
    summary: 'Deliver preventive contract visits, chip-level hardware diagnostics, genuine Lenovo FRU replacement and enterprise SLA resolution.',
    skills: 'ThinkPad/ThinkSystem servicing, spares diagnostics, SLA ticketing & field coordination'
  },
  sales: {
    label: 'Enterprise & Mid-Market Account Sales',
    summary: 'Partner with Bengaluru and pan-India GCC, healthcare, manufacturing and fintech organisations across procurement cycles and annual renewals.',
    skills: 'B2B account management, co-term software renewals, executive stakeholder coordination'
  }
};

const lifeGallery = [
  ['office-inauguration', 'New Office Inauguration · Work @ Systech', 'Systech Bengaluru office team inauguration photo'],
  ['team-outing', 'Annual Team Outing · Collaboration Beyond Desks', 'Systech engineering and business teams on an outing'],
  ['team-celebration', 'Core Celebrations & Milestone Events', 'Systech Services celebration gathering']
];

function careerMailHref(trackId, level, location) {
  const track = careerTracks[trackId] || careerTracks.presales;
  const subject = `[Talent Interest] ${track.label} (${level}) — ${location}`;
  const body = [
    'Hi Systech HR Team,',
    '',
    'I would like to share my profile for future opportunities at Systech Services Pvt. Ltd.',
    '',
    'Preferred Practice Track: ' + track.label,
    'Experience Level: ' + level,
    'Preferred Base Location: ' + location,
    '',
    'Relevant Experience / Certifications:',
    '[Please attach your CV and summarise key OEM skills or projects here]'
  ].join('\n');
  return `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderTrackDetail(trackId, level, location) {
  const track = careerTracks[trackId] || careerTracks.presales;
  const mailto = careerMailHref(trackId, level, location);
  return `<div class="career-track-brief">
    <p class="eyebrow">Practice Focus · ${level} · ${location}</p>
    <h3>${track.label}</h3>
    <p>${track.summary}</p>
    <p class="career-track-skills"><strong>Core focus areas:</strong> ${track.skills}</p>
    <div class="actions">
      <a class="button" href="${mailto}">Draft application to HR →</a>
      <a class="arrow-link" href="?page=company#our-story">Read our 1998–2026 timeline <span aria-hidden="true">→</span></a>
    </div>
  </div>`;
}

export function careersPage() {
  const initialTrack = 'presales';
  const initialLevel = 'Specialist (3–6 yrs)';
  const initialLoc = 'Bengaluru HQ';
  return `<div class="wrap launch-page careers-page" data-careers-explorer data-track="${initialTrack}" data-level="${initialLevel}" data-location="${initialLoc}">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=company">@Systech</a> <span aria-hidden="true">/</span> Careers</nav>
    <header class="wifi-intro careers-intro">
      <div>
        <p class="eyebrow">Work @ Systech · Life @ Systech · Bengaluru HQ, Chennai, Hyderabad, Dubai &amp; Hong Kong</p>
        <h1>Build enduring enterprise infrastructure careers.</h1>
        <p>At Systech Services Pvt. Ltd., our greatest strength is our people. Founded in 1998, our 100+ engineering, pre-sales, spares and field specialists deliver critical IT systems with multi-hub coordination across Bengaluru HQ, Chennai, Hyderabad, Dubai &amp; Hong Kong.</p>
        <div class="actions">
          <a class="button" href="#talent-desk">Share your profile with HR</a>
          <a class="arrow-link" href="tel:+919591975816">Call HR: +91 95919 75816</a>
          <a class="arrow-link" href="?page=company#leadership">Meet our leadership team <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <figure>
        <img src="assets/company-service-stages.webp" width="978" height="432" alt="Illustration of Systech device staging, network rack engineering and diagnostic repair benches.">
        <figcaption>Workplace engineering, network integration and diagnostic excellence</figcaption>
      </figure>
    </header>

    <section class="editorial-section" aria-labelledby="work-pillars-title">
      <header class="editorial-heading">
        <div>
          <p class="eyebrow">Work @ Systech</p>
          <h2 id="work-pillars-title">What defines a career here</h2>
        </div>
        <p class="editorial-review">Continuous learning across leading OEM platforms, structured project mentorship and equitable growth across roles.</p>
      </header>
      <div class="trust-pillars-grid">
        ${workPillars.map(([iconId, title, copy], idx) => `<article class="trust-pillar-card">
          <div class="trust-pillar-top">
            <span class="leader-index" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
          </div>
          <h3>${title}</h3>
          <p>${copy}</p>
        </article>`).join('')}
      </div>
    </section>

    <section class="editorial-section careers-talent-section" id="talent-desk" aria-labelledby="talent-desk-title">
      <header class="editorial-heading">
        <div>
          <p class="eyebrow">Openings &amp; Talent Registry</p>
          <h2 id="talent-desk-title">Explore practice tracks &amp; express interest</h2>
        </div>
        <p class="editorial-review">We have no listed timed openings posted right now, yet we continually meet talented engineers, pre-sales architects and B2B specialists across India.</p>
      </header>
      <div class="license-configurator careers-explorer-card">
        <div class="careers-track-controls">
          <span class="license-control-label">Select practice area</span>
          <div class="license-control-pills" role="group" aria-label="Select practice track">
            ${Object.entries(careerTracks).map(([id, t]) => `<button type="button" class="playbook-tab" data-career-track="${id}" aria-pressed="${id === initialTrack}">${t.label}</button>`).join('')}
          </div>
        </div>
        <div class="license-secondary-controls">
          <div class="license-control-group">
            <span class="license-control-label">Experience stage</span>
            <div class="license-mini-pills" role="group" aria-label="Experience stage">
              ${['Early Career (0–2 yrs)', 'Specialist (3–6 yrs)', 'Lead / Architect (7+ yrs)'].map(lvl => `<button type="button" data-career-level="${lvl}" aria-pressed="${lvl === initialLevel}">${lvl}</button>`).join('')}
            </div>
          </div>
          <div class="license-control-group">
            <span class="license-control-label">Preferred base</span>
            <div class="license-mini-pills" role="group" aria-label="Preferred location">
              ${['Bengaluru HQ', 'Chennai & Hyderabad', 'Pan-India Enterprise', 'Dubai & Hong Kong'].map(loc => `<button type="button" data-career-loc="${loc}" aria-pressed="${loc === initialLoc}">${loc}</button>`).join('')}
            </div>
          </div>
        </div>
        <div id="career-track-host" aria-live="polite">
          ${renderTrackDetail(initialTrack, initialLevel, initialLoc)}
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="life-at-systech-title">
      <header class="editorial-heading">
        <div>
          <p class="eyebrow">Life @ Systech</p>
          <h2 id="life-at-systech-title">Teams, milestones &amp; shared celebrations</h2>
        </div>
        <p class="editorial-review">Over 28 years of celebrating office launches, client wins and long-service team milestones together.</p>
      </header>
      <div class="company-gallery">
        ${lifeGallery.map(([id, caption, alt]) => `<figure>
          <img src="assets/company-${id}.webp" alt="${alt}" width="1000" height="824">
          <figcaption>${caption}</figcaption>
        </figure>`).join('')}
      </div>
      <div class="company-quotes company-quotes-three">
        <div class="careers-voice-box">
          <blockquote>“Systech genuinely cares for your growth, both professionally and personally. I have been here for 17 years now and I’m grateful for the recognition and support across the team.”</blockquote>
          <p><strong>Guru Prasad</strong> · Business Manager · 17+ Years @ Systech</p>
        </div>
        <div class="careers-voice-box">
          <blockquote>“Feel more at home, more comfortable, more in control and more supported. Systech genuinely cares for your growth, both professionally and personally.”</blockquote>
          <p><strong>Kiran Kumar</strong> · Part Sales · Genuine Spares Desk</p>
        </div>
        <div class="careers-voice-box">
          <blockquote>“Working at Systech has been a rewarding experience. It’s a place where employees are empowered to reach their full potential, and I’m grateful to be part of such a dynamic and forward-thinking company.”</blockquote>
          <p><strong>Nagendra</strong> · Technical Support &amp; Field Engineering</p>
        </div>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row">
    <div><p class="eyebrow closing-eyebrow">Human Resources · Bengaluru HQ, Chennai, Hyderabad, Dubai &amp; Hong Kong</p><h2>Ready to introduce yourself to our hiring desk?</h2><p>Write to <a href="mailto:${hrEmail}">${hrEmail}</a> or call <a href="tel:+919591975816">+91 95919 75816</a> with your CV, certifications and preferred hub across Bengaluru HQ, Chennai, Hyderabad, Dubai or Hong Kong.</p></div>
    <div class="closing-actions">
      <a class="button" href="mailto:${hrEmail}?subject=TeamSystech%20career%20enquiry">Email HR (${hrEmail})</a>
      <a class="button closing-ghost" href="tel:+919591975816">Call HR (+91 95919 75816)</a>
    </div>
  </div></section>`;
}

export function bindCareersPage(container) {
  if (!container) return;
  const host = container.querySelector('#career-track-host');
  const trackBtns = container.querySelectorAll('[data-career-track]');
  const levelBtns = container.querySelectorAll('[data-career-level]');
  const locBtns = container.querySelectorAll('[data-career-loc]');

  function refresh() {
    host.innerHTML = renderTrackDetail(
      container.dataset.track || 'presales',
      container.dataset.level || 'Specialist (3–6 yrs)',
      container.dataset.location || 'Bengaluru HQ'
    );
  }

  container.addEventListener('click', event => {
    const tBtn = event.target.closest('[data-career-track]');
    if (tBtn) {
      container.dataset.track = tBtn.dataset.careerTrack;
      trackBtns.forEach(b => b.setAttribute('aria-pressed', String(b === tBtn)));
      refresh();
      return;
    }
    const lBtn = event.target.closest('[data-career-level]');
    if (lBtn) {
      container.dataset.level = lBtn.dataset.careerLevel;
      levelBtns.forEach(b => b.setAttribute('aria-pressed', String(b === lBtn)));
      refresh();
      return;
    }
    const locBtn = event.target.closest('[data-career-loc]');
    if (locBtn) {
      container.dataset.location = locBtn.dataset.careerLoc;
      locBtns.forEach(b => b.setAttribute('aria-pressed', String(b === locBtn)));
      refresh();
    }
  });
}

const privacy = {
  title: 'Privacy Policy',
  intro: 'How Systech Services Private Limited handles enquiry and contact details shared through teamsystech.com.',
  sections: [
    ['enquiry-information', 'Information you provide', 'Enquiry forms collect your name, work email, company name, selected solution area and project requirements. If you start from the Office Setup Planner, Lenovo spares finder or IT Asset Recovery workflow, only the configuration or equipment details you include are carried into your brief.'],
    ['enquiry-handling', 'How enquiries are prepared and sent', 'Enquiry briefs and downloadable scope summaries are prepared directly in your browser. When you choose to open an email draft, message our WhatsApp desk or submit through an integrated response channel, your request is used strictly to prepare quotations, technical scoping and support follow-up.'],
    ['careers-contact', 'Careers applications', 'The Careers page opens a direct correspondence draft to our HR inbox. Applicants choose which CV, experience summary and location details to include before sending.'],
    ['third-party-services', 'Third-party channels and external links', 'Links that launch email clients, WhatsApp Business or Google Maps directions operate under their respective providers’ privacy terms once you leave this site.'],
    ['privacy-questions', 'Privacy questions and data requests', `To update or ask about information shared with Systech Services Private Limited, write to <a href="mailto:${contactEmail}">${contactEmail}</a>.`]
  ]
};

const terms = {
  title: 'Terms & Conditions',
  intro: 'Terms governing use of the website, architectural scoping tools, commercial quotations and services from Systech Services Private Limited.',
  sections: [
    ['website-information', 'Technical guidance & reference layouts', 'Use the solution guides, system diagrams and Office Setup Planner to scope preliminary IT requirements. Exact bill-of-materials counts, port schedules, equipment compatibility and site readiness are verified in writing after technical review or site survey.'],
    ['enquiries-and-quotes', 'Quotations, pricing & availability', 'Submitted enquiries and planning briefs initiate a pre-sales conversation rather than a binding purchase order. Current unit pricing, GST, delivery lead times, OEM licensing terms and installation charges are confirmed in an official Systech written quotation.'],
    ['service-scope', 'Project handover, AMC & asset recovery', 'For structured cabling, networking, server deployment, repairs, annual maintenance contracts (AMC) and IT asset disposition (ITAD), deliverables, exclusions, escalation SLAs and handover sign-off criteria are governed by your signed statement of work or purchase order.'],
    ['third-party-products', 'OEM trademarks & warranties', 'Hardware and software product names identify third-party technologies supplied and supported by Systech as an authorised partner. Manufacturer warranties, software subscriptions and support entitlements remain subject to each OEM’s published programme terms.'],
    ['terms-questions', 'Order or quotation enquiries', `Reference your quotation, invoice or service ticket ID when writing to <a href="mailto:${contactEmail}">${contactEmail}</a>.`]
  ]
};

const returns = {
  title: 'Return & RMA Policy',
  intro: 'RMA coordination, dead-on-arrival reporting and return governance for B2B hardware, genuine spare parts and custom infrastructure orders.',
  sections: [
    ['returns-eligibility', 'Order categories & eligibility', 'Standard B2B hardware, pre-imaged enterprise fleets, software licences and built-to-order server configurations are governed by the commercial terms stated on your official Systech quotation and tax invoice. Unopened, manufacturer-sealed stocked accessories or spare assemblies may only be evaluated for return or credit where expressly agreed prior to dispatch.'],
    ['damaged-or-incorrect', 'Damaged, defective or incorrect deliveries', 'Inspect outer cartons and serial numbers upon delivery. Report transit damage, incorrect part shipments or dead-on-arrival (DOA) symptoms promptly in writing with photographs and serial/invoice details so our Bengaluru support desk can initiate inspection or OEM DOA authorisation within manufacturer cut-off windows.'],
    ['return-process', 'RMA approval & dispatch protocol', `Always request written RMA authorisation from <a href="mailto:${contactEmail}?subject=RMA%20or%20return%20request">${contactEmail}</a> before returning any equipment. Authorised returns must travel in original protective OEM packaging with all documentation, accessories and matching serial labels intact.`],
    ['refunds-and-exchanges', 'Warranty replacements, repairs & credits', 'Valid hardware faults within OEM cover are processed for component replacement, certified repair or credit adjustment according to manufacturer turnaround and agreed commercial terms. Custom software subscriptions, opened electronic licences and installed site cabling are non-returnable.'],
    ['return-questions', 'Order & dispatch support', `For status updates on an existing delivery or RMA claim, contact <a href="mailto:${contactEmail}?subject=Order%20or%20RMA%20enquiry">${contactEmail}</a> or call <a href="tel:+919535724411">+91 95357 24411</a> with your invoice reference.`]
  ]
};

function policyPage(policy) {
  return `<div class="wrap launch-page policy-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> ${policy.title}</nav>
    <header class="policy-header">
      <h1>${policy.title}</h1>
      <p>${policy.intro}</p>
    </header>
    <div class="policy-layout">
      <nav class="policy-index" aria-label="On this page">
        <h2>On this page</h2>
        <ul>${policy.sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ul>
      </nav>
      <div class="policy-sections">
        ${policy.sections.map(([id, title, text]) => `<section id="${id}" aria-labelledby="${id}-heading"><h2 id="${id}-heading">${title}</h2><p>${text}</p></section>`).join('')}
      </div>
    </div>
  </div>`;
}

export function privacyPolicyPage() { return policyPage(privacy); }
export function termsPage() { return policyPage(terms); }

export function returnPolicyPage() { return policyPage(returns); }
