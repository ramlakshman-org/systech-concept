export const securityDetails = {
  'office-wifi': {
    sourcePath: 'enterprise-solutions/',
    title: 'Enterprise Wi-Fi and switching'
  },
  firewalls: {
    sourcePath: 'network-and-security/',
    title: 'Firewalls and data protection',
    intro: 'Control how traffic moves through your network and how sensitive information is shared by email or file transfer.',
    action: 'Enquire about firewalls and data protection',
    illustration: {
      id: 'firewalls',
      heading: 'Where each control applies',
      instruction: 'Select a control to see a practical example.',
      image: 'network-journey.webp',
      width: 1447,
      height: 294,
      alt: 'An office workstation connects through network equipment to an external service.',
      caption: 'Illustrative network. Where each control runs depends on your setup.',
      components: {
        firewall: {
          label: 'Firewall',
          title: 'Apply rules at a network boundary',
          detail: 'For example, allow staff to reach an approved service while blocking unwanted inbound connections. Content filtering can also restrict access to risky or disallowed websites.'
        },
        email: {
          label: 'Email security',
          title: 'Check messages before users act on them',
          detail: 'For example, scan an incoming invoice for suspicious links or attachments. The email security system can flag or quarantine messages based on policy.'
        },
        dlp: {
          label: 'Data loss prevention',
          title: 'Check where sensitive files are sent',
          detail: 'For example, a DLP rule can flag or block a spreadsheet containing sensitive information when someone tries to upload it to an unapproved service.'
        }
      }
    },
    offeringHeading: 'What Systech can help you put in place',
    offerings: [
      ['Firewalls and web filtering', 'Discuss rules for inbound and outbound traffic, internet content filtering, and how the firewall fits your office network.'],
      ['Email protection', 'Review how your organisation handles suspicious messages, unsafe links and attachments.'],
      ['Data loss prevention (DLP)', 'Identify sensitive information and the email or file-sharing channels where policy checks are needed.']
    ],
    closing: 'Where does your organisation need more control?',
    next: 'Share your sites, email platform and the kinds of information you need to protect.'
  },
  'endpoint-protection': {
    sourcePath: 'protect-your-business-with-systechs-comprehensive-endpoint-security-solutions/',
    title: 'Endpoint protection',
    intro: 'Protect laptops, desktops and other endpoints with antivirus, endpoint detection and response, and tools that help investigate threats across systems.',
    action: 'Enquire about endpoint protection',
    illustration: {
      id: 'endpoint',
      heading: 'Follow a suspicious attachment',
      instruction: 'Select each stage to see how an investigation can progress.',
      image: 'devices-specialist.webp',
      width: 474,
      height: 283,
      alt: 'A workstation with two monitors, used to illustrate detection, investigation and response.',
      caption: 'Illustrative incident. Available actions depend on the tools and policies in place.',
      components: {
        detect: {
          label: 'Detect',
          title: 'Flag suspicious activity on the device',
          detail: 'Antivirus can block a known malicious attachment. If opening an attachment starts unusual activity, endpoint detection and response (EDR) can surface it for investigation.'
        },
        investigate: {
          label: 'Investigate',
          title: 'Work out what the attachment did',
          detail: 'Review which application opened it, what ran next, and whether other devices show similar behaviour. Extended detection and response (XDR) can bring together signals from email, endpoints and other connected tools.'
        },
        respond: {
          label: 'Respond',
          title: 'Contain the affected device',
          detail: 'With a supported response capability, the security team can isolate the device from the network while it investigates and removes the threat.'
        }
      }
    },
    offeringHeading: 'Choose the level of protection you need',
    offerings: [
      ['Antivirus', 'Protect devices against known malware and other threats that your protection can identify and block.'],
      ['Endpoint detection and response', 'Capture device activity and use it to investigate alerts and respond on affected endpoints.'],
      ['Extended detection and response', 'Connect signals across supported security tools to see related activity in one investigation.']
    ],
    closing: 'What devices and systems do you need to protect?',
    next: 'Share your device count, operating systems and the security tools you already use.'
  }
};
