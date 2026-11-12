const art = {
  devices: ['detail-devices.webp', 960, 480, 'A laptop, a desktop setup and a dual-display workstation.'],
  shared: ['detail-displays.webp', 960, 480, 'An office display, tablet and multifunction printer.'],
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
    'Choose laptops, desktops and workstations around how your team works, where they work and which applications they use.',
    'Discuss device requirements', 'Match the device to the role', 'devices', [
      ['Laptop', 'Equip people who work from different locations', 'Compare weight, battery needs, ports and whether the user needs a dock at their desk.', 17, 31],
      ['Desktop', 'Set up a fixed desk for everyday work', 'Choose a display and peripherals along with the computer. Check the available desk space and the applications the team uses.', 50, 20],
      ['Workstation', 'Plan for demanding applications', 'Share the software and workload so processor, memory, graphics and storage can be considered together.', 82, 31]
    ], [
      ['Business and student laptops', 'Compare Lenovo ThinkPad, ThinkBook, IdeaPad and Yoga ranges according to mobility, form factor and software requirements.'],
      ['Desktops and workstations', 'Discuss fixed office desktops and higher-performance workstations for more demanding workloads.'],
      ['Brand options', 'Ask about Lenovo, Dell, HP, Apple, Acer and ASUS options for your device requirements.']
    ], 'What does each team need to run?', 'Share the device count, applications and any existing equipment you want to keep.'),
  'displays-tablets-printers': detail('other-brands/',
    'Equip desks, shared work areas and print stations with hardware that fits the way each space is used.',
    'Discuss displays, tablets or printers', 'Equip three kinds of work', 'shared', [
      ['Display', 'Fit the display to the desk', 'Check size, resolution, inputs and whether the user will connect through a dock or directly to the computer.', 17, 23],
      ['Tablet', 'Support work away from a fixed desk', 'Consider the apps people use, device management, connectivity and whether they need a keyboard or stylus.', 49, 26],
      ['Printer', 'Size the print station for the team', 'Share your expected print volume, paper sizes and whether scanning, colour or network printing is needed.', 81, 24]
    ], [
      ['Monitors and displays', 'Discuss screen size, mounting and compatibility with your computers and docks.'],
      ['Tablets', 'Choose a tablet around your applications, mobility needs and accessories.'],
      ['Printers', 'Compare options including HP and Brother based on the way your team prints and scans.']
    ], 'Equipping desks or a shared space?', 'Share your users, existing devices and what each piece of equipment needs to do.'),
  'accessories-peripherals': detail('accessories/',
    'Complete the workstation with compatible accessories for connectivity, meetings, power and everyday use.',
    'Check accessory compatibility', 'Build a connected desk', 'accessories', [
      ['Laptop ports', 'Start with the device model and its ports', 'Check whether the device supports the display outputs, charging and data connections your accessories require.', 26, 37],
      ['Dock', 'Bring power, displays and peripherals together', 'Match the dock to the laptop model and check the number and resolution of external displays it supports.', 74, 68],
      ['Audio', 'Choose audio for the work environment', 'For calls and meetings, consider the connector, microphone and whether the team works in a shared space.', 76, 24]
    ], [
      ['Desk and meeting accessories', 'Discuss docks, webcams, keyboards, mice and headsets for your workstations.'],
      ['Power and protection', 'Ask about adapters, batteries, bags, cases and privacy filters for your device model.'],
      ['Connectivity and storage', 'Review USB hubs, external drives and styluses against the ports and features your hardware supports.']
    ], 'Have a device model in mind?', 'Include the model and the accessories or ports you need.'),
  'servers-hci': detail('top-server-dealer-in-bangalore-lenovo-server-solutions/',
    'Plan the server platform around your workloads, the sites it will serve and the way your team manages infrastructure.',
    'Discuss server requirements', 'Compare where workloads can run', 'servers', [
      ['Rack servers', 'Consolidate equipment in a server room', 'Discuss rack capacity, power, cooling and network connections alongside compute and memory needs.', 37, 38],
      ['Tower and edge', 'Place compute close to the work', 'Tower and edge options can serve locations where space, physical conditions or local processing matter.', 76, 63],
      ['HCI', 'Manage compute and storage as a cluster', 'Hyperconverged infrastructure pools compute and storage across nodes. Ask how capacity, resilience and expansion would be handled.', 59, 28]
    ], [
      ['Server form factors', 'Review rack, tower, edge and blade options against workload and site requirements.'],
      ['Critical workloads', 'Discuss continuity, available redundancy and how you will maintain the systems your business relies on.'],
      ['Hyperconverged infrastructure', 'Consider a clustered platform where compute and storage are managed together.']
    ], 'What needs to run on the platform?', 'Share your applications, workload sizes, sites and expected growth.'),
  storage: detail('best-storage-solutions-in-bangalore-nas-san-das-tape-storage/',
    'Choose storage based on who needs access, how applications use the data and how long you need to keep it.',
    'Discuss storage requirements', 'Compare four ways to store data', 'storage', [
      ['DAS', 'Attach storage to one system', 'Direct-attached storage connects to a particular host. Consider it when that system owns the workload and shared network access is unnecessary.', 14, 26],
      ['NAS', 'Share files over a network', 'Network-attached storage serves files to users or systems. Discuss permissions, concurrent access and expected capacity.', 38, 26],
      ['SAN', 'Provide block storage to servers', 'A storage area network presents block storage to hosts. Discuss the application needs and the network and management effort involved.', 62, 26],
      ['Tape', 'Plan removable media for retention', 'Tape can support longer-term retention or offline copies. Ask about recovery time, rotation and handling.', 86, 26]
    ], [
      ['Access and performance', 'Identify which users or applications will access the data and how quickly they need it.'],
      ['Capacity and growth', 'List current data volumes and expected growth so the options can be sized.'],
      ['Retention and recovery', 'Define retention periods and restore needs as part of your backup and archive planning.']
    ], 'What data do you need to keep available?', 'Share current storage, data volume and how quickly you need to recover it.'),
  'cloud-migration': detail('cloud-solutions-in-bangalore-aws-google-cloud-azure-services/',
    'Plan and move workloads to AWS, Google Cloud or Microsoft Azure, with implementation, training and ongoing support available.',
    'Discuss a cloud migration', 'Follow a workload to the cloud', 'cloud', [
      ['Assess', 'Map the workload and its dependencies', 'Identify the applications, data, connectivity and access requirements before choosing a destination.', 20, 41],
      ['Migrate', 'Move and validate the workload', 'Plan the data move and cutover around dependencies and downtime, then verify the application works in the new environment.', 52, 61],
      ['Operate', 'Prepare for ongoing operation', 'Discuss team training, monitoring, access responsibilities and the support you need after the move.', 77, 33]
    ], [
      ['Architecture and implementation', 'Evaluate cloud options and plan how the selected environment will support your workloads.'],
      ['Migration planning', 'Discuss migration order, cutover timing, validation and ownership.'],
      ['Training and support', 'Identify what your team will manage and where ongoing support would help.']
    ], 'Which workload are you considering?', 'Share where it runs today, what it depends on and when you want to move it.'),
  'structured-cabling': detail('structured-cabling-services-in-bangalore-systech/',
    'Connect desks, meeting rooms and network equipment with a cabling plan that accounts for outlets, pathways and equipment rooms.',
    'Discuss site cabling', 'Trace an office cable run', 'cabling', [
      ['Data outlet', 'Start where devices need to connect', 'Identify outlets for desks, access points and equipment so the cabling matches the way the space will be used.', 50, 54],
      ['Cable pathway', 'Route cable through planned pathways', 'Review cable trays, routes between rooms and what needs to run between floors or buildings.', 62, 25],
      ['Network cabinet', 'Bring connections back to the cabinet', 'Terminate and organise cables at the cabinet so the connections can be documented and traced during changes.', 16, 58]
    ], [
      ['Structured copper cabling', 'Discuss Ethernet runs, outlets, patch panels and cable pathways for the workplace.'],
      ['Optical fibre', 'Review fibre links where distance, bandwidth or the building layout calls for them.'],
      ['Server rooms and data centres', 'Plan cabling around rack locations, access and equipment layout.']
    ], 'Have a floor plan or list of outlets?', 'Share the sites, floors, equipment rooms and the spaces that need a connection.'),
  'meeting-rooms-telephony': detail('board-room-av-solutions-and-conference-room-solutions-bangalore/',
    'Plan a meeting room people can join and use easily, with display, camera, audio and office telephony considered together.',
    'Plan a meeting room', 'See where meeting equipment fits', 'meeting', [
      ['Display and camera', 'Give remote participants a view of the room', 'Position the display for the people seated furthest away and choose camera coverage based on the room layout.', 48, 17],
      ['Room audio', 'Make sure everyone can be heard', 'Place microphones and speakers based on table size, acoustics and how the room will be used.', 45, 60],
      ['IP phone', 'Connect desk and room calling', 'Discuss IP phones and IP-PBX where the office needs extensions and shared calling.', 79, 56]
    ], [
      ['Boardroom AV', 'Review screens, cameras, microphones and room controls for boardrooms and collaboration spaces.'],
      ['Video conferencing and PA', 'Discuss conferencing for hybrid meetings and public address where the site needs announcements.'],
      ['Office telephony', 'Plan IP phones and IP-PBX around extensions, call handling and existing network connections.']
    ], 'How do people use the room today?', 'Share room dimensions, seating, conferencing platforms and calling needs.'),
  'cctv-access-control': detail('cctv-camera-installation-dealers-in-bangalore-systech-services/',
    'Plan camera coverage, door access and alerts around the entrances, shared areas and assets that need attention.',
    'Discuss physical security', 'Walk through an office entrance', 'physical', [
      ['Camera', 'Plan what each camera should see', 'Choose camera positions for the areas you need to observe and decide how recordings will be reviewed.', 22, 24],
      ['Access reader', 'Control who can enter a door', 'Discuss biometric attendance or door access according to the site workflow and the doors you need to manage.', 57, 59],
      ['Alarm', 'Decide how an alert reaches the right people', 'Discuss fire and burglar alarm requirements for the site and who needs to respond.', 75, 26],
      ['Recorder', 'Decide how to retain and review video', 'Consider recording duration, authorised viewing and how footage will be found after an incident.', 82, 76]
    ], [
      ['CCTV and video management', 'Review coverage areas, camera placement, recording and authorised viewing.'],
      ['Biometrics and door access', 'Discuss attendance tracking and controlled entry as separate site workflows.'],
      ['Site alarms', 'Review the areas requiring alerts and your current fire or burglar alarm setup.']
    ], 'Which doors and areas need coverage?', 'Share the site layout, existing equipment and the people responsible for reviewing alerts.'),
  'power-and-signal': detail('it-infrastructure/',
    'Plan backup power for essential equipment and address weak indoor mobile reception as separate site requirements.',
    'Discuss power or signal', 'Compare two site needs', 'power', [
      ['UPS backup', 'Keep essential equipment powered during an interruption', 'List the devices that need backup, their power demand and how long they need to stay on.', 25, 26],
      ['Mobile signal', 'Identify where indoor reception drops', 'Share the affected areas, the carriers staff use and where signal is strongest around the building. Ask which options fit the site.', 75, 26]
    ], [
      ['Backup power', 'Discuss UPS sizing around essential equipment and the runtime you need.'],
      ['Mobile signal boosters', 'Review indoor coverage concerns and whether an appropriate signal solution is available for the site.']
    ], 'Where is the issue showing up?', 'For power, share the equipment list. For reception, share the affected rooms and carriers.'),
  'repairs-and-maintenance': detail('it-repairs-services/',
    'Get equipment faults assessed across computers, printers, servers and selected office infrastructure.',
    'Request diagnosis', 'See what can be assessed', 'repairs', [
      ['Computer and printer', 'Describe the symptoms and equipment model', 'Share the model, fault and any error message. Systech lists servicing and chip-level repairs for computers and printers.', 25, 57],
      ['Server', 'Explain how the fault affects the workload', 'Share whether the server is still running and what services are affected so you can discuss the right next step.', 50, 34],
      ['Site equipment', 'Identify the affected location and system', 'Describe the problem with CCTV, biometric devices or cabling and whether the fault affects one device or an area.', 77, 64]
    ], [
      ['Computer and printer repairs', 'Discuss laptop, desktop, printer and chip-level servicing based on the reported fault.'],
      ['Server servicing', 'Provide the system model, symptoms and how the issue affects the business.'],
      ['Infrastructure repairs', 'Discuss faults in CCTV, biometric equipment and structured cabling.']
    ], 'What stopped working?', 'Include the model, the symptoms and when the problem started.'),
  'annual-maintenance': detail('keep-your-it-systems-running-smoothly-with-annual-maintenance-contracts/',
    'Plan annual maintenance for your IT assets around the equipment covered, the preventive work needed and how faults are reported.',
    'Discuss an AMC', 'Build a maintenance plan', 'amc', [
      ['Asset inventory', 'List the equipment that needs coverage', 'Capture device types, quantities, sites and which systems your team depends on most.', 17, 28],
      ['Preventive visits', 'Agree on an inspection schedule', 'Discuss what needs inspection or preventive care and how maintenance can fit around your operating hours.', 50, 23],
      ['Service record', 'Define how work and faults are recorded', 'Agree on who raises a request and which work, parts and response arrangements are included in the proposed contract.', 82, 28]
    ], [
      ['Scope of coverage', 'Discuss which devices and sites the contract should cover.'],
      ['Preventive care', 'Review inspection schedules and maintenance activities for your assets.'],
      ['Support arrangements', 'Confirm the reporting process, inclusions and response terms in the proposed AMC.']
    ], 'Which assets should the AMC cover?', 'Share your asset count, locations and current maintenance needs.'),
  'lenovo-spares': detail('part-sales/',
    'Identify genuine Lenovo replacement parts using your device model, then confirm which options fit before ordering.',
    'Check Lenovo part compatibility', 'Identify the part in your laptop', 'spares', [
      ['Display', 'Check the screen assembly against the model', 'Share the laptop model and screen symptoms so the compatible display or related component can be checked.', 69, 19, 'display'],
      ['Keyboard', 'Match the keyboard and layout', 'Provide the model and keyboard layout. A keyboard can differ between device variants even within the same family.', 78, 45, 'keyboard'],
      ['SSD and RAM', 'Confirm storage and memory compatibility', 'Share the model, current configuration and the capacity you need before choosing a replacement or upgrade.', 23, 63, 'memory-storage'],
      ['Battery', 'Identify a compatible battery', 'Share the device model and battery part number if available. Describe any charging or runtime problem if you also need diagnosis.', 64, 83, 'battery']
    ], [
      ['Common replacements', 'Ask about batteries, keyboards, displays, fans and covers for your Lenovo model.'],
      ['Storage and memory', 'Discuss SSD and RAM compatibility before purchasing or upgrading.'],
      ['Other internal parts', 'Ask about wireless LAN cards, antennas, cameras and bezels by model or part number.']
    ], 'Know the model or part number?', 'Include it with the component you need so Systech can check compatibility.'),
  'laptop-renewal': detail('renew-your-laptop-in-bangalore/',
    'Assess whether a laptop can stay in service with targeted upgrades and quality checks based on how it will be used.',
    'Discuss laptop renewal', 'See what goes into a renewal', 'renewal', [
      ['Assess', 'Check the device and the work it needs to do', 'Share the model, age, current configuration and where it feels slow or unreliable.', 26, 30],
      ['Upgrade', 'Choose changes the device supports', 'Consider compatible SSD or memory options based on the model, its condition and the applications it needs to run.', 76, 55],
      ['Check', 'Review the renewed device before redeployment', 'Discuss the checks needed for the device and agree how it will be used after renewal.', 40, 78]
    ], [
      ['Device evaluation', 'Review condition and configuration to determine whether the laptop is a candidate for renewal.'],
      ['Upgrades and customisation', 'Discuss changes suited to compatible hardware and the intended use.'],
      ['Quality checks', 'Agree on the checks the device should pass before it goes back into use.']
    ], 'Which laptops are you looking to keep in use?', 'Share models, quantities and the work you need them to handle.'),
  'e-waste-recycling': detail('e-waste-management/',
    'Plan the collection and recycling of retired electronics with an inventory and a clear handover.',
    'Discuss e-waste collection', 'Follow retired equipment through collection', 'recycling', [
      ['Inventory', 'Record what is being retired', 'List device types, approximate quantities and locations. Flag equipment that may contain business data.', 19, 28],
      ['Collection', 'Prepare the equipment for handover', 'Discuss inspection, segregation and pickup arrangements based on the equipment and site.', 36, 67],
      ['Recycling', 'Confirm the handling and paperwork', 'Ask how the equipment will be processed, what documentation is available, and what to arrange for data-bearing devices.', 76, 32]
    ], [
      ['Assessment and inspection', 'Share your asset list so the equipment and site requirements can be reviewed.'],
      ['Collection planning', 'Confirm pickup arrangements, eligible equipment and handover terms with Systech.'],
      ['Data and documentation', 'Ask about data removal options and available documentation before handing over devices.']
    ], 'What equipment are you retiring?', 'Share a rough inventory, site location and any data-handling requirements.')
};
