import { careersPage, bindCareersPage, privacyPolicyPage, termsPage, returnPolicyPage } from './launch-pages.js?v=20261119v4t';
import { companyProfile, companyEditorial, companyReviews, resourceEditorial, bindResourcesPage } from './editorial.js?v=20261119v4t';
import { assetRecoveryWorkflow, assetRecoveryFields, assetRecoveryDraftLines } from './asset-recovery.js?v=20261119v4t';
import { enquiryTeams, suggestEnquiryTeam } from './enquiry-routing.js?v=20261119v4t';
import { whatsappUrl, ENQUIRY_ENDPOINT } from './ecosystem-data.js?v=20261119v4t';
import { partnersId, industriesId, caseStudiesId, enterpriseProofBand, partnersPage, industriesPage, bindIndustriesPage, caseStudiesPage, bindCaseStudiesPage } from './industries-partners.js?v=20261119v4t';
import { microsoftId, microsoftTitle, microsoftSolutionsPage, microsoftEnquiryRequirement, bindMicrosoftSolutions } from './microsoft-solutions.js?v=20261119v4t';
import { softwareLicensingId, softwareLicensingTitle, softwareLicensingPage, bindSoftwareLicensing, softwareLicensingRequirement } from './software-licensing.js?v=20261119v4t';
import { lenovoPartnerId, lenovoPartnerTitle, lenovoPartnerPage, bindLenovoPartner, lenovoEnquiryRequirement } from './lenovo-partner.js?v=20261119v4t';
import { serviceIllustration, bindServiceIllustration, wifiIllustration } from './service-illustration.js?v=20261119v4t';
import { securityDetails } from './security-details.js?v=20261119v4t';
import { additionalServiceDetails } from './service-details.js?v=20261119v4t';
import { groups } from './data.js?v=20261119v4t';
import { officeCutaway } from './office-cutaway.js?v=20261119v4t';
import { projectSchematic, bindProjectSchematic } from './project-schematic.js?v=20261119v4t';
import { bcSeriesMap, businessComputingCatalog, bindBusinessComputingCatalog, businessComputingDetailPage, bindBusinessComputingDetail } from './business-computing-catalog.js?v=20261119v4t';

try {
  if (localStorage.getItem('systech-theme') === 'cad') document.documentElement.dataset.theme = 'cad';
} catch {}

const runTransition = fn => {
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const vt = document.startViewTransition(fn);
    vt.ready?.catch(() => {});
    vt.finished?.catch(() => {});
    return vt;
  }
  return fn();
};

const params = new URLSearchParams(location.search);
const cleanPathnameRoutes = {
  '/solutions': 'solutions',
  '/planner': 'planner',
  '/lenovo-platinum': 'lenovo-partner',
  '/lenovo-partner': 'lenovo-partner',
  '/business-computing': 'business-computing',
  '/industries': 'industries',
  '/company': 'company',
  '/contact': 'contact',
  '/partners': 'partners',
  '/repairs': 'repairs',
  '/resources': 'resources',
  '/case-studies': 'case-studies',
  '/software-licensing': 'software-licensing',
  '/careers': 'careers',
  '/devices': 'devices',
  '/cloud': 'cloud',
  '/office': 'office',
  '/security': 'security',
  '/renewal': 'renewal',
  '/other-brands': 'other-brands'
};
const normalizedPath = location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
const page = params.get('page') || (Object.hasOwn(cleanPathnameRoutes, normalizedPath) ? cleanPathnameRoutes[normalizedPath] : 'home');
const createSystechRef = (prefix = 'SYS') => {
  const d = new Date();
  const yymmdd = String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
  const code = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${yymmdd}-${code}`;
};
const main = document.querySelector('main');
const capacities = ['25', '50', '100', '250'];
const clampSeats = value => {
  const raw = String(value ?? '').trim();
  if (!raw) return null;
  const parsed = Number(raw);
  if (!Number.isInteger(parsed)) return null;
  return String(Math.min(1000, Math.max(10, parsed)));
};
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
const requestedSeats = clampSeats(params.get('seats'));
const currentSeats = requestedSeats ?? '50';

const groupVisualMeta = {
  devices: {
    tag: 'End-User Compute',
    oems: 'Lenovo · Dell · HP · Apple',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="13" height="9" rx="1.5"/><path d="M1.5 16h16M18 7h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3"/><circle cx="19.5" cy="13.5" r=".8" fill="currentColor"/></svg>'
  },
  cloud: {
    tag: 'Data Centre & Cloud',
    oems: 'ThinkSystem · Azure · AWS · VMware',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="11" height="5" rx="1"/><rect x="3" y="10" width="11" height="5" rx="1"/><circle cx="6" cy="5.5" r=".8" fill="currentColor"/><circle cx="6" cy="12.5" r=".8" fill="currentColor"/><path d="M14 17.5a3.5 3.5 0 0 0 .5-6.96A4.5 4.5 0 0 0 6.2 9M11 17.5h7a2.5 2.5 0 0 0 .3-4.98"/></svg>'
  },
  office: {
    tag: 'Turnkey Fit-Out',
    oems: 'Cat6A & Fibre · AV · CCTV · UPS',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9.5 12 4l9 5.5v9L12 20l-9-5.5z"/><path d="M12 4v16M3 9.5l9 5.5 9-5.5"/></svg>'
  },
  security: {
    tag: 'Zero-Trust Network',
    oems: 'Cisco · Aruba · Fortinet · Sophos',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5.5c0 4.8-3.1 7.9-7 9.5-3.9-1.6-7-4.7-7-9.5V6z"/><path d="m9.2 12 2 2 3.8-4"/></svg>'
  },
  repairs: {
    tag: 'SLA Support & FRU Spares',
    oems: 'Multi-Brand AMC · Genuine Lenovo FRU',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>'
  },
  renewal: {
    tag: 'Lifecycle & ITAD',
    oems: 'RAM/SSD Refreshes · Certified E-Waste',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 10A7.5 7.5 0 0 1 18 6.8M19.5 14A7.5 7.5 0 0 1 6 17.2"/><path d="M18 3.5V7h-3.5M6 20.5V17h3.5"/></svg>'
  }
};

function groupIndex() {
  return `<div class="solution-grid">${groups.map((g, index) => {
    const meta = groupVisualMeta[g.id] || { tag: 'Enterprise IT', oems: 'Multi-OEM', icon: '' };
    return `<a class="solution-card" href="${groupUrl(g.id)}">
      <span class="solution-card-top">
        <span class="solution-icon-box" aria-hidden="true">${meta.icon}</span>
        <span class="solution-card-badges">
          <span class="solution-num" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
          <span class="solution-tag-pill">${meta.tag}</span>
        </span>
      </span>
      <span class="solution-card-body">
        <strong>${g.title}</strong>
        <span class="solution-summary">${g.summary}</span>
      </span>
      <span class="solution-card-foot">
        <span class="solution-oem-pill">${meta.oems}</span>
        <span class="solution-cta">Explore <span class="arrow" aria-hidden="true">→</span></span>
      </span>
    </a>`;
  }).join('')}</div>`;
}

function intro(title, detail) {
  return `<section class="wrap page-intro"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span><h1>${title}</h1><p>${detail}</p></section>`;
}

function finalCall() {
  return `<section class="closing reveal"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Start a conversation</p><h2>What are you setting up?</h2><p>Tell Systech what you need to equip, connect, secure or maintain across Bengaluru HQ, Chennai, Hyderabad, pan-India, Dubai or Hong Kong.</p></div><div class="closing-actions">${button('?page=contact', 'Request a BOM or quote')}<a class="button closing-ghost" href="${whatsappUrl('Hi Systech team, we would like to discuss an IT project.')}" target="_blank" rel="noopener noreferrer">WhatsApp desk</a></div></div></section>`;
}

const heroHotspots = [
  {
    id: 'workstations', num: '01', label: 'Workstations', x: 32, y: 43,
    title: 'Role-matched ThinkPad, Mac & Workstation desks',
    spec: 'Lenovo ThinkPad / ThinkStation · Apple · USB-C Docks · Dual 4K',
    href: '?page=devices', cta: 'Explore devices', plannerHref: '?page=planner&seats=50'
  },
  {
    id: 'meeting', num: '02', label: 'AV & Wi-Fi', x: 66, y: 28,
    title: 'High-density ceiling Wi-Fi 6/7 & conference room AV',
    spec: 'Aruba / Cisco APs · 4K Display & Video Bar · IP-PBX',
    href: '?page=meeting-rooms-telephony', cta: 'Explore meeting AV', plannerHref: '?page=planner&seats=50&option=meeting'
  },
  {
    id: 'cabling', num: '03', label: 'Cat6A & Fibre', x: 52, y: 63,
    title: 'Structured underfloor Cat6A drops & optical fibre trunks',
    spec: 'Fluke-certified Cat6A · OM4 Fibre · Edge NGFW Gateway',
    href: '?page=structured-cabling', cta: 'Explore cabling', plannerHref: '?page=planner&seats=50&view=network'
  },
  {
    id: 'rack', num: '04', label: 'Server Rack', x: 78, y: 42,
    title: 'Managed PoE+ switching, UTM firewall & ThinkSystem rack',
    spec: 'Lenovo ThinkSystem · Redundant UPS · Hybrid Cloud Uplinks',
    href: '?page=servers-hci', cta: 'Explore servers & security', plannerHref: '?page=planner&seats=50&option=servers&view=cloud'
  }
];

function heroReadoutHtml(spot) {
  return `<div class="hero-xray-meta"><span class="hero-xray-spec">${spot.spec}</span><strong>${spot.title}</strong></div>
    <div class="hero-xray-links"><a class="arrow-link" href="${spot.href}">${spot.cta} <span aria-hidden="true">→</span></a><a class="arrow-link hero-xray-planner" href="${spot.plannerHref}">Inspect in 3D planner <span aria-hidden="true">→</span></a></div>`;
}

/**
 * Renders the multi-layer isometric architectural office blueprint SVG for the hero stage.
 * Uses CSS custom properties for seamless Paper Mode and CAD Dark Mode contrast.
 */
function heroBlueprintSvg() {
  const ink = 'var(--cutaway-ink, #101928)';
  const blue = 'var(--cutaway-blue, #004de7)';
  const surface = 'var(--cutaway-surface, #f8fbff)';
  const wall = 'var(--cutaway-wall, #dce6f3)';
  const desk = 'var(--cutaway-desk, #eaf2fc)';
  const zone = 'var(--cutaway-zone, #f2f7fd)';
  const card = 'var(--cutaway-card, #ffffff)';
  const glass = 'var(--cutaway-glass, rgba(219, 234, 255, 0.36))';
  const line = 'var(--cutaway-line, #7c95b6)';
  const cyan = '#38bdf8';

  const pt = (x, y, z = 0) => [
    +(365 + 0.90 * x - 0.72 * y).toFixed(1),
    +(94 + 0.31 * x + 0.41 * y - z).toFixed(1)
  ];
  const pts = arr => arr.map(p => pt(p[0], p[1], p[2] ?? 0).join(',')).join(' ');
  const poly = (arr, fill = 'none', stroke = ink, w = 1, extra = '') =>
    `<polygon points="${pts(arr)}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`;
  const pline = (arr, stroke = ink, w = 1, extra = '') =>
    `<polyline points="${pts(arr)}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`;
  const box = (x, y, z, w, d, h, topFill = desk, frontFill = wall, sideFill = zone, stroke = ink, sw = 0.85) =>
    poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], frontFill, stroke, sw)
    + poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], sideFill, stroke, sw)
    + poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], topFill, stroke, sw);

  const xTicks = [[30, 'X:00'], [205, 'X:205'], [410, 'X:410'], [615, 'X:615'], [784, 'X:820']].map(([x, label]) =>
    `<line x1="${x}" y1="22" x2="${x}" y2="26" stroke="${line}" stroke-width="0.9"/><text class="hero-bp-micro" x="${x}" y="17" text-anchor="middle" font-size="9" font-weight="600" letter-spacing="0.06em" fill="${ink}" fill-opacity="0.58">${label}</text>`
  ).join('');
  const yTicks = [[38, 'Y:00'], [140, 'Y:125'], [250, 'Y:250'], [360, 'Y:375'], [464, 'Y:500']].map(([y, label]) =>
    `<line x1="20" y1="${y}" x2="24" y2="${y}" stroke="${line}" stroke-width="0.9"/><text class="hero-bp-micro" x="16" y="${y + 3}" text-anchor="end" font-size="9" font-weight="600" letter-spacing="0.05em" fill="${ink}" fill-opacity="0.55" transform="rotate(-90 16 ${y})">${label}</text>`
  ).join('');

  const pedestals = [
    ...[60, 120, 180, 240, 300, 360].map(x => pline([[x, 360, -36], [x, 360, -16]], line, 1.4)),
    ...[60, 120, 180, 240, 300].map(y => pline([[420, y, -36], [420, y, -16]], line, 1.4))
  ].join('');
  const floorGrid = [
    ...[60, 120, 180, 240, 300, 360].map(x => pline([[x, 0, 0], [x, 360, 0]], line, 0.55, 'stroke-opacity="0.28"')),
    ...[60, 120, 180, 240, 300].map(y => pline([[0, y, 0], [420, y, 0]], line, 0.55, 'stroke-opacity="0.28"'))
  ].join('');
  const windows = Array.from({ length: 6 }, (_, i) => {
    const wx = 18 + i * 64;
    return poly([[wx, 0.5, 14], [wx + 48, 0.5, 14], [wx + 48, 0.5, 44], [wx, 0.5, 44]], card, line, 0.8);
  }).join('');

  const stationCoords = [
    { x: 40, y: 74, facing: 'back' },
    { x: 104, y: 74, facing: 'back' },
    { x: 40, y: 106, facing: 'front' },
    { x: 104, y: 106, facing: 'front' },
    { x: 40, y: 192, facing: 'back' },
    { x: 104, y: 192, facing: 'back' },
    { x: 40, y: 224, facing: 'front' },
    { x: 104, y: 224, facing: 'front' },
    { x: 44, y: 292, facing: 'front', specialist: true }
  ].sort((a, b) => (0.31 * a.x + 0.41 * a.y) - (0.31 * b.x + 0.41 * b.y));

  const renderStation = ({ x, y, facing, specialist }) => {
    const isBack = facing === 'back';
    const monY = isBack ? y + 18 : y + 3;
    const dockY = isBack ? y + 13 : y + 9;
    const chairY = isBack ? y - 12 : y + 29;
    const w = specialist ? 62 : 52;
    const d = specialist ? 26 : 22;
    const [dx, dy] = pt(x + 25, dockY + 2, 17);
    return `<g>
      ${pline([[x + 5, y + d - 2, 0], [x + 5, y + d - 2, 13]], ink, 0.9)}
      ${pline([[x + w - 5, y + d - 2, 0], [x + w - 5, y + d - 2, 13]], ink, 0.9)}
      ${box(x, y, 13, w, d, 2, card, wall, desk, ink, 0.8)}
      ${box(x + 6, monY, 15, 14, 2, 9.5, desk, blue, wall, ink, 0.7)}
      ${box(x + 22, monY, 15, 14, 2, 9.5, desk, blue, wall, ink, 0.7)}
      ${pline([[x + 8, monY + 2.2, 23], [x + 18, monY + 2.2, 23]], cyan, 0.95)}
      ${pline([[x + 24, monY + 2.2, 23], [x + 34, monY + 2.2, 23]], cyan, 0.95)}
      ${box(x + 39, dockY + 1, 15, 10, 7, 1.5, wall, ink, desk, ink, 0.65)}
      ${poly([[x + 39, dockY + 1, 16.5], [x + 49, dockY + 1, 16.5], [x + 49, dockY - 3, 24], [x + 39, dockY - 3, 24]], card, blue, 0.75)}
      ${box(x + 22, dockY, 15, 8, 3.5, 2, blue, ink, blue, ink, 0.6)}
      <circle cx="${dx}" cy="${dy}" r="1.3" fill="${cyan}"/>
      ${specialist ? box(x + w + 5, y + 4, 0, 11, 18, 17, card, blue, desk, ink, 0.8) : ''}
      ${box(x + 18, chairY, 0, 12, 9, 7, desk, wall, zone, ink, 0.75)}
    </g>`;
  };

  const renderWifiAp = (wx, wy, wz) => {
    const [ax, ay] = pt(wx, wy, wz);
    return `<g>
      <circle class="hero-wifi-ring" cx="${ax}" cy="${ay}" r="13" fill="none" stroke="${cyan}" stroke-width="1.3" stroke-opacity="0.8"/>
      <circle class="hero-wifi-ring hero-wifi-ring-2" cx="${ax}" cy="${ay}" r="23" fill="none" stroke="${blue}" stroke-width="1.15" stroke-opacity="0.55"/>
      <circle class="hero-wifi-ring hero-wifi-ring-3" cx="${ax}" cy="${ay}" r="33" fill="none" stroke="${cyan}" stroke-width="1" stroke-opacity="0.35"/>
      <polygon points="${ax},${ay - 5.5} ${ax + 7},${ay} ${ax},${ay + 5.5} ${ax - 7},${ay}" fill="${card}" stroke="${blue}" stroke-width="1.3"/>
      <circle cx="${ax}" cy="${ay}" r="2.1" fill="${cyan}"/>
    </g>`;
  };

  const cat6aTrunk = [[104, 104, 0], [104, 104, -7], [214, 104, -7], [214, 298, -11], [378, 298, -11], [378, 146, -7], [378, 146, 22]];
  const podBDrop = [[104, 222, 0], [104, 222, -7], [214, 222, -7]];
  const specDrop = [[74, 304, 0], [74, 304, -9], [214, 304, -11]];
  const meetingDrop = [[262, 134, 0], [262, 152, -7], [214, 152, -7]];
  const fiberTrunk = [[402, 336, -12], [336, 336, -12], [316, 306, -4], [386, 306, -11], [386, 146, -8], [386, 146, 28]];
  const cat6aPulse = [[104, 222, -7], [214, 222, -7], [214, 298, -11], [378, 298, -11], [378, 146, -7], [378, 146, 22]];
  const [rackTopX, rackTopY] = pt(391, 127, 72);
  const [ngfwLabelX, ngfwLabelY] = pt(334, 358, -14);
  const [workLabelX, workLabelY] = pt(46, 338, 2);
  const [rackLabelX, rackLabelY] = pt(412, 118, 76);

  const rackSlots = Array.from({ length: 8 }, (_, idx) => {
    const rz = 6 + idx * 7.6;
    const isSwitch = idx >= 6;
    return poly([[377, 146.4, rz], [405, 146.4, rz], [405, 146.4, rz + 4.8], [377, 146.4, rz + 4.8]], isSwitch ? blue : '#1e3a63', line, 0.45)
      + `<circle cx="${pt(380, 146.5, rz + 2.4)[0]}" cy="${pt(380, 146.5, rz + 2.4)[1]}" r="1.2" fill="${isSwitch ? cyan : '#60a5fa'}"/>`;
  }).join('');

  return `<svg class="hero-blueprint-svg" viewBox="0 0 820 500" role="img" aria-label="Interactive isometric office IT blueprint showing workstations, AV and Wi-Fi meeting room, underfloor Cat6A and fibre cabling, and 42U server rack">
    <defs>
      <pattern id="hero-bp-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${ink}" stroke-opacity="0.065" stroke-width="0.7"/>
      </pattern>
      <linearGradient id="hero-bp-slab" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${surface}"/>
        <stop offset="100%" stop-color="${desk}"/>
      </linearGradient>
    </defs>

    <g class="hero-bp-frame">
      <rect x="24" y="26" width="772" height="448" rx="6" fill="url(#hero-bp-grid)" stroke="${line}" stroke-opacity="0.34" stroke-width="0.85"/>
      <path d="M24 38 V26 H36 M784 26 H796 V38 M24 462 V474 H36 M784 474 H796 V462" fill="none" stroke="${blue}" stroke-width="1.4" stroke-opacity="0.65"/>
      ${xTicks}
      ${yTicks}
      <text class="hero-bp-micro" x="36" y="45" font-size="9.5" font-weight="700" letter-spacing="0.08em" fill="${ink}" fill-opacity="0.72">BLR-INFRA · ISOMETRIC CUTAWAY · SCALE 1:80</text>
      <text class="hero-bp-micro" x="36" y="463" font-size="9" font-weight="600" letter-spacing="0.06em" fill="${ink}" fill-opacity="0.62">EL +0.00M RAISED ACCESS FLOOR · -0.45M CAT6A / OM4 PLENUM</text>
    </g>

    <g class="hero-bp-structure">
      ${box(0, 0, -42, 420, 360, 6, wall, line, wall, ink, 0.8)}
      ${pedestals}
      ${box(0, 0, -16, 420, 360, 16, 'url(#hero-bp-slab)', wall, zone, ink, 1)}
      ${floorGrid}
      ${poly([[248, 274, -12], [404, 274, -12], [404, 352, -12], [248, 352, -12]], zone, blue, 1)}
      ${poly([[248, 274, -12], [404, 274, -12], [404, 274, 0], [248, 274, 0]], wall, ink, 0.75)}
      ${poly([[248, 274, -12], [248, 352, -12], [248, 352, 0], [248, 274, 0]], desk, ink, 0.75)}
      ${pline([[248, 352, 0], [248, 274, 0], [404, 274, 0], [404, 352, 0], [248, 352, 0]], blue, 1.25)}
      ${poly([[0, 0, 0], [420, 0, 0], [420, 0, 52], [0, 0, 52]], wall, ink, 0.9)}
      ${windows}
      ${poly([[0, 0, 0], [0, 108, 0], [0, 108, 52], [0, 0, 52]], zone, ink, 0.9)}
      ${poly([[20, 52, 0.2], [192, 52, 0.2], [192, 340, 0.2], [20, 340, 0.2]], zone, line, 0.65, 'fill-opacity="0.45"')}
      ${poly([[198, 16, 0.2], [234, 16, 0.2], [234, 344, 0.2], [198, 344, 0.2]], desk, line, 0.5, 'fill-opacity="0.5" stroke-dasharray="4 3"')}
    </g>

    <g class="hero-svg-layer" data-hero-layer="cabling">
      ${[266, 290, 314, 338, 362, 386].map(tx => pline([[tx, 286, -12], [tx, 342, -12]], line, 0.7, 'stroke-opacity="0.55"')).join('')}
      ${pline(podBDrop, blue, 1.8)}
      ${pline(specDrop, blue, 1.8)}
      ${pline(meetingDrop, blue, 1.8)}
      ${pline(cat6aTrunk, blue, 2.2)}
      ${pline(fiberTrunk, cyan, 2.1)}
      <polyline class="hero-svg-fiber-pulse" points="${pts(cat6aPulse)}" fill="none" stroke="${cyan}" stroke-width="2" stroke-dasharray="6 10" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline class="hero-svg-fiber-pulse hero-svg-fiber-pulse-alt" points="${pts(fiberTrunk)}" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="6 18" stroke-linecap="round" stroke-linejoin="round"/>
      ${box(296, 290, -12, 40, 30, 14, card, blue, wall, ink, 0.95)}
      ${pline([[302, 320.2, -5], [330, 320.2, -5]], cyan, 1.4)}
      <text class="hero-svg-label" x="${ngfwLabelX + 12}" y="${ngfwLabelY + 30}" font-size="9" letter-spacing="0.05em">CAT6A · OM4 · NGFW</text>
    </g>

    <g class="hero-svg-layer" data-hero-layer="workstations">
      ${box(40, 100, 14, 116, 3, 9, wall, line, wall, ink, 0.65)}
      ${box(40, 218, 14, 116, 3, 9, wall, line, wall, ink, 0.65)}
      ${stationCoords.map(renderStation).join('')}
      <text class="hero-svg-label" x="${workLabelX - 28}" y="${workLabelY + 18}" font-size="9" letter-spacing="0.05em">THINKPAD · DUAL 4K</text>
    </g>

    <g class="hero-svg-layer" data-hero-layer="meeting">
      ${poly([[198, 16, 0.3], [328, 16, 0.3], [328, 134, 0.3], [198, 134, 0.3]], desk, line, 0.8)}
      ${poly([[234, 16.5, 20], [292, 16.5, 20], [292, 16.5, 40], [234, 16.5, 40]], '#162945', ink, 0.9)}
      ${pline([[240, 16.8, 30], [286, 16.8, 30]], cyan, 1.2)}
      ${box(248, 16.5, 16, 30, 3, 3, ink, blue, ink, ink, 0.6)}
      ${[236, 260, 284].map(cx => box(cx, 41, 0, 11, 9, 7.5, card, wall, zone, ink, 0.7)).join('')}
      ${box(212, 68, 0, 9, 12, 7.5, card, wall, zone, ink, 0.7)}
      ${box(226, 54, 12, 72, 38, 3, desk, wall, zone, ink, 0.85)}
      ${box(256, 68, 15, 12, 10, 2, '#162945', blue, ink, ink, 0.65)}
      ${box(302, 68, 0, 9, 12, 7.5, card, wall, zone, ink, 0.7)}
      ${[236, 260, 284].map(cx => box(cx, 99, 0, 11, 9, 7.5, card, wall, zone, ink, 0.7)).join('')}
      ${poly([[196, 16, 0], [196, 134, 0], [196, 134, 48], [196, 16, 48]], glass, line, 0.9)}
      ${poly([[328, 16, 0], [328, 134, 0], [328, 134, 48], [328, 16, 48]], glass, line, 0.9)}
      ${poly([[196, 134, 0], [328, 134, 0], [328, 134, 46], [196, 134, 46]], glass, line, 0.95)}
      ${pline([[262, 134, 0], [262, 134, 46]], line, 0.8)}
      ${pline([[206, 24, 54], [318, 24, 54], [318, 124, 54], [206, 124, 54], [206, 24, 54]], line, 0.75, 'stroke-dasharray="3 3"')}
      ${renderWifiAp(262, 72, 56)}
      ${renderWifiAp(122, 165, 56)}
    </g>

    <g class="hero-svg-layer" data-hero-layer="rack">
      ${poly([[342, 86, 0.3], [414, 86, 0.3], [414, 228, 0.3], [342, 228, 0.3]], desk, blue, 0.8, 'fill-opacity="0.7"')}
      ${poly([[342, 86, 0], [342, 228, 0], [342, 228, 48], [342, 86, 48]], glass, line, 0.85)}
      ${box(374, 108, 0, 34, 38, 72, card, '#101d32', wall, ink, 1.05)}
      ${rackSlots}
      ${pline([[406.5, 146.5, 4], [406.5, 146.5, 68]], '#e2231a', 1.8)}
      ${box(356, 168, 0, 30, 34, 38, desk, wall, zone, ink, 0.9)}
      ${pline([[361, 202.2, 26], [381, 202.2, 26]], cyan, 1.5)}
      ${pline([[370, 168, 22], [370, 152, 22], [384, 152, 22], [384, 146, 22]], blue, 1.8)}
      ${pline([[375, 168, 14], [375, 156, 14], [392, 156, 14], [392, 146, 14]], cyan, 1.6)}
      <path class="svg-draw-stroke" pathLength="420" d="M ${rackTopX} ${rackTopY} C ${rackTopX + 2} 128, 654 90, 688 78" fill="none" stroke="${blue}" stroke-width="2.2" stroke-linecap="round"/>
      <path class="svg-draw-stroke svg-draw-stroke-delay" pathLength="420" d="M ${rackTopX + 8} ${rackTopY + 4} C ${rackTopX + 10} 138, 666 100, 700 84" fill="none" stroke="${cyan}" stroke-width="1.8" stroke-linecap="round"/>
      <g class="hero-cloud-cluster">
        <path d="M754 90h-50c-10 0-18-7-18-16 0-8.5 6.8-15.5 15.5-16.5 4.2-11 14.8-18.5 27-18.5 14 0 26 9 29.5 22 9.5 1 16.5 7.5 16.5 15.5 0 8-8 13.5-20.5 13.5z" fill="${card}" stroke="${blue}" stroke-width="1.5"/>
        <circle cx="702" cy="74" r="2.6" fill="${cyan}"/>
        <text x="731" y="70" text-anchor="middle" font-size="8.5" font-weight="700" letter-spacing="0.06em" fill="${ink}">HYBRID CLOUD</text>
        <text x="731" y="81" text-anchor="middle" font-size="7.5" font-weight="600" letter-spacing="0.04em" fill="${blue}">M365 · AZURE · AWS</text>
      </g>
      <text class="hero-svg-label" x="${rackLabelX - 4}" y="${rackLabelY - 6}" font-size="8.5" letter-spacing="0.05em">42U THINKSYSTEM</text>
    </g>
  </svg>`;
}

const heritageEras = [
  {
    year: '1998',
    tag: 'Foundation · 18 Sep 1998',
    heading: 'Founded in Bengaluru as a PC & Systems Integrator',
    narrative: 'Incorporated on 18 September 1998 in Bengaluru, supplying, configuring and servicing commercial desktops, workstations and peripherals for growing Karnataka enterprises.',
    kpi: 'Year 01 · Bengaluru Roots · Commercial Compute & Servicing'
  },
  {
    year: '2003',
    tag: 'Infrastructure Expansion',
    heading: 'Added Structured Cabling & Annual Maintenance Contracts',
    narrative: 'Expanded beyond standalone hardware into structured LAN cabling, switching racks and scheduled preventive AMC engagements for multi-floor offices.',
    kpi: 'Structured Copper & Fibre · Preventive SLA AMC Practice'
  },
  {
    year: '2006',
    tag: 'OEM Milestone',
    heading: 'Appointed Lenovo SME Partner for Karnataka',
    narrative: 'Formalised commercial partnership with Lenovo across ThinkPad and ThinkCentre fleets, establishing dedicated enterprise account engineering.',
    kpi: '20-Year Lenovo Alliance Begins · Karnataka Commercial Tier'
  },
  {
    year: '2008',
    tag: 'Data Centre & Licensing',
    heading: 'IBM Business Partner & Microsoft Enterprise Licensing',
    narrative: 'Became an IBM Business Partner & Workstation Solution Partner while adding Microsoft commercial software licensing and server architecture sizing.',
    kpi: 'IBM Servers & Storage · Microsoft Enterprise Licensing'
  },
  {
    year: '2010',
    tag: 'Regional Recognition',
    heading: 'Elevated to Lenovo Premium Business Partner',
    narrative: 'Earned Lenovo Premium Business Partner status across Bengaluru and Karnataka, scaling multi-site laptop, workstation and server deployments.',
    kpi: 'Lenovo Premium Tier · Multi-Site Commercial Rollouts'
  },
  {
    year: '2014',
    tag: 'Flagship Tier',
    heading: 'Achieved Lenovo Platinum Partner Status',
    narrative: 'Honoured as a Platinum Lenovo Business Partner backed by dedicated Bengaluru pre-sales engineering and MTM-verified genuine FRU spares inventory.',
    kpi: 'Platinum Tier · Genuine Lenovo FRU Spares Stocking'
  },
  {
    year: '2018',
    tag: 'Strategic Consolidation',
    heading: 'Expanded Managed Services & IT Consulting via Mergers',
    narrative: 'Deepened managed infrastructure operations, enterprise security governance and technical consulting capabilities through strategic mergers.',
    kpi: 'Managed Infrastructure · Multi-OEM Consulting Practice'
  },
  {
    year: '2024',
    tag: 'Pan-India Full Stack',
    heading: 'Six Integrated Practices Delivering Nationwide',
    narrative: 'Unified Business Computing, Office Infrastructure, Hybrid Cloud, Enterprise AV, Zero-Trust Security and compliant ITAD & E-Waste recovery across India.',
    kpi: '20+ OEM Alliances · ISO 9001:2015 QMS · Pan-India Hubs'
  },
  {
    year: '2026',
    tag: '28th Anniversary · Present Day',
    heading: 'Enterprise Systems Integrator at Pan-India & Global Scale',
    narrative: 'Marking 28 years of dependable IT integration from Bengaluru HQ with regional hubs in Chennai and Hyderabad and international coordination in Dubai and Hong Kong.',
    kpi: '28th Anniversary · Lenovo 360 Platinum 2026 · Bengaluru HQ · ₹500CR+ · 2,000+ Clients'
  }
];

/**
 * Renders the interactive 1998-2026 heritage timeline scrubber section.
 * @param {boolean} wrapped - Include .wrap container class when mounted at page root level.
 */
function heritageScrubber(wrapped = true) {
  const initialIndex = heritageEras.length - 1;
  const initial = heritageEras[initialIndex];
  const progressPct = ((initialIndex + 1) / heritageEras.length * 100).toFixed(2);
  return `<section class="${wrapped ? 'wrap ' : ''}heritage-scrubber drafting-frame reveal" data-heritage-scrubber data-active-year="${initial.year}" aria-labelledby="heritage-scrubber-heading">
    <header class="heritage-head">
      <div>
        <p class="eyebrow">1998–2026 · 28-Year Heritage Timeline</p>
        <h2 id="heritage-scrubber-heading">Twenty-eight years of engineering delivery.</h2>
      </div>
      <span class="coord-marker">COORD: 12.9226° N, 77.5491° E</span>
    </header>
    <div class="heritage-stage" aria-live="polite">
      <div class="heritage-year-display" data-heritage-year>${initial.year}</div>
      <div class="heritage-meta">
        <span class="heritage-kpi-pill" data-heritage-kpi>${initial.kpi}</span>
        <h3 data-heritage-heading>${initial.heading}</h3>
        <p data-heritage-narrative>${initial.narrative}</p>
      </div>
    </div>
    <div class="heritage-progress-bar" aria-hidden="true">
      <span class="heritage-progress-fill" data-heritage-progress style="width:${progressPct}%"></span>
    </div>
    <div class="heritage-controls">
      <button type="button" class="heritage-nav-btn" data-heritage-prev aria-label="Previous milestone year"><span aria-hidden="true">←</span> Prev</button>
      <div class="heritage-rail">${heritageEras.map(era => `<button type="button" class="heritage-year-btn" data-heritage-select="${era.year}" aria-pressed="${era.year === initial.year}">${era.year}</button>`).join('')}</div>
      <button type="button" class="heritage-nav-btn" data-heritage-next aria-label="Next milestone year" disabled>Next <span aria-hidden="true">→</span></button>
    </div>
  </section>`;
}

/**
 * Binds click and keyboard arrow navigation to an interactive heritage scrubber instance.
 * @param {HTMLElement} root - Container matching [data-heritage-scrubber].
 */
function bindHeritageScrubber(root) {
  if (!root) return;
  const yearDisplay = root.querySelector('[data-heritage-year]');
  const headingEl = root.querySelector('[data-heritage-heading]');
  const narrativeEl = root.querySelector('[data-heritage-narrative]');
  const kpiEl = root.querySelector('[data-heritage-kpi]');
  const progressEl = root.querySelector('[data-heritage-progress]');
  const prevBtn = root.querySelector('[data-heritage-prev]');
  const nextBtn = root.querySelector('[data-heritage-next]');
  const yearBtns = [...root.querySelectorAll('[data-heritage-select]')];

  let activeIndex = heritageEras.findIndex(e => e.year === root.dataset.activeYear);
  if (activeIndex < 0) activeIndex = heritageEras.length - 1;

  const setEra = (index, { focusBtn = false } = {}) => {
    const nextIndex = Math.min(heritageEras.length - 1, Math.max(0, index));
    if (nextIndex === activeIndex && root.dataset.activeYear === heritageEras[nextIndex].year) return;
    activeIndex = nextIndex;
    const era = heritageEras[nextIndex];
    const pct = ((nextIndex + 1) / heritageEras.length * 100).toFixed(2) + '%';
    root.dataset.activeYear = era.year;
    if (yearDisplay) yearDisplay.textContent = era.year;
    if (headingEl) headingEl.textContent = era.heading;
    if (narrativeEl) narrativeEl.textContent = era.narrative;
    if (kpiEl) kpiEl.textContent = era.kpi;
    if (progressEl) progressEl.style.width = pct;
    root.style.setProperty('--heritage-progress', pct);
    yearBtns.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.heritageSelect === era.year)));
    if (prevBtn) prevBtn.disabled = nextIndex === 0;
    if (nextBtn) nextBtn.disabled = nextIndex === heritageEras.length - 1;
    if (focusBtn) yearBtns[nextIndex]?.focus();
  };

  root.addEventListener('click', event => {
    const yearBtn = event.target.closest('[data-heritage-select]');
    if (yearBtn) {
      const idx = heritageEras.findIndex(e => e.year === yearBtn.dataset.heritageSelect);
      if (idx >= 0) setEra(idx);
      return;
    }
    if (event.target.closest('[data-heritage-prev]')) setEra(activeIndex - 1);
    else if (event.target.closest('[data-heritage-next]')) setEra(activeIndex + 1);
  });

  root.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const onYearBtn = event.target.matches('[data-heritage-select]');
    if (event.key === 'ArrowLeft') setEra(activeIndex - 1, { focusBtn: onYearBtn });
    else if (event.key === 'ArrowRight') setEra(activeIndex + 1, { focusBtn: onYearBtn });
    else if (event.key === 'Home') setEra(0, { focusBtn: onYearBtn });
    else if (event.key === 'End') setEra(heritageEras.length - 1, { focusBtn: onYearBtn });
  });
}

const buyerRoles = [
  {
    num: '01',
    audience: 'IT Heads & GCC Directors',
    title: 'New floor, server room or hybrid cloud rollout?',
    summary: 'Scope 25–100+ seats, Fluke-certified Cat6A cabling, Wi-Fi 6/7, ThinkSystem racks and cloud migration in one interactive blueprint.',
    pills: ['3D Floor Planner', 'Server & HCI', 'Turnkey Fit-Out'],
    ctaHref: '?page=planner',
    ctaLabel: 'Open 3D office planner',
    secondaryHref: '?page=industries',
    secondaryLabel: 'Industry playbooks',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9.5 12 4l9 5.5v9L12 20l-9-5.5z"/><path d="M12 4v16M3 9.5l9 5.5 9-5.5"/></svg>'
  },
  {
    num: '02',
    audience: 'Procurement & Sourcing Teams',
    title: 'Bulk commercial laptops, workstations or software?',
    summary: 'Standardise on Lenovo ThinkPad/ThinkStation, Dell, HP or Apple and align Microsoft 365, Azure, Adobe & firewall renewals on one invoice.',
    pills: ['Lenovo Platinum', 'Co-Term Licensing', 'Single-Invoice BOM'],
    ctaHref: lenovoPartnership,
    ctaLabel: 'Explore Lenovo Platinum hub',
    secondaryHref: '?page=software-licensing',
    secondaryLabel: 'License configurator',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>'
  },
  {
    num: '03',
    audience: 'Admin, Facilities & IT Ops',
    title: 'Multi-brand AMC, genuine spares or CCTV & access?',
    summary: 'Keep sites running with SLA-backed repairs, MTM-verified Lenovo FRU spares, biometric/CCTV coverage and compliant e-waste recovery.',
    pills: ['Genuine FRU Lookup', 'Preventive AMC', 'CCTV & Access'],
    ctaHref: '?page=repairs',
    ctaLabel: 'Repairs, AMC & spares',
    secondaryHref: lenovoPartnership + '#spares-finder',
    secondaryLabel: 'FRU spares lookup',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5.5c0 4.8-3.1 7.9-7 9.5-3.9-1.6-7-4.7-7-9.5V6z"/><path d="m9.2 12 2 2 3.8-4"/></svg>'
  }
];

function buyerRoleStrip() {
  return `<section class="buyer-roles-section wrap reveal" aria-labelledby="buyer-roles-heading">
    <div class="buyer-roles-head">
      <div><p class="eyebrow">Built for How You Buy</p><h2 id="buyer-roles-heading">Start from your role.</h2></div>
      <p class="buyer-roles-note">Every Systech practice connects hardware procurement, engineering fit-out and ongoing support under one SLA.</p>
    </div>
    <div class="buyer-roles-grid">
      ${buyerRoles.map(role => `<article class="buyer-role-card">
        <div class="buyer-role-top">
          <span class="buyer-role-badge">${role.num} · ${role.audience}</span>
          <span class="buyer-role-icon" aria-hidden="true">${role.icon}</span>
        </div>
        <h3>${role.title}</h3>
        <p>${role.summary}</p>
        <ul class="buyer-role-pills">${role.pills.map(pill => `<li>${pill}</li>`).join('')}</ul>
        <div class="buyer-role-actions">
          <a class="arrow-link buyer-role-primary" href="${role.ctaHref}">${role.ctaLabel} <span aria-hidden="true">→</span></a>
          <a class="arrow-link buyer-role-secondary" href="${role.secondaryHref}">${role.secondaryLabel} <span aria-hidden="true">→</span></a>
        </div>
      </article>`).join('')}
    </div>
  </section>`;
}

function home() {
  return `
  <section class="wrap hero">
    <div class="hero-copy">
      <p class="hero-kicker"><span class="live-dot" aria-hidden="true"></span>Bengaluru HQ · Est. 1998 (28th Anniversary) · ISO 9001:2015</p>
      <h1>IT infrastructure,<br class="hero-break"> from desk to<br class="hero-break"> data centre.</h1>
      <p class="hero-lead">Equip your team, connect your office and keep your enterprise systems running with India’s ₹500CR+ multi-OEM partner.</p>
      <div class="actions hero-actions">
        ${button('?page=contact', 'Request a BOM or quote')}
        <a class="button outline" href="?page=planner">Open 3D office planner</a>
        ${link('?page=solutions', 'Explore solutions')}
      </div>
    </div>
    <div class="hero-art">
      <div class="hero-stage" id="hero-xray-stage" data-active-spot="workstations">
        <div class="hero-stage-bar"><span class="hero-stage-title">Blueprint 01 · Interactive X-Ray Cutaway</span><span>Select any node (01–04)</span></div>
        <div class="hero-stage-body">
          <div class="hero-illustration">
            ${heroBlueprintSvg()}
            ${heroHotspots.map(spot => `<button type="button" class="hero-hotspot" data-hero-spot="${spot.id}" style="--x:${spot.x}%;--y:${spot.y}%" aria-pressed="${spot.id === 'workstations'}" aria-controls="hero-xray-readout" aria-label="${spot.num}: ${spot.label}"><span class="hero-hotspot-num" aria-hidden="true">${spot.num}</span><span class="hero-hotspot-tip" aria-hidden="true">${spot.label}</span></button>`).join('')}
          </div>
        </div>
        <div class="hero-spot-pills" role="group" aria-label="Blueprint subsystems">
          ${heroHotspots.map(spot => `<button type="button" class="hero-spot-pill" data-hero-spot="${spot.id}" aria-pressed="${spot.id === 'workstations'}" aria-controls="hero-xray-readout"><span aria-hidden="true">${spot.num}</span> ${spot.label}</button>`).join('')}
        </div>
        <div class="hero-xray-readout" id="hero-xray-readout" aria-live="polite">
          ${heroReadoutHtml(heroHotspots[0])}
        </div>
      </div>
    </div>
    <div class="hero-trust-bar" aria-label="Enterprise scale and official credentials">
      <dl class="hero-stat-list">
        <div class="hero-stat-item"><dt>₹500CR+</dt><dd><strong>Enterprise Scale</strong><span>Multi-OEM delivery</span></dd></div>
        <div class="hero-stat-item"><dt>28+ Yrs</dt><dd><strong>Est. 1998</strong><span>Bengaluru HQ</span></dd></div>
        <div class="hero-stat-item"><dt>2,000+</dt><dd><strong>Active Clients</strong><span>GCCs, BFSI &amp; plants</span></dd></div>
        <div class="hero-stat-item"><dt>20+ OEMs</dt><dd><strong>Tier-1 Alliances</strong><span>Single-BOM sourcing</span></dd></div>
      </dl>
      <div class="hero-seal-group">
        <a class="hero-seal hero-seal-lenovo" href="${lenovoPartnership}">
          <span class="hero-seal-badge" aria-hidden="true">360</span>
          <span class="hero-seal-copy"><strong>Lenovo 360 Platinum</strong><small>Highest Tier · Compute, Server &amp; FRU</small></span>
        </a>
        <a class="hero-seal hero-seal-iso" href="?page=company#trust-standards">
          <span class="hero-seal-badge" aria-hidden="true">ISO</span>
          <span class="hero-seal-copy"><strong>ISO 9001:2015 Certified</strong><small>Audited Quality &amp; SLA Governance</small></span>
        </a>
      </div>
    </div>
  </section>
  ${buyerRoleStrip()}
  <section id="solutions" class="wrap ruled solutions-section reveal">
    <div class="section-head"><p class="eyebrow">Capabilities</p><h2>Explore solutions</h2></div>${groupIndex()}
  </section>
  <section class="project-section reveal">
    <div class="wrap project-row">
      <div><p class="eyebrow">Office planner</p><h2>See how the office fits together.</h2><p>Start with a team size. Add meeting rooms, physical security and server requirements, see live port &amp; AP baselines, then carry the scope straight into your enquiry.</p>${button('?page=planner', 'Plan an office setup')}</div>
      ${projectSchematic()}
    </div>
  </section>
  <section class="wrap lifecycle reveal">
    <div><p class="eyebrow">Lifecycle support</p><h2>Keep your IT working.</h2><p>Maintain the equipment you rely on with genuine Lenovo spares, extend fleet longevity or schedule compliant ITAD &amp; recycling.</p></div>
    <div class="stack-links">
      <a class="arrow-link stack-item" href="?page=repairs"><span class="stack-num" aria-hidden="true">01</span><span class="stack-copy"><strong>Repairs, AMC &amp; Genuine Lenovo Spares</strong><span>Diagnosis, preventive contracts &amp; FRU replacement verification</span></span><span class="arrow" aria-hidden="true">→</span></a>
      <a class="arrow-link stack-item" href="?page=renewal"><span class="stack-num" aria-hidden="true">02</span><span class="stack-copy"><strong>Device Renewal &amp; E-Waste</strong><span>Hardware upgrades &amp; compliant end-of-life asset recovery</span></span><span class="arrow" aria-hidden="true">→</span></a>
      <a class="arrow-link stack-item" href="?page=network"><span class="stack-num" aria-hidden="true">03</span><span class="stack-copy"><strong>Explore a secure network</strong><span>Wi-Fi, firewalls, traffic rules &amp; endpoint XDR telemetry</span></span><span class="arrow" aria-hidden="true">→</span></a>
    </div>
  </section>
  ${heritageScrubber()}
  ${enterpriseProofBand()}
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
            return `<button type="button" class="directory-point" style="--x:${x}%;--y:${y}%" data-pick="${g.id}" aria-label="${g.title} on the workplace map" aria-pressed="${g.id === 'office'}" aria-controls="directory-${g.id}"><span aria-hidden="true">${serviceNumber(index)}</span><span class="point-tooltip" aria-hidden="true">${g.title}</span></button>`;
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
  return intro(g.title, g.intro) + `<section class="wrap service-layout section"><div class="offer-list"><h2>What Systech offers</h2>${g.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div><aside><h2>Discuss your requirements</h2><p>Tell us about the equipment, site or project you need help with.</p>${button(contact(g.id), 'Request a BOM or quote')}${next ? link(...next) : ''}</aside></section><section class="wrap ruled section"><h2>More solutions</h2>${groupIndex()}</section>`;
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
          <div class="infrastructure-actions">${button(contact('office'), 'Book a site survey')}${link('?page=planner', 'Plan an office setup')}</div>
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
  display: { label: 'Display', detail: 'Panel diagnostics, hinge alignment and OEM-matched LCD/OLED replacement for ThinkPad, ThinkBook and multi-brand fleets.', x: 77, y: 20 },
  keyboard: { label: 'Keyboard', detail: 'Regional-layout genuine keyboard and palmrest assembly replacement tested for ThinkPad TrackPoint and backlit builds.', x: 86, y: 45 },
  ssd: { label: 'SSD', detail: 'NVMe health diagnostics, data-safe cloning and enterprise DDR4/DDR5 RAM & SSD upgrades.', x: 16, y: 69 },
  battery: { label: 'Battery', detail: 'Cycle-health verification and factory-spec genuine battery replacement with OEM serial traceability.', x: 79, y: 79 }
};
const supportModes = {
  repair: { label: 'Repairs', request: 'Repair and diagnosis' },
  amc: { label: 'AMC', request: 'Annual maintenance contract', detail: 'Preventive care, scheduled inspections and SLA-backed support across laptops, desktops, servers and cabling.' },
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
          ${button(contact('repairs'), 'Schedule repair or SLA')}
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
        <a class="arrow-link" id="repair-selection-link" href="${supportEnquiry('repair', 'battery')}">Verify part compatibility <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <section class="repair-partnership" aria-labelledby="repair-partnership-title">
      <div><h2 id="repair-partnership-title">Lenovo Platinum Partner</h2><p>Genuine Lenovo FRU spares checked by MTM &amp; model</p>${link(lenovoPartnership + '#spares-finder', 'Open Lenovo spares finder')}</div>
      ${button(supportEnquiry('spares'), 'Verify genuine Lenovo spares →')}
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
const featureToRoute = { meeting: 'network', cctv: 'security', access: 'security', servers: 'cloud' };
const requestedRoute = params.get('view');
const initialPlannerRoute = Object.hasOwn(plannerRoutes, requestedRoute) ? requestedRoute : 'network';

function estimateOfficeScope(seatsValue, activeFeatures) {
  const n = Math.min(1000, Math.max(10, Math.round(Number(seatsValue) || 50)));
  const floors = Math.max(1, Math.ceil(n / 25));
  const activeSet = new Set(activeFeatures.map(([id]) => id));
  const drops = n + floors * 6 + (activeSet.has('meeting') ? floors * 2 : 0) + (activeSet.has('cctv') ? floors : 0);
  const aps = floors * 2;
  const switches = `${floors}× 48-port PoE+${floors > 1 ? ' + fibre uplink' : ''}`;
  const items = [
    ['Layout', `${n} desks · ${floors} ${floors === 1 ? 'floor' : 'floors'}`],
    ['Est. Cat6A drops', `~${drops} drops (desks, APs & uplink)`],
    ['Switching & Wi-Fi', `${switches} · ~${aps} ceiling APs`],
    ['Backup & power', activeSet.has('servers') ? 'Online UPS for rack + core switch' : 'Rack UPS for switching & firewall']
  ];
  if (activeSet.has('meeting')) items.push(['Meeting rooms', `${floors} conference AV room${floors > 1 ? 's' : ''} (display, mic & VC)`]);
  if (activeSet.has('cctv')) items.push(['CCTV surveillance', `${floors * 2}–${floors * 4} IP cameras + PoE NVR`]);
  if (activeSet.has('access')) items.push(['Door access', `${floors === 1 ? '1–2' : floors + '–' + (floors * 2)} biometric door reader${floors > 1 ? 's' : ''} + controller`]);
  if (activeSet.has('servers')) items.push(['On-prem compute', 'Server rack + ThinkSystem / shared SAN storage']);
  return items;
}

function estimateEngineeringGauges(seatsValue, activeFeatures) {
  const n = Math.min(1000, Math.max(10, Math.round(Number(seatsValue) || 50)));
  const floors = Math.max(1, Math.ceil(n / 25));
  const activeSet = new Set(activeFeatures.map(([id]) => id));
  const hasServers = activeSet.has('servers');
  const hasCctv = activeSet.has('cctv');
  const hasAccess = activeSet.has('access');
  const hasMeeting = activeSet.has('meeting');

  const rackU = 6 + floors * 3 + (hasServers ? 8 : 0) + (hasCctv ? 2 : 0) + (hasAccess ? 2 : 0);
  const cabinetLabel = rackU <= 12 ? '12U rack' : rackU <= 24 ? '24U rack' : rackU <= 42 ? '42U rack' : 'Up to 42U Dual-Rack';
  const rackFill = Math.min(95, Math.max(28, Math.round((rackU / 42) * 100)));

  const kva = (
    1.0 +
    floors * 0.5 +
    (hasServers ? 2.5 : 0) +
    (hasCctv ? 0.5 : 0) +
    (hasMeeting ? 0.5 : 0)
  ).toFixed(1).replace(/\.0$/, '');
  const upsFill = Math.min(95, Math.max(30, Math.round((Number(kva) / 7.5) * 100)));

  const days = 4 + floors * 2 + (hasMeeting ? 2 : 0) + (hasCctv ? 1 : 0) + (hasAccess ? 1 : 0) + (hasServers ? 3 : 0);
  const daysFill = Math.min(95, Math.max(35, Math.round((days / 22) * 100)));

  return [
    { label: 'Rack Footprint', value: `${rackU}U (${cabinetLabel})`, fillPct: `${rackFill}%` },
    { label: 'UPS & PoE Load', value: `${kva} kVA Online UPS`, fillPct: `${upsFill}%` },
    { label: 'Turnkey Fit-Out', value: `${days} working days`, fillPct: `${daysFill}%` }
  ];
}

function plannerIllustration(seats, activeFeatures, route = initialPlannerRoute) {
  const n = Math.min(1000, Math.max(10, Math.round(Number(seats) || 50)));
  const floors = Math.max(1, Math.ceil(n / 25));
  const svgSeats = Math.min(100, Math.max(25, Math.ceil(n / 25) * 25));
  const modelNote = n > 100
    ? `${n} seats · ${floors} ${floors === 1 ? 'floor' : 'floors'} (multi-floor model)`
    : `${n} desks · ${floors} ${floors === 1 ? 'floor' : 'floors'}`;
  const active = new Set(activeFeatures.map(([id]) => id));
  const description = ['Office cutaway with ' + modelNote, ...activeFeatures.map(([, label]) => label)].join('. ');
  return `
    <div class="office-floorplan" data-seat-count="${n}" data-cutaway-route="${route}" role="img" aria-label="${description}">
      <div class="floorplan-heading"><span>Office cutaway</span><strong>${modelNote}</strong></div>
      <p class="floorplan-scroll-hint" aria-hidden="true">← Swipe diagram to view IT room →</p>
      <div class="floorplan-scroll">${officeCutaway(svgSeats, active)}</div>
      ${activeFeatures.length ? `<div class="floorplan-features">${activeFeatures.map(([id, label]) => `<div data-floorplan-feature="${id}" title="Hover to spotlight layer"><span class="floorplan-feature-symbol"></span><span>${label}</span></div>`).join('')}</div>` : ''}
    </div>
    <figcaption>${n > 100 ? 'Illustrative 4-floor cutaway module scaling to multi-floor fit-out — exact counts confirmed during site survey' : 'Illustrative layout — exact counts confirmed during site survey'}</figcaption>`;
}

function officePlan() {
  const dossierRef = createSystechRef('SYS-PLAN');
  const dossierDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  return `
  <section class="wrap planner-page">
    <div class="print-dossier-letterhead" aria-hidden="true">
      <div>
        <strong>SYSTECH SERVICES PRIVATE LIMITED · ARCHITECTURAL IT SCOPE BRIEF</strong><br>
        <span>Est. 1998 (28th Anniversary) · ISO 9001:2015 · Lenovo 360 Platinum 2026</span>
      </div>
      <div style="text-align:right">
        <strong id="print-dossier-ref">Brief Ref: ${dossierRef}</strong><br>
        <span id="print-dossier-date">Prepared: ${dossierDate}</span>
      </div>
    </div>
    <a class="crumb planner-back" href="?page=solutions">← Solutions</a>
    <h1>Plan an office setup</h1>
    <form id="planner" class="planner-layout">
      <section class="planner-visual" aria-label="Office illustration and connection routes">
        <div class="planner-route-controls" role="group" aria-label="Explore a connection">
          ${Object.entries(plannerRoutes).map(([id, route]) => `<button type="button" data-planner-route="${id}" aria-pressed="${id === initialPlannerRoute}" aria-controls="planner-route-detail">${route.label}</button>`).join('')}
        </div>
        <p id="planner-route-detail" class="planner-route-detail" aria-live="polite">${plannerRoutes[initialPlannerRoute].detail}</p>
        <figure class="planner-figure">${plannerIllustration(currentSeats, selectedFeatures)}</figure>
      </section>
      <div class="planner-controls-rail">
        <fieldset class="planner-size">
          <legend>Office size <span class="sr">in seats</span></legend>
          <div class="seat-picker">${capacities.map(value => `<label><input type="radio" name="seats" value="${value}" ${value === currentSeats ? 'checked' : ''}><span>${value === '250' ? '250+' : value}</span></label>`).join('')}</div>
          <div class="planner-custom-seats">
            <label for="custom-seats-input">Exact seats (10–1,000)</label>
            <input id="custom-seats-input" name="customSeats" type="number" min="10" max="1000" step="5" value="${currentSeats}">
          </div>
        </fieldset>
        <fieldset class="planner-options">
          <legend>Add to your scope</legend>
          ${features.map(([id, label]) => `<label class="check" data-option-layer="${id}"><input type="checkbox" name="${id}"><span>${label}</span></label>`).join('')}
          <button type="reset" class="quiet">Reset selections</button>
        </fieldset>
        <div class="planner-summary">
          <h2>Project scope</h2>
          <p id="scope-summary" aria-live="polite"></p>
          <div id="scope-gauges" class="scope-gauges" aria-label="Engineering capacity gauges"></div>
          <dl id="scope-bom" class="scope-bom" aria-label="Indicative engineering baseline"></dl>
          <p class="scope-bom-note">Indicative planning baseline; final BOM confirmed after floor survey.</p>
          <div class="planner-summary-actions">
            <a id="use-scope" class="button" href="${contact('office')}">Use this scope <span aria-hidden="true">→</span></a>
            <div class="planner-secondary-actions">
              <button type="button" id="print-scope" class="button outline">Print / Save PDF</button>
              <a id="wa-scope" class="button outline" href="${whatsappUrl('Hi Systech team, sharing an office planner scope.')}" target="_blank" rel="noopener noreferrer">WhatsApp scope</a>
            </div>
          </div>
          <div class="print-dossier-signoff" aria-hidden="true">
            <div>
              <strong>Systech Services Pvt. Ltd. · Enterprise Architecture Desk</strong><br>
              <span>Bengaluru HQ · Chennai · Hyderabad · Dubai · Hong Kong</span>
            </div>
            <div>
              <strong>Consultations &amp; Floor Surveys</strong><br>
              <span>contact@teamsystech.com · +91 95357 24411</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>`;
}

const deviceSetups = {
  office: { title: 'Office work', summary: 'Desktop · Monitor · Peripherals', detail: 'Equip fixed desks with a ThinkCentre desktop, ThinkVision display and everyday accessories.', width: 459, height: 294 },
  mobile: { title: 'Mobile work', summary: 'Laptop · Dock · Headset', detail: 'Choose a Lenovo ThinkPad/ThinkBook or MacBook for hybrid work, paired with a single-cable USB-C dock and headset.', width: 400, height: 277 },
  specialist: { title: 'Specialist work', summary: 'Workstation · Dual displays', detail: 'Pair an ISV-certified ThinkStation workstation with dual 4K displays for CAD, BIM, data science and demanding engineering workflows.', width: 474, height: 283 }
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
      <div><p>Business devices and accessories matched to role, security policy and longevity.</p>${button(contact('devices'), 'Request commercial fleet quote')}</div>
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
      <div><h2 id="devices-lenovo">Lenovo 360 Platinum Partner</h2><p>Full ThinkPad, ThinkBook, ThinkCentre, ThinkStation &amp; ThinkVision fleet sourcing and genuine spares.</p></div>
      ${button(lenovoPartnership, 'Explore Lenovo hub →')}
    </section>
    ${businessComputingCatalog()}
    <section class="repair-services device-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>${finalCall()}`;
}

const renewalPaths = {
  renew: { title: 'Renew & reuse', summary: 'Evaluate, upgrade and test.', detail: 'Ask us to assess whether your existing laptops can be upgraded with compatible NVMe/RAM and returned to use.', width: 507, height: 304 },
  recycle: { title: 'Collect & recycle', summary: 'Review inventory, arrange collection and recycle.', detail: 'Share your inventory of retired equipment so we can discuss collection, data-handling and documentation.', width: 558, height: 232 }
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
      <div><p>Assess equipment for upgrades or arrange responsible e-waste collection.</p>${button(contact('renewal'), 'Schedule asset assessment')}</div>
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
      <div><h2>Have several devices?</h2><p>Share your equipment inventory to start an IT Asset Recovery assessment.</p></div>
      ${button(groupUrl('e-waste-recycling') + '#asset-recovery', 'Explore IT Asset Recovery')}
    </section>
    <section class="repair-services infrastructure-services renewal-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}</div>
    </section>
  </section>${finalCall()}`;
}

const workloadModes = {
  premises: { title: 'On-premises', detail: 'Run applications and store their data on Lenovo ThinkSystem / ThinkAgile equipment at your site.' },
  cloud: { title: 'Cloud', detail: 'Run workloads and store data on Microsoft Azure, AWS or Google Cloud suited to your requirements.' },
  hybrid: { title: 'Hybrid', detail: 'Keep low-latency workloads on-site and run DR, M365 or elastic services in the cloud.' }
};

function cloud() {
  const group = groups.find(g => g.id === 'cloud');
  return `<section class="wrap workload-page">
    <div class="repairs-crumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> Servers, Storage &amp; Cloud</div>
    <div class="workload-explorer" id="workload-explorer" data-workload-mode="hybrid">
      <div class="workload-hero">
        <div class="workload-copy">
          <h1><span>Where your applications run.</span> <span>Where your data lives.</span></h1>
          <p>Plan Lenovo servers, storage and cloud around your workloads.</p>
          ${button(contact('cloud'), 'Scope server & cloud workloads')}
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
  workstation: { label: 'Workstation', title: 'Endpoint protection', detail: 'Endpoint controls help protect laptops and desktops. Antivirus, EDR and XDR (such as Sophos Intercept X) support detection and response.' },
  wifi: { label: 'Office Wi-Fi', title: 'Switching and Wi-Fi', detail: 'Managed switches (Cisco / Aruba) connect wired office equipment while enterprise Wi-Fi provides high-density wireless access.' },
  firewall: { label: 'Firewall', title: 'Traffic protection', detail: 'A next-generation firewall (Fortinet / Sophos) enforces traffic, web-filtering and VPN policies at the office perimeter.' },
  cloud: { label: 'Cloud application', title: 'Applications and data', detail: 'Cloud platforms such as Microsoft Azure, AWS and Google Cloud host workloads connected securely over encrypted links.' }
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
      <div><p>Enterprise Wi-Fi, firewalls and endpoint protection powered by Cisco, Aruba, Fortinet and Sophos.</p>${button(contact('security'), 'Request network & security audit')}</div>
    </div>
    ${networkJourney('firewall')}
    <section class="repair-services security-services">
      <h2>What we provide</h2>
      <div class="offer-list">${group.entries.map(([label, detail, path]) => `<article><h3>${label}</h3><p>${detail}</p>${link(groupUrl(routesBySource.get(path)), 'View service page')}</article>`).join('')}
        <article><h3>${softwareLicensingTitle}</h3><p>Co-term renewals and licensing for Sophos, Fortinet, Aruba Networks, VMware, Kaspersky and Codeproof MDM.</p>${link(groupUrl(softwareLicensingId), 'Open renewals desk')}</article>
      </div>
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
    ${serviceIllustration({ ...wifiIllustration, detailEnquiry: enquiryLink })}
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
    : { ...detail.illustration, detailEnquiry: enquiryLink };
  return `<div class="wrap wifi-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> <a class="crumb" href="${groupUrl(detail.group.id)}">${detail.group.title}</a></nav>
    <header class="wifi-intro">
      <h1>${detail.title}</h1>
      <div><p>${detail.intro}</p>${button(enquiryLink, detail.action)}</div>
    </header>
    ${page === 'business-computing' || page === 'other-brands' ? businessComputingCatalog() : ''}
    ${serviceIllustration(illustration)}
    ${page === 'displays-tablets-printers' ? businessComputingCatalog('monitors') : ''}
    ${page === 'e-waste-recycling' ? assetRecoveryWorkflow(enquiryLink) : ''}
    ${page === 'cloud-migration' ? `<p class="related-microsoft">${link(microsoftUrl, 'Explore Microsoft 365, Azure &amp; Business Applications')}</p>` : ''}
    ${page === 'lenovo-spares' ? `<section class="repair-partnership spares-cta-band" aria-labelledby="spares-hub-link"><div><h2 id="spares-hub-link">Search by Lenovo model or MTM?</h2><p>Use our Lenovo Platinum Spares Finder to pre-fill family, component and part numbers directly.</p></div>${button(lenovoPartnership + '#spares-finder', 'Open spares finder →')}</section>` : ''}
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
    { title: 'Explore a secure network', summary: 'See how a workstation connects through Wi-Fi and firewalls to a cloud application.', action: 'Open walkthrough', href: '?page=network', image: 'network', width: 280, height: 138 },
    { title: 'Industry playbooks', summary: 'Reference IT stacks & floor-plan presets for Tech GCCs, Healthcare, Plants & Fintech.', action: 'Explore industries', href: '?page=industries', image: 'industries', width: 360, height: 143 }
  ];
  return `
    <section class="wrap page-intro resources-intro">
      <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Resources</div>
      <h1>IT guides and planning tools</h1><p>Scope an office, review sector architectures or compare technical decisions across cabling, storage, Lenovo fleets, cybersecurity and AMC contracts.</p>
    </section>
    <div class="wrap resources-page">
      <section class="resource-feature" aria-labelledby="resource-planner-title">
        <div><h2 id="resource-planner-title">Plan an office setup</h2><p>Choose an office size, toggle AV, security or servers, inspect live port baselines and carry your scope straight into an enquiry.</p>${button('?page=planner', 'Open office planner →')}</div>
        <figure><img src="assets/resources-floor-plan.webp" width="966" height="341" alt="Overhead office plan with desks, a meeting room and a blue cable route to the network cabinet."><figcaption>Illustrative setup</figcaption></figure>
      </section>
      <section class="resource-guides" aria-label="Interactive planning guides">
        ${guides.map(guide => `<article class="resource-guide">
          <img src="assets/resources-${guide.image}.webp" width="${guide.width}" height="${guide.height}" alt="" loading="lazy">
          <div><h2>${guide.title}</h2><p>${guide.summary}</p>${link(guide.href, guide.action)}</div>
        </article>`).join('')}
      </section>
      <section class="repair-partnership resource-partnership" aria-labelledby="resource-lenovo-title">
        <div><h2 id="resource-lenovo-title">Lenovo 360 Platinum Partner</h2><p>Compare ThinkPad/ThinkStation fleets, ThinkSystem servers and check genuine spares compatibility</p>${link(lenovoPartnership, 'Open Lenovo hub')}</div>
        <img src="assets/resources-lenovo.webp" width="357" height="137" alt="" loading="lazy">
      </section>
      ${resourceEditorial()}
      <div class="resource-blog">${link('?page=partners', 'Explore all 20+ OEM technology partners')}</div>
    </div>
    ${finalCall()}`;
}

const companyStages = {
  equip: { title: 'Equip', detail: 'Standardise Lenovo ThinkPad, Apple and multi-OEM devices configured around how each role works.', route: 'devices', action: 'Explore devices & accessories' },
  connect: { title: 'Connect', detail: 'Build structured Cat6A/fibre cabling, Aruba/Cisco Wi-Fi, boardroom AV and security racks together.', route: 'office', action: 'Explore office infrastructure' },
  maintain: { title: 'Maintain', detail: 'Protect uptime with genuine Lenovo FRU spares, chip-level repairs and preventive AMC contracts.', route: 'repairs', action: 'Explore repairs & support' }
};

function company() {
  return `
    <section class="wrap company-page">
      <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> About Systech</div>
      <div class="company-hero">
        <div class="company-copy">
          <h1>About Systech Services</h1>
          <p>Est. 1998 in Bengaluru — a ₹500CR+, ISO 9001:2015 certified enterprise systems integrator and Lenovo 360 Platinum Partner trusted by 2,000+ businesses across India.</p>
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
        <section><h2>28+ years of IT integration</h2><p>Over 100 technical, sales and field specialists delivering end-to-end infrastructure across Bengaluru HQ · Chennai · Hyderabad · Pan-India · Dubai · Hong Kong.</p>${link('#our-story', 'Read 1998–2026 timeline')}</section>
        <section class="repair-partnership company-partnership"><div><h2>Lenovo 360 Platinum Partner</h2><p>2026 Platinum tier, 5-Year Contribution recognition and multi-OEM depth across 20+ brands.</p><div class="actions">${link(lenovoPartnership, 'Lenovo hub')}${link('?page=partners', 'All OEM partners')}</div></div></section>
      </div>
      <nav class="company-links" aria-label="Company links">
        ${link('#trust-standards', 'Quality & ISO 9001:2015')}${link('#leadership', 'Leadership')}${link('#gallery', 'Gallery')}${link('#customer-feedback', 'Client & team voices')}${link('?page=industries', 'Industry playbooks')}${link(groupUrl('careers'), 'Careers')}${link('?page=contact', 'Contact Systech')}
      </nav>
      ${heritageScrubber(false)}
      ${companyProfile()}
      ${companyEditorial()}
      ${companyReviews()}
    </section>
    ${enterpriseProofBand()}
    ${finalCall()}`;
}

const selectedFeatures = features.filter(([id]) => params.getAll('option').includes(id));
const scopeFeatures = selectedFeatures.map(([, label]) => label);
const hasScope = requestedSeats !== null;
const scopeText = [currentSeats + ' seats', ...scopeFeatures].join(' · ');
const officeAddress = 'Vijaya Vittala, No. 994, 29th Main, Poornaprajna Nagar, Bengaluru 560061';
const officeDirections = 'https://www.google.com/maps/dir/?api=1&amp;destination=' + encodeURIComponent(officeAddress);
const enquiryInbox = 'contact@teamsystech.com';
const escapeHtml = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function enquiry() {
  const suggestedTeam = suggestEnquiryTeam(params.get('service'), params);
  const support = params.get('support');
  const part = params.get('part');
  const focus = params.get('focus');
  const directRequirements = params.get('requirements');
  const isSupportRequest = params.get('service') === 'repairs' && Object.hasOwn(supportModes, support);
  const sparesParts = {
    display: 'Display / LCD panel',
    keyboard: 'Keyboard assembly',
    'memory-storage': 'NVMe SSD / RAM module',
    battery: 'Battery',
    ssd: 'NVMe SSD / storage',
    adapter: 'Power adapter / USB-C charger',
    cooling: 'Cooling fan / thermal module',
    housing: 'Hinges, bezel or bottom cover',
    board: 'System board / I/O sub-card'
  };
  const lenovoReq = lenovoEnquiryRequirement(params);
  const supportRequirement = isSupportRequest
    ? [supportModes[support].request, sparesParts[part] || (Object.hasOwn(repairParts, part) ? repairParts[part].label : '')].filter(Boolean).join(' · ')
    : '';
  const topic = params.get('topic');
  const enquiryDetail = serviceDetails.get(topic);
  const partLabel = topic === 'lenovo-spares' && Object.hasOwn(sparesParts, part) ? sparesParts[part] : '';
  const serviceRequirement = enquiryDetail?.group.id === params.get('service')
    ? [enquiryDetail.title, partLabel || focus].filter(Boolean).join(' · ')
    : '';
  const setup = params.get('setup');
  const deviceRequirement = params.get('service') === 'devices' && Object.hasOwn(deviceSetups, setup)
    ? deviceSetups[setup].title + ' · ' + deviceSetups[setup].summary
    : '';
  const lifecycle = params.get('lifecycle');
  const renewalRequirement = params.get('service') === 'renewal' && Object.hasOwn(renewalPaths, lifecycle)
    ? renewalPaths[lifecycle].title
    : '';
  const feedbackRequirement = topic === 'feedback' ? 'Client Feedback / Post-Deployment Review: ' : '';
  const initialRequirements = directRequirements || lenovoReq || supportRequirement || serviceRequirement || deviceRequirement || renewalRequirement || softwareLicensingRequirement(params) || microsoftEnquiryRequirement(params) || feedbackRequirement || (hasScope ? 'Office setup baseline: ' + scopeText : '');
  const selectedService = params.get('service') || (topic === 'feedback' ? 'repairs' : '');
  const editScope = new URLSearchParams({ page: 'planner', seats: currentSeats });
  selectedFeatures.forEach(([id]) => editScope.append('option', id));
  if (initialPlannerRoute !== 'network') editScope.set('view', initialPlannerRoute);
  const directWhatsapp = whatsappUrl('Hi Systech team, we would like to discuss a project' + (initialRequirements ? ': ' + initialRequirements : '.'));

  return `
  <section class="wrap page-intro enquiry-intro">
    <div class="repairs-crumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> Project enquiry</div>
    <h1>Request a quote</h1>
    <p>Share your requirements to prepare an enquiry for Sales, Infrastructure Services, Genuine Part Sales or Asset Recovery.</p>
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
      <figcaption>Device rollout, office infrastructure &amp; lifecycle support</figcaption>
    </figure>`}
    <form id="enquiry" class="enquiry" aria-labelledby="enquiry-details">
      <h2 class="wide enquiry-details" id="enquiry-details">Your details</h2>
      <label class="field">Name<input name="name" autocomplete="name" required maxlength="120"></label>
      <label class="field">Work email<input name="email" type="email" autocomplete="email" required maxlength="200"></label>
      <label class="field">Phone / WhatsApp<input name="phone" type="tel" autocomplete="tel" required maxlength="30" placeholder="+91 98450 00000"></label>
      <label class="field">Company<input name="company" autocomplete="organization" required maxlength="150"></label>
      <label class="field"><span class="field-label">City / Site location <small class="field-optional">(optional)</small></span><input name="city" autocomplete="address-level2" maxlength="100" placeholder="e.g. Bengaluru, Chennai, Dubai"></label>
      <label class="field">Service<select name="service" required><option value="">Select a service</option>${groups.map(g => `<option value="${g.id}" ${g.id === selectedService ? 'selected' : ''}>${g.title}</option>`).join('')}</select></label>
      <label class="field wide">Enquiry category<select name="team" required><option value="">Select a category</option>${Object.entries(enquiryTeams).map(([id, label]) => `<option value="${id}"${id === suggestedTeam ? ' selected' : ''}>${label}</option>`).join('')}</select></label>
      ${assetRecoveryFields(suggestedTeam === 'recovery')}
      <label class="field wide">Project requirements<textarea name="requirements" required maxlength="1500" rows="4" placeholder="Tell us about your site, device models, quantities or timeline.">${escapeHtml(initialRequirements)}</textarea></label>
      <div class="wide enquiry-action">
        <div class="enquiry-submit-row">
          <button type="submit" class="button">Submit brief &amp; review <span aria-hidden="true">→</span></button>
          <a class="button outline" href="${directWhatsapp}" target="_blank" rel="noopener noreferrer">Quick chat on WhatsApp</a>
        </div>
        <p>Generates an instant formatted brief you can send via email draft, WhatsApp or copy directly.</p>
      </div>
      <div id="enquiry-review" class="wide review" hidden>
        <div class="review-header-row">
          <h2 tabindex="-1">Review your enquiry brief</h2>
          <span id="enquiry-ref" class="enquiry-ref-pill"></span>
        </div>
        <p id="submit-status" class="submit-status" role="status" aria-live="polite" hidden></p>
        <pre id="review-text"></pre>
        <div class="review-actions">
          <a id="email-draft" class="button">Open email draft</a>
          <a id="whatsapp-draft" class="button outline" target="_blank" rel="noopener noreferrer">Send via WhatsApp</a>
          <button type="button" id="download-enquiry" class="button outline">Download brief (.txt)</button>
          <button type="button" id="copy-enquiry" class="button outline">Copy enquiry text</button>
          <span id="copy-status" class="copy-status" role="status" aria-live="polite"></span>
        </div>
      </div>
    </form>
    <aside class="enquiry-contact" id="contact-details" aria-labelledby="contact-details-heading">
      <h2 id="contact-details-heading">Contact Systech</h2>
      <address><strong>Systech Services Private Limited</strong><br>${officeAddress}, India</address>
      ${link(officeDirections, 'Get directions')}
      <dl class="contact-channels">
        <div><dt>Email</dt><dd><a href="mailto:${enquiryInbox}">${enquiryInbox}</a></dd></div>
        <div><dt>Mobile</dt><dd><a href="tel:+919535724411">+91 95357 24411</a></dd></div>
        <div><dt>Landline</dt><dd><a href="tel:+918026724411">080 2672 4411</a></dd></div>
        <div><dt>WhatsApp</dt><dd><a href="https://wa.me/919972633667" target="_blank" rel="noopener noreferrer">+91 99726 33667</a></dd></div>
        <div><dt>Coverage</dt><dd>Bengaluru HQ · Chennai · Hyderabad · Dubai · Hong Kong</dd></div>
        <div><dt>Hours</dt><dd>Mon–Sat · 9:30 AM – 6:30 PM IST</dd></div>
      </dl>
      <p class="contact-assurance">ISO 9001:2015 QMS · 2026 Lenovo 360 Platinum Partner · Est. 1998</p>
    </aside>
  </section>`;
}

const routeDescriptions = {
  home: 'Systech Services Pvt. Ltd. — Est. 1998 in Bengaluru. ₹500CR+ multi-OEM systems integrator and 2026 Lenovo 360 Platinum Partner serving 2,000+ enterprises across India, Dubai & Hong Kong.',
  solutions: 'Explore Systech infrastructure pillars across devices, office IT, servers & cloud, cybersecurity, repairs/AMC and fleet renewal.',
  office: 'Structured Cat6A & optical fibre cabling, boardroom AV, biometric door access and online UPS planning across India.',
  devices: 'Commercial Lenovo ThinkPad, ThinkBook, ThinkCentre, ThinkStation, Apple Mac and Microsoft Surface deployment at enterprise scale.',
  cloud: 'Lenovo ThinkSystem servers, ThinkAgile HCI, NAS/SAN/tape storage, Microsoft Azure and M365 licensing architecture.',
  security: 'Enterprise Wi-Fi 6/7 switching, Fortinet/Sophos firewalls, endpoint XDR, CCTV surveillance and DLP governance.',
  repairs: 'Certified repairs, annual maintenance contracts (AMC) and 100% genuine MTM-verified Lenovo FRU spare parts across India.',
  renewal: 'Extend laptop longevity via verified NVMe/RAM upgrades or schedule compliant IT Asset Recovery (ITAD) and e-waste recycling.',
  'lenovo-partner': 'Systech Services is a Lenovo 360 Platinum Partner in Bengaluru supplying ThinkPad, ThinkBook, ThinkCentre, ThinkStation, ThinkSystem servers, ThinkAgile HCI and genuine Lenovo FRU spares.',
  'microsoft-solutions': 'Microsoft 365 licensing, Azure workloads, Copilot readiness and Dynamics 365 deployment backed by Systech Services.',
  'software-licensing': 'Renewals and net-new subscriptions for Sophos, Fortinet, Aruba Networks, VMware, Kaspersky antivirus and Codeproof MDM backed by Systech Services.',
  partners: 'Explore Systech’s 20+ authorised technology partners including Lenovo 360 Platinum, Dell, HP, Apple, ASUS, Acer, Microsoft, VMware, Cisco, Aruba, Fortinet, Sophos, Kaspersky, Honeywell and Hikvision.',
  industries: 'Sector IT architecture playbooks and deployment blueprints for Global Capability Centres, Healthcare, Manufacturing & Energy, and Fintech.',
  'case-studies': 'Reference multi-OEM deployment architectures from Systech Services across tech offices, ThinkSystem virtualisation, clinical networks and fleet ITAD.',
  work: 'Reference multi-OEM deployment architectures from Systech Services across tech offices, ThinkSystem virtualisation, clinical networks and fleet ITAD.',
  planner: 'Interactive multi-floor office IT planner calculating Cat6A drops, ceiling Wi-Fi AP density, PoE switching and security rack scope.',
  resources: 'Technical buying guides, engineering briefs and interactive planning tools across cabling, storage, Lenovo fleets, cybersecurity, AMC and ITAD.',
  company: 'About Systech Services Pvt. Ltd. — Bengaluru systems integrator founded September 1998 with ISO 9001:2015 QMS and 100+ specialists.',
  careers: 'Work @ Systech & Life @ Systech — build enterprise IT architecture, engineering and pre-sales careers with Systech Services in Bengaluru.',
  contact: 'Discuss your IT procurement, Lenovo spares MTM verification, office cabling, cybersecurity or AMC enquiry with Systech Services Bengaluru.',
  'privacy-policy': 'Privacy Policy governing enquiry and support communications with Systech Services Private Limited.',
  'terms-and-conditions': 'Terms and conditions for solutions, quotations, installations and support services from Systech Services Private Limited.',
  'return-policy': 'Return and RMA coordination policy for hardware, genuine Lenovo spares and enterprise orders with Systech Services.'
};

const pages = {
  home, solutions, office, devices, cloud, security, [wifiPageId]: officeWifi, repairs, renewal,
  planner: officePlan, network: secureNetwork, resources, company,
  [lenovoPartnerId]: lenovoPartnerPage, [microsoftId]: microsoftSolutionsPage, [softwareLicensingId]: softwareLicensingPage,
  [partnersId]: partnersPage, [industriesId]: industriesPage, [caseStudiesId]: caseStudiesPage, work: caseStudiesPage,
  contact: enquiry, careers: careersPage,
  'privacy-policy': privacyPolicyPage, 'terms-and-conditions': termsPage, 'return-policy': returnPolicyPage
};
const matchingGroup = groups.find(g => g.id === page);
const matchingDetail = serviceDetails.get(page) || (page === 'other-brands' ? serviceDetails.get('displays-tablets-printers') : undefined);
const matchingBcSeries = bcSeriesMap.get(page);
main.innerHTML = Object.hasOwn(pages, page) ? pages[page]() : (matchingBcSeries ? businessComputingDetailPage(page) : (matchingDetail ? serviceDetail(matchingDetail) : (matchingGroup ? service(matchingGroup) : intro('Page not found', 'Use the main navigation to find a service.'))));

const pageTitle = page !== 'home'
  ? (main.querySelector('h1')?.textContent || 'Systech') + ' | Systech Services'
  : document.title;
if (page !== 'home') document.title = pageTitle;
const activeDescription = routeDescriptions[page] || (matchingBcSeries ? `${matchingBcSeries.name} — ${matchingBcSeries.spec}. ${matchingBcSeries.detail}` : '') || matchingDetail?.summary || matchingGroup?.summary;
if (activeDescription) {
  document.querySelector('meta[name="description"]')?.setAttribute('content', activeDescription);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', activeDescription);
}
document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
const canonicalHref = page === 'home' ? 'https://teamsystech.com/' : 'https://teamsystech.com/?page=' + encodeURIComponent(page);
document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalHref);

const header = document.querySelector('.header');
const navigation = document.querySelector('#primary');
const menu = document.querySelector('#menu-toggle');
const solutionsToggle = document.querySelector('#solutions-toggle');
const solutionsPanel = document.querySelector('#solutions-panel');
const activeSolution = matchingDetail?.group.id ?? matchingGroup?.id ?? (matchingBcSeries ? 'devices' : (page === microsoftId ? 'cloud' : (page === softwareLicensingId ? 'security' : undefined)));
const mobileNav = window.matchMedia('(max-width: 1100px)');

solutionsPanel.innerHTML = `
  <div class="solutions-panel-head">
    <div class="solutions-panel-crumbs">
      ${link(groupUrl('solutions'), 'All solutions')}
      ${link(groupUrl('business-computing'), 'Business Computing (16 Series)')}
      ${link(groupUrl('other-brands'), 'Other Brands, Apple & Print')}
      ${link(groupUrl(partnersId), 'OEM partners')}
      ${link(groupUrl(industriesId), 'Industry playbooks')}
      ${link(groupUrl(caseStudiesId), 'Reference architectures')}
      ${link(groupUrl(softwareLicensingId), 'Software renewals')}
    </div>
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
          ${group.id === 'security' ? `<li><a href="${groupUrl(softwareLicensingId)}">${softwareLicensingTitle}</a></li>` : ''}
          ${group.id === 'renewal' ? `<li><a href="${groupUrl('e-waste-recycling')}#asset-recovery">IT Asset Recovery (ITAD)</a></li>` : ''}
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
searchItems.push(
  {
    title: lenovoPartnerTitle + ' (ThinkPad, ThinkSystem, ThinkAgile, Spares)',
    description: 'Lenovo 360 Platinum partner laptops desktops workstations servers HCI ThinkStation genuine FRU spares MTM',
    group: { title: 'Partnership' }, page: lenovoPartnerId
  },
  {
    title: 'Genuine Lenovo Spares Compatibility Finder',
    description: 'Lenovo battery keyboard display LCD SSD RAM adapter thermal fan bezel FRU MTM lookup',
    group: { title: 'Partnership' }, page: lenovoPartnerId + '#spares-finder'
  },
  {
    title: microsoftTitle,
    description: 'Microsoft Solutions for Microsoft 365 Business Premium, Office 365, Teams, Exchange, SharePoint, Azure, Dynamics 365, Copilot and licensing',
    group: groups.find(group => group.id === 'cloud'), page: microsoftId
  },
  {
    title: softwareLicensingTitle,
    description: 'Sophos Fortinet Aruba Networks VMware Kaspersky Codeproof MDM license renewals co-terming antivirus UTM subscriptions',
    group: groups.find(group => group.id === 'security'), page: softwareLicensingId
  },
  {
    title: 'Authorised OEM Partner Ecosystem (20+ Brands)',
    description: 'Lenovo Dell HP Apple ASUS Acer AMD Microsoft VMware AWS GCP Cisco Aruba Fortinet Sophos Kaspersky Codeproof Honeywell Hikvision CP Plus eSSL Brother Canon Epson',
    group: { title: 'Ecosystem' }, page: partnersId
  },
  {
    title: 'Technical Insights, Guides & Field Briefs',
    description: 'Articles briefs NAS SAN DAS tape fibre cabling Codeproof MDM ThinkSystem boardroom AV firewalls AMC e-waste ITAD',
    group: { title: 'Resources' }, page: 'resources#insights'
  },
  {
    title: '@Systech Culture & Careers',
    description: 'Work @ Systech Life @ Systech hiring pre-sales networking field AMC part sales jobs Bengaluru',
    group: { title: 'Company' }, page: 'careers'
  },
  {
    title: 'Industry Playbooks & Deployment Blueprints',
    description: 'GCCs software healthcare hospitals manufacturing factories plant fintech BFSI case blueprints',
    group: { title: 'Industries' }, page: industriesId
  },
  {
    title: 'Reference Deployment Architectures (Case Studies)',
    description: 'GCC campus ThinkSystem cluster clinical network ITAD fleet spares reference case architectures',
    group: { title: 'Case Studies' }, page: caseStudiesId
  },
  {
    title: 'Interactive Office Setup Planner',
    description: '25 50 100 250 1000 seats floor plan schematic cabling switching Wi-Fi CCTV biometric access BOM estimate',
    group: { title: 'Planning Tool' }, page: 'planner'
  },
  {
    title: 'Business Computing Catalog (16 Series: Laptops, Workstations, Monitors, Tablets)',
    description: 'ThinkPad ThinkBook Yoga IdeaPad ThinkCentre IdeaCentre Legion ThinkPad P Series ThinkStation ThinkVision FHD QHD 4K Tab P12 P11 M11 Smart Paper Dell HP Apple',
    group: groups.find(group => group.id === 'devices'), page: 'business-computing'
  },
  ...[...bcSeriesMap.values()].map(item => ({
    title: item.name,
    description: `${item.category.label} ${item.tier} ${item.spec} ${item.detail} ${item.subModels.map(([m]) => m).join(' ')}`,
    group: { title: item.category.label },
    page: item.routeId
  }))
);

function searchServices() {
  const terms = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = terms.length ? searchItems.filter(item => terms.every(term => (item.title + ' ' + item.description + ' ' + item.group.title).toLowerCase().includes(term))) : searchItems.filter(item => item.title === item.group.title || item.page === lenovoPartnerId || item.page === partnersId || item.page === industriesId);
  results.replaceChildren();
  matches.slice(0, 10).forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = groupUrl(item.page);
    const titleSpan = document.createElement('span');
    titleSpan.className = 'search-result-title';
    titleSpan.textContent = item.title;
    const badgeSpan = document.createElement('span');
    badgeSpan.className = 'search-result-badge';
    badgeSpan.textContent = item.group.title;
    a.append(titleSpan, badgeSpan);
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
      ? 'Order genuine Lenovo ' + selection.label.toLowerCase() + ' spares verified by MTM from Systech’s Bengaluru inventory.'
      : selection.detail;
    enquiryLink.href = supportEnquiry(mode, mode === 'amc' ? '' : part);
    enquiryLink.textContent = mode === 'amc' ? 'Schedule AMC SLA scoping →' : 'Verify part compatibility →';
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
  const customSeatsInput = planner.querySelector('#custom-seats-input');
  const seatRadios = [...planner.querySelectorAll('input[name="seats"]')];
  const getSeats = () => {
    const raw = customSeatsInput?.value.trim() ?? '';
    const parsed = Number(raw);
    if (raw !== '' && Number.isFinite(parsed)) {
      return String(Math.min(1000, Math.max(10, Math.round(parsed))));
    }
    const checked = seatRadios.find(radio => radio.checked);
    return checked ? checked.value : '50';
  };
  let activeRoute = initialPlannerRoute;
  const routeControls = planner.querySelectorAll('[data-planner-route]');
  const syncRouteButtons = route => {
    routeControls.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.plannerRoute === route)));
    planner.querySelector('#planner-route-detail').textContent = plannerRoutes[route].detail;
  };
  const updateScope = () => {
    const seats = getSeats();
    const url = new URLSearchParams({ page: 'contact', service: 'office', seats });
    const active = features.filter(([id]) => planner.elements[id].checked);
    active.forEach(([id]) => url.append('option', id));
    if (activeRoute !== 'network') url.set('view', activeRoute);
    const diagramScrollLeft = floorPlan.querySelector('.floorplan-scroll')?.scrollLeft || 0;
    floorPlan.innerHTML = plannerIllustration(seats, active, activeRoute);
    floorPlan.querySelector('.floorplan-cutaway')?.classList.add('is-visible');
    const newScroll = floorPlan.querySelector('.floorplan-scroll');
    if (newScroll) newScroll.scrollLeft = diagramScrollLeft;
    const scopeLine = [seats + ' seats', ...active.map(([, label]) => label)].join(' · ');
    document.querySelector('#scope-summary').textContent = scopeLine;
    const gaugesHost = document.querySelector('#scope-gauges');
    if (gaugesHost) {
      gaugesHost.innerHTML = estimateEngineeringGauges(seats, active).map(g => `<div class="scope-gauge">
        <div class="scope-gauge-top"><span>${g.label}</span><strong>${g.value}</strong></div>
        <div class="gauge-bar"><span class="gauge-bar-fill" style="width:${g.fillPct}"></span></div>
      </div>`).join('');
    }
    const bomItems = estimateOfficeScope(seats, active);
    document.querySelector('#scope-bom').innerHTML = bomItems.map(([dt, dd]) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`).join('');
    document.querySelector('#use-scope').href = '?' + url;
    const waCta = document.querySelector('#wa-scope');
    if (waCta) {
      const bomSummary = bomItems.slice(1).map(([k, v]) => `${k}: ${v}`).join('; ');
      waCta.href = whatsappUrl(`Hi Systech team, sharing an Office Planner scope (${scopeLine}). Baseline: ${bomSummary}.`);
    }
  };
  routeControls.forEach(control => control.addEventListener('click', () => {
    activeRoute = control.dataset.plannerRoute;
    syncRouteButtons(activeRoute);
    updateScope();
  }));
  const applyLayerSpotlight = (layerId, { switchRoute = true } = {}) => {
    const floor = floorPlan.querySelector('.office-floorplan');
    if (!floor) return;
    if (!layerId) {
      delete floor.dataset.spotLayer;
      return;
    }
    const targetRoute = featureToRoute[layerId];
    if (switchRoute && targetRoute && activeRoute !== targetRoute) {
      activeRoute = targetRoute;
      syncRouteButtons(activeRoute);
      updateScope();
    }
    const refreshed = floorPlan.querySelector('.office-floorplan');
    if (refreshed) refreshed.dataset.spotLayer = layerId;
  };
  const activateCutawayControl = (target, { fromKeyboard = false } = {}) => {
    const toggleZone = target.closest('[data-cutaway-toggle]');
    if (toggleZone) {
      const id = toggleZone.dataset.cutawayToggle;
      const checkbox = planner.elements[id];
      if (!checkbox) return false;
      const restoreSelector = `[data-cutaway-toggle="${id}"]`;
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked && featureToRoute[id]) {
        activeRoute = featureToRoute[id];
        syncRouteButtons(activeRoute);
      }
      updateScope();
      if (fromKeyboard) floorPlan.querySelector(restoreSelector)?.focus();
      return true;
    }
    const routePick = target.closest('[data-cutaway-route-pick]');
    if (routePick) {
      const nextRoute = routePick.dataset.cutawayRoutePick;
      if (Object.hasOwn(plannerRoutes, nextRoute)) {
        const restoreSelector = `[data-cutaway-route-pick="${nextRoute}"]`;
        activeRoute = nextRoute;
        syncRouteButtons(activeRoute);
        updateScope();
        if (fromKeyboard) floorPlan.querySelector(restoreSelector)?.focus();
      }
      return true;
    }
    return false;
  };
  floorPlan.addEventListener('click', event => {
    activateCutawayControl(event.target);
  });
  floorPlan.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (activateCutawayControl(event.target, { fromKeyboard: true })) event.preventDefault();
  });
  planner.addEventListener('mouseover', event => {
    const chip = event.target.closest('[data-floorplan-feature], [data-option-layer], [data-cutaway-toggle]');
    if (chip) {
      applyLayerSpotlight(
        chip.dataset.floorplanFeature || chip.dataset.optionLayer || chip.dataset.cutawayToggle,
        { switchRoute: false }
      );
    }
  });
  planner.addEventListener('mouseout', event => {
    if (!event.relatedTarget?.closest?.('[data-floorplan-feature], [data-option-layer], [data-cutaway-toggle]')) {
      applyLayerSpotlight('');
    }
  });
  document.querySelector('#print-scope')?.addEventListener('click', () => window.print());
  planner.addEventListener('submit', event => event.preventDefault());
  customSeatsInput?.addEventListener('input', () => {
    const raw = customSeatsInput.value.trim();
    if (!raw || !Number.isFinite(Number(raw))) return;
    const normalized = getSeats();
    seatRadios.forEach(radio => { radio.checked = radio.value === normalized; });
    updateScope();
  });
  planner.addEventListener('change', event => {
    if (event.target.matches('input[name="seats"]')) {
      if (customSeatsInput) customSeatsInput.value = event.target.value;
    } else if (event.target === customSeatsInput) {
      const normalized = getSeats();
      customSeatsInput.value = normalized;
      seatRadios.forEach(radio => { radio.checked = radio.value === normalized; });
    }
    updateScope();
  });
  planner.addEventListener('reset', () => setTimeout(() => {
    if (customSeatsInput) customSeatsInput.value = '50';
    seatRadios.forEach(radio => { radio.checked = radio.value === '50'; });
    updateScope();
  }, 0));
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
if (wifiExplorer) {
  const activeIllustration = matchingDetail?.illustration
    ? { ...matchingDetail.illustration, ...(page === 'lenovo-spares' ? { partEnquiry: contact('repairs') + '&topic=' + page } : { detailEnquiry: contact(matchingDetail.group.id) + '&topic=' + page }) }
    : { ...wifiIllustration, detailEnquiry: contact('security') + '&topic=' + wifiPageId };
  bindServiceIllustration(wifiExplorer, activeIllustration);
}

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

const heroStage = document.querySelector('#hero-xray-stage');
if (heroStage) {
  const readout = heroStage.querySelector('#hero-xray-readout');
  const layers = heroStage.querySelectorAll('.hero-svg-layer[data-hero-layer]');
  const syncHeroLayers = id => {
    layers.forEach(layer => layer.classList.toggle('is-active', layer.dataset.heroLayer === id));
  };
  syncHeroLayers(heroStage.dataset.activeSpot || 'workstations');
  const setHeroSpot = id => {
    const spot = heroHotspots.find(s => s.id === id);
    if (!spot || heroStage.dataset.activeSpot === id) return;
    heroStage.dataset.activeSpot = id;
    syncHeroLayers(id);
    heroStage.querySelectorAll('[data-hero-spot]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.heroSpot === id));
    });
    readout.innerHTML = heroReadoutHtml(spot);
  };
  heroStage.addEventListener('click', event => {
    const btn = event.target.closest('[data-hero-spot]');
    const layer = event.target.closest('.hero-svg-layer[data-hero-layer]');
    const spotId = btn?.dataset.heroSpot || layer?.dataset.heroLayer;
    if (spotId) setHeroSpot(spotId);
  });
  heroStage.addEventListener('mouseover', event => {
    const btn = event.target.closest('[data-hero-spot]');
    if (btn) setHeroSpot(btn.dataset.heroSpot);
  });
}

const themeToggle = document.querySelector('#theme-toggle');
if (themeToggle) {
  const themeLabel = themeToggle.querySelector('[data-theme-label]');
  const syncThemeUi = () => {
    const isCad = document.documentElement.dataset.theme === 'cad';
    themeToggle.setAttribute('aria-pressed', String(isCad));
    if (themeLabel) themeLabel.textContent = isCad ? 'Paper Mode' : 'CAD Mode';
    document.querySelectorAll('.brand img').forEach(img => {
      img.src = isCad ? 'assets/systech-dark.svg' : 'assets/systech.svg';
    });
  };
  syncThemeUi();
  themeToggle.addEventListener('click', () => {
    runTransition(() => {
      const nextCad = document.documentElement.dataset.theme !== 'cad';
      if (nextCad) document.documentElement.dataset.theme = 'cad';
      else delete document.documentElement.dataset.theme;
      try {
        if (nextCad) localStorage.setItem('systech-theme', 'cad');
        else localStorage.removeItem('systech-theme');
      } catch {}
      syncThemeUi();
    });
  });
}

const lenovoExplorer = document.querySelector('[data-lenovo-explorer]');
if (lenovoExplorer) bindLenovoPartner(lenovoExplorer);
const microsoftExplorer = document.querySelector('[data-microsoft-explorer]');
if (microsoftExplorer) bindMicrosoftSolutions(microsoftExplorer);
const licenseExplorer = document.querySelector('[data-license-explorer]');
if (licenseExplorer) bindSoftwareLicensing(licenseExplorer);
const careersExplorer = document.querySelector('[data-careers-explorer]');
if (careersExplorer) bindCareersPage(careersExplorer);
const resourcesContainer = document.querySelector('.resources-page');
if (resourcesContainer) bindResourcesPage(resourcesContainer);
const industryExplorer = document.querySelector('#industry-playbook-explorer');
if (industryExplorer) bindIndustriesPage(industryExplorer);
const caseStudySection = document.querySelector('.case-studies-page');
if (caseStudySection) bindCaseStudiesPage(caseStudySection);
const bcCatalog = document.querySelector('[data-bc-catalog]');
if (bcCatalog) bindBusinessComputingCatalog(bcCatalog);
const bcDetail = document.querySelector('[data-bc-detail]');
if (bcDetail) bindBusinessComputingDetail(bcDetail);
document.querySelectorAll('[data-heritage-scrubber]').forEach(bindHeritageScrubber);

const enquiryForm = document.querySelector('#enquiry');
if (enquiryForm) {
  const review = document.querySelector('#enquiry-review');
  const serviceField = enquiryForm.elements.namedItem('service');
  const teamField = enquiryForm.elements.namedItem('team');
  const incomingDetails = enquiryForm.elements.namedItem('requirements').defaultValue;
  const recovery = enquiryForm.querySelector('#recovery-fields');
  const refEl = document.querySelector('#enquiry-ref');
  const submitStatus = document.querySelector('#submit-status');
  let activeRefId = '';
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
  enquiryForm.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const selected = groups.find(g => g.id === data.get('service'));
    const team = data.get('team');
    if (!selected || !Object.hasOwn(enquiryTeams, team)) return;
    const category = enquiryTeams[team];
    const phone = String(data.get('phone') || '').trim();
    const city = String(data.get('city') || '').trim();
    const requirements = data.get('requirements');
    const serviceFromLink = params.get('service');
    const preserveDetails = incomingDetails && (!serviceFromLink || selected.id === serviceFromLink) && !requirements.includes(incomingDetails);
    activeRefId = createSystechRef('SYS');
    const generatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
    const text = [
      'Reference: ' + activeRefId,
      'Prepared: ' + generatedAt,
      'Name: ' + data.get('name'), 'Email: ' + data.get('email'),
      'Phone / WhatsApp: ' + phone,
      'Company: ' + data.get('company'),
      ...(city ? ['City / Site: ' + city] : []),
      'Service: ' + selected.title,
      'Enquiry category: ' + category,
      ...(hasScope ? ['Office planner scope: ' + scopeText] : []),
      ...(preserveDetails ? ['Selected details: ' + incomingDetails] : []),
      ...assetRecoveryDraftLines(data),
      '', 'Requirements:', requirements
    ].join('\n');
    if (refEl) refEl.textContent = 'Ref: ' + activeRefId;
    document.querySelector('#review-text').textContent = text;
    document.querySelector('#email-draft').href = 'mailto:' + enquiryInbox + '?subject=' + encodeURIComponent(`[${activeRefId}] Systech enquiry — ` + category + ' — ' + selected.title) + '&body=' + encodeURIComponent(text);
    const waDraft = document.querySelector('#whatsapp-draft');
    if (waDraft) waDraft.href = whatsappUrl(text);
    const copyStatus = document.querySelector('#copy-status');
    if (copyStatus) copyStatus.textContent = '';
    if (submitStatus) {
      submitStatus.hidden = true;
      submitStatus.textContent = '';
      submitStatus.className = 'submit-status';
    }
    review.hidden = false;
    review.querySelector('h2').focus();

    if (ENQUIRY_ENDPOINT) {
      if (submitStatus) {
        submitStatus.hidden = false;
        submitStatus.textContent = `Submitting brief ${activeRefId}…`;
      }
      try {
        const res = await fetch(ENQUIRY_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            refId: activeRefId,
            preparedAt: generatedAt,
            name: data.get('name'),
            email: data.get('email'),
            phone,
            company: data.get('company'),
            city,
            service: selected.title,
            category,
            requirements,
            scope: hasScope ? scopeText : '',
            brief: text
          })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        if (submitStatus) {
          submitStatus.className = 'submit-status is-sent';
          submitStatus.textContent = `Submitted to Systech desk (${activeRefId}). Email & WhatsApp options remain below for your records.`;
        }
      } catch {
        if (submitStatus) {
          submitStatus.className = 'submit-status is-fallback';
          submitStatus.textContent = `Direct endpoint unavailable — send using Email draft, WhatsApp or Download brief (${activeRefId}).`;
        }
      }
    } else {
      if (submitStatus) {
        submitStatus.hidden = false;
        submitStatus.className = 'submit-status is-ready';
        submitStatus.textContent = `Brief ${activeRefId} ready — click WhatsApp Desk, Open Email Draft, or Copy Brief below to send immediately (auto-copied where permitted).`;
      }
      navigator.clipboard?.writeText(text).catch(() => {});
    }
  });
  const downloadButton = document.querySelector('#download-enquiry');
  downloadButton?.addEventListener('click', () => {
    const text = document.querySelector('#review-text')?.textContent || '';
    if (!text) return;
    const blob = new Blob([text + '\n'], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(activeRefId || 'systech-enquiry').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
  const copyButton = document.querySelector('#copy-enquiry');
  const copyStatus = document.querySelector('#copy-status');
  copyButton?.addEventListener('click', async () => {
    const text = document.querySelector('#review-text')?.textContent || '';
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.textContent = 'Copied to clipboard';
    } catch {
      copyStatus.textContent = 'Select the text above to copy manually.';
    }
  });
}

bindProjectSchematic(document.querySelector('#project-schematic'));

/**
 * Parses numeric KPI text (e.g. "₹500CR+", "28+ Yrs", "2,000+") while retaining exact formatting tokens.
 * @param {string} raw
 */
function parseKpiSpec(raw) {
  const original = String(raw ?? '').trim();
  const match = original.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  if (!match) return null;
  const target = Number(match[2].replace(/,/g, ''));
  if (!Number.isFinite(target) || target <= 0) return null;
  return {
    original,
    prefix: match[1],
    target,
    useCommas: match[2].includes(','),
    suffix: match[3]
  };
}

/**
 * Animates a KPI element from 0 to its target value using a cubic ease-out curve (~900ms),
 * restoring the exact original string upon completion.
 * @param {HTMLElement} el
 * @param {boolean} reducedMotion
 */
function animateKpiCount(el, reducedMotion) {
  if (!el || el.dataset.kpiDone === 'true') return;
  const spec = parseKpiSpec(el.textContent);
  if (!spec) return;
  el.dataset.kpiDone = 'true';
  el.setAttribute('aria-label', spec.original);
  if (reducedMotion) {
    el.textContent = spec.original;
    return;
  }
  const duration = 900;
  const start = performance.now();
  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    if (t >= 1) {
      el.textContent = spec.original;
      return;
    }
    const eased = 1 - Math.pow(1 - t, 4);
    const current = Math.round(spec.target * eased);
    const formatted = spec.useCommas ? current.toLocaleString('en-US') : String(current);
    el.textContent = spec.prefix + formatted + spec.suffix;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Orchestrates scroll reveals, headline choreography, SVG schematic draw-ins, and KPI count-ups.
 */
function initScrollChoreography() {
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canObserve = 'IntersectionObserver' in window;

  document.querySelectorAll('main .section, main .wifi-offering, main .editorial-section, main .repair-services, main .asset-recovery, main .tactile-hardware-strip, main .authority-band-banner, main .bc-catalog-section, main .bc-submodels-section, main .bc-specs-section, main .bc-related-section, main .lenovo-matrix-section, main .lenovo-spares-finder').forEach(el => el.classList.add('reveal'));

  const headlineSelector = 'main h1, main section > h2, main .section-head h2, main .editorial-heading h2, main .proof-top-row h2, main .buyer-roles-head h2, main .project-row h2, main .lifecycle h2, main .closing h2, main .heritage-head h2, main .tactile-hw-head h2, main .authority-band-banner h2, main .bc-section-head h2, main .bc-catalog-header h2, main .lenovo-matrix-head h2, main .spares-finder-copy h2, main .partner-pillar-head h2, main .partner-flagship h2, main .repair-partnership h2';
  document.querySelectorAll(headlineSelector).forEach(el => el.classList.add('reveal-headline'));

  const reveals = document.querySelectorAll('.reveal');
  const standaloneHeadlines = [...document.querySelectorAll('.reveal-headline')].filter(el => !el.closest('.reveal'));
  const schematics = document.querySelectorAll('svg.hero-blueprint-svg, .floorplan-cutaway, .project-schematic-svg');
  const kpiNodes = document.querySelectorAll('.hero-stat-item dt, .scale-metric dt');

  if (!canObserve || prefersReducedMotion) {
    reveals.forEach(el => el.classList.add('is-visible'));
    standaloneHeadlines.forEach(el => el.classList.add('is-visible'));
    schematics.forEach(el => el.classList.add('is-visible'));
    kpiNodes.forEach(el => animateKpiCount(el, true));
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -24px 0px' });

  [...reveals, ...standaloneHeadlines].forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
      el.classList.add('reveal-pending');
      revealObserver.observe(el);
    } else {
      el.classList.add('is-visible');
    }
  });

  if (schematics.length) {
    const svgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        svgObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
    schematics.forEach(svg => svgObserver.observe(svg));
  }

  if (kpiNodes.length) {
    const kpiObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateKpiCount(entry.target, false);
        kpiObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    kpiNodes.forEach(dt => kpiObserver.observe(dt));
  }
}

initScrollChoreography();

main?.addEventListener('click', event => {
  const trigger = event.target.closest('button[aria-controls], [data-wifi-step]');
  const targetId = trigger?.getAttribute('aria-controls') || (trigger?.hasAttribute('data-wifi-step') ? 'wifi-component-info' : '');
  const panel = targetId && document.getElementById(targetId);
  if (!panel || trigger.hasAttribute('aria-expanded')) return;
  panel.classList.remove('panel-entering');
  void panel.offsetWidth;
  panel.classList.add('panel-entering');
});
