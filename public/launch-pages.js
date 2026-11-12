const hrEmail = 'hr@teamsystech.com';
const contactEmail = 'contact@teamsystech.com';

export function careersPage() {
  return `<div class="wrap launch-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a> <span aria-hidden="true">/</span> <a class="crumb" href="?page=company">Company</a></nav>
    <header class="wifi-intro careers-intro">
      <div><h1>Careers at Systech</h1><p>Help businesses equip their teams, connect their offices and keep their IT running.</p></div>
      <figure>
        <img src="assets/company-service-stages.webp" width="978" height="432" alt="Illustration of a device preparation bench, an office network rack and an equipment repair bench.">
      </figure>
    </header>
    <section class="wifi-offering" aria-labelledby="careers-work">
      <h2 id="careers-work">Explore our work</h2>
      <div class="wifi-offering-grid">
        <article><h3>Workplace technology</h3><p>Help customers choose devices and equipment for the way their teams work.</p><a class="arrow-link" href="?page=devices">Explore devices and accessories <span aria-hidden="true">→</span></a></article>
        <article><h3>IT infrastructure</h3><p>Explore how we connect workplaces, set up meeting rooms and plan office security.</p><a class="arrow-link" href="?page=office">Explore office infrastructure <span aria-hidden="true">→</span></a></article>
        <article><h3>Repairs and support</h3><p>See how we help customers diagnose equipment issues and keep devices in use.</p><a class="arrow-link" href="?page=repairs">Explore repairs and support <span aria-hidden="true">→</span></a></article>
      </div>
    </section>
  </div>
  <section class="closing"><div class="wrap closing-row">
    <div><h2>Ask about current openings</h2><p>Tell the HR team which area you’re interested in and where you’re based. They can share available roles and application instructions.</p></div>
    <a class="button" href="mailto:${hrEmail}?subject=TeamSystech%20career%20enquiry">Email HR</a>
  </div></section>`;
}

const privacy = {
  title: 'Privacy Policy',
  intro: 'How this preview handles the information you enter when you contact Systech Services Private Limited.',
  source: 'https://teamsystech.com/privacy-policy/',
  reference: 'Read the current published Privacy Policy',
  sections: [
    ['enquiry-information', 'Information you provide', 'The enquiry form asks for your name, work email, company, selected service and project requirements. If you use the Office Planner or the asset recovery enquiry, your draft can include the scope or equipment details you provide.'],
    ['email-drafts', 'What happens when you prepare an enquiry', 'The form prepares a draft in your browser. If you open and send it from your email app, your email provider delivers the details to Systech so the team can respond to your request.'],
    ['careers-contact', 'Careers enquiries', 'The Careers page opens a draft addressed to the HR inbox. You choose what to include before sending it from your email app.'],
    ['hosting-and-links', 'Hosting and external links', 'If this preview requires sign-in, its hosting provider handles access and sign-in. External links, including directions, open services that have their own privacy notices.'],
    ['privacy-questions', 'Privacy questions', `For a question about information you have shared with Systech, email <a href="mailto:${contactEmail}">${contactEmail}</a>.`]
  ]
};

const terms = {
  title: 'Terms & Conditions',
  intro: 'How to use the website to discuss products, projects, repairs and support with Systech Services Private Limited.',
  source: 'https://teamsystech.com/terms-and-conditions/',
  reference: 'Read the current published Terms & Conditions',
  sections: [
    ['website-information', 'Website information', 'Use the service descriptions, diagrams and Office Planner to prepare for a conversation with Systech. Confirm equipment compatibility, site requirements and the proposed scope with the team before proceeding.'],
    ['enquiries-and-quotes', 'Enquiries and quotations', 'The enquiry form prepares an email draft for review and sending. Ask Systech to confirm availability, pricing, taxes, delivery and installation in a written quotation.'],
    ['service-scope', 'Service scope and handover', 'For installations, repairs, maintenance and asset recovery, confirm the work, exclusions, handover and any applicable warranty, return or settlement terms in the documents for your order or project. See the <a href="?page=return-policy">Return Policy draft</a> for the points under review.'],
    ['third-party-products', 'Third-party products and links', 'Product names identify the equipment and platforms discussed on the site. Confirm applicable licensing, support and warranty terms with Systech for the specific products you are considering.'],
    ['terms-questions', 'Questions about a quote or order', `Email <a href="mailto:${contactEmail}">${contactEmail}</a> and include the relevant quotation or order reference if you have one.`]
  ]
};

const returns = {
  title: 'Return Policy',
  intro: 'For questions about a purchase, have your order reference and item details ready when you contact Systech.',
  source: 'https://teamsystech.com/return-policy/',
  reference: 'Read the current published Return Policy',
  sections: [
    ['returns-eligibility', 'Which purchases qualify', 'TeamSystech to confirm. The live Return Policy describes a seven-day window for unused items. The live <a href="https://teamsystech.com/terms-and-conditions/">Terms &amp; Conditions</a> say goods sold cannot be returned or exchanged. Please clarify which orders each rule applies to, including business purchases and custom orders.'],
    ['damaged-or-incorrect', 'Damaged, defective or incorrect items', 'TeamSystech to confirm the reporting deadline, what the customer should provide, and when the claim goes to Systech or to the manufacturer under warranty.'],
    ['return-process', 'Return approval and shipping', 'TeamSystech to confirm whether a return authorisation number is needed, the correct return address, who pays shipping and what packaging is required. Contact Systech for instructions before sending an item.'],
    ['refunds-and-exchanges', 'Refunds and exchanges', 'TeamSystech to confirm which remedies apply, whether deductions or restocking fees apply, and how long an approved refund or exchange takes.'],
    ['return-questions', 'Questions about a purchase', `Email <a href="mailto:${contactEmail}?subject=Return%20or%20order%20enquiry">${contactEmail}</a> with your order reference, the item and a short description of the issue.`]
  ]
};

function policyPage(policy) {
  return `<div class="wrap launch-page policy-page">
    <nav class="repairs-crumb" aria-label="Breadcrumb"><a class="crumb" href="./">Home</a></nav>
    <header class="policy-header">
      <h1>${policy.title}</h1>
      <p>${policy.intro}</p>
    </header>
    <div class="policy-review-note">
      <p><strong>Draft for TeamSystech review.</strong> Approval is pending before public launch.</p>
      <a class="arrow-link" href="${policy.source}">${policy.reference} <span aria-hidden="true">→</span></a>
    </div>
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
