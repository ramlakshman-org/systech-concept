const components = {
  workstation: {
    label: 'Workstation',
    title: 'A workstation joins the office Wi-Fi',
    detail: 'A laptop or Wi-Fi-enabled desktop sends and receives data wirelessly through a nearby access point.'
  },
  access: {
    label: 'Access point',
    title: 'An access point brings Wi-Fi to a work area',
    detail: 'A ceiling-mounted access point serves devices in its coverage area and bridges their traffic onto the wired office network.'
  },
  cable: {
    label: 'Ethernet cabling',
    title: 'Ethernet carries traffic back to the network cabinet',
    detail: 'A wired link runs from the access point to the switch. With compatible Power over Ethernet equipment, the same cable can also power the access point.'
  },
  switch: {
    label: 'Network switch',
    title: 'The switch connects equipment across the office',
    detail: 'The switch forwards local traffic and provides a wired connection for access points, desks and other network devices. Internet-bound traffic goes on to the office gateway.'
  }
};

const wifiIllustration = {
  id: 'wifi',
  heading: 'Follow the office connection',
  instruction: 'Select a component to see what it does.',
  image: 'planner-cutaway.webp',
  width: 773,
  height: 529,
  alt: 'An office cutaway with workstations, a ceiling-mounted access point, Ethernet cabling below the floor and a network switch.',
  caption: 'Illustrative office network',
  components
};

export function serviceIllustration(illustration = wifiIllustration) {
  const { id, heading, instruction, image, width, height, alt, caption, components } = illustration;
  const [initialId, initial] = Object.entries(components)[0];
  return `<section class="wifi-explorer" data-wifi-explorer="${id}" aria-labelledby="wifi-diagram-heading">
    <div class="wifi-explorer-heading"><h2 id="wifi-diagram-heading">${heading}</h2><p>${instruction}</p></div>
    <figure class="wifi-cutaway" style="--illustration-width:${width}px">
      <div class="wifi-cutaway-scene">
        <img src="assets/${image}" width="${width}" height="${height}" alt="${alt}">
        <div class="wifi-controls" role="group" aria-label="${heading}">
        ${Object.entries(components).map(([id, { label, position }]) => `
          <button type="button" class="wifi-node" data-wifi-node="${id}"${position ? ` style="--x:${position[0]}%;--y:${position[1]}%"` : ''} aria-pressed="${id === initialId}" aria-controls="wifi-component-info">
            <span>${label}</span>
          </button>`).join('')}
        </div>
      </div>
      <figcaption>${caption}</figcaption>
    </figure>
    <div id="wifi-component-info" class="wifi-component-info" aria-live="polite"><h3>${initial.title}</h3><p>${initial.detail}</p>
      ${illustration.partEnquiry ? `<a class="arrow-link" data-part-enquiry="${illustration.partEnquiry}" href="${illustration.partEnquiry}&part=${initial.part}"><span data-part-enquiry-label>Enquire about ${initial.label.toLowerCase()}</span> <span aria-hidden="true">→</span></a>` : ''}
    </div>
  </section>`;
}

export function bindServiceIllustration(explorer, illustration = wifiIllustration) {
  const buttons = explorer.querySelectorAll('[data-wifi-node]');
  const info = explorer.querySelector('#wifi-component-info');
  explorer.addEventListener('click', event => {
    const control = event.target.closest('button[data-wifi-node]');
    if (!control) return;
    const id = control.dataset.wifiNode;
    const component = illustration.components[id];
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button === control)));
    info.querySelector('h3').textContent = component.title;
    info.querySelector('p').textContent = component.detail;
    const partLink = info.querySelector('[data-part-enquiry]');
    if (partLink) {
      partLink.href = partLink.dataset.partEnquiry + '&part=' + component.part;
      partLink.querySelector('[data-part-enquiry-label]').textContent = 'Enquire about ' + component.label.toLowerCase();
    }
  });
}
