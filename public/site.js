import { careersPage, privacyPolicyPage, termsPage, returnPolicyPage } from './launch-pages.js';
import { companyProfile, companyEditorial, companyReviews, resourceEditorial } from './editorial.js';
import { assetRecoveryWorkflow, assetRecoveryFields, assetRecoveryDraftLines } from './asset-recovery.js';
import { enquiryTeams, suggestEnquiryTeam } from './enquiry-routing.js';
import { microsoftId, microsoftTitle, microsoftSolutionsPage, microsoftEnquiryRequirement, bindMicrosoftSolutions } from './microsoft-solutions.js';
import { lenovoPartnerId, lenovoPartnerTitle, lenovoPartnerPage, bindLenovoPartner } from './lenovo-partner.js';
import { serviceIllustration, bindServiceIllustration } from './service-illustration.js';
import { securityDetails } from './security-details.js';
import { additionalServiceDetails } from './service-details.js';
import { groups } from './data.js';
import { officeCutaway } from './office-cutaway.js';

const params = new URLSearchParams(location.search);
const page = params.get('page') || 'home';
const main = document.querySelector('main');
const source = 'https://teamsystech.com/';
const capacities = ['25', '50', '100'];
const features = [['meeting', 'Meeting room'], ['cctv', 'CCTV'], ['access', 'Biometric access'], ['servers', 'Server & storage']];
const groupUrl = id => '?page=' + id;
const lenovoPartnership = groupUrl(lenovoPartnerId);
const microsoftUrl = groupUrl(microsoftId);
const button = (url, label, type = '') => `<a class="button ${type}" href="${url}">${label}</a>`;
const link = (url, label) => `<a class="arrow-link" href="${url}">${label} <span aria-hidden="true">→</span></a>`;
const contact = id => '?page=contact&service=' + id;
const wifiPageId = 'office-wifi';
const wifiTitle = securityDetails[wifiPageId].title;
const entriesBySource = new Map(groups.flatMap(group => group.entries.map(([title, , path]) => [
  path, { group, title }
])));
const serviceDetails = new Map(Object.entries({ ...securityDetails, ...additionalServiceDetails }).map(([route, detail]) => [
  route, { ...detail, ...entriesBySource.get(detail.sourcePath) }
]));
const routesBySource = new Map([...serviceDetails].map(([route, detail]) => [detail.sourcePath, route]));
const currentSeats = capacities.includes(params.get('seats')) ? params.get('seats') : '50';

function groupIndex() {
  return `<div class="solution-grid">${groups.map(g => `<a href="${groupUrl(g.id)}"><span><strong>${g.title}</strong></span><span class="arrow" aria-hidden="true">→</span></a>`).join('')}</div>`;
}

function intro(title, detail) {
  return `<section class="wrap page-intro"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span><h1>${title}</h1><p>${detail}</p></section>`;
}

function finalCall() {
  return `<section class="closing"><div class="wrap closing-row"><div><h2>What are you setting up?</h2><p>Tell Systech what you need to equip, connect, secure or maintain.</p></div>${button('?page=contact', 'Discuss your project')}</div></section>`;
}

function home() {
  return `
  <section class="wrap hero">
    <div class="hero-copy"><h1>IT infrastructure,<br class="hero-break"> from desk to<br class="hero-break"> data centre.</h1><p>Equip your team, connect your office and keep your systems running.</p>
      <div class="actions">${button('?page=contact', 'Discuss your project')}${link('?page=solutions', 'Explore solutions')}</div>
    </div>
    <div class="hero-art">
      <img src="assets/planner-cutaway.webp" width="773" height="529" fetchpriority="high" alt="Office cutaway showing workstations, a meeting room and the cabling beneath the floor.">
      <a href="?page=planner" class="planner-entry"><strong>Plan an office setup</strong><span>Open planner <span aria-hidden="true">→</span></span></a>
    </div>
  </section>
  <section id="solutions" class="wrap ruled solutions-section">
    <h2>Explore solutions</h2>${groupIndex()}
  </section>
  <section class="project-section">
    <div class="wrap project-row">
      <div><p class="eyebrow">Office planner</p><h2>See how the office fits together.</h2><p>Start with a team size. Add meeting rooms, physical security and server requirements, then carry the scope into your enquiry.</p>${button('?page=planner', 'Plan an office setup')}</div>
      <div class="project-diagram" aria-label="Example office infrastructure">
        <span>Workstations</span><span>Meeting rooms</span><span>Access control</span><b>Office network</b><span>Servers &amp; storage</span><span>Cloud services</span>
      </div>
    </div>
  </section>
  <section class="wrap lifecycle">
    <div><h2>Keep your IT working.</h2><p>Maintain the equipment you rely on, extend its life or plan what to do when it’s time to retire it.</p></div>
    <div class="stack-links">${link('?page=repairs','Repairs, AMC & Spares')}${link('?page=renewal','Device Renewal & E-Waste')}${link('?page=network','Explore a secure network')}</div>
  </section>
  <section class="wrap proof"><span>Lenovo Platinum Partner</span>${link(lenovoPartnership, 'View partnership')}${link('?page=company','About Systech')}</section>
  ${finalCall()}`;
}

const workplacePoints = {
  devices: [23.2, 32.8],
  cloud: [89.4, 20.2],
  office: [56.7, 5.1],
  security: [71.8, 52.5],
  repairs: [18.9, 70.3],
  renewal: [69.9, 79.3]
};
const serviceNumber = index => String(index + 1).padStart(2, '0');

function solutions() {
  return `
  <section class="wrap directory">
    <div class="directory-intro">
      <h1>Explore Systech solutions.</h1>
      <p>Choose a service to see where it fits in your workplace.</p>
    </div>
    <div id="workplace-directory" class="directory-grid" data-active-service="office">
      <figure class="directory-figure">
        <div class="directory-art">
          <img src="assets/solutions-workplace.webp" width="898" height="644" alt="An office cutaway with desks, a server rack, ceiling cabling, networking equipment, a repair bench and a device collection crate.">
          ${groups.map((g, index) => {
            const [x, y] = workplacePoints[g.id];
            return `<button type="button" class="directory-point" style="--x:${x}%;--y:${y}%" data-pick="${g.id}" aria-label="${g.title} on the workplace map" aria-pressed="${g.id === 'office'}" aria-controls="directory-${g.id}">${serviceNumber(index)}</button>`;
          }).join('')}
        </div>
        <figcaption>Illustrative workplace</figcaption>
      </figure>
      <ul class="directory-list" aria-label="Systech services">
        ${groups.map((g, index) => `<li class="directory-item">
          <button type="button" class="directory-row" data-pick="${g.id}" aria-expanded="${g.id === 'office'}" aria-controls="directory-${g.id}">
            <span class="directory-number" aria-hidden="true">${serviceNumber(index)}</span>
            <span>${g.title}</span><span class="directory-arrow" aria-hidden="true">→</span>
          </button>
          <div class="directory-detail" id="directory-${g.id}" ${g.id === 'office' ? '' : 'hidden'}>
            <p>${g.id === 'office' ? 'Cabling, meeting rooms, power and physical security.' : g.summary}</p>
            ${link(groupUrl(g.id), 'View service')}
          </div>
        </li>`).join('')}
      </ul>
    </div>
    <div class="directory-footer"><h2>Planning a new office?</h2>${button('?page=planner', 'Plan an office setup →')}</div>
  </section>`;
}

function service(g) {
  const special = { office: ['?page=planner', 'Plan an office setup'], security: ['?page=network', 'Explore a secure network'] };
  const next = special[g.id];
  return intro(g.title, g.intro) + `<section class="wrap service-layout section"><div class="offer-list"><h2>What Systech offers</h2>${g.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div><aside><h2>Discuss your requirements</h2><p>Tell us about the equipment, site or project you need help with.</p>${button(contact(g.id), 'Start an enquiry')}${next ? link(...next) : ''}</aside></section><section class="wrap ruled section"><h2>More solutions</h2>${groupIndex()}</section>`;
}

const officeLayers = {
  cabling: { label: 'Cabling', description: 'Trace the blue route from the network rack through the ceiling tray to the desks and meeting room.' },
  av: { label: 'Meeting room AV', description: 'See where the display and table connections support presentations and video calls.' },
  cctv: { label: 'CCTV', description: 'See example camera positions for the open office and the meeting-room approach.' },
  access: { label: 'Access control', description: 'See where a door reader can control entry to the meeting room.' }
};

function office() {
  const group = groups.find(g => g.id === 'office');
  return `
    <section class="wrap infrastructure-page">
      <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Office Infrastructure</div>
      <div class="infrastructure-hero">
        <div class="infrastructure-copy">
          <h1>Connect the spaces where your team works.</h1>
          <p>Plan cabling, meeting rooms, power and physical security together.</p>
          <div class="infrastructure-actions">${button(contact('office'), 'Discuss your site')}${link('?page=planner', 'Plan an office setup')}</div>
        </div>
        <div class="infrastructure-explorer" id="infrastructure-explorer" data-layer="cabling">
          <figure class="infrastructure-figure">
            <div class="infrastructure-art">
              <img src="assets/office-infrastructure.webp" width="1017" height="498" alt="Office cutaway showing the network rack, ceiling cable tray, desks and meeting room.">
              <svg class="infrastructure-overlay" viewBox="0 0 1017 498" aria-hidden="true">
                <g data-office-overlay="av">
                  <path d="M775 296l91-5v52l-91 5z"/>
                  <path d="M820 346v22l-42 24" class="infrastructure-route"/>
                  <circle cx="778" cy="392" r="9"/>
                </g>
                <g data-office-overlay="cctv">
                  <path class="infrastructure-coverage" d="M592 223l-145 148 207-66zM931 219l-120 113 165 4z"/>
                  <rect x="578" y="214" width="28" height="15" rx="4"/><circle cx="602" cy="221" r="3"/>
                  <rect x="917" y="210" width="28" height="15" rx="4"/><circle cx="941" cy="217" r="3"/>
                </g>
                <g data-office-overlay="access">
                  <path d="M628 226l103-8v237l-103-2z" class="infrastructure-coverage"/>
                  <rect x="717" y="326" width="17" height="26" rx="3"/>
                  <path d="M722 334h7m-7 6h7" class="infrastructure-route"/>
                </g>
              </svg>
            </div>
            <figcaption>Illustrative office installation</figcaption>
          </figure>
          <div class="infrastructure-controls" role="group" aria-label="Office infrastructure layers">
            ${Object.entries(officeLayers).map(([id, layer]) => `<button type="button" data-office-layer="${id}" aria-pressed="${id === 'cabling'}" aria-controls="office-layer-description">${layer.label}</button>`).join('')}
          </div>
          <p class="infrastructure-caption" id="office-layer-description" aria-live="polite">${officeLayers.cabling.description}</p>
        </div>
      </div>
      <section class="repair-services infrastructure-services">
        <h2>What we install</h2>
        <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
      </section>
    </section>
    ${finalCall()}`;
}

const repairParts = {
  display: { label: 'Display', detail: 'Ask about screen faults and a compatible replacement.', x: 77, y: 20 },
  keyboard: { label: 'Keyboard', detail: 'Ask about unresponsive keys or a compatible keyboard assembly.', x: 86, y: 45 },
  ssd: { label: 'SSD', detail: 'Ask about storage faults, replacement or an upgrade.', x: 16, y: 69 },
  battery: { label: 'Battery', detail: 'Ask about diagnosis and a compatible replacement.', x: 79, y: 79 }
};
const supportModes = {
  repair: { label: 'Repairs', request: 'Repair and diagnosis' },
  amc: { label: 'AMC', request: 'Annual maintenance contract', detail: 'Discuss preventive care, inspections and support for your IT assets.' },
  spares: { label: 'Spare parts', request: 'Genuine Lenovo spares' }
};

function supportEnquiry(mode, part) {
  const query = new URLSearchParams({ page: 'contact', service: 'repairs', support: mode });
  if (part) query.set('part', part);
  return '?' + query;
}

function repairs() {
  const group = groups.find(g => g.id === 'repairs');
  return `
  <section class="wrap repairs-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Repairs &amp; Support</div>
    <div id="repair-explorer" class="repair-explorer" data-mode="repair" data-part="battery">
      <div class="repair-hero">
        <div class="repair-copy">
          <h1>Repairs &amp; Support</h1>
          <p>Get equipment repaired, source genuine Lenovo spares or plan annual maintenance.</p>
          ${button(contact('repairs'), 'Request service')}
          <div class="repair-modes" role="group" aria-label="Support type">
            ${Object.entries(supportModes).map(([id, {label}]) => `<button type="button" data-repair-mode="${id}" aria-pressed="${id === 'repair'}">${label}</button>`).join('')}
          </div>
        </div>
        <figure class="repair-figure">
          <div class="repair-art">
            <img src="assets/repair-laptop.webp" width="552" height="613" alt="Exploded laptop showing the display, keyboard, storage drive and battery.">
            ${Object.entries(repairParts).map(([id, part]) => `<button type="button" class="repair-part" style="--x:${part.x}%;--y:${part.y}%" data-repair-part="${id}" aria-pressed="${id === 'battery'}" aria-controls="repair-selection">${part.label}</button>`).join('')}
          </div>
          <figcaption>Illustrative device</figcaption>
        </figure>
      </div>
      <div class="repair-selection" id="repair-selection">
        <div aria-live="polite"><h2 id="repair-part-title">Battery</h2><p id="repair-part-detail">${repairParts.battery.detail}</p></div>
        <a class="arrow-link" id="repair-selection-link" href="${supportEnquiry('repair', 'battery')}">Enquire about this part <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <section class="repair-partnership" aria-labelledby="repair-partnership-title">
      <div><h2 id="repair-partnership-title">Lenovo Platinum Partner</h2><p>Genuine Lenovo spares</p>${link(lenovoPartnership, 'View partnership')}</div>
      ${button(supportEnquiry('spares'), 'Enquire about Lenovo spares →')}
    </section>
    <section class="repair-services">
      <h2>What we support</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>
  ${finalCall()}`;
}

const plannerRoutes = {
  network: { label: 'Office network', detail: 'Follow the desk cables to the switch on each floor. In a multi-floor office, the cable riser links those switches.' },
  cloud: { label: 'Servers & cloud', detail: 'From the switch, one route goes through the firewall and internet to the cloud. Add Server & storage to see the separate on-site route.' },
  security: { label: 'Security & access', detail: 'With CCTV selected, cameras reach the recorder through the switches. With Biometric access selected, the reader reaches the door controller, which operates the lock.' }
};
const requestedRoute = params.get('view');
const initialPlannerRoute = Object.hasOwn(plannerRoutes, requestedRoute) ? requestedRoute : 'network';

function plannerIllustration(seats, activeFeatures, route = initialPlannerRoute) {
  const active = new Set(activeFeatures.map(([id]) => id));
  const description = ['Office cutaway with ' + seats + ' desks across ' + Number(seats) / 25 + (seats === '25' ? ' floor' : ' floors'), ...activeFeatures.map(([, label]) => label)].join('. ');
  return `
    <div class="office-floorplan" data-seat-count="${seats}" data-cutaway-route="${route}" role="img" aria-label="${description}">
      <div class="floorplan-heading"><span>Office cutaway</span><strong>${seats} desks</strong></div>
      <p class="floorplan-scroll-hint" aria-hidden="true">Scroll sideways to explore the diagram.</p>
      <div class="floorplan-scroll">${officeCutaway(Number(seats), active)}</div>
      ${activeFeatures.length ? `<div class="floorplan-features">${activeFeatures.map(([id, label]) => `<div data-floorplan-feature="${id}"><span class="floorplan-feature-symbol"></span><span>${label}</span></div>`).join('')}</div>` : ''}
    </div>
    <figcaption>Illustrative layout</figcaption>`;
}

function officePlan() {
  return `
  <section class="wrap planner-page">
    <a class="crumb planner-back" href="?page=solutions">← Solutions</a>
    <h1>Plan an office setup</h1>
    <form id="planner" class="planner-layout">
      <fieldset class="planner-size">
        <legend>Office size <span class="sr">in seats</span></legend>
        <div class="seat-picker">${capacities.map(value => `<label><input type="radio" name="seats" value="${value}" ${value === currentSeats ? 'checked' : ''}><span>${value}</span></label>`).join('')}</div>
      </fieldset>
      <section class="planner-visual" aria-label="Office illustration and connection routes">
        <div class="planner-route-controls" role="group" aria-label="Explore a connection">
          ${Object.entries(plannerRoutes).map(([id, route]) => `<button type="button" data-planner-route="${id}" aria-pressed="${id === initialPlannerRoute}" aria-controls="planner-route-detail">${route.label}</button>`).join('')}
        </div>
        <p id="planner-route-detail" class="planner-route-detail" aria-live="polite">${plannerRoutes[initialPlannerRoute].detail}</p>
        <figure class="planner-figure">${plannerIllustration(currentSeats, selectedFeatures)}</figure>
      </section>
      <fieldset class="planner-options">
        <legend>Add to your scope</legend>
        ${features.map(([id, label]) => `<label class="check"><input type="checkbox" name="${id}"><span>${label}</span></label>`).join('')}
        <button type="reset" class="quiet">Reset selections</button>
      </fieldset>
      <div class="planner-summary">
        <h2>Project scope</h2><p id="scope-summary" aria-live="polite"></p>
        <a id="use-scope" class="button" href="${contact('office')}">Use this scope <span aria-hidden="true">→</span></a>
      </div>
    </form>
  </section>`;
}

const deviceSetups = {
  office: { title: 'Office work', summary: 'Desktop · Monitor · Peripherals', detail: 'Equip fixed desks with a desktop, monitor and everyday accessories.', width: 459, height: 294 },
  mobile: { title: 'Mobile work', summary: 'Laptop · Dock · Headset', detail: 'Choose a laptop for work on the move, plus a dock and headset for use at a desk.', width: 400, height: 277 },
  specialist: { title: 'Specialist work', summary: 'Workstation · Dual displays', detail: 'Pair a workstation with two displays for specialist applications and demanding workflows.', width: 474, height: 283 }
};

function deviceEnquiry(setup) {
  return contact('devices') + '&setup=' + setup;
}

function devices() {
  const group = groups.find(g => g.id === 'devices');
  return `<section class="wrap devices-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Devices &amp; Accessories</div>
    <div class="security-intro">
      <h1>Equip every kind of work.</h1>
      <div><p>Business devices and accessories chosen for how your team works.</p>${button(contact('devices'), 'Discuss device requirements')}</div>
    </div>
    <div id="device-explorer" class="device-explorer">
      <div class="device-options" role="group" aria-label="Choose a device setup">
        ${Object.entries(deviceSetups).map(([id, setup]) => `<button type="button" class="device-option" data-device-setup="${id}" aria-pressed="${id === 'office'}" aria-controls="device-selection">
          <span class="device-art"><img src="assets/devices-${id}.webp" width="${setup.width}" height="${setup.height}" alt=""></span>
          <strong>${setup.title}</strong><span class="device-summary">${setup.summary}</span>
        </button>`).join('')}
      </div>
      <div class="repair-selection device-selection" id="device-selection">
        <div aria-live="polite"><h2>${deviceSetups.office.title}</h2><p>${deviceSetups.office.detail}</p></div>
        ${link(deviceEnquiry('office'), 'Enquire about this setup')}
      </div>
    </div>
    <section class="repair-partnership" aria-labelledby="devices-lenovo">
      <div><h2 id="devices-lenovo">Lenovo Platinum Partner</h2><p>Lenovo business laptops, desktops and workstations.</p></div>
      ${button(lenovoPartnership, 'Explore Lenovo options →')}
    </section>
    <section class="repair-services device-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>${finalCall()}`;
}

const renewalPaths = {
  renew: { title: 'Renew & reuse', summary: 'Evaluate, upgrade and test.', detail: 'Ask us to assess whether your existing laptops can be upgraded and returned to use.', width: 507, height: 304 },
  recycle: { title: 'Collect & recycle', summary: 'Review inventory, arrange collection and recycle.', detail: 'Share your inventory of retired equipment so we can discuss collection, recycling and documentation.', width: 558, height: 232 }
};

function renewalEnquiry(path) {
  return contact('renewal') + '&lifecycle=' + path;
}

function renewal() {
  const group = groups.find(g => g.id === 'renewal');
  return `<section class="wrap renewal-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Device Renewal &amp; E-Waste</div>
    <div class="security-intro">
      <h1>Give old devices a next step.</h1>
      <div><p>Assess equipment for upgrades or arrange responsible e-waste collection.</p>${button(contact('renewal'), 'Discuss your equipment')}</div>
    </div>
    <div id="renewal-explorer" class="renewal-explorer" data-renewal-path="renew">
      <div class="renewal-diagram">
        <figure class="renewal-assessment">
          <img src="assets/lifecycle-assessment.webp" width="377" height="216" alt="Two used laptops ready for assessment.">
          <figcaption>Assess equipment</figcaption>
        </figure>
        <svg class="renewal-connector" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 50h20"/><path class="renew-line" d="M20 50C62 50 36 25 100 25"/>
          <path class="recycle-line" d="M20 50C62 50 36 75 100 75"/>
        </svg>
        <div class="renewal-options" role="group" aria-label="Choose an equipment path">
          ${Object.entries(renewalPaths).map(([id, path]) => `<button type="button" class="renewal-option" data-renewal-choice="${id}" aria-pressed="${id === 'renew'}" aria-controls="renewal-selection">
            <span class="renewal-option-art"><img src="assets/lifecycle-${id}.webp" width="${path.width}" height="${path.height}" alt=""></span>
            <span><strong>${path.title}</strong><span class="renewal-option-summary">${path.summary}</span></span>
          </button>`).join('')}
        </div>
      </div>
      <div class="repair-selection" id="renewal-selection">
        <div aria-live="polite"><h2>${renewalPaths.renew.title}</h2><p>${renewalPaths.renew.detail}</p></div>
        ${link(renewalEnquiry('renew'), 'Discuss this option')}
      </div>
    </div>
    <section class="repair-partnership renewal-inventory">
      <div><h2>Have several devices?</h2><p>Share your equipment inventory to start the assessment.</p></div>
      ${button(groupUrl('e-waste-recycling') + '#asset-recovery', 'Explore IT Asset Recovery')}
    </section>
    <section class="repair-services infrastructure-services renewal-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>${finalCall()}`;
}

const workloadModes = {
  premises: { title: 'On-premises', detail: 'Run applications and store their data on equipment at your site.' },
  cloud: { title: 'Cloud', detail: 'Run workloads and store data on a cloud platform suited to your requirements.' },
  hybrid: { title: 'Hybrid', detail: 'Keep selected workloads on-site and run others in the cloud.' }
};

function cloud() {
  const group = groups.find(g => g.id === 'cloud');
  return `<section class="wrap workload-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Servers, Storage &amp; Cloud</div>
    <div class="workload-explorer" id="workload-explorer" data-workload-mode="hybrid">
      <div class="workload-hero">
        <div class="workload-copy">
          <h1><span>Where your applications run.</span> <span>Where your data lives.</span></h1>
          <p>Plan servers, storage and cloud around your workloads.</p>
          ${button(contact('cloud'), 'Discuss your workloads')}
          <div class="workload-controls" role="group" aria-label="Workload location">
            ${Object.entries(workloadModes).map(([id, mode]) => `<button type="button" data-workload-control="${id}" aria-pressed="${id === 'hybrid'}" aria-controls="workload-description">${mode.title}</button>`).join('')}
          </div>
        </div>
        <figure class="workload-figure">
          <div class="workload-illustration">
            <svg class="workload-connection" viewBox="0 0 1000 545" aria-hidden="true"><path d="M715 320h109q13 0 13-13V185"/></svg>
            <div class="workload-local">
              <img src="assets/server-room.webp" width="818" height="427" alt="On-site server room with an application server and a shared storage rack.">
              <span class="workload-label workload-server">Application server</span>
              <span class="workload-label workload-storage">Shared storage</span>
            </div>
            <div class="workload-remote">
              <img src="assets/cloud-workload.webp" width="338" height="208" alt="An off-site workload represented by servers inside a cloud outline.">
              <span class="workload-label">Cloud workload</span>
            </div>
          </div>
          <figcaption>Illustrative workload setup</figcaption>
        </figure>
      </div>
      <div class="network-info workload-info" id="workload-description" aria-live="polite"><h2>${workloadModes.hybrid.title}</h2><p>${workloadModes.hybrid.detail}</p></div>
    </div>
    <section class="repair-services workload-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}
        <article><h3>${microsoftTitle}</h3><p>Microsoft 365, Azure, Dynamics 365, Copilot and licensing for your organisation.</p>${link(microsoftUrl, 'View service page')}</article>
      </div>
    </section>
  </section>${finalCall()}`;
}

const networkSteps = {
  workstation: { label: 'Workstation', title: 'Endpoint protection', detail: 'Endpoint controls help protect laptops and desktops. Antivirus, EDR and XDR can support detection and response.' },
  wifi: { label: 'Office Wi-Fi', title: 'Switching and Wi-Fi', detail: 'Switches connect wired office equipment. Enterprise Wi-Fi connects wireless devices to the network.' },
  firewall: { label: 'Firewall', title: 'Traffic protection', detail: 'A firewall applies rules to traffic moving between the office network and external services.' },
  cloud: { label: 'Cloud application', title: 'Applications and data', detail: 'Cloud resources can host workloads and data on platforms such as AWS, Google Cloud or Microsoft Azure.' }
};

function networkJourney(initialStep) {
  const initial = networkSteps[initialStep];
  return `<section class="network-journey" id="network-journey" data-network-step="${initialStep}" aria-label="Workstation-to-cloud diagram">
    <figure class="network-illustration">
      <div class="network-image"><img src="assets/network-journey.webp" width="1447" height="294" alt="A workstation connects through office Wi-Fi and a firewall to a cloud application."></div>
      <figcaption>Illustrative connection</figcaption>
    </figure>
    <div class="network-nodes" role="group" aria-label="Select a network component">
      ${Object.entries(networkSteps).map(([id, step]) => `<button type="button" data-node="${id}" aria-pressed="${id === initialStep}" aria-controls="network-info">${step.label}</button>`).join('')}
    </div>
    <div class="network-info" id="network-info" aria-live="polite"><h2>${initial.title}</h2><p>${initial.detail}</p></div>
  </section>`;
}

function security() {
  const group = groups.find(g => g.id === 'security');
  return `<section class="wrap security-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Networking &amp; Cybersecurity</div>
    <div class="security-intro">
      <h1>Connect your team. Protect your network.</h1>
      <div><p>Enterprise Wi-Fi, firewalls and endpoint protection for the way your business works.</p>${button(contact('security'), 'Discuss your network')}</div>
    </div>
    ${networkJourney('firewall')}
    <section class="repair-services security-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>${finalCall()}`;
}

function officeWifi() {
  const enquiryLink = contact('security') + '&topic=' + wifiPageId;
  return `<div class="wrap wifi-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=security">Networking &amp; Cybersecurity</a></nav>
    <header class="wifi-intro">
      <h1>${wifiTitle}</h1>
      <div><p>Connect desks, meeting rooms and shared spaces with business Wi-Fi and a wired network behind it.</p>
      ${button(enquiryLink, 'Enquire about office Wi-Fi')}</div>
    </header>
    ${serviceIllustration()}
    <section class="wifi-offering" aria-labelledby="wifi-offering-heading">
      <h2 id="wifi-offering-heading">Plan Wi-Fi and switching together</h2>
      <div class="wifi-offering-grid">
        <article><h3>Wireless coverage</h3><p>Choose access points for the rooms and shared areas where your team needs Wi-Fi. Account for the layout and the number of devices using each space.</p></article>
        <article><h3>Wired connections</h3><p>Use switches and Ethernet to connect access points, desks and other office equipment. Review your existing cabling and cabinet before adding capacity.</p></article>
        <article><h3>Network equipment</h3><p>Discuss routers and wireless controllers alongside access points and switches so the equipment fits the way you manage your network.</p></article>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><h2>Planning a new office or upgrading Wi-Fi?</h2><p>Share your floor layout, approximate user count and any rooms with poor coverage.</p></div>${button(enquiryLink, 'Enquire about office Wi-Fi')}</div></section>`;
}

function serviceDetail(detail) {
  const enquiryLink = contact(detail.group.id) + '&topic=' + page;
  const illustration = page === 'lenovo-spares'
    ? { ...detail.illustration, partEnquiry: enquiryLink }
    : detail.illustration;
  return `<div class="wrap wifi-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> <a class="crumb" href="${groupUrl(detail.group.id)}">${detail.group.title}</a></nav>
    <header class="wifi-intro">
      <h1>${detail.title}</h1>
      <div><p>${detail.intro}</p>${button(enquiryLink, detail.action)}</div>
    </header>
    ${serviceIllustration(illustration)}
    ${page === 'e-waste-recycling' ? assetRecoveryWorkflow(enquiryLink) : ''}
    ${page === 'cloud-migration' ? `<p class="related-microsoft">${link(microsoftUrl, 'Explore Microsoft 365, Azure &amp; Business Applications')}</p>` : ''}
    <section class="wifi-offering" aria-labelledby="security-detail-offering">
      <h2 id="security-detail-offering">${detail.offeringHeading ?? 'What Systech provides'}</h2>
      <div class="wifi-offering-grid">
        ${detail.offerings.map(([title, description]) => `<article><h3>${title}</h3><p>${description}</p></article>`).join('')}
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row"><div><h2>${detail.closing}</h2><p>${detail.next}</p></div>${button(enquiryLink, detail.action)}</div></section>`;
}

function secureNetwork() {
  return intro('Explore a secure network', 'Follow an example connection through an office network and see where protections apply.') + `
    <div class="wrap section">${networkJourney('workstation')}</div>
    ${finalCall()}`;
}

function resources() {
  const guides = [
    { title: 'Explore a secure network', summary: 'See how a workstation connects to a cloud application.', action: 'Open walkthrough', href: '?page=network', image: 'network', width: 280, height: 138 },
    { title: 'Compare storage options', summary: 'Understand NAS, SAN, DAS and tape storage.', action: 'Read storage guide', href: groupUrl('storage'), image: 'storage', width: 241, height: 128 }
  ];
  return `
    <section class="wrap page-intro resources-intro">
      <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Resources</div>
      <h1>IT guides and planning tools</h1><p>Scope an office, follow a network connection or compare options for cabling, storage and IT maintenance.</p>
    </section>
    <div class="wrap resources-page">
      <section class="resource-feature" aria-labelledby="resource-planner-title">
        <div><h2 id="resource-planner-title">Plan an office setup</h2><p>Choose an office size, add the equipment and systems you need, and carry your scope into an enquiry.</p>${button('?page=planner', 'Open office planner →')}</div>
        <figure><img src="assets/resources-floor-plan.webp" width="966" height="341" alt="Overhead office plan with desks, a meeting room and a blue cable route to the network cabinet."><figcaption>Illustrative setup</figcaption></figure>
      </section>
      <section class="resource-guides" aria-label="More guides">
        ${guides.map(guide => `<article class="resource-guide">
          <img src="assets/resources-${guide.image}.webp" width="${guide.width}" height="${guide.height}" alt="" loading="lazy">
          <div><h2>${guide.title}</h2><p>${guide.summary}</p>${link(guide.href, guide.action)}</div>
        </article>`).join('')}
      </section>
      <section class="repair-partnership resource-partnership" aria-labelledby="resource-lenovo-title">
        <div><h2 id="resource-lenovo-title">Lenovo Platinum Partner</h2><p>Lenovo devices &amp; spares</p>${link(lenovoPartnership, 'Explore Lenovo options')}</div>
        <img src="assets/resources-lenovo.webp" width="357" height="137" alt="" loading="lazy">
      </section>
      ${resourceEditorial()}
      <div class="resource-blog">${link(source + 'blog/', 'Browse the Systech blog')}</div>
    </div>
    ${finalCall()}`;
}

const companyStages = {
  equip: { title: 'Equip', detail: 'Choose business devices, workstations and accessories for the way your team works.', route: 'devices', action: 'Explore devices & accessories' },
  connect: { title: 'Connect', detail: 'Plan the cabling, network and meeting-room systems that bring an office together.', route: 'office', action: 'Explore office infrastructure' },
  maintain: { title: 'Maintain', detail: 'Keep equipment in service with repairs, compatible spares and annual maintenance.', route: 'repairs', action: 'Explore repairs & support' }
};

function company() {
  return `
    <section class="wrap company-page">
      <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> About Systech</div>
      <div class="company-hero">
        <div class="company-copy">
          <h1>About Systech Services</h1>
          <p>The Bengaluru team behind your business computing, office infrastructure and ongoing IT support.</p>
          ${link('?page=solutions', 'Explore our services')}
        </div>
        <div id="company-explorer" class="company-explorer" data-stage="equip">
          <div class="company-stages" role="group" aria-label="Explore how Systech works">
            ${Object.entries(companyStages).map(([id, stage]) => `<button type="button" data-company-stage="${id}" aria-pressed="${id === 'equip'}" aria-controls="company-stage-description">${stage.title}</button>`).join('')}
          </div>
          <figure class="company-figure">
            <img src="assets/company-service-stages.webp" width="978" height="432" alt="Three connected work areas: a device preparation bench, an office network rack and a repair bench.">
            <figcaption>Illustrative service setup</figcaption>
          </figure>
          <div id="company-stage-description" class="company-stage-description">
            <p aria-live="polite">${companyStages.equip.detail}</p>
            <a class="arrow-link" href="${groupUrl('devices')}">${companyStages.equip.action} <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div class="company-credentials">
        <section><h2>From procurement to support</h2><p>Systech began in 1998 with IT systems integration and support.</p>${link('#our-story', 'Read our story')}</section>
        <section class="repair-partnership company-partnership"><div><h2>Lenovo Platinum Partner</h2><p>Lenovo business devices, servers and genuine spares.</p>${link(lenovoPartnership, 'View partnership')}</div></section>
      </div>
      <nav class="company-links" aria-label="Company links">
        ${link('#leadership', 'Our team')}${link('#gallery', 'Gallery')}${link('#customer-feedback', 'Customer feedback')}${link(groupUrl('careers'), 'Careers')}${link('?page=contact', 'Contact Systech')}
      </nav>
      ${companyProfile()}
      ${companyEditorial()}
      ${companyReviews()}
    </section>
    ${finalCall()}`;
}

const selectedFeatures = features.filter(([id]) => params.getAll('option').includes(id));
const scopeFeatures = selectedFeatures.map(([, label]) => label);
const hasScope = capacities.includes(params.get('seats'));
const scopeText = [currentSeats + ' seats', ...scopeFeatures].join(' · ');
const officeAddress = 'Vijaya Vittala, No. 994, 29th Main, Poornaprajna Nagar, Bengaluru 560061';
const officeDirections = 'https://www.google.com/maps/dir/?api=1&amp;destination=' + encodeURIComponent(officeAddress);
const enquiryInbox = 'contact@teamsystech.com';

function enquiry() {
  const suggestedTeam = suggestEnquiryTeam(params.get('service'), params);
  const support = params.get('support');
  const part = params.get('part');
  const isSupportRequest = params.get('service') === 'repairs' && Object.hasOwn(supportModes, support);
  const supportRequirement = isSupportRequest
    ? [supportModes[support].request, Object.hasOwn(repairParts, part) ? repairParts[part].label : ''].filter(Boolean).join(' · ')
    : '';
  const topic = params.get('topic');
  const enquiryDetail = serviceDetails.get(topic);
  const partnerRequirement = topic === lenovoPartnerId ? lenovoPartnerTitle : '';
  const sparesParts = { display: 'Display', keyboard: 'Keyboard', 'memory-storage': 'SSD and RAM', battery: 'Battery' };
  const partLabel = topic === 'lenovo-spares' && Object.hasOwn(sparesParts, part) ? sparesParts[part] : '';
  const serviceRequirement = enquiryDetail?.group.id === params.get('service')
    ? [enquiryDetail.title, partLabel].filter(Boolean).join(' · ')
    : '';
  const setup = params.get('setup');
  const deviceRequirement = params.get('service') === 'devices' && Object.hasOwn(deviceSetups, setup)
    ? deviceSetups[setup].title + ' · ' + deviceSetups[setup].summary
    : '';
  const lifecycle = params.get('lifecycle');
  const renewalRequirement = params.get('service') === 'renewal' && Object.hasOwn(renewalPaths, lifecycle)
    ? renewalPaths[lifecycle].title
    : '';
  const editScope = new URLSearchParams({ page: 'planner', seats: currentSeats });
  selectedFeatures.forEach(([id]) => editScope.append('option', id));
  if (initialPlannerRoute !== 'network') editScope.set('view', initialPlannerRoute);
  return `
  <section class="wrap page-intro enquiry-intro">
    <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Project enquiry</div>
    <h1>Discuss your project</h1>
    <p>Tell us what you’re planning so we can discuss the right setup.</p>
  </section>
  <section class="wrap section service-layout enquiry-layout ${hasScope ? 'enquiry-with-scope' : 'enquiry-direct'}">
    ${hasScope ? `<section class="scope-note" aria-labelledby="enquiry-scope">
      <h2 id="enquiry-scope">Your project scope</h2>
      <div class="enquiry-scope-visual"><figure class="planner-figure">${plannerIllustration(currentSeats, selectedFeatures)}</figure></div>
      <dl class="enquiry-scope-details">
        <div><dt>Office size</dt><dd>${currentSeats} seats</dd></div>
        ${scopeFeatures.length ? `<div><dt>Included</dt><dd>${scopeFeatures.join(' · ')}</dd></div>` : ''}
      </dl>
      <p class="enquiry-scope-compact">${scopeText}</p>
      <a href="?${editScope}">Edit in planner <span aria-hidden="true">→</span></a>
    </section>` : `<figure class="enquiry-service-visual">
      <img src="assets/company-service-stages.webp" width="978" height="432" alt="Illustration of device preparation, office networking and equipment repair.">
      <figcaption>Illustrative service setup</figcaption>
    </figure>`}
    <form id="enquiry" class="enquiry" aria-labelledby="enquiry-details">
      <h2 class="wide enquiry-details" id="enquiry-details">Your details</h2>
      <label class="field">Name<input name="name" autocomplete="name" required maxlength="120"></label>
      <label class="field">Work email<input name="email" type="email" autocomplete="email" required maxlength="200"></label>
      <label class="field">Company<input name="company" autocomplete="organization" required maxlength="150"></label>
      <label class="field">Service<select name="service" required><option value="">Select a service</option>${groups.map(g => `<option value="${g.id}" ${g.id === params.get('service') ? 'selected' : ''}>${g.title}</option>`).join('')}</select></label>
      <label class="field wide">Enquiry category<select name="team" required><option value="">Select a category</option>${Object.entries(enquiryTeams).map(([id, label]) => `<option value="${id}"${id === suggestedTeam ? ' selected' : ''}>${label}</option>`).join('')}</select></label>
      ${assetRecoveryFields(suggestedTeam === 'recovery')}
      <label class="field wide">Project requirements<textarea name="requirements" required maxlength="1500" rows="5" placeholder="Tell us about your site, timeline or equipment needs.">${supportRequirement || serviceRequirement || deviceRequirement || renewalRequirement || partnerRequirement || microsoftEnquiryRequirement(params)}</textarea></label>
      <div class="wide enquiry-action"><button type="submit" class="button">Review enquiry <span aria-hidden="true">→</span></button><p>Review your details, then open the draft in your email app to send it to Systech.</p></div>
      <div id="enquiry-review" class="wide review" hidden><h2 tabindex="-1">Review your enquiry</h2><pre id="review-text"></pre><a id="email-draft" class="button">Open email draft</a></div>
    </form>
    <aside class="enquiry-contact" id="contact-details" aria-labelledby="contact-details-heading">
      <h2 id="contact-details-heading">Contact Systech</h2>
      <address><strong>Systech Services Private Limited</strong><br>${officeAddress}, India</address>
      ${link(officeDirections, 'Get directions')}
      <dl class="contact-channels">
        <div><dt>Email</dt><dd><a href="mailto:${enquiryInbox}">${enquiryInbox}</a></dd></div>
        <div><dt>Mobile</dt><dd><a href="tel:+919535724411">+91 95357 24411</a></dd></div>
        <div><dt>Landline</dt><dd><a href="tel:+918026724411">080 2672 4411</a></dd></div>
      </dl>
    </aside>
  </section>`;
}

const pages = { home, solutions, office, devices, cloud, security, [wifiPageId]: officeWifi, repairs, renewal, planner: officePlan, network: secureNetwork, resources, company, [lenovoPartnerId]: lenovoPartnerPage, [microsoftId]: microsoftSolutionsPage, contact: enquiry,
  careers: careersPage, 'privacy-policy': privacyPolicyPage, 'terms-and-conditions': termsPage, 'return-policy': returnPolicyPage };
const matchingGroup = groups.find(g => g.id === page);
const matchingDetail = serviceDetails.get(page);
main.innerHTML = Object.hasOwn(pages, page) ? pages[page]() : (matchingDetail ? serviceDetail(matchingDetail) : (matchingGroup ? service(matchingGroup) : intro('Page not found', 'Use the main navigation to find a service.')));
if (page !== 'home') document.title = (main.querySelector('h1')?.textContent || 'Systech') + ' | Systech Services';
const header = document.querySelector('.header');
const navigation = document.querySelector('#primary');
const menu = document.querySelector('#menu-toggle');
const solutionsToggle = document.querySelector('#solutions-toggle');
const solutionsPanel = document.querySelector('#solutions-panel');
const activeSolution = matchingDetail?.group.id ?? matchingGroup?.id ?? (page === microsoftId ? 'cloud' : undefined);
const mobileNav = window.matchMedia('(max-width: 980px)');

solutionsPanel.innerHTML = `
  <div class="solutions-panel-head">
    ${link(groupUrl('solutions'), 'All solutions')}
    ${button(groupUrl('planner'), 'Plan an office setup')}
  </div>
  <div class="solutions-panel-grid">
    ${groups.map(group => `
      <section class="solutions-nav-group" aria-labelledby="nav-group-${group.id}">
        <div class="solutions-nav-heading">
          <h2 id="nav-group-${group.id}"><a href="${groupUrl(group.id)}">${group.title}</a></h2>
          <button type="button" class="solutions-group-toggle" aria-expanded="${activeSolution === group.id}" aria-controls="nav-services-${group.id}" aria-label="Service links for ${group.title}"><span class="nav-chevron" aria-hidden="true"></span></button>
        </div>
        <ul id="nav-services-${group.id}">
          ${group.entries.map(([title, , path]) => `<li><a href="${groupUrl(routesBySource.get(path))}">${title}</a></li>`).join('')}
          ${group.id === 'cloud' ? `<li><a href="${microsoftUrl}">${microsoftTitle}</a></li>` : ''}
        </ul>
      </section>`).join('')}
  </div>`;

document.querySelector('#solutions-fallback').hidden = true;
solutionsToggle.hidden = false;
solutionsToggle.classList.toggle('nav-current', Boolean(activeSolution) || page === 'solutions' || page === 'planner' || page === 'network');
navigation.querySelectorAll('a').forEach(anchor => {
  if (anchor.getAttribute('href') === groupUrl(page)) anchor.setAttribute('aria-current', 'page');
});
if (page === 'contact') header.querySelector('.head-cta').setAttribute('aria-current', 'page');

function setSolutionsOpen(open) {
  solutionsToggle.setAttribute('aria-expanded', String(open));
  solutionsPanel.hidden = !open;
}

function closeNavigation() {
  setSolutionsOpen(false);
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  if (menu.getAttribute('aria-expanded') === 'true') closeNavigation();
  else menu.setAttribute('aria-expanded', 'true');
});

solutionsToggle.addEventListener('click', () => setSolutionsOpen(solutionsPanel.hidden));
solutionsPanel.addEventListener('click', event => {
  const toggle = event.target.closest('.solutions-group-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
});

header.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!solutionsPanel.hidden) {
    setSolutionsOpen(false);
    solutionsToggle.focus();
    event.preventDefault();
  } else if (menu.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    menu.focus();
    event.preventDefault();
  }
});

navigation.addEventListener('focusout', event => {
  if (!mobileNav.matches && !navigation.contains(event.relatedTarget)) setSolutionsOpen(false);
});
document.addEventListener('pointerdown', event => {
  if (!header.contains(event.target)) closeNavigation();
  else if (!solutionsToggle.parentElement.contains(event.target) && !mobileNav.matches) setSolutionsOpen(false);
});
mobileNav.addEventListener('change', closeNavigation);

const dialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#search-input');
const results = document.querySelector('#search-results');
const searchItems = groups.flatMap(group => [
  { title: group.title, description: group.intro, group, page: group.id },
  ...group.entries.map(([title, description, path]) => ({
    title, description, group,
    page: routesBySource.get(path) ?? group.id
  }))
]);
searchItems.push({
  title: lenovoPartnerTitle, description: 'Lenovo devices, servers, accessories, genuine parts and repairs',
  group: { title: 'Partnership' }, page: lenovoPartnerId
}, {
  title: microsoftTitle,
  description: 'Microsoft Solutions for Microsoft 365 Business Premium, Office 365, Teams, Exchange, SharePoint, Azure, Dynamics 365, Copilot and licensing',
  group: groups.find(group => group.id === 'cloud'), page: microsoftId
});
function searchServices() {
  const terms = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = terms.length ? searchItems.filter(item => terms.every(term => (item.title + ' ' + item.description + ' ' + item.group.title).toLowerCase().includes(term))) : searchItems.filter(item => item.title === item.group.title);
  results.replaceChildren();
  matches.slice(0,10).forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = groupUrl(item.page);
    a.textContent = item.title;
    li.append(a);
    results.append(li);
  });
  if (!matches.length) {
    const li = document.createElement('li');
    li.textContent = 'No matching services. Try a different term.';
    results.append(li);
  }
}
function openSearch() {
  if (dialog.open) return;
  dialog.showModal();
  closeNavigation();
  searchServices();
  searchInput.focus();
}
document.querySelector('[data-search]').addEventListener('click', openSearch);
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
});
searchInput.addEventListener('input', searchServices);
dialog.addEventListener('keydown', event => {
  const links = [...results.querySelectorAll('a')];
  const active = links.indexOf(document.activeElement);
  if (event.key === 'Enter' && document.activeElement === searchInput && links.length) links[0].click();
  if (!['ArrowDown','ArrowUp'].includes(event.key) || !links.length) return;
  event.preventDefault();
  const index = event.key === 'ArrowDown' ? active + 1 : active - 1;
  if (index < 0) searchInput.focus();
  else links[Math.min(links.length - 1, index)].focus();
});

const directory = document.querySelector('#workplace-directory');
if (directory) {
  const markers = directory.querySelectorAll('.directory-point');
  const rows = directory.querySelectorAll('.directory-row');
  directory.addEventListener('click', event => {
    const control = event.target.closest('button[data-pick]');
    if (!control) return;
    const selected = control.dataset.pick;
    directory.dataset.activeService = selected;
    markers.forEach(marker => {
      marker.setAttribute('aria-pressed', String(marker.dataset.pick === selected));
    });
    rows.forEach(row => {
      const active = row.dataset.pick === selected;
      row.setAttribute('aria-expanded', String(active));
      document.getElementById(row.getAttribute('aria-controls')).hidden = !active;
    });
    if (control.classList.contains('directory-point') && matchMedia('(max-width: 800px)').matches) {
      const activeRow = [...rows].find(row => row.dataset.pick === selected);
      activeRow.focus();
    }
  });
}

const repairExplorer = document.querySelector('#repair-explorer');
if (repairExplorer) {
  const modeButtons = repairExplorer.querySelectorAll('[data-repair-mode]');
  const partButtons = repairExplorer.querySelectorAll('[data-repair-part]');
  const enquiryLink = repairExplorer.querySelector('#repair-selection-link');
  repairExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-repair-mode], button[data-repair-part]');
    if (!control) return;
    const { repairMode, repairPart } = control.dataset;
    const mode = repairMode || (repairExplorer.dataset.mode === 'amc' ? 'repair' : repairExplorer.dataset.mode);
    const part = repairPart || repairExplorer.dataset.part;
    repairExplorer.dataset.mode = mode;
    repairExplorer.dataset.part = part;
    modeButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.repairMode === mode)));
    partButtons.forEach(item => item.setAttribute('aria-pressed', String(mode !== 'amc' && item.dataset.repairPart === part)));
    const selection = mode === 'amc' ? supportModes.amc : repairParts[part];
    repairExplorer.querySelector('#repair-part-title').textContent = mode === 'amc' ? selection.request : selection.label;
    repairExplorer.querySelector('#repair-part-detail').textContent = mode === 'spares'
      ? 'Enquire about genuine Lenovo ' + selection.label.toLowerCase() + ' options and compatibility.'
      : selection.detail;
    enquiryLink.href = supportEnquiry(mode, mode === 'amc' ? '' : part);
    enquiryLink.textContent = mode === 'amc' ? 'Discuss annual maintenance →' : 'Enquire about this part →';
  });
}

const companyExplorer = document.querySelector('#company-explorer');
if (companyExplorer) {
  const stageButtons = companyExplorer.querySelectorAll('[data-company-stage]');
  const description = companyExplorer.querySelector('#company-stage-description');
  companyExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-company-stage]');
    if (!control) return;
    const stage = companyStages[control.dataset.companyStage];
    companyExplorer.dataset.stage = control.dataset.companyStage;
    stageButtons.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    description.querySelector('p').textContent = stage.detail;
    const action = description.querySelector('a');
    action.href = groupUrl(stage.route);
    action.firstChild.textContent = stage.action + ' ';
  });
}

const infrastructureExplorer = document.querySelector('#infrastructure-explorer');
if (infrastructureExplorer) {
  const layerButtons = infrastructureExplorer.querySelectorAll('[data-office-layer]');
  const description = infrastructureExplorer.querySelector('#office-layer-description');
  infrastructureExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-office-layer]');
    if (!control) return;
    const layer = control.dataset.officeLayer;
    infrastructureExplorer.dataset.layer = layer;
    layerButtons.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    description.textContent = officeLayers[layer].description;
  });
}

const planner = document.querySelector('#planner');
if (planner) {
  features.forEach(([id]) => {
    planner.elements[id].checked = params.getAll('option').includes(id);
    planner.elements[id].defaultChecked = planner.elements[id].checked;
  });
  const floorPlan = planner.querySelector('.planner-figure');
  let activeRoute = initialPlannerRoute;
  const updateScope = () => {
    const seats = planner.elements.seats.value;
    const url = new URLSearchParams({ page:'contact', service:'office', seats });
    const active = features.filter(([id]) => planner.elements[id].checked);
    active.forEach(([id]) => url.append('option', id));
    if (activeRoute !== 'network') url.set('view', activeRoute);
    const diagramScrollLeft = floorPlan.querySelector('.floorplan-scroll').scrollLeft;
    floorPlan.innerHTML = plannerIllustration(seats, active, activeRoute);
    floorPlan.querySelector('.floorplan-scroll').scrollLeft = diagramScrollLeft;
    document.querySelector('#scope-summary').textContent = [seats + ' seats', ...active.map(([, label]) => label)].join(' · ');
    document.querySelector('#use-scope').href = '?' + url;
  };
  const routeControls = planner.querySelectorAll('[data-planner-route]');
  routeControls.forEach(control => control.addEventListener('click', () => {
    activeRoute = control.dataset.plannerRoute;
    routeControls.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    planner.querySelector('#planner-route-detail').textContent = plannerRoutes[activeRoute].detail;
    updateScope();
  }));
  planner.addEventListener('change', updateScope);
  planner.addEventListener('reset', () => setTimeout(updateScope, 0));
  updateScope();
}

const deviceExplorer = document.querySelector('#device-explorer');
if (deviceExplorer) {
  const choices = deviceExplorer.querySelectorAll('[data-device-setup]');
  const selection = deviceExplorer.querySelector('#device-selection');
  deviceExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-device-setup]');
    if (!control) return;
    const id = control.dataset.deviceSetup;
    const setup = deviceSetups[id];
    choices.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    selection.querySelector('h2').textContent = setup.title;
    selection.querySelector('p').textContent = setup.detail;
    selection.querySelector('a').href = deviceEnquiry(id);
  });
}

const renewalExplorer = document.querySelector('#renewal-explorer');
if (renewalExplorer) {
  const choices = renewalExplorer.querySelectorAll('[data-renewal-choice]');
  const selection = renewalExplorer.querySelector('#renewal-selection');
  renewalExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-renewal-choice]');
    if (!control) return;
    const id = control.dataset.renewalChoice;
    const path = renewalPaths[id];
    renewalExplorer.dataset.renewalPath = id;
    choices.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    selection.querySelector('h2').textContent = path.title;
    selection.querySelector('p').textContent = path.detail;
    selection.querySelector('a').href = renewalEnquiry(id);
  });
}

const workloadExplorer = document.querySelector('#workload-explorer');
if (workloadExplorer) {
  const controls = workloadExplorer.querySelectorAll('[data-workload-control]');
  const info = workloadExplorer.querySelector('#workload-description');
  workloadExplorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-workload-control]');
    if (!control) return;
    const id = control.dataset.workloadControl;
    const mode = workloadModes[id];
    workloadExplorer.dataset.workloadMode = id;
    controls.forEach(item => item.setAttribute('aria-pressed', String(item === control)));
    info.querySelector('h2').textContent = mode.title;
    info.querySelector('p').textContent = mode.detail;
  });
}

const wifiExplorer = document.querySelector('[data-wifi-explorer]');
if (wifiExplorer) bindServiceIllustration(wifiExplorer, matchingDetail?.illustration);

const journey = document.querySelector('#network-journey');
if (journey) {
  const nodes = journey.querySelectorAll('[data-node]');
  const info = journey.querySelector('#network-info');
  journey.addEventListener('click', event => {
    const control = event.target.closest('button[data-node]');
    if (!control) return;
    const step = control.dataset.node;
    journey.dataset.networkStep = step;
    nodes.forEach(node => node.setAttribute('aria-pressed', String(node === control)));
    info.querySelector('h2').textContent = networkSteps[step].title;
    info.querySelector('p').textContent = networkSteps[step].detail;
  });
}

const lenovoExplorer = document.querySelector('[data-lenovo-explorer]');
if (lenovoExplorer) bindLenovoPartner(lenovoExplorer);
const microsoftExplorer = document.querySelector('[data-microsoft-explorer]');
if (microsoftExplorer) bindMicrosoftSolutions(microsoftExplorer);

const enquiryForm = document.querySelector('#enquiry');
if (enquiryForm) {
  const review = document.querySelector('#enquiry-review');
  const serviceField = enquiryForm.elements.namedItem('service');
  const teamField = enquiryForm.elements.namedItem('team');
  const incomingDetails = enquiryForm.elements.namedItem('requirements').defaultValue;
  const recovery = enquiryForm.querySelector('#recovery-fields');
  let teamChosen = false;
  function updateRecoveryFields() {
    const active = teamField.value === 'recovery';
    recovery.hidden = !active;
    recovery.disabled = !active;
  }
  teamField.addEventListener('change', () => {
    teamChosen = Boolean(teamField.value);
    updateRecoveryFields();
  });
  serviceField.addEventListener('change', () => {
    if (!teamChosen) teamField.value = suggestEnquiryTeam(serviceField.value, params);
    updateRecoveryFields();
  });
  enquiryForm.addEventListener('input', () => { review.hidden = true; });
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const selected = groups.find(g => g.id === data.get('service'));
    const team = data.get('team');
    if (!selected || !Object.hasOwn(enquiryTeams, team)) return;
    const category = enquiryTeams[team];
    const requirements = data.get('requirements');
    const serviceFromLink = params.get('service');
    const preserveDetails = incomingDetails && (!serviceFromLink || selected.id === serviceFromLink) && !requirements.includes(incomingDetails);
    const text = [
      'Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Company: ' + data.get('company'), 'Service: ' + selected.title,
      'Enquiry category: ' + category,
      ...(hasScope ? ['Office planner scope: ' + scopeText] : []),
      ...(preserveDetails ? ['Selected details: ' + incomingDetails] : []),
      ...assetRecoveryDraftLines(data),
      '', 'Requirements:', requirements
    ].join('\n');
    document.querySelector('#review-text').textContent = text;
    document.querySelector('#email-draft').href = 'mailto:' + enquiryInbox + '?subject=' + encodeURIComponent('Systech enquiry — ' + category + ' — ' + selected.title) + '&body=' + encodeURIComponent(text);
    review.hidden = false;
    review.querySelector('h2').focus();
  });
}
