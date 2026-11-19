export const microsoftId = 'microsoft-solutions';
export const microsoftTitle = 'Microsoft 365, Azure & Business Applications';

const topics = {
  'microsoft-365': {
    label: 'Microsoft 365',
    heading: 'Deploy and govern Microsoft 365 workplace tenants',
    text: 'Provision Microsoft 365 Business and Enterprise seats, configure Exchange Online security, migrate mailboxes and SharePoint libraries, and standardise Microsoft Teams governance under predictable CSP billing.',
    art: 'workplace'
  },
  azure: {
    label: 'Azure',
    heading: 'Architect, migrate and harden Azure cloud workloads',
    text: 'Deploy right-sized Azure virtual machines, Entra ID hybrid identity federation, ExpressRoute/VPN connectivity and Azure Site Recovery disaster failover—integrated cleanly with on-premises ThinkSystem clusters under unified CSP billing.',
    art: 'azure'
  },
  dynamics: {
    label: 'Dynamics 365',
    heading: 'Implement Dynamics 365 CRM & ERP around operational workflows',
    text: 'Configure Dynamics 365 Sales, Customer Service, Finance and Supply Chain modules aligned to Indian GST workflows, role approvals and structured legacy ERP data migration.',
    art: 'dynamics'
  },
  licensing: {
    label: 'Copilot & licensing',
    heading: 'Optimise Microsoft CSP licensing & Copilot readiness',
    text: 'Consolidate Microsoft 365 E3/E5, Windows 11 Pro and Azure reservations via CSP, enforce SharePoint permission hygiene for Copilot readiness, and deliver role-based user enablement.',
    art: 'licensing'
  }
};

function enquiryUrl(focus) {
  const query = new URLSearchParams({ page: 'contact', service: 'cloud', topic: microsoftId });
  if (focus) query.set('focus', focus);
  return '?' + query;
}

export function microsoftEnquiryRequirement(params) {
  if (params.get('service') !== 'cloud' || params.get('topic') !== microsoftId) return '';
  const focus = params.get('focus');
  return Object.hasOwn(topics, focus) ? 'Microsoft Solutions · ' + topics[focus].label : 'Microsoft Solutions';
}

function topicContent(id, topic) {
  return `<h3>${topic.heading}</h3><p>${topic.text}</p>
    <a class="arrow-link microsoft-topic-link" href="${enquiryUrl(id)}">Scope ${topic.label} rollout <span aria-hidden="true">→</span></a>`;
}

export function microsoftSolutionsPage() {
  const initial = 'microsoft-365';
  return `<div class="wrap microsoft-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=cloud">Servers, Storage &amp; Cloud</a></nav>
    <header class="wifi-intro microsoft-intro">
      <h1>${microsoftTitle}</h1>
      <div><p>Architect Microsoft 365 tenants, Azure virtual machines, Entra ID hybrid identity, Dynamics 365 and Copilot-ready CSP licensing with Systech.</p>
      <a class="button" href="${enquiryUrl()}">Scope your Microsoft rollout</a></div>
    </header>
    <section class="microsoft-explorer" data-microsoft-explorer aria-labelledby="microsoft-explorer-title">
      <h2 id="microsoft-explorer-title">Explore Microsoft solutions</h2>
      <p>Select a Microsoft pillar to inspect architecture, migration, Entra ID identity and CSP licensing deliverables.</p>
      <figure class="microsoft-illustration">
        <div class="microsoft-scenes" role="group" aria-label="Microsoft solution areas">
          ${Object.entries(topics).map(([id, topic]) => `<button type="button" class="microsoft-scene" data-microsoft-topic="${id}" aria-pressed="${id === initial}" aria-controls="microsoft-topic-info">
            <img src="assets/microsoft-${topic.art}.webp" width="720" height="408" alt="">
            <span>${topic.label}</span>
          </button>`).join('')}
        </div>
        <figcaption>Illustrative setups</figcaption>
      </figure>
      <div class="microsoft-topic-info" id="microsoft-topic-info" aria-live="polite">${topicContent(initial, topics[initial])}</div>
    </section>
    <section class="wifi-offering" aria-labelledby="microsoft-scope">
      <h2 id="microsoft-scope">Rollout scoping checklist</h2>
      <div class="wifi-offering-grid">
        <article><h3>Users &amp; CSP licensing</h3><p>Share seat counts, active Microsoft 365 or volume agreements, renewal dates and Copilot eligibility groups.</p></article>
        <article><h3>Azure VMs, Entra ID &amp; data</h3><p>List on-premises servers, Exchange mailboxes, SharePoint libraries and business apps scheduled for Azure migration or Entra ID integration.</p></article>
        <article><h3>Cutover &amp; governance</h3><p>Specify target cutover windows, disaster recovery RPO/RTO targets and admin or user enablement requirements.</p></article>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row">
    <div><h2>Planning a Microsoft 365, Azure or Dynamics rollout?</h2><p>Share your user count, active tenant estate and CSP renewal schedule for a structured architecture and licensing plan.</p></div>
    <a class="button" href="${enquiryUrl()}">Scope your Microsoft rollout</a>
  </div></section>`;
}

export function bindMicrosoftSolutions(explorer) {
  const buttons = explorer.querySelectorAll('[data-microsoft-topic]');
  const info = explorer.querySelector('#microsoft-topic-info');
  explorer.addEventListener('click', event => {
    const button = event.target.closest('button[data-microsoft-topic]');
    if (!button) return;
    const id = button.dataset.microsoftTopic;
    buttons.forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    info.innerHTML = topicContent(id, topics[id]);
  });
}
