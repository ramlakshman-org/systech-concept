const art = {
  devices: ['detail-devices.webp', 960, 480, 'A laptop, a desktop setup and a dual-display workstation.'],
  shared: ['detail-displays.webp', 960, 480, 'An office display, tablet and multifunction printer.'],
  otherBrands: ['detail-displays.webp', 960, 480, 'Multi-brand commercial notebooks, Apple devices and an office multifunction printer.'],
  accessories: ['devices-mobile.webp', 400, 277, 'A laptop with a docking station and headset.'],
  servers: ['server-room.webp', 818, 427, 'A server room with equipment racks and an operator station.'],
  storage: ['detail-storage.webp', 960, 480, 'Four equipment layouts showing directly attached, file, block and tape storage.'],
  cloud: ['cloud-workload.webp', 338, 208, 'A workload hosted on cloud infrastructure.'],
  cabling: ['office-infrastructure.webp', 1017, 498, 'An office cutaway with data outlets, a cable tray and a network cabinet.'],
  meeting: ['detail-meeting.webp', 960, 480, 'A conference room with a display, camera, table microphone and IP phone.'],
  physical: ['detail-physical.webp', 960, 480, 'An office entrance with a camera, door reader, alarm and recording equipment.'],
  power: ['detail-power.webp', 960, 480, 'Separate office setups for UPS backup power and indoor mobile coverage.'],
  repairs: ['company-service-stages.webp', 978, 432, 'A workshop and equipment racks for device and infrastructure support.'],
  amc: ['detail-amc.webp', 960, 480, 'An equipment inventory, maintenance calendar and inspection record.'],
  spares: ['repair-laptop.webp', 552, 613, 'An exploded laptop showing its display, keyboard, battery and internal components.'],
  renewal: ['lifecycle-renew.webp', 507, 304, 'A laptop and an internal component on an evaluation bench.'],
  recycling: ['lifecycle-recycle.webp', 558, 232, 'A collection container with used devices and a recycling facility.']
};

function detail(sourcePath, intro, action, heading, artKey, steps, offerings, closing, next) {
  const [image, width, height, alt] = art[artKey];
  return {
    sourcePath, intro, action, offerings, closing, next,
    illustration: {
      id: artKey, heading, instruction: 'Select a label to explore the illustration.',
      image, width, height, alt, caption: 'Illustrative setup',
      components: Object.fromEntries(steps.map(([label, title, description, x, y, part], index) => [
        'step-' + (index + 1), { label, title, detail: description, position: [x, y], part }
      ]))
    }
  };
}

export const additionalServiceDetails = {
  'business-computing': detail('business-computing/',
    'Deploy Lenovo ThinkPad, ThinkBook, ThinkCentre and ThinkStation systems aligned to user mobility, software loads and corporate lifecycle standards.',
    'Request commercial fleet quote', 'Match the device to the role', 'devices', [
      ['Laptop', 'Equip mobile & hybrid roles cleanly', 'Compare battery runtime, MIL-STD durability, USB-C/Thunderbolt port density and single-cable docking across ThinkPad, ThinkBook and Yoga.', 21, 29],
      ['Desktop', 'Standardise fixed office workstations', 'Deploy space-saving ThinkCentre Tiny, SFF and tower configurations paired with ThinkVision displays and enterprise peripherals.', 49, 20],
      ['Workstation', 'Size compute for demanding CAD & AI loads', 'Specify ISV-certified ThinkPad P Series and ThinkStation P Series CPU, ECC/DDR5 memory, NVIDIA RTX graphics and NVMe storage as one balanced bill of materials.', 77, 22]
    ], [
      ['Business and enterprise laptops', 'Standardise Lenovo ThinkPad, ThinkBook, IdeaPad and Yoga cohorts by persona, battery runtime, hardware security and corporate OS imaging.'],
      ['Desktops and workstations', 'Provision fixed-desk ThinkCentre desktops and ISV-certified workstations engineered for CAD, BIM, data science and multi-monitor workflows.'],
      ['Multi-OEM fleet parity', 'Procure Lenovo primary fleets alongside Dell, HP, Apple, Acer and ASUS commercial models under consolidated GST billing and asset tagging.']
    ], 'Equipping new hires or refreshing cohorts?', 'Submit seat counts, role profiles, software workloads and preferred OEM standards for a consolidated BOM quote.'),
  'other-brands': detail('other-brands/',
    'Consolidate mixed commercial fleets across Dell, HP, ASUS and Acer, enroll Apple MacBook, iPad, iPhone and Apple Watch cohorts, and standardise office printing on a single GST procurement workflow.',
    'Request multi-OEM & Apple quote', 'Multi-brand commercial fleets, Apple ecosystem & office print', 'otherBrands', [
      ['Dell, HP, ASUS & Acer', 'Dell, HP, ASUS & Acer Commercial Fleets', 'Latitude, Precision, EliteBook, ProBook, ZBook, ASUS ExpertBook and Acer TravelMate notebooks & desktops provisioned on a single GST invoice.', 23, 22],
      ['Apple Ecosystem', 'Apple Enterprise Ecosystem (ABM & MDM)', 'MacBook Air/Pro, iPad, iPhone and Apple Watch fleets enrolled through Apple Business Manager and corporate MDM policies.', 50, 28],
      ['Office Printers', 'HP, Brother, Canon & Epson Printers', 'Workgroup laser, EcoTank and multifunction enterprise printers matched to monthly page volume, duplex scanning and AMC supplies.', 79, 22]
    ], [
      ['Dell, HP, ASUS & Acer Commercial Fleets', 'Latitude, Precision, EliteBook, ProBook, ZBook, ASUS ExpertBook and Acer TravelMate notebooks & desktops provisioned on a single GST invoice.'],
      ['Apple Enterprise Ecosystem (ABM & MDM)', 'MacBook Air/Pro, iPad, iPhone and Apple Watch fleets enrolled through Apple Business Manager and corporate MDM policies.'],
      ['HP, Brother, Canon & Epson Printers', 'Workgroup laser, EcoTank and multifunction enterprise printers matched to monthly page volume, duplex scanning and AMC supplies.']
    ], 'Standardising multi-OEM endpoints or office print fleets?', 'Submit OEM model lists, Apple ABM/MDM scope or monthly print volumes across Bengaluru, Chennai, Hyderabad or pan-India sites.'),
  'displays-tablets-printers': detail('displays-tablets-printers/',
    'Standardise ThinkVision Full HD, Quad HD USB-C and 4K UHD monitors, commercial tablets and shared display bays across desks, meeting rooms and reception stations.',
    'Scope display & print rollout', 'Monitors, commercial tablets & display bays', 'shared', [
      ['Monitor', 'Fit ThinkVision FHD, QHD & 4K monitors to the desk', 'Select 24" Full HD, 27" Quad HD USB-C hub or 4K UHD displays with single-cable power delivery, daisy-chain outputs and ergonomic height stands.', 23, 22],
      ['Tablet', 'Equip commercial tablets for field and room workflows', 'Standardise Android and commercial tablets with rugged cases, keyboard folios, stylus support and centralised MDM policies.', 50, 28],
      ['Display bay', 'Connect shared kiosks, hot-desks and print bays', 'Pair dual-monitor arms, shared reception screens and workgroup station peripherals with verified dock and cabling layouts.', 79, 22]
    ], [
      ['ThinkVision monitors & USB-C hubs', 'Standardise Full HD, Quad HD and 4K UHD monitors with integrated USB-C power delivery, RJ45 pass-through and colour calibration.'],
      ['Commercial tablets & mobility', 'Provision Lenovo Tab, rugged field tablets and commercial tablet cohorts enrolled in enterprise MDM with cases and accessories.'],
      ['Shared display & workgroup bays', 'Configure hot-desk dual-monitor bays, reception digital displays and compatible workgroup peripheral or printer stations.']
    ], 'Equipping desks, tablets or shared display bays?', 'Share seat counts, resolution needs (FHD, QHD USB-C or 4K), tablet apps and docking requirements.'),
  'accessories-peripherals': detail('accessories/',
    'Outfit enterprise workstations with 65W / 100W / 135W / 230W Lenovo USB-C & Thunderbolt 4 Universal Docks, Lenovo FHD Webcams, ANC headsets, privacy filters and genuine power adapters.',
    'Verify dock & accessory compatibility', 'Build a connected desk', 'accessories', [
      ['Laptop ports', 'Verify power delivery & display lane specs', 'Validate USB-C Power Delivery wattage, DisplayPort Alt-Mode and Thunderbolt 4 bandwidth against exact laptop MTM specs.', 26, 37],
      ['Dock', 'Deploy Lenovo USB-C & Thunderbolt 4 Universal Docks', 'Pair 65W / 100W / 135W / 230W Lenovo USB-C & Thunderbolt 4 Universal Docks to drive dual or triple 4K monitors over a single cable.', 74, 68],
      ['Audio & video', 'Outfit hybrid workspaces for clear calls', 'Standardise Lenovo FHD Webcams, ANC headsets, dual-mic boom audio and USB-C/Bluetooth wireless receivers across open floors.', 76, 24]
    ], [
      ['Docks, webcams & collaboration', 'Deploy 65W / 100W / 135W / 230W Lenovo USB-C & Thunderbolt 4 Universal Docks, Lenovo FHD Webcams, ANC headsets, keyboards and mice.'],
      ['Power adapters, batteries & protection', 'Supply genuine 65W / 100W / 135W / 230W Lenovo power adapters, OEM replacement batteries, laptop bags, rugged sleeves and privacy filters.'],
      ['Hubs, storage & styluses', 'Match high-speed USB-C hubs, encrypted external NVMe drives and active styluses to your fleet port and OS standards.']
    ], 'Standardising workstation accessory kits?', 'Share your target laptop MTM codes alongside dock wattage, monitor output and headset counts.'),
  'servers-hci': detail('top-server-dealer-in-bangalore-lenovo-server-solutions/',
    'Architect Lenovo ThinkSystem rack, tower, edge and ThinkAgile hyperconverged platforms sized to compute density, redundancy targets and multi-site footprints.',
    'Scope ThinkSystem & HCI workloads', 'Compare where workloads can run', 'servers', [
      ['Rack servers', 'Consolidate workloads in the server room', 'Size 1U/2U Lenovo ThinkSystem SR-series nodes for rack U-space, dual-PSU redundancy, hot-aisle cooling and 10/25GbE uplinks.', 37, 38],
      ['Tower and edge', 'Deploy compute at branch & plant sites', 'Run ThinkSystem tower and rugged edge nodes across branch offices, manufacturing floors and low-noise non-datacentre rooms.', 80, 48],
      ['HCI', 'Manage compute and storage as a cluster', 'Cluster compute, NVMe storage and VMware or Nutanix hypervisors on Lenovo ThinkAgile HCI nodes with automated failover and linear expansion.', 59, 28]
    ], [
      ['Rack, tower, edge & blade servers', 'Configure Lenovo ThinkSystem rack, tower, edge and mission-critical servers with hardware RAID, dual power and XClarity management.'],
      ['High availability & continuity', 'Engineer N+1 power redundancy, NIC teaming, proactive warranty upgrades and disaster recovery readiness for core business applications.'],
      ['Hyperconverged infrastructure', 'Consolidate virtualised workloads on Lenovo ThinkAgile HCI clusters with unified storage pooling and non-disruptive firmware lifecycle updates.']
    ], 'Sizing compute for ERP, VDI or virtualisation?', 'Share VM counts, vCPU/RAM targets, site constraints and availability SLAs for a sized BOM.'),
  storage: detail('best-storage-solutions-in-bangalore-nas-san-das-tape-storage/',
    'Architect DAS, NAS, SAN and LTO tape backup storage matched to IOPS targets, protocol access, replication windows and multi-year retention policies.',
    'Size NAS, SAN & tape storage', 'Compare four ways to store data', 'storage', [
      ['DAS', 'Attach dedicated bandwidth to one host', 'Connect high-throughput direct-attached JBOD or RAID enclosures straight to dedicated compute hosts or media workstations.', 18, 36],
      ['NAS', 'Serve shared files over the office network', 'Provide SMB/NFS file shares with AD/Entra permissions, automated snapshots and dual-controller availability.', 39, 34],
      ['SAN', 'Deliver low-latency block volumes to hosts', 'Present redundant iSCSI or Fibre Channel block LUNs to virtualisation clusters and transactional databases with hardware multi-pathing.', 57, 28],
      ['Tape', 'Maintain air-gapped LTO retention archives', 'Protect long-term compliance records and immutable ransomware-safe backups through LTO tape libraries and off-site media rotation.', 79, 28]
    ], [
      ['Throughput & protocol sizing', 'Match NVMe/SAS SSD and nearline HDD tiers to database IOPS, virtual machine latency and concurrent file-access profiles.'],
      ['Capacity & tiered growth', 'Size usable RAID capacity, hot spares and modular expansion shelves with a 3-to-5-year data growth runway.'],
      ['Immutable backup & retention', 'Integrate snapshot replication, air-gapped LTO tape schedules and verified restore RTO/RPO targets.']
    ], 'Architecting primary storage or immutable backups?', 'Share raw vs. usable TB targets, host interfaces (10/25GbE or Fibre Channel) and retention windows.'),
  'cloud-migration': detail('cloud-solutions-in-bangalore-aws-google-cloud-azure-services/',
    'Execute structured workload migrations to Microsoft Azure, AWS and Google Cloud with landing-zone security, zero-loss cutover and post-go-live operations.',
    'Plan cloud migration cutover', 'Follow a workload to the cloud', 'cloud', [
      ['Assess', 'Map workloads, licensing & dependencies', 'Inventory virtual machines, databases, network routes, Entra ID/IAM dependencies and licensing portability prior to landing-zone design.', 20, 41],
      ['Migrate', 'Execute staged replication & cutover', 'Run wave-based data replication, DNS/VPN switchover and production validation inside controlled maintenance windows.', 52, 61],
      ['Operate', 'Establish FinOps, monitoring & support', 'Transition workloads into monitored day-two operations with cost governance, access controls, admin training and ongoing managed support.', 77, 33]
    ], [
      ['Landing zones & architecture', 'Design hub-and-spoke VPC/VNet topologies, ExpressRoute or Direct Connect links and resilient multi-zone cloud infrastructure.'],
      ['Cutover & validation', 'Execute staged migration waves, test cutover rehearsals, rollback safeguards and post-cutover workload verification.'],
      ['Enablement & managed support', 'Train internal IT teams on day-two cloud operations and back critical workloads with structured ongoing support.']
    ], 'Ready to map a cloud migration wave?', 'Share current on-premises servers, databases, compliance requirements and target cutover dates.'),
  'structured-cabling': detail('structured-cabling-services-in-bangalore-systech/',
    'Deploy standards-compliant Cat6/Cat6A copper and optical fibre infrastructure backed by Fluke / OTDR link test certification reports, floor riser trunks and labelled patch-panel elevation schedules.',
    'Book cabling & fibre survey', 'Trace an office cable run', 'cabling', [
      ['Data outlet', 'Terminate certified desk & AP endpoints', 'Install Cat6/Cat6A drops across workstations, Wi-Fi access points, CCTV cameras and IP-PBX ports with laser-printed port identifiers.', 50, 54],
      ['Cable pathway', 'Route horizontal trays & floor riser trunks', 'Build segregated GI cable trays, fire-stopped conduits and OM3/OM4 or single-mode optical fibre floor riser trunks between cabinets.', 62, 25],
      ['Network cabinet', 'Document labelled patch-panel elevation schedules', 'Terminate and dress cables into MDF/IDF racks with labelled patch-panel elevation schedules and Fluke / OTDR link test certification reports.', 16, 58]
    ], [
      ['Certified Cat6 / Cat6A copper', 'Install end-to-end copper cabling with colour-coded patch panels, neat rack dressing and Fluke certification pass reports.'],
      ['OM3/OM4 & single-mode optical fibre', 'Execute OM3/OM4 multimode and single-mode optical fibre splicing across floor riser trunks with OTDR link test certification reports.'],
      ['Server rooms & rack elevations', 'Deliver server-room containment, dual-PDU cabinet layouts and as-built labelled patch-panel elevation schedules.']
    ], 'Fitting out a new office or upgrading backbone links?', 'Share CAD floor plans, outlet counts, floor riser distances and MDF/IDF rack locations for a site survey.'),
  'meeting-rooms-telephony': detail('board-room-av-solutions-and-conference-room-solutions-bangalore/',
    'Engineer conference rooms and office voice systems uniting 4K interactive boardroom displays, beamforming video bars, ceiling/table DSP microphone arrays, multi-zone commercial PA paging systems and enterprise SIP/IP-PBX telephony.',
    'Scope boardroom AV & IP-PBX', 'See where meeting equipment fits', 'meeting', [
      ['Display and camera', 'Mount 4K displays & beamforming video bars', 'Pair 4K interactive boardroom displays with auto-framing beamforming video bars calibrated to room depth and sightlines.', 39, 24],
      ['Room audio', 'Deploy ceiling/table DSP microphone arrays', 'Install ceiling or table DSP microphone arrays with acoustic echo cancellation and balanced loudspeaker dispersion.', 46, 56],
      ['IP-PBX & PA', 'Unify SIP/IP-PBX calling & multi-zone PA', 'Provision enterprise SIP/IP-PBX telephony, PoE IP phones and multi-zone commercial PA paging systems across office floors.', 64, 46]
    ], [
      ['Boardroom & huddle AV', 'Integrate 4K interactive boardroom displays, beamforming video bars, wireless presentation hubs and one-touch Microsoft Teams or Zoom room control.'],
      ['DSP acoustics & commercial PA paging', 'Deploy ceiling/table DSP microphone arrays alongside multi-zone commercial PA paging systems for clear speech pickup and site-wide announcements.'],
      ['Enterprise SIP & IP-PBX telephony', 'Provision IP-PBX servers, redundant SIP trunks, multi-level IVR routing and PoE desk phones across branches.']
    ], 'Outfitting boardrooms, huddle pods or floor paging?', 'Share room dimensions, seating capacity, UC platform preferences and extension or PA zone counts.'),
  'cctv-access-control': detail('cctv-camera-installation-dealers-in-bangalore-systech-services/',
    'Secure corporate entrances, server rooms and perimeters with IP CCTV surveillance, biometric door access, NVR retention and integrated fire and intrusion alarms.',
    'Book CCTV & access survey', 'Walk through an office entrance', 'physical', [
      ['Camera', 'Eliminate blind spots across entries & aisles', 'Position wide-dynamic-range IP dome and bullet cameras across lobbies, server doors and loading bays with clean PoE switching.', 28, 21],
      ['Access reader', 'Enforce biometric & RFID door entry', 'Integrate eSSL biometric attendance, RFID card readers, turnstiles and fail-safe electromagnetic locks per shift and security zone.', 53, 46],
      ['Alarm', 'Connect addressable fire & intrusion panels', 'Wire smoke/heat detectors and perimeter burglar intrusion sensors with audible hooters and instant escalation alerts.', 69, 25],
      ['Recorder', 'Size NVR RAID retention & audit playback', 'Configure enterprise NVR/VMS storage for 30-to-90-day video retention, role-based viewing permissions and timestamped export.', 72, 58]
    ], [
      ['IP CCTV & VMS surveillance', 'Deploy Hikvision and CP Plus IP cameras, PoE NVR appliances and centralised multi-site security monitoring consoles.'],
      ['Biometrics & door access control', 'Configure biometric attendance terminals, RFID card controllers, server-room dual-factor locks and visitor entry workflows.'],
      ['Fire & intrusion alarm systems', 'Install Honeywell and commercial addressable fire loops, glass-break sensors and zone-mapped burglar alarm panels.']
    ], 'Securing a new workplace or expanding floor coverage?', 'Share floor plans, door counts, NVR retention days and alarm zones for an on-site survey.'),
  'power-and-signal': detail('it-infrastructure/',
    'Protect critical infrastructure with online double-conversion UPS banks (1 kVA to 40+ kVA) sized via extended battery runtime calculations, and restore coverage with multi-carrier indoor cellular signal boosters for basements and shielded floors.',
    'Size UPS & indoor signal system', 'Compare two site needs', 'power', [
      ['UPS backup', 'Size online double-conversion UPS banks', 'Deploy 1 kVA to 40+ kVA online double-conversion UPS banks backed by extended battery runtime calculations for servers, switches and workstations.', 22, 27],
      ['Mobile signal', 'Eliminate basement & shielded-floor dead zones', 'Install multi-carrier indoor cellular signal boosters with rooftop donor antennas and distributed ceiling coverage across basements and shielded floors.', 73, 25]
    ], [
      ['Online double-conversion UPS (1–40+ kVA)', 'Supply and commission online double-conversion UPS banks (1 kVA to 40+ kVA) with modular battery racks and verified extended battery runtime calculations.'],
      ['Multi-carrier indoor cellular boosters', 'Restore voice and 4G/5G connectivity in basements, concrete cores and low-E glass floors using multi-carrier indoor cellular signal boosters.']
    ], 'Sizing backup runtime or fixing dead-zone reception?', 'Share connected kVA/wattage load and target runtime minutes, or affected floor zones and cellular carriers.'),
  'repairs-and-maintenance': detail('it-repairs-services/',
    'Restore faulty hardware rapidly through Systech’s Bengaluru Lenovo Laptop Repair Centre chip-level servicing, backed by priority dispatch across Bengaluru, Chennai and Hyderabad.',
    'Schedule bench or on-site repair', 'See what can be assessed', 'repairs', [
      ['Computer and printer', 'Diagnose on Systech’s ESD repair bench', 'Run component-level diagnostics and chip-level servicing at Systech’s Bengaluru Lenovo Laptop Repair Centre for ThinkPad, multi-brand laptops and printers.', 25, 57],
      ['Server', 'Restore critical server & RAID faults fast', 'Triage ThinkSystem hardware faults, failed storage drives, redundant PSUs and firmware alerts with priority dispatch across Bengaluru, Chennai and Hyderabad.', 50, 34],
      ['Site equipment', 'Fix offline CCTV, biometric & cable links', 'Diagnose and restore failed IP cameras, NVR recorders, biometric door controllers and broken Cat6A or optical fibre links on-site.', 77, 64]
    ], [
      ['Bengaluru Lenovo Laptop Repair Centre', 'Execute chip-level motherboard servicing, screen/hinge rebuilds, DC-jack repairs and commercial printer servicing using OEM-verifiable spares.'],
      ['Multi-city server & endpoint triage', 'Deploy field engineers with priority dispatch across Bengaluru, Chennai and Hyderabad for urgent server, storage and workstation downtime.'],
      ['Workplace infrastructure restoration', 'Repair faulty CCTV cameras, biometric attendance terminals, door controllers and damaged structured cabling links.']
    ], 'Need urgent bench diagnostics or field dispatch?', 'Submit equipment models, fault symptoms, serial/MTM codes and site city (Bengaluru, Chennai or Hyderabad).'),
  'annual-maintenance': detail('keep-your-it-systems-running-smoothly-with-annual-maintenance-contracts/',
    'Guarantee multi-site IT availability with transparent comprehensive vs. non-comprehensive AMC SLAs, preventive quarterly inspections, Bengaluru Lenovo Laptop Repair Centre backing and priority dispatch across Bengaluru, Chennai and Hyderabad.',
    'Request custom AMC proposal', 'Build a maintenance plan', 'amc', [
      ['Asset inventory', 'Register laptops, servers & site systems', 'Catalogue endpoints, ThinkSystem servers, UPS banks, CCTV and cabling by serial number, location and SLA criticality tier.', 18, 27],
      ['Preventive visits', 'Execute preventive quarterly inspections', 'Perform scheduled preventive quarterly inspections covering thermal servicing, BIOS/firmware updates, UPS battery tests and NVR storage audits.', 50, 30],
      ['Service record', 'Enforce transparent comprehensive vs. non-comprehensive SLAs', 'Track response and resolution targets under transparent comprehensive vs. non-comprehensive AMC SLAs with priority dispatch across Bengaluru, Chennai and Hyderabad.', 77, 29]
    ], [
      ['Comprehensive vs. non-comprehensive AMC SLAs', 'Select transparent comprehensive (spares-included) or non-comprehensive (labour/diagnostics) AMC SLAs aligned to fleet age and budget.'],
      ['Preventive quarterly inspections', 'Prevent unplanned downtime via preventive quarterly inspections, thermal cleaning, SMART disk checks and documented asset health logs.'],
      ['Multi-hub priority dispatch & bench backing', 'Combine priority dispatch across Bengaluru, Chennai and Hyderabad with chip-level escalation at Systech’s Bengaluru Lenovo Laptop Repair Centre.']
    ], 'Ready to consolidate or benchmark your IT AMC?', 'Share asset counts by device type and office locations across Bengaluru, Chennai, Hyderabad or pan-India for an SLA proposal.'),
  'lenovo-spares': detail('part-sales/',
    'Source 100% genuine, OEM-verifiable Lenovo FRU spare parts from Systech’s ready Bengaluru stock—covering batteries, LCD/OLED panels, keyboards, system boards, NVMe SSDs, DDR5 RAM, power adapters and cooling fans.',
    'Verify MTM & ready FRU stock', 'Identify the part in your laptop', 'spares', [
      ['Display', 'Match exact-fit LCD/OLED panels by MTM', 'Source OEM-verifiable LCD/OLED panels, touch assemblies, hinges, bezels and top covers directly from ready Bengaluru stock.', 69, 19, 'display'],
      ['Keyboard', 'Replace regional & backlit keyboards cleanly', 'Draw regional-layout backlit and non-backlit keyboards plus palmrest assemblies matched to your exact ThinkPad or ThinkBook variant.', 78, 45, 'keyboard'],
      ['SSD and RAM', 'Upgrade or swap NVMe SSDs & DDR5 RAM', 'Verify and dispatch OEM-qualified NVMe SSDs and DDR4/DDR5 RAM modules tailored to your system board capacity.', 23, 63, 'memory-storage'],
      ['Battery', 'Install genuine batteries & power adapters', 'Eliminate swelling and runtime drop with 100% genuine, OEM-verifiable Lenovo batteries and power adapters from ready Bengaluru stock.', 64, 83, 'battery']
    ], [
      ['Ready Bengaluru FRU stock', 'Draw 100% genuine, OEM-verifiable Lenovo FRU spare parts directly from Systech’s ready Bengaluru stock at the Lenovo Laptop Repair Centre—eliminating grey-market risk.'],
      ['Batteries, panels, keyboards & adapters', 'Order factory-spec batteries, LCD/OLED panels, regional keyboards, genuine power adapters and cooling fans matched to your MTM or FRU code.'],
      ['System boards, NVMe SSDs & DDR5 RAM', 'Source genuine Lenovo system boards (motherboards), NVMe SSDs, DDR5 RAM, wireless LAN cards, antennas, webcams, bezels and covers.']
    ], 'Have a Machine Type-Model (MTM) or FRU part number?', 'Submit your Lenovo model, MTM or serial code for instant Bengaluru ready-stock verification.'),
  'laptop-renewal': detail('renew-your-laptop-in-bangalore/',
    'Extend corporate laptop lifecycles by 2–3 years through Systech’s 4-stage diagnostic bench, DDR4/DDR5 RAM & NVMe SSD fleet upgrades and post-upgrade QA burn-in testing.',
    'Schedule fleet renewal batch', 'See what goes into a renewal', 'renewal', [
      ['Evaluate', 'Run the 4-stage diagnostic bench', 'Screen motherboard power rails, battery cycle health, thermal performance, ports and hinge torque across Systech’s 4-stage diagnostic bench.', 26, 30],
      ['Upgrade', 'Execute DDR4/DDR5 RAM & NVMe SSD fleet upgrades', 'Perform batch DDR4/DDR5 RAM & NVMe SSD fleet upgrades alongside battery, keyboard and thermal compound replacements.', 76, 55],
      ['Certify', 'Clear post-upgrade QA burn-in testing', 'Validate sustained thermal, memory and display stability through post-upgrade QA burn-in testing and clean OS imaging before redeployment.', 40, 78]
    ], [
      ['4-stage diagnostic bench', 'Inspect chassis integrity, battery wear, thermal efficiency and system board health to certify renewal ROI per device cohort.'],
      ['DDR4/DDR5 RAM & NVMe SSD fleet upgrades', 'Accelerate active laptops with compatible DDR4/DDR5 RAM & NVMe SSD fleet upgrades, fresh OEM batteries and custom corporate OS builds.'],
      ['Post-upgrade QA burn-in testing', 'Certify every renewed unit via multi-hour post-upgrade QA burn-in testing before employee onboarding or redeployment.']
    ], 'Refreshing an ageing laptop cohort?', 'Submit device models, unit quantities and target RAM/SSD specs to book a fleet renewal batch.'),
  'e-waste-recycling': detail('e-waste-management/',
    'Retire corporate IT assets cleanly with Free Pack & Pickup (qualified corporate lots), Quick Settlement, Verifiable Data Sanitization and an E-Waste Disposal Certificate as per Government norms.',
    'Book e-waste pickup & certificate', 'Follow retired equipment through collection', 'recycling', [
      ['Inventory', 'Submit asset counts & flag data media', 'Provide equipment categories, approximate quantities and site locations while marking storage-bearing hardware for certified sanitization.', 19, 28],
      ['Collection', 'Receive Free Pack & Pickup & Quick Settlement', 'Leverage Free Pack & Pickup (qualified corporate lots) with barcoded on-site packing and Quick Settlement commercial buyback terms.', 36, 67],
      ['Certification', 'Complete sanitization & statutory certification', 'Execute Verifiable Data Sanitization or witnessed media destruction and receive your E-Waste Disposal Certificate as per Government norms.', 76, 32]
    ], [
      ['Free Pack & Pickup (qualified corporate lots)', 'Zero-cost site packing, palletisation and insured collection for qualified corporate batches alongside Quick Settlement buyback payouts.'],
      ['Verifiable Data Sanitization', 'Protect confidential business records via multi-pass logical data wiping or witnessed physical drive destruction with serial logs.'],
      ['E-Waste Disposal Certificate as per Government norms', 'Close IT compliance audits with an E-Waste Disposal Certificate as per Government norms and complete chain-of-custody documentation.']
    ], 'Retiring corporate laptops, servers or monitors?', 'Share your asset manifest, pickup city and sanitization preference to book Free Pack & Pickup.')
};
