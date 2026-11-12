export const lenovoPartnerId = 'lenovo-partner';
export const lenovoPartnerTitle = 'Lenovo Platinum Partner';

const scenes = {
  workplace: {
    label: 'Workplace',
    image: 'devices-mobile.webp',
    title: 'Equip your team for the way they work',
    detail: 'Compare Lenovo laptops, desktops and workstations around the role, then choose compatible docks, adapters and other accessories.',
    links: [['business-computing', 'Explore business computing'], ['accessories-peripherals', 'Explore accessories']]
  },
  infrastructure: {
    label: 'Server room',
    image: 'server-room.webp',
    title: 'Plan Lenovo servers around your workloads',
    detail: 'Consider rack, tower and blade servers, or a hyperconverged platform when your project calls for compute and storage managed together.',
    links: [['servers-hci', 'Explore servers and HCI']]
  },
  support: {
    label: 'Service bench',
    image: 'repair-laptop.webp',
    title: 'Find a compatible part or arrange a repair',
    detail: 'Share the Lenovo model, the part you need or the symptoms you see. Systech can discuss repair options and check genuine replacement part compatibility.',
    links: [['lenovo-spares', 'Check Lenovo spare parts'], ['repairs-and-maintenance', 'Explore repairs']]
  }
};

const offerings = [
  ['Business computing', 'Lenovo laptops, desktops and workstations for business teams.', 'business-computing'],
  ['Accessories', 'Docks, adapters, bags, external storage and other compatible accessories.', 'accessories-peripherals'],
  ['Servers and HCI', 'Lenovo rack, tower and blade servers, and hyperconverged infrastructure.', 'servers-hci'],
  ['Genuine Lenovo spares', 'Model-specific batteries, keyboards, displays, memory, SSDs and other components.', 'lenovo-spares'],
  ['Repairs and maintenance', 'Diagnosis and servicing for Lenovo equipment, with the scope based on the model and fault.', 'repairs-and-maintenance']
];

function sceneContent(scene) {
  return `<h3>${scene.title}</h3><p>${scene.detail}</p>
    <div class="lenovo-scene-links">${scene.links.map(([route, label]) => `<a class="arrow-link" href="?page=${route}">${label} <span aria-hidden="true">→</span></a>`).join('')}</div>`;
}

export function lenovoPartnerPage() {
  const enquiry = '?page=contact&topic=' + lenovoPartnerId;
  return `<div class="wrap lenovo-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=company">Company</a></nav>
    <header class="wifi-intro lenovo-intro">
      <div><p class="eyebrow lenovo-location">Systech Services · Bengaluru</p><h1>${lenovoPartnerTitle}</h1></div>
      <div><p>Source Lenovo devices, servers and genuine parts through Systech. Based in Bengaluru, we work with organisations across India.</p>
        <a class="button" href="${enquiry}">Discuss your Lenovo requirements</a></div>
    </header>
    <section class="lenovo-explorer" data-lenovo-explorer aria-labelledby="lenovo-explorer-title">
      <h2 id="lenovo-explorer-title">Explore a Lenovo setup</h2>
      <p>Select an area to see where Systech can help.</p>
      <figure class="lenovo-illustration">
        <div class="lenovo-scenes" role="group" aria-label="Lenovo solution areas">
          ${Object.entries(scenes).map(([id, scene]) => `<button type="button" class="lenovo-scene" data-lenovo-scene="${id}" aria-pressed="${id === 'workplace'}" aria-controls="lenovo-scene-info">
            <img src="assets/${scene.image}" alt="">
            <span>${scene.label}</span>
          </button>`).join('')}
        </div>
        <figcaption>Illustrative equipment</figcaption>
      </figure>
      <div class="lenovo-scene-info" id="lenovo-scene-info" aria-live="polite">${sceneContent(scenes.workplace)}</div>
    </section>
    <section class="wifi-offering" aria-labelledby="lenovo-offerings">
      <h2 id="lenovo-offerings">Lenovo products and services</h2>
      <div class="lenovo-offerings">
        ${offerings.map(([title, detail, route]) => `<article>
          <h3>${title}</h3><p>${detail}</p>
          <a class="arrow-link" href="?page=${route}" aria-label="View service page for ${title}">View service page <span aria-hidden="true">→</span></a>
        </article>`).join('')}
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row">
    <div><h2>Buying equipment or supporting an existing fleet?</h2><p>For a rollout, share quantities, locations and workloads. For parts or repairs, include the device model and the part or issue.</p></div>
    <a class="button" href="${enquiry}">Discuss your Lenovo requirements</a>
  </div></section>`;
}

export function bindLenovoPartner(explorer) {
  const buttons = explorer.querySelectorAll('[data-lenovo-scene]');
  const info = explorer.querySelector('#lenovo-scene-info');
  explorer.addEventListener('click', event => {
    const button = event.target.closest('button[data-lenovo-scene]');
    if (!button) return;
    buttons.forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    info.innerHTML = sceneContent(scenes[button.dataset.lenovoScene]);
  });
}
