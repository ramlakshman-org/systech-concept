export const WHATSAPP_NUMBER = '919972633667';
export const CONTACT_EMAIL = 'contact@teamsystech.com';
export const CONTACT_PHONE = '+91 95357 24411';
export const CONTACT_LANDLINE = '080 2672 4411';
// Optional CRM / form submission webhook URL for Phase 3 backend cutover (leave empty for browser-side brief + fallback actions)
// TODO (Pre-Cutover): Wire live CRM / form webhook URL before production DNS switch
export const ENQUIRY_ENDPOINT = '';

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const enterpriseMetrics = [
  { value: '28+ yrs', label: 'Operating since Sep 1998', detail: 'Bengaluru HQ · Pan-India delivery' },
  { value: '₹500CR+', label: 'Annual scale & turnover', detail: 'Enterprise procurement capacity' },
  { value: '100+', label: 'Engineering & support team', detail: 'Pre-sales, deployment & AMC' },
  { value: '2,000+', label: 'Enterprise & SMB accounts', detail: 'Active across India' }
];

export const verifiedCredentials = [
  {
    badge: 'OEM Flagship',
    title: 'Lenovo 360 Platinum Partner (2026)',
    issuer: 'Issued by Lenovo India · IDG Commercial & ISG Data Centre',
    detail: 'Active 2026 Platinum authorization backed by Lenovo 360 Platinum documentation, Bengaluru pre-sales engineering and 5-Year Contribution Excellence recognition.',
    actionLabel: 'Open Lenovo Platinum hub',
    href: '?page=lenovo-partner'
  },
  {
    badge: 'Quality Governance',
    title: 'ISO 9001:2015 Certified Systems Integrator',
    issuer: 'Standardised Enterprise Procurement, Cabling & AMC Governance',
    detail: 'Audited workflows spanning single-invoice multi-OEM sourcing, pre-deployment BIOS tagging, Fluke/OTDR link testing and scheduled preventive maintenance.',
    actionLabel: 'View ISO governance scope',
    href: '?page=company#trust-standards'
  },
  {
    badge: 'OEM Recognition',
    title: '12+ Multi-OEM Awards & Channel Honors',
    issuer: 'Lenovo ThinkPad / Lenovo One · ASUS · AMD · Sophos',
    detail: 'Consistent partner accolades across commercial notebooks, AMD workstation/server compute and Synchronized Security perimeter deployments across South India.',
    actionLabel: 'Explore 20+ OEM partners',
    href: '?page=partners'
  },
  {
    badge: 'Statutory Compliance',
    title: 'Government-Compliant E-Waste & Asset Recovery',
    issuer: 'Free Pack & Pickup (Qualified Lots) · Statutory Disposal Docs',
    detail: 'Audited IT Asset Recovery workflow with certified media sanitization or destruction and compliant E-Waste Disposal Certificates per Government norms.',
    actionLabel: 'Open IT Asset Recovery',
    href: '?page=e-waste-recycling#asset-recovery'
  }
];

export const clientRoster = [
  { name: 'Sapiens', sector: 'Enterprise InsuranceTech', href: '?page=industries&sector=fintech-bfsi' },
  { name: 'Tata Power Solar', sector: 'Clean Energy & Manufacturing', href: '?page=industries&sector=manufacturing' },
  { name: 'TerraPay', sector: 'Global Fintech & Payments', href: '?page=industries&sector=fintech-bfsi' },
  { name: 'Faiveley Transport Czech', sector: 'Rail & Industrial Engineering', href: '?page=industries&sector=manufacturing' },
  { name: 'Mitsubishi Power', sector: 'Power & Energy Systems', href: '?page=industries&sector=manufacturing' },
  { name: 'Citrix', sector: 'Enterprise Cloud & Workspace', href: '?page=industries&sector=gcc-tech' },
  { name: 'Yokogawa', sector: 'Industrial Automation', href: '?page=industries&sector=manufacturing' },
  { name: 'Manipal Hospitals', sector: 'Multi-Site Healthcare', href: '?page=industries&sector=healthcare' },
  { name: 'Danske IT', sector: 'Banking Tech & GCCs', href: '?page=industries&sector=fintech' },
  { name: 'Coca-Cola', sector: 'Beverages & Distribution', href: '?page=case-studies' }
];

export const partnerPillars = [
  {
    id: 'compute',
    eyebrow: 'End-User Workplaces & Commercial Fleets',
    title: 'Multi-OEM laptops, desktops, workstations & mobile devices',
    description: 'Standardise executive laptops, engineering CAD workstations, commercial desktops and Apple devices with single-point deployment.',
    partners: [
      { name: 'Lenovo', tier: '360 Platinum Partner (2026)', focus: 'ThinkPad, ThinkBook, ThinkCentre, ThinkStation, ThinkSystem, ThinkAgile & Genuine Spares', href: '?page=lenovo-partner', featured: true },
      { name: 'Dell', tier: 'Commercial Systems', focus: 'Latitude business laptops, OptiPlex desktops, Precision workstations and enterprise monitors', href: '?page=business-computing' },
      { name: 'HP', tier: 'Commercial Compute', focus: 'EliteBook, ProBook, Z-series workstations and business desktop hardware configurations', href: '?page=business-computing' },
      { name: 'Apple', tier: 'MacBook & iPhone', focus: 'MacBook Pro/Air, Mac Studio, iPad and business iPhone provisioning for creative & dev teams', href: '?page=business-computing' },
      { name: 'ASUS', tier: 'Business & Commercial', focus: 'ExpertBook laptops, commercial desktops and professional display options for SMB & enterprise teams', href: '?page=business-computing' },
      { name: 'Acer', tier: 'Commercial & Edu', focus: 'TravelMate laptops, Veriton desktops and cost-effective institutional fleet rollouts', href: '?page=business-computing' }
    ]
  },
  {
    id: 'cloud',
    eyebrow: 'Data Centre, Silicon & Cloud Platforms',
    title: 'Servers, hyperconverged compute, virtualisation & hybrid cloud',
    description: 'Architect ThinkSystem compute powered by AMD EPYC, VMware virtualisation clusters, M365 Copilot and multi-cloud migrations.',
    partners: [
      { name: 'Microsoft', tier: 'Solutions Reseller', focus: 'Microsoft 365, Azure workloads, Dynamics 365 CRM/ERP, Copilot & CSP licensing', href: '?page=microsoft-solutions', featured: true },
      { name: 'VMware', tier: 'Virtualisation Stack', focus: 'vSphere cluster licensing renewals, core-count audits and HCI workload consolidation', href: '?page=software-licensing' },
      { name: 'AMD', tier: 'Silicon Ecosystem', focus: 'Ryzen PRO mobile workstations and EPYC-powered ThinkSystem server architectures', href: '?page=servers-hci' },
      { name: 'AWS & Google Cloud', tier: 'Cloud Migration', focus: 'Architecture planning, workload migration, identity sync and ongoing multi-cloud operations', href: '?page=cloud-migration' }
    ]
  },
  {
    id: 'network',
    eyebrow: 'Campus Networking, Cybersecurity & MDM',
    title: 'Switching, Wi-Fi, UTM firewalls, endpoint AV & renewals',
    description: 'Design resilient wired and wireless LANs paired with boundary firewalls, antivirus/XDR, mobile device management and zero-gap renewals.',
    partners: [
      { name: 'Cisco', tier: 'Enterprise Networking', focus: 'Campus switching, Catalyst routing, structured access layers and unified IP telephony', href: '?page=office-wifi' },
      { name: 'Aruba Networks', tier: 'Wireless & Switching', focus: 'High-density office Wi-Fi, PoE+ switching, ClearPass NAC & Aruba Central renewals', href: '?page=software-licensing' },
      { name: 'Fortinet', tier: 'Network Security', focus: 'Next-gen FortiGate boundary firewalls, SD-WAN branch links & FortiGuard renewals', href: '?page=software-licensing' },
      { name: 'Sophos', tier: 'Synchronised Security', focus: 'Intercept X EDR/XDR endpoint defence, XGS firewalls & synchronised co-term renewals', href: '?page=software-licensing' },
      { name: 'Kaspersky', tier: 'Authorised Partner · Bengaluru', focus: 'Enterprise endpoint antivirus, ransomware defence, mail/server suites & annual keys', href: '?page=software-licensing' },
      { name: 'Seqrite', tier: 'Endpoint Security', focus: 'Enterprise endpoint antivirus, EDR, patch compliance and device control built for Indian branch networks.', href: '?page=software-licensing' },
      { name: 'Codeproof MDM', tier: 'Unified Device Control', focus: 'Centralised Android, iOS & Windows mobile management, kiosk lockdown & security policies', href: '?page=software-licensing' }
    ]
  },
  {
    id: 'physical',
    eyebrow: 'Physical Security & Site Infrastructure',
    title: 'Surveillance, biometric door access & intrusion safety',
    description: 'Unify biometric attendance, door access controllers, IP CCTV surveillance and building alarms over structured office cabling.',
    partners: [
      { name: 'Honeywell', tier: 'Building & Fire Systems', focus: 'Enterprise intrusion alarms, integrated safety sensors and access infrastructure', href: '?page=cctv-access-control' },
      { name: 'Hikvision', tier: 'Video Surveillance', focus: 'IP CCTV cameras, NVR recording appliances and perimeter monitoring', href: '?page=cctv-access-control' },
      { name: 'CP Plus', tier: 'Surveillance Systems', focus: 'Commercial multi-site CCTV deployments and central monitoring setups', href: '?page=cctv-access-control' },
      { name: 'eSSL Security', tier: 'Biometrics & Access', focus: 'Biometric door readers, attendance terminals and turnstile controller workflows', href: '?page=cctv-access-control' }
    ]
  },
  {
    id: 'print',
    eyebrow: 'Office Imaging & Managed Print Fleets',
    title: 'Workgroup laser printers, EcoTank & multifunction scan stations',
    description: 'Equip floors and shared hubs with reliable networked print, high-volume scanning and projection hardware from four Tier-1 OEMs.',
    partners: [
      { name: 'HP Print', tier: 'Workgroup & LaserJet', focus: 'Networked LaserJet monochrome and colour multifunction printers sized per floor', href: '?page=displays-tablets-printers' },
      { name: 'Brother', tier: 'Print & Scan', focus: 'High-duty network multifunction laser printers and departmental document workflows', href: '?page=displays-tablets-printers' },
      { name: 'Canon', tier: 'Enterprise Imaging', focus: 'Departmental multifunction copiers, office print and archival document scanners', href: '?page=displays-tablets-printers' },
      { name: 'Epson', tier: 'Print & Projection', focus: 'Low-power EcoTank business printers alongside boardroom & classroom projectors', href: '?page=displays-tablets-printers' }
    ]
  }
];

export const industryPlaybooks = [
  {
    id: 'gcc-tech',
    label: 'GCCs & Software',
    title: 'Global Capability Centres & Fast-Scaling Tech Teams',
    summary: 'Zero-gap onboarding from day-one new floor cabling and high-density Wi-Fi to imaged ThinkPad and Mac fleets.',
    image: 'assets/industry-gcc.webp',
    imageWidth: 760,
    imageHeight: 470,
    imageAlt: 'Isometric tech floor showing a four-seat engineering pod, glass AV huddle room with ceiling Wi-Fi, structured underfloor cabling and an edge server cabinet.',
    challenges: [
      'Aggressive fit-out timelines when opening a 50–100+ seat Bengaluru floor.',
      'Standardised developer laptops (ThinkPad / Apple), USB-C docks and multi-display desks.',
      'Zero-trust Wi-Fi segmentation, cloud identity (M365 / Azure) and boardroom AV that joins calls reliably.'
    ],
    stack: ['Lenovo ThinkPad & ThinkVision', 'Apple MacBook', 'Aruba / Cisco Wi-Fi', 'Microsoft 365 & Azure', 'Structured Cat6A & Fibre'],
    plannerPreset: '?page=planner&seats=100&option=meeting&option=cctv&option=access',
    enquiryTopic: 'Industry playbook: GCC & Software office infrastructure'
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Hospitals, Diagnostics & Clinical Networks',
    summary: '24/7 reliable local compute, redundant storage/backup, ward connectivity and access-controlled clinical areas.',
    image: 'assets/industry-healthcare.webp',
    imageWidth: 760,
    imageHeight: 424,
    imageAlt: 'Isometric clinical bay showing a diagnostic workstation, corridor IP camera, biometric access door and glass-enclosed PACS and EMR storage racks.',
    challenges: [
      'Round-the-clock availability for EMR/HIS terminals, radiology workstations and reception kiosks.',
      'Redundant on-premises ThinkSystem servers + SAN/NAS storage backed up alongside hybrid DR.',
      'Biometric access control for pharmacy/server rooms plus multi-zone IP CCTV retention.'
    ],
    stack: ['Lenovo ThinkCentre & ThinkStation', 'ThinkSystem & SAN Backup', 'UPS Power Continuity', 'eSSL Access & Hikvision NVR', 'AMC Preventive SLA'],
    plannerPreset: '?page=planner&seats=50&option=cctv&option=access&option=servers',
    enquiryTopic: 'Industry playbook: Healthcare IT, servers & AMC support'
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing & Energy',
    title: 'Factories, Plants & Multi-Site Industrial Operations',
    summary: 'Optical fibre backbones bridging shop floors to admin blocks, plus rugged endpoints and CAD/engineering workstations.',
    image: 'assets/industry-manufacturing.webp',
    imageWidth: 760,
    imageHeight: 439,
    imageAlt: 'Isometric manufacturing IT link showing a CAD dual-monitor workstation wired via an optical fibre conduit to an industrial switch cabinet, turnstile biometric access and security camera.',
    challenges: [
      'Long-distance optical fibre links between production bays, warehouses and admin offices.',
      'ISV-certified ThinkStation workstations for CAD/CAM, simulation and automation software.',
      'Perimeter CCTV, time-attendance biometrics and predictable AMC across distributed sites.'
    ],
    stack: ['Fibre Optic Backbone', 'Lenovo ThinkStation & Edge Servers', 'Honeywell & Hikvision Security', 'eSSL Biometrics', 'Comprehensive AMC'],
    plannerPreset: '?page=planner&seats=100&option=cctv&option=access&option=servers',
    enquiryTopic: 'Industry playbook: Manufacturing cabling, workstations & plant security'
  },
  {
    id: 'fintech-bfsi',
    label: 'Fintech & BFSI',
    title: 'Financial Services, Payments & Regulated Enterprises',
    summary: 'Audit-ready endpoint defence, boundary firewalling, DLP governance and documented ITAD at end of device life.',
    image: 'assets/industry-fintech.webp',
    imageWidth: 760,
    imageHeight: 381,
    imageAlt: 'Isometric zero-trust architecture showing enterprise laptops protected behind a boundary firewall shield, biometric server entry and mirrored storage arrays.',
    challenges: [
      'Preventing data exfiltration via USB, web uploads or email attachments under strict compliance reviews.',
      'Hardened EDR/XDR telemetry across distributed hybrid workforces and branch offices.',
      'Verifiable end-of-life asset inventory, data sanitization and compliant e-waste handover.'
    ],
    stack: ['Lenovo ThinkPad & Premier Support', 'Fortinet Boundary Firewall', 'Sophos EDR/XDR & DLP', 'Microsoft 365 Compliance', 'Compliant IT Asset Recovery'],
    plannerPreset: '?page=planner&seats=50&option=meeting&option=access&option=servers',
    enquiryTopic: 'Industry playbook: Fintech cybersecurity, DLP & endpoint fleet'
  }
];

export const referenceBlueprints = [
  {
    tag: 'Workplace Fit-Out Blueprint',
    title: 'Turnkey 100-seat multi-floor tech office: cabling to imaged laptops',
    image: 'assets/resources-floor-plan.webp',
    imageWidth: 966,
    imageHeight: 341,
    imageAlt: 'Overhead CAD office plan showing workstation clusters, conference room and blue structured cabling to the rack.',
    architecture: 'Pre-terminated Cat6A desk drops + dual-floor fibre riser → Aruba ceiling APs + PoE switching → Lenovo ThinkPad fleet with USB-C docks → Conference AV + biometric door access.',
    outcomeScope: 'Single-vendor handover schedule covering passive cabling test reports, active network rack labelling and per-seat device asset tags.',
    href: '?page=planner&seats=100&option=meeting&option=cctv&option=access'
  },
  {
    tag: 'Data Centre & Cloud Blueprint',
    title: 'On-premises ThinkSystem + SAN virtualisation paired with M365 & Azure',
    image: 'assets/microsoft-azure.webp',
    imageWidth: 720,
    imageHeight: 408,
    imageAlt: 'Isometric three-node server infrastructure connected directly to an Azure hybrid cloud silhouette.',
    architecture: 'Dual-node Lenovo ThinkSystem rack servers + SAN block storage + online UPS runtime → VMware virtualisation + FortiGate HA firewall → Microsoft 365 & Azure DR replication.',
    outcomeScope: 'Consolidates scattered branch workloads into one documented rack architecture with clear RPO/RTO recovery playbooks.',
    href: '?page=servers-hci'
  },
  {
    tag: 'Lifecycle & Spares Blueprint',
    title: 'Fleet longevity program: genuine Lenovo spares, RAM/SSD upgrades & AMC',
    image: 'assets/devices-mobile.webp',
    imageWidth: 400,
    imageHeight: 277,
    imageAlt: 'Commercial ThinkPad laptop with USB-C dock and wireless headset on a standard employee desk.',
    architecture: 'Central asset register across deployed laptops → preventive quarterly health checks → genuine Lenovo FRU battery/keyboard/display replacement & NVMe renewal → documented ITAD pickup.',
    outcomeScope: 'Extends commercial laptop service life across 3–5 year refresh cycles without grey-market component failures.',
    href: '?page=lenovo-partner#spares-finder'
  }
];

export const deploymentCases = [
  {
    id: 'gcc-campus',
    tag: '01 · Workplace & Structured Fit-Out',
    sector: 'Enterprise SaaS & GCC',
    title: 'Multi-floor Bengaluru software campus: pre-imaged laptops, Cat6A cabling & conference AV',
    metrics: ['450+ Seats Delivered', '14-Day Turnkey Fit-Out', '100% Fluke Cat6A Certified'],
    image: 'assets/industry-gcc.webp',
    width: 760,
    height: 470,
    alt: 'Isometric software floor showing ThinkPad workstations, dual-monitor engineering bay, boardroom AV and ceiling Wi-Fi access points.',
    challenge: 'Synchronising civil interiors, structured cabling, enterprise Wi-Fi, conference AV and hardware onboarding inside one tight move-in schedule.',
    architecture: 'Pre-terminated Cat6A desk drops and optical fibre floor risers feeding PoE+ core switches, ceiling Wi-Fi 6/7 APs, USB-C docked ThinkPad / MacBook desks and unified video bars.',
    deliverables: ['Fluke-style passive link test schedules & patch port maps', 'BIOS-tagged laptops shipped per team pod', 'Conference room wiring & single-touch AV handover'],
    stack: ['Lenovo ThinkPad & ThinkVision', 'Aruba / Cisco Switching & Wi-Fi', 'Microsoft 365 & Autopilot', 'eSSL Access & Hikvision CCTV'],
    plannerHref: '?page=planner&seats=100&option=meeting&option=cctv&option=access',
    enquiryHref: '?page=contact&service=office&requirements=' + encodeURIComponent('Reference Architecture 01: Multi-floor tech office campus rollout')
  },
  {
    id: 'datacentre-hci',
    tag: '02 · Server, Storage & Hybrid Cloud',
    sector: 'Financial Services & Core Ops',
    title: 'High-availability ThinkSystem virtualisation cluster paired with SAN backup & boundary firewall',
    metrics: ['99.98% Cluster Uptime', '<15 Min RPO Failover', 'Dual-HA FortiGate + SAN'],
    image: 'assets/industry-fintech.webp',
    width: 760,
    height: 381,
    alt: 'Isometric zero-trust architecture showing enterprise laptops protected behind a boundary firewall shield, biometric entry and mirrored storage arrays.',
    challenge: 'Replacing ageing standalone tower servers with redundant local virtualisation, offline audit retention and documented Azure failover recovery.',
    architecture: 'Dual-node Lenovo ThinkSystem rack hosts wired cleanly to shared SAN/NAS block storage, dual online UPS feeds, HA FortiGate perimeter firewalls and Azure backup replication.',
    deliverables: ['Rack elevation, power load & VLAN boundary documentation', 'Hypervisor clustering & tested restore runbooks', 'Active-passive firewall failover & Sophos XDR telemetry'],
    stack: ['Lenovo ThinkSystem & SAN', 'Fortinet FortiGate HA', 'Sophos Intercept X', 'Microsoft Azure & LTO Backup'],
    plannerHref: '?page=planner&seats=50&option=cctv&option=access&option=servers',
    enquiryHref: '?page=contact&service=cloud&requirements=' + encodeURIComponent('Reference Architecture 02: ThinkSystem cluster, SAN backup and HA firewall')
  },
  {
    id: 'clinical-plant',
    tag: '03 · Multi-Zone Clinical & Industrial Edge',
    sector: 'Healthcare & Manufacturing',
    title: 'Always-on clinical & plant operations linking edge workstations, fibre trunks & biometric access',
    metrics: ['24x7 Clinical & Plant SLA', '4-Hr On-Site Escalation', 'Zero-Drop Fibre Ring'],
    image: 'assets/industry-healthcare.webp',
    width: 760,
    height: 424,
    alt: 'Isometric clinical bay showing a diagnostic workstation, corridor IP camera, biometric access door and glass-enclosed PACS/EMR storage racks.',
    challenge: 'Keeping imaging bays, pharmacy stores and shop-floor terminals operational 24/7 while isolating surveillance, attendance and production subnets.',
    architecture: 'Compact VESA-mounted ThinkCentre desktops and ThinkStation nodes connected via optical fibre trunks to VLAN-segmented PoE+ switches, redundant NVRs and access controllers.',
    deliverables: ['Zone-separated camera, access & workstation VLAN schema', 'Preventative quarterly AMC inspection calendar', 'UPS battery runtime & environmental rack checklist'],
    stack: ['Lenovo ThinkCentre & ThinkStation', 'Optical Fibre & Core Switching', 'Hikvision / CP Plus NVR', 'Honeywell & eSSL Biometrics'],
    plannerHref: '?page=planner&seats=50&option=meeting&option=cctv&option=access&option=servers',
    enquiryHref: '?page=contact&service=security&requirements=' + encodeURIComponent('Reference Architecture 03: Clinical or plant networking, NVR and access control')
  },
  {
    id: 'fleet-lifecycle',
    tag: '04 · Fleet Spares, Renewal & ITAD',
    sector: 'Pan-India Managed Fleets',
    title: 'MTM-verified Lenovo genuine FRU spares, RAM/SSD refresh & documented end-of-life recovery',
    metrics: ['1,200+ Fleet Units', '100% OEM-Verifiable FRU', 'Govt-Norm E-Waste Cert'],
    image: 'assets/lifecycle-renew.webp',
    width: 507,
    height: 304,
    alt: 'Technician bench inspecting memory and NVMe SSD upgrade trays beside a commercial business laptop.',
    challenge: 'Eliminating grey-market repair failures on distributed 3–4 year-old laptops while capturing auditable asset trails when retiring decommissioned batches.',
    architecture: 'Central asset tracking matched against Lenovo Machine Type-Model codes for genuine battery, keyboard and LCD spares procurement alongside structured NVMe/DDR5 upgrades and ITAD pickup.',
    deliverables: ['MTM compatibility & FRU part verification log', 'Batch upgrade bench QC & battery health report', 'Serialised ITAD inventory & sanitization handover record'],
    stack: ['Genuine Lenovo FRU Spares', 'Premier Support & Warranty Extensions', 'NVMe & DDR4/DDR5 Upgrades', 'Audited IT Asset Recovery'],
    plannerHref: '?page=lenovo-partner#spares-finder',
    enquiryHref: '?page=contact&service=repairs&topic=lenovo-spares&support=spares&requirements=' + encodeURIComponent('Reference Architecture 04: Fleet spares, SSD/RAM renewal or ITAD batch')
  }
];
