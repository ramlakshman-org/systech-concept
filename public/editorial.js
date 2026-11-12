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
      ['Start with the layout', 'Mark desks, access points, cameras, meeting rooms and network cabinets on a floor plan. Note where each run starts and ends, including links between floors.'],
      ['Choose by the job', 'Copper Ethernet is a common choice for local device runs and can carry power for compatible access points or cameras. Consider fibre for longer runs and backbone links between cabinets or buildings.'],
      ['Ask for a handover record', 'Request a cable schedule, labels at both ends and test results for installed links. Ask the installer to confirm the cable and termination types before ordering.']
    ],
    service: 'structured-cabling',
    action: 'Explore structured and fibre cabling',
    source: 'top-fiber-optic-cabling-solutions-in-bengaluru-teamsystech/'
  },
  {
    id: 'storage-options',
    title: 'Choose between NAS, SAN, DAS and tape',
    summary: 'Match the storage setup to how people and applications use the data, and how quickly it needs to be recovered.',
    sections: [
      ['Shared files', 'Consider NAS when teams need to open and share files over the office network. Check how access permissions and backups will be managed.'],
      ['Application storage', 'DAS attaches directly to a host. A SAN provides block storage over a dedicated storage network and can serve multiple hosts. Ask which workloads need shared storage and how they will handle an outage.'],
      ['Long-term copies', 'Tape can serve as an offline backup or archive. Work out how long copies must be kept and test how long a restore takes before relying on the setup.']
    ],
    service: 'storage',
    action: 'Explore storage and backup',
    source: 'best-storage-solutions-in-bangalore-nas-san-das-tape-storage/'
  },
  {
    id: 'annual-maintenance-guide',
    title: 'What to check before signing an IT AMC',
    summary: 'Use a short checklist to compare coverage, response commitments and exclusions.',
    sections: [
      ['List what needs cover', 'Record equipment type, model, location, warranty status and how much work stops when the equipment fails. Include the network or server equipment you expect the contract to cover.'],
      ['Check how support works', 'Ask which preventive checks are included, how to report a fault and when on-site service is available. Confirm the difference between response and resolution commitments in the quote.'],
      ['Check parts and exclusions', 'Ask who pays for replacement parts, travel and work outside agreed hours. Get the exclusions and escalation contact in writing.']
    ],
    service: 'annual-maintenance',
    action: 'Explore annual maintenance contracts',
    source: 'keep-your-it-systems-running-smoothly-with-annual-maintenance-contracts/'
  }
];

const officialSite = 'https://teamsystech.com/';

function textLink(href, label) {
  return `<a class="arrow-link" href="${href}">${label} <span aria-hidden="true">→</span></a>`;
}

const milestones = [
  ['1998', 'Started in IT integration', 'Began by supplying and servicing PCs and peripherals for small businesses and home offices.'],
  ['2003', 'Added cabling and maintenance', 'Expanded into structured network cabling and annual maintenance contracts.'],
  ['2014', 'Reached Lenovo Platinum status', 'Systech marks this as the year it attained Lenovo Platinum Business Partner status.'],
  ['2018', 'Expanded into managed IT', 'Added managed services and consulting to its infrastructure work.']
];

export function companyProfile() {
  return `<section class="editorial-section" id="our-story" aria-labelledby="story-title">
    <header class="editorial-heading company-story-heading">
      <div><h2 id="story-title">Our story</h2><p class="company-founded"><time datetime="1998-09-18">Founded 18 September 1998</time> · Bengaluru</p></div>
      <p>Systech began by setting up and servicing computers for small businesses. Today, its work spans business computing, servers and storage, office infrastructure, cloud, security and IT support across India.</p>
    </header>
    <ol class="company-milestones" aria-label="Company milestones">
      ${milestones.map(([year, title, copy]) => `<li><time datetime="${year}">${year}</time><h3>${title}</h3><p>${copy}</p></li>`).join('')}
    </ol>
  </section>
  <section class="editorial-section company-principles" aria-label="Mission and vision">
    <div><h2>Our mission</h2><p>Help businesses get value from their IT investment through practical advice, dependable implementation and support as their needs change.</p></div>
    <div><h2>Our vision</h2><p>Build lasting customer relationships and raise the standard for IT integration and service as technology evolves.</p></div>
  </section>`;
}

export function companyReviews() {
  return `<section class="editorial-section" id="customer-feedback" aria-labelledby="feedback-title">
    <header class="editorial-heading">
      <h2 id="feedback-title">What customers say</h2>
      <p class="editorial-review">Excerpts from the current Systech site. Please confirm the wording and attribution before launch.</p>
    </header>
    <div class="company-quotes">
      <figure><blockquote><p>“We are completely satisfied with all the work we have engaged in with Systech.”</p></blockquote><figcaption>Vishnu Ramakrishnan</figcaption></figure>
      <figure><blockquote><p>“A good service related to sales and support.”</p></blockquote><figcaption>Mohan Doddaghatta</figcaption></figure>
    </div>
    ${textLink(officialSite + 'about-us/', 'Read the original customer reviews')}
  </section>`;
}

export function companyEditorial() {
  return `<section class="editorial-section" id="leadership" aria-labelledby="leadership-title">
    <header class="editorial-heading">
      <h2 id="leadership-title">Our team</h2>
      <p class="editorial-review">Preview for TeamSystech review. Please confirm names, titles and photos before launch.</p>
    </header>
    <ul class="leadership-list">
      ${leadership.map(([name, role]) => `<li><h3>${name}</h3><p>${role}</p></li>`).join('')}
    </ul>
    ${textLink(officialSite + 'our-team/', 'View the published team listing')}
  </section>
  <section class="editorial-section" id="gallery" aria-labelledby="gallery-title">
    <header class="editorial-heading"><h2 id="gallery-title">Life at Systech</h2></header>
    <div class="company-gallery">
      ${gallery.map(([id, caption, description]) => `<figure>
        <img src="assets/company-${id}.webp" alt="${description}" width="1000" height="824" loading="lazy" decoding="async">
        <figcaption>${caption}</figcaption>
      </figure>`).join('')}
    </div>
    ${textLink(officialSite + 'gallery/', 'View the full gallery')}
  </section>`;
}

export function resourceEditorial() {
  return `<section class="editorial-section" id="buying-guides" aria-labelledby="buying-guides-title">
    <header class="editorial-heading"><h2 id="buying-guides-title">Buying guides</h2></header>
    <div class="buying-guides">
      ${guides.map(guide => `<details id="${guide.id}">
        <summary><span><strong>${guide.title}</strong><span>${guide.summary}</span></span></summary>
        <div class="buying-guide-content">
          <dl>${guide.sections.map(([title, copy]) => `<div><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl>
          <div class="buying-guide-links">
            ${textLink('?page=' + guide.service, guide.action)}
            ${textLink(officialSite + guide.source, 'Read the original Systech article')}
          </div>
        </div>
      </details>`).join('')}
    </div>
  </section>`;
}
