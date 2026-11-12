export const microsoftId = 'microsoft-solutions';
export const microsoftTitle = 'Microsoft 365, Azure & Business Applications';

const topics = {
  'microsoft-365': {
    label: 'Microsoft 365',
    heading: 'Set up the tools your team works in every day',
    text: 'Discuss Microsoft 365 licensing, tenant setup and migration for Exchange, Teams and SharePoint. Tell us how many people need access and where their email and files live today.',
    art: 'workplace'
  },
  azure: {
    label: 'Azure',
    heading: 'Plan where your applications and data will run',
    text: 'Review your workloads, dependencies and recovery needs before deciding what to move to Azure. Systech can discuss virtual machines, migration, identity integration and disaster recovery.',
    art: 'azure'
  },
  dynamics: {
    label: 'Dynamics 365',
    heading: 'Map the business process before configuring the app',
    text: 'Identify the sales, customer service or finance workflows you want to improve. Discuss Dynamics 365 CRM and ERP implementation around how those teams work.',
    art: 'dynamics'
  },
  licensing: {
    label: 'Copilot & licensing',
    heading: 'Match licences and Copilot to the people using them',
    text: 'Share your current Microsoft subscriptions and the tasks you want to improve. Discuss licensing, Copilot adoption and training for the teams involved.',
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
    <a class="arrow-link microsoft-topic-link" href="${enquiryUrl(id)}">Enquire about ${topic.label} <span aria-hidden="true">→</span></a>`;
}

export function microsoftSolutionsPage() {
  const initial = 'microsoft-365';
  return `<div class="wrap microsoft-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=cloud">Servers, Storage &amp; Cloud</a></nav>
    <header class="wifi-intro microsoft-intro">
      <h1>${microsoftTitle}</h1>
      <div><p>Plan your Microsoft workplace, cloud workloads and business applications with Systech.</p>
      <a class="button" href="${enquiryUrl()}">Discuss your Microsoft requirements</a></div>
    </header>
    <section class="microsoft-explorer" data-microsoft-explorer aria-labelledby="microsoft-explorer-title">
      <h2 id="microsoft-explorer-title">Explore Microsoft solutions</h2>
      <p>Select an area to see what you can discuss with Systech.</p>
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
      <h2 id="microsoft-scope">What to bring to your first conversation</h2>
      <div class="wifi-offering-grid">
        <article><h3>Users and licences</h3><p>Share how many people need access, which plans you use today and what you want to change.</p></article>
        <article><h3>Systems and data</h3><p>List the workloads, mailboxes, files or business applications that need to move or connect.</p></article>
        <article><h3>Timeline and support</h3><p>Flag renewal dates, migration windows and which teams will need training or support.</p></article>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row">
    <div><h2>Planning a Microsoft rollout?</h2><p>Tell Systech what you use today and what you want to improve.</p></div>
    <a class="button" href="${enquiryUrl()}">Discuss your Microsoft requirements</a>
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
