export const securityDetails = {
  'office-wifi': {
    sourcePath: 'enterprise-solutions/',
    title: 'Enterprise Wi-Fi and switching'
  },
  firewalls: {
    sourcePath: 'network-and-security/',
    title: 'Firewalls and data protection',
    intro: 'Enforce north-south perimeter inspection, mail-gateway quarantine and data loss prevention across Fortinet FortiGate, Sophos, Cisco and Aruba infrastructure.',
    action: 'Request firewall & DLP audit',
    illustration: {
      id: 'firewalls',
      heading: 'Where each control applies',
      instruction: 'Select a control to inspect how perimeter and data policies enforce protection.',
      image: 'network-journey.webp',
      width: 1447,
      height: 294,
      alt: 'An office workstation connects through network equipment to an external service.',
      caption: 'Illustrative perimeter flow. Controls operate in concert across perimeter firewalls, mail gateways and endpoint XDR telemetry.',
      components: {
        firewall: {
          label: 'Firewall',
          title: 'Enforce perimeter policies on Fortinet FortiGate & Sophos firewalls',
          detail: 'Fortinet FortiGate and Sophos next-generation firewalls inspect encrypted traffic, block unauthorised inbound connections and enforce category web filtering alongside Cisco and Aruba edge switching.'
        },
        email: {
          label: 'Email security',
          title: 'Quarantine malicious links & attachments at the gateway',
          detail: 'Email security gateways scan inbound invoices, payloads and impersonated domains in real time—quarantining phishing links and malicious attachments before inbox delivery.'
        },
        dlp: {
          label: 'Data loss prevention',
          title: 'Block unauthorised sensitive file exfiltration',
          detail: 'Policy-driven DLP rules—integrated across gateway controls and Sophos Intercept X, Kaspersky and Seqrite agents—detect and block unapproved external transfers of regulated records and financial spreadsheets.'
        }
      }
    },
    offeringHeading: 'Perimeter, Email & Data Controls Deployed by Systech',
    offerings: [
      ['Firewalls, web filtering & switching', 'Deploy Fortinet FortiGate and Sophos next-generation firewalls paired with Cisco and Aruba access switching, SSL inspection and granular web filtering.'],
      ['Email security & anti-phishing', 'Harden corporate mail gateways against BEC spoofing, malicious attachments and weaponised links with automated sandbox quarantine.'],
      ['Data loss prevention (DLP)', 'Enforce endpoint and gateway DLP rules integrated with Sophos Intercept X, Kaspersky and Seqrite controls to govern confidential file transfers.']
    ],
    closing: 'Where does your organisation need tighter perimeter control?',
    next: 'Share your site count, firewall throughput, mail platform and DLP compliance targets for an architecture audit.'
  },
  'endpoint-protection': {
    sourcePath: 'protect-your-business-with-systechs-comprehensive-endpoint-security-solutions/',
    title: 'Endpoint protection',
    intro: 'Protect laptops, desktops and servers across hybrid teams with Sophos Intercept X, Seqrite Endpoint Security, EDR & Enterprise Mobility, Kaspersky and Fortinet FortiGate-connected controls.',
    action: 'Scope endpoint EDR/XDR rollout',
    illustration: {
      id: 'endpoint',
      heading: 'Follow a suspicious attachment',
      instruction: 'Select each stage to trace automated detection, investigation and containment.',
      image: 'devices-specialist.webp',
      width: 474,
      height: 283,
      alt: 'A workstation with two monitors, used to illustrate detection, investigation and response.',
      caption: 'Automated containment spans detection, forensic investigation and host isolation.',
      components: {
        detect: {
          label: 'Detect',
          title: 'Flag suspicious activity on the device',
          detail: 'Sophos Intercept X, Seqrite Endpoint Security and Kaspersky block known malicious attachments at rest while EDR behavioral sensors flag suspicious process spawns immediately.'
        },
        investigate: {
          label: 'Investigate',
          title: 'Trace execution & cross-stack telemetry',
          detail: 'Forensic timelines trace payload launch trees, child processes and peer-host indicators—correlating endpoint EDR with Fortinet FortiGate, Cisco and Aruba network telemetry.'
        },
        respond: {
          label: 'Respond',
          title: 'Isolate the compromised host',
          detail: 'Automated containment isolates compromised endpoints at the host and firewall boundary in real time across Sophos Intercept X, Seqrite EDR & Enterprise Mobility, Kaspersky and Fortinet FortiGate.'
        }
      }
    },
    offeringHeading: 'Endpoint protection & EDR platforms deployed by Systech',
    offerings: [
      ['Antivirus & Endpoint Security', 'Deploy and renew commercial endpoint suites from Sophos Intercept X, Seqrite Endpoint Security, EDR & Enterprise Mobility, and Kaspersky across Windows, macOS and server workloads.'],
      ['Endpoint detection and response (EDR)', 'Capture host telemetry, stop ransomware encryption and enforce rapid threat triage across Sophos Intercept X, Seqrite EDR and Kaspersky business tiers.'],
      ['Extended detection and response (XDR)', 'Correlate endpoint, Fortinet FortiGate/Sophos firewall, Cisco/Aruba network and mail-gateway alerts into unified investigation workflows with co-termed license governance.']
    ],
    closing: 'What devices and systems do you need to protect?',
    next: 'Share your endpoint count, OS mix and preferred stack (Sophos, Seqrite, Kaspersky or Fortinet) for a consolidated quote.'
  }
};
