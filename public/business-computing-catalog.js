import { partnerBrandLogos } from './brand-logos.js?v=20261119v4u';

const bcCategories = [
  {
    id: 'laptops',
    label: 'Laptops',
    count: '04',
    summary: 'Enterprise notebooks, modern aluminium ultrabooks, executive 2-in-1s and campus laptops.',
    contextImg: 'assets/devices-mobile.webp',
    contextCaption: 'Role-matched laptop fleet paired with USB-C dock, Monitor and wireless ANC headset.',
    items: [
      {
        id: 'thinkpad',
        name: 'ThinkPad (X1, T, L & E Series)',
        tier: 'Enterprise Flagship',
        track: 'pro-laptops',
        img: 'assets/bc-thinkpad.webp',
        detailImg: 'assets/bc-thinkpad-detail.webp',
        spec: 'Core Ultra / Ryzen PRO · MIL-STD-810H · ThinkShield',
        detail: 'Carbon-fibre and magnesium commercial notebooks with TrackPoint, dual Thunderbolt 4 docking and all-day fleet battery.',
        highlights: ['MIL-STD-810H tested (12 methods)', 'Intel vPro / AMD Ryzen PRO manageability', 'Windows Autopilot zero-touch imaging', '3–5 Yr Premier Support + ADP options'],
        hotspots: [
          [41, 30, 'Anti-Glare Display & IR Camera', 'Low-blue-light IPS/OLED panels with mechanical camera privacy shutter and AI noise-canceling mics for hybrid calls.'],
          [50, 58, 'Legendary ThinkPad Keyboard & TrackPoint', 'Spill-resistant backlit keyboard with tactile cursor TrackPoint and physical three-button clickpad.'],
          [26, 70, 'Twin Thunderbolt 4 / USB4 + RJ45', 'Full enterprise I/O including HDMI 2.1, native Ethernet on T/L series and single-cable USB-C docking.']
        ],
        subModels: [
          ['ThinkPad X1 Carbon / X1 2-in-1', 'Executive Flagship', 'Core Ultra 7 · <1.1 kg carbon weave · OLED / Eyesafe', 'Ultralight executive & GCC leadership laptops with instant wake and LTE/5G options.'],
          ['ThinkPad T14 / T16 Gen Series', 'Standard Engineering Fleet', 'Core Ultra / Ryzen PRO · Up to 64 GB RAM · Dual M.2', 'Long-lifecycle workhorse standardised across multi-year software, finance and ops deployments.'],
          ['ThinkPad L14 & E14 / E16 Series', 'Value Commercial Rollout', 'Upgradable DDR5 · FHD webcam · Spill-resistant deck', 'Scalable enterprise laptops for rapid hiring batches without compromising ThinkShield security.']
        ],
        specs: [
          ['Processors & AI Platform', 'Intel Core Ultra (vPro Enterprise) or AMD Ryzen PRO 7000/8000 Series with dedicated NPU'],
          ['Memory & NVMe Storage', '16 GB to 64 GB LPDDR5x / DDR5 · 512 GB to 2 TB PCIe Gen 4 TCG Opal 2.0 SED SSD'],
          ['Display & Chassis', '13.3", 14" & 16" WUXGA / 2.8K OLED antireflective · Carbon-fibre/aluminium MIL-STD chassis'],
          ['Ports, Docking & Wi-Fi', '2× Thunderbolt 4 / USB4, USB-A 3.2, HDMI 2.1, audio jack · Wi-Fi 6E/7 + BT 5.3'],
          ['Security & Management', 'dTPM 2.0, IR Windows Hello, Fingerprint Match-on-Chip, ThinkShield & Autopilot readiness'],
          ['Systech Delivery & Spares', 'Pre-tagged BIOS assets, ThinkPad USB-C Docks, 100% genuine FRU batteries/keyboards by MTM']
        ]
      },
      {
        id: 'thinkbook',
        name: 'ThinkBook (14 & 16 Gen)',
        tier: 'Modern SMB & GCC',
        track: 'pro-laptops',
        img: 'assets/bc-thinkbook.webp',
        detailImg: 'assets/bc-thinkbook-detail.webp',
        spec: 'Aluminium chassis · FHD IR camera · Fast Charge',
        detail: 'Sleek business ultrabooks built for fast-scaling software, sales and operations teams needing strong value per seat.',
        highlights: ['Dual-tone anodised aluminium lid', 'Smart Power On fingerprint reader', 'Dual SSD slots on 14/16 models', 'Universal USB-C dock compatible'],
        hotspots: [
          [50, 29, '16:10 Thin-Bezel Display', 'Extra vertical screen height for code editors, Excel models and multi-window workflows with Smart Privacy webcam.'],
          [51, 67, 'Full Pitch Keyboard & Oversized Trackpad', 'Modern edge-to-edge layout with dedicated numpad on 16-inch models and Dolby Audio tuning.'],
          [32, 82, 'High-Density Rapid Charge Battery', 'Delivers up to 80% capacity in 60 minutes via USB-C Power Delivery.']
        ],
        subModels: [
          ['ThinkBook 14 Gen 7 / 8', 'Portable Modern Fleet', '14" 16:10 WUXGA · Core Ultra / Ryzen 7 · ~1.38 kg', 'Built for agile product teams, consultants and field managers balancing mobility and port selection.'],
          ['ThinkBook 16 Gen 7 / 8', 'Spreadsheet & Dev Screen', '16" 16:10 display · Numeric keypad · Dual NVMe', 'Ideal for finance controllers, BI analysts and developers who benefit from full 16-inch workspace.'],
          ['ThinkBook 14/16p Creator', 'High-Power Performance', 'H-Series CPU · Dedicated RTX Graphics · Calibrated IPS', 'Bridges mainstream business portability and GPU-accelerated media or light CAD workloads.']
        ],
        specs: [
          ['Processors & Graphics', 'Intel Core Ultra / 13th-14th Gen or AMD Ryzen 5/7 · Optional NVIDIA RTX on P-models'],
          ['Memory & Expansion', '16 GB to 64 GB DDR5 (dual SO-DIMM on standard Gen) · Dual M.2 PCIe Gen 4 SSD bays'],
          ['Display & Build', '14" & 16" 1920×1200 IPS 300-nits · Anodised mineral grey aluminium cover'],
          ['Connectivity & I/O', 'Thunderbolt 4, USB-C Gen 2, 2× USB-A, HDMI 2.1, RJ45 Ethernet, SD reader · Wi-Fi 6E'],
          ['Security Features', 'Firmware TPM 2.0, physical camera shutter, fingerprint power button, Kensington Nano slot'],
          ['Systech Delivery & Spares', 'Bulk commercial pricing, fleet imaging & genuine ThinkBook battery/LCD FRU stocking']
        ]
      },
      {
        id: 'yoga',
        name: 'Lenovo Yoga (2-in-1)',
        tier: 'Executive & Creator',
        track: 'pro-laptops',
        img: 'assets/bc-yoga.webp',
        detailImg: 'assets/bc-yoga-detail.webp',
        spec: '360° convertible · OLED / Touch · Stylus support',
        detail: 'Convertible laptop-to-tablet form factor suited to leadership travel, client workshops and interactive design reviews.',
        highlights: ['360° multi-mode precision hinge', '100% DCI-P3 / PureSight OLED touch', 'Bundled / compatible Precision Pen', 'CNC unibody aluminium finish'],
        hotspots: [
          [60, 44, 'PureSight Touch & Stylus Glass', 'Factory colour-calibrated multi-touch display engineered for PDF redlining and whiteboard sketches.'],
          [40, 22, '360° Synchronised Dual Hinge', 'Rotates smoothly between laptop, tent, stand and flat tablet presentations without wobble.'],
          [29, 64, 'Quad-Speaker Dolby Atmos Bar', 'Acoustic chamber preserves crisp room-filling audio regardless of hinge orientation.']
        ],
        subModels: [
          ['Yoga 7 / 7i 2-in-1 (14" & 16")', 'Consultative & Client Teams', '360° hinge · Touch OLED · Lenovo Digital Pen', 'For leadership, architects and pre-sales consultants presenting directly to clients.'],
          ['Yoga 9i Flagship Convertible', 'Boardroom Executive', 'CNC titanium-style edge · 4K/2.8K OLED · Bowers & Wilkins bar', 'Ultra-premium flagship convertible combining soundbar hinge and featherweight build.'],
          ['Yoga Slim / Pro Creator', 'Creative & Marketing', 'PureSight Pro 120Hz · Core Ultra / Ryzen AI · Slim 1.28 kg', 'Calibrated clamshell notebooks for brand teams, UX designers and executive video comms.']
        ],
        specs: [
          ['Processors & NPU', 'Intel Core Ultra Series / AMD Ryzen AI with hardware studio effects & battery optimisation'],
          ['Memory & Storage', '16 GB to 32 GB LPDDR5x · 512 GB / 1 TB M.2 PCIe Gen 4 NVMe SSD'],
          ['Touch Display', '14" & 16" PureSight OLED 120Hz Touch · Gorilla Glass options · Dolby Vision'],
          ['Ports & Wireless', 'Dual Thunderbolt 4 / USB4, USB-A, HDMI 2.1, Wi-Fi 6E/7, FHD IR Time-of-Flight sensor'],
          ['Security & Wellness', 'Zero-touch login/lock via presence sensing, privacy shutter, TPM security'],
          ['Systech Delivery & Spares', 'Includes styluses, sleeves, USB-C travel hubs & commercial warranty extensions']
        ]
      },
      {
        id: 'ideapad',
        name: 'IdeaPad (Slim & Student)',
        tier: 'Campus & Volume',
        track: 'student-laptops',
        img: 'assets/bc-ideapad.webp',
        detailImg: 'assets/bc-ideapad-detail.webp',
        spec: 'Lightweight chassis · Rapid Charge · Lab ready',
        detail: 'Reliable laptops for academic campuses, student programmes, training cohorts and standard office productivity.',
        highlights: ['Attractive cost-per-seat scaling', 'Lightweight Slim 3 & Slim 5 builds', 'TÜV Low Blue Light panels', 'Ideal for academies & onboarding batches'],
        hotspots: [
          [50, 28, 'Narrow-Bezel FHD / WUXGA Screen', 'Clear anti-glare panel tuned for long coding labs, LMS portals and office suites.'],
          [50, 66, 'Comfortable Quiet Key Deck', 'Ergonomic key travel for training workshops, customer-care teams and student assignments.'],
          [69, 44, 'User-Facing Speakers & Privacy Cam', 'Clear video-class sound with a physical sliding shutter for instant webcam privacy.']
        ],
        subModels: [
          ['IdeaPad Slim 3 Commercial / Edu', 'Campus & Volume Batches', '14"/15.6" FHD · Ryzen 5 / Core i5 · Rapid Charge Boost', 'High-value deployments for colleges, training institutes and large seasonal onboarding batches.'],
          ['IdeaPad Slim 5 Light/Metal', 'Everyday Office Staff', 'Metal A/D cover · 16 GB RAM · 16:10 WUXGA IPS', 'Sleek aluminium upgrade for coordinators, interns and hybrid administrative staff.'],
          ['IdeaPad Pro 5 Performance', 'STEM & Coding Labs', '2.5K/2.8K 120Hz · H-series CPU · Up to 32 GB RAM', 'Brings desktop-grade compute into student engineering labs and software training academies.']
        ],
        specs: [
          ['Processors', 'Intel Core 13th/14th Gen or Core Ultra · AMD Ryzen 5 / 7 7000 Series'],
          ['Memory & Storage', '8 GB / 16 GB / 32 GB DDR5/LPDDR5 · 512 GB NVMe M.2 SSD'],
          ['Display & Form Factor', '14", 15.6" & 16" FHD/WUXGA Anti-glare 300-nits · ~1.4 to 1.6 kg'],
          ['Ports & Battery', 'Full-function USB-C (PD + DisplayPort), 2× USB-A, HDMI, SD card slot · Rapid Charge'],
          ['Campus Readiness', 'Webcam privacy shutter, smart learning noise-canceling mics, Wi-Fi 6'],
          ['Systech Delivery & Spares', 'Institutional multi-unit billing, pre-setup checks & Bengaluru bench servicing']
        ]
      }
    ]
  },
  {
    id: 'desktops',
    label: 'Desktops',
    count: '03',
    summary: 'Compact 1-litre Tiny desktops, sleek All-in-Ones and high-wattage GPU towers.',
    contextImg: 'assets/devices-office.webp',
    contextCaption: 'Complete fixed-desk ThinkCentre / AIO setup with ThinkVision display and wired peripherals.',
    items: [
      {
        id: 'thinkcentre',
        name: 'ThinkCentre (Tiny, SFF & Tower)',
        tier: 'Commercial Desktop',
        track: 'desktops',
        img: 'assets/bc-thinkcentre.webp',
        detailImg: 'assets/bc-thinkcentre-detail.webp',
        spec: '1-Litre Tiny VESA · Dust Shield · Tool-less service',
        detail: '24/7 commercial desktops engineered for corporate floors, hospital counters, BFSI branches and manufacturing lines.',
        highlights: ['Tiny (1L), SFF (8.2L) & Tower chassis', 'Dust shield for factories & clinics', 'Up to 4 independent displays', 'Long 3–5 year platform stability'],
        hotspots: [
          [53, 18, 'Optical / Front I/O & Power Button', 'Instant front-panel access to high-speed USB-C, USB-A, audio combo and smart power-on from keyboard.'],
          [54, 48, 'Perforated Thermal Intake Mesh', 'Engineered front airflow path with optional ThinkCentre dust filter for shop-floor deployments.'],
          [32, 65, 'Tool-Less Serviceable Steel Chassis', 'Thumb-screw side cover lets facility IT swap RAM, NVMe drives or PCIe cards in under 60 seconds.']
        ],
        subModels: [
          ['ThinkCentre M70q / M90q Tiny (1L)', 'Behind-Monitor VESA Desk', '1-Litre ultra-compact · Dual M.2 · Up to Intel Core i9 vPro', 'Mounts directly behind ThinkVision displays or under kiosks to reclaim zero-clutter desk real estate.'],
          ['ThinkCentre M70s / M90s SFF', 'Standard Enterprise SFF', 'Small Form Factor · Low-profile PCIe slots · Serial/COM options', 'Supports dual-display BFSI counters, hospital nursing stations and legacy PCIe card integration.'],
          ['ThinkCentre M70t / M90t Tower', 'Expandable Enterprise Tower', 'Full-height PCIe x16 + x1 · Multiple HDD/SSD bays · Quiet thermals', 'Built for branch servers, dedicated graphic cards and long-lived internal storage expansion.']
        ],
        specs: [
          ['Processors & Chipsets', 'Intel Core i3 / i5 / i7 / i9 (vPro Enterprise) or AMD Ryzen PRO Desktop series'],
          ['Memory & Multi-Drive Storage', 'Up to 64/128 GB DDR5 · Dual M.2 NVMe SSD + SATA HDD RAID-ready storage options'],
          ['Chassis Sizes', 'Tiny 1L (179×182×36 mm), SFF 8.2L or Tower 13.6L · Tool-less access'],
          ['Rear & Multi-Monitor I/O', 'Dual DisplayPort + HDMI + USB-C Flex IO · Gigabit RJ45 + optional Wi-Fi 6E & Serial COM'],
          ['Security & Lifecycle', 'dTPM 2.0, Smart USB Protection (data block), chassis intrusion switch & padlock loop'],
          ['Systech Delivery & Spares', 'Bundled ThinkVision T/S-Series monitors, wired/wireless KB+Mouse & on-site AMC']
        ]
      },
      {
        id: 'ideacentre',
        name: 'IdeaCentre All-in-One',
        tier: 'Front-Office & AIO',
        track: 'desktops',
        img: 'assets/bc-ideacentre.webp',
        detailImg: 'assets/bc-ideacentre-detail.webp',
        spec: '24"–27" integrated IPS · Single power cable · Clean desk',
        detail: 'Clutter-free All-in-One desktops for reception desks, executive cabins, showrooms and collaborative pods.',
        highlights: ['Single power cord footprint', 'Pop-up / built-in IR camera + mics', '24" FHD or 27" QHD borderless IPS', 'Harman / Dolby Audio speakers'],
        hotspots: [
          [50, 14, 'Integrated 5MP Webcam & Dual Mics', 'Clean camera module at top bezel designed for walk-up reception calls and clinic tele-consults.'],
          [50, 36, '3-Side Borderless IPS Screen', 'Wide-angle anti-glare panel (touch optional) makes patient intake and client dashboards easy to view.'],
          [56, 70, 'Sleek Ergonomic Stand & Base Hub', 'Sturdy compact footprint leaving desk space open with tidy rear cable routing and optional wireless charging pad.']
        ],
        subModels: [
          ['IdeaCentre AIO 3 (24" / 27")', 'Front Desk & Clinic Pod', 'Intel / Ryzen U & H Series · Compact spiral stand · Clean rear I/O', 'Ideal for corporate reception counters, HR onboarding pods and outpatient clinic stations.'],
          ['IdeaCentre AIO 5 / 27" QHD', 'Executive Cabin & Concierge', '27" QHD Display · Harman speakers · High-wattage CPU', 'Premium executive All-in-One combining crisp studio typography with effortless single-cord placement.'],
          ['IdeaCentre Mini (1L Desktop)', 'Tight Countertop / Lounge', 'Internal PSU (no brick!) · Dual Thunderbolt · Ultra-quiet', 'Pairs the sleek silver desktop aesthetic with easy placement on minimalist studio desks.']
        ],
        specs: [
          ['Display Integration', '23.8" Full HD or 27" QHD IPS 99% sRGB anti-glare · Optional 10-point multitouch'],
          ['Processors & RAM', '13th Gen Intel Core i5/i7 or AMD Ryzen 5/7 · 8 GB to 32 GB DDR5'],
          ['Storage', '512 GB / 1 TB M.2 PCIe Gen 4 SSD'],
          ['Audio & Video Hardware', '5MP / FHD IR Camera with dual array AI mics and tuned stereo speakers'],
          ['Peripherals Included', 'Matching wireless or wired keyboard and optical mouse included in box'],
          ['Systech Delivery & Spares', 'Clean site installation, Wi-Fi/domain join & comprehensive AMC contracts']
        ]
      },
      {
        id: 'legion',
        name: 'Legion High-Performance Towers',
        tier: 'GPU & Simulation',
        track: 'workstations',
        img: 'assets/bc-legion.webp',
        detailImg: 'assets/bc-legion-detail.webp',
        spec: 'Discrete NVIDIA RTX GPUs · DDR5 · High-airflow chassis',
        detail: 'High-wattage desktop towers deployed for media studios, 3D visualisation, XR walkthroughs and local GPU workloads.',
        highlights: ['NVIDIA GeForce RTX 40-Series GPUs', 'Unlocked i7/i9 or Ryzen 9 thermals', 'Tempered-glass high-airflow chassis', 'Custom multi-GPU & liquid cooling'],
        hotspots: [
          [56, 28, 'Tool-Less Airflow Mesh & Upper Radiators', 'High-volume positive-pressure cooling sustains peak boost clocks during long render queues.'],
          [38, 60, 'Full-Length RTX GPU Bay', 'Generous clearance supporting discrete NVIDIA RTX cards with multi-display 4K/8K outputs.'],
          [72, 68, 'Front High-Flow Fan Matrix', 'Keeps DDR5 DIMMs, VRMs and Gen 4/Gen 5 NVMe drives thermally steady under load.']
        ],
        subModels: [
          ['Legion Tower 5i / 5 (Gen 8)', 'ArchViz & Unreal Studio', 'Core i7 / Ryzen 7 · RTX 4060 Ti / 4070 SUPER · Up to 64 GB DDR5', 'Built for architectural walkthroughs, Lumion/Twinmotion renders and multi-camera streaming.'],
          ['Legion Tower 7i Extreme', 'AI Inference & 4K/8K Post', 'Unlocked Core i9 · RTX 4080 SUPER / 4090 · 360mm liquid cooled', 'Sustained CUDA/Tensor compute power for media post-production, XR labs and local LLM prototyping.'],
          ['Legion Pro Slim (Mobile GPU)', 'Portable Demo & Game Dev', '16" 240Hz calibrated panel · RTX 4070/4080 · Per-key white/RGB backlit', 'When XR engineers or studio leads need RTX horsepower at client sites and trade expos.']
        ],
        specs: [
          ['GPU Compute Architecture', 'NVIDIA GeForce RTX 4060 / 4070 / 4080 SUPER / 4090 with Tensor & RT cores'],
          ['CPU & VRM Cooling', 'Intel Core i7/i9 K-series or AMD Ryzen 7/9 · High-TDP tower/liquid cooling up to 260W'],
          ['Memory & Storage', '32 GB to 128 GB DDR5 5600MHz · Multiple NVMe M.2 + SATA enterprise drives'],
          ['Networking & Display I/O', '2.5G Ethernet + Wi-Fi 6E · Triple DisplayPort 1.4a + HDMI 2.1a'],
          ['Power & Acoustics', '850W to 1200W 80+ Gold Modular PSU with whisper-quiet acoustic profile'],
          ['Systech Delivery & Spares', 'Bespoke burn-in testing, ThinkVision 4K pairing & studio UPS sizing']
        ]
      }
    ]
  },
  {
    id: 'workstations',
    label: 'Workstations',
    count: '02',
    summary: 'ISV-certified ThinkPad P Series mobile workstations and ThinkStation P Series towers.',
    contextImg: 'assets/devices-specialist.webp',
    contextCaption: 'ISV-certified workstation desk with dual calibrated displays for CAD, BIM and simulation.',
    items: [
      {
        id: 'thinkpad-p',
        name: 'ThinkPad P Series Mobile Workstations',
        tier: 'ISV Mobile Workstation',
        track: 'workstations',
        img: 'assets/bc-thinkpad-p.webp',
        detailImg: 'assets/bc-thinkpad-p-detail.webp',
        spec: 'P1 / P14s / P16 · NVIDIA RTX Ada · ISV Certified',
        detail: 'Mobile CAD, BIM, SOLIDWORKS and local AI engineering laptops built for R&D, architecture and field leads.',
        highlights: ['NVIDIA RTX Ada Generation GPUs', 'Autodesk, Dassault & PTC ISV certified', 'Factory X-Rite Pantone calibrated', 'Dual-fan vapor chamber cooling'],
        hotspots: [
          [49, 44, 'Dual-Fan Vapour Chamber Deck', 'High-efficiency thermal exhaust keeps ThinkPad P1/P16 cool during multi-hour SOLIDWORKS or BIM builds.'],
          [26, 74, 'Precision Full-Size Workstation Keyboard', 'Dedicated number pad on 16" models with Ultra Performance thermal mode toggle.'],
          [66, 75, 'High-Power Workstation Port Array', 'SD Express card reader, twin Thunderbolt 4, HDMI 2.1 and RJ45 wired LAN for heavy model syncs.']
        ],
        subModels: [
          ['ThinkPad P14s / P16s (Thin CAD)', 'Agile Field Engineering', '14"/16" · RTX A500/500 Ada or Ryzen PRO · Lightweight chassis', 'Matches 2D/3D CAD portability with all-day site battery for civil engineers and consultants.'],
          ['ThinkPad P1 Gen Series', 'Ultra-Thin Studio Creator', '16" OLED/IPS · Core Ultra 9 · RTX 2000/3000 Ada in 1.8 kg build', 'Precision engineering meets carbon-fibre thinness for lead architects and AI scientists.'],
          ['ThinkPad P16 Mobile Flagship', 'Maximum Mobile Power', 'HX-series CPU · Up to RTX 5000 Ada · 192 GB DDR5 · 2× SSD RAID', 'Desktop-replacement mobile chassis certified for heavy CFD, Revit and 8K color grading.']
        ],
        specs: [
          ['ISV Certifications', 'AutoCAD, Revit, SOLIDWORKS, CATIA, Creo, ANSYS, Adobe Premiere, DaVinci Resolve'],
          ['Workstation GPUs', 'NVIDIA RTX 500 / 1000 / 2000 / 3500 / 5000 Ada Generation with ECC VRAM options'],
          ['CPU & ECC Memory', 'Intel Core Ultra / i7-HX / i9-HX vPro · Up to 192 GB DDR5 (ECC on P16 HX)'],
          ['Color Displays', '14" & 16" Factory Calibrated IPS / OLED up to 4K 100% DCI-P3, X-Rite certified'],
          ['Thunderbolt & Docking', 'Certified for ThinkPad Workstation Thunderbolt 4 Docks (170W–230W dual feed)'],
          ['Systech Delivery & Spares', 'CAD benchmark sizing before PO, on-site Premier warranty & genuine Lenovo docks']
        ]
      },
      {
        id: 'thinkstation-p',
        name: 'ThinkStation P Series Workstations',
        tier: 'ISV Tower, SFF & Tiny',
        track: 'workstations',
        img: 'assets/bc-thinkstation-p.webp',
        detailImg: 'assets/bc-thinkstation-p-detail.webp',
        spec: 'P3 / P5 / P7 / PX · Xeon & Threadripper PRO · Multi-GPU',
        detail: 'Mission-critical deskside and rack workstations with ECC memory for ANSYS, 3D rendering and deep-learning workloads.',
        highlights: ['Aston Martin inspired P5/P7/PX airflow', 'Up to 4× Double-wide NVIDIA RTX GPUs', 'Front-access tool-less NVMe trays', 'Deskside or 4U/5U rack-mountable'],
        hotspots: [
          [24, 52, 'ThinkStation P3 Tiny & SFF Footprint', '1-Litre P3 Tiny drives up to 6 independent displays via MiniDP—built for financial trading floors and SCADA control rooms.'],
          [68, 42, 'Tri-Channel Cooling & Honeycomb Grille', 'Guides cool outside air directly over CPUs, ECC RDIMMs and multiple full-length RTX Ada GPUs.'],
          [56, 76, 'Tool-Less Modular Red Touchpoints', 'Iconic ThinkStation red handles allow hot-swap drive bays, fan modules and PSU swaps without screwdrivers.']
        ],
        subModels: [
          ['ThinkStation P3 Tiny / Ultra / Tower', 'Trading, SCADA & Entry CAD', 'Core i7/i9 · NVIDIA T1000 / RTX A2000 · Up to 6 displays on Tiny', 'Compact deskside and multi-screen control-room computers certified for financial & factory applications.'],
          ['ThinkStation P5 Workstation', 'Core Engineering & BIM', 'Intel Xeon w5/w7 · Up to 512 GB ECC · Dual RTX 6000 Ada support', 'Mainstream single-socket Xeon platform engineered for demanding Revit, Inventor and Unreal builds.'],
          ['ThinkStation P7 & PX (Up to 96 Cores)', 'AI Training, CFD & VFX Farm', 'Threadripper PRO or Dual Xeon Scalable · Up to 4× RTX 6000 Ada', 'Cluster-class compute in a deskside or 4U/5U data-centre rack chassis for deep learning and simulation.']
        ],
        specs: [
          ['Processor Architecture', 'Intel Xeon W-2400/W-3400, Dual Xeon Scalable (PX) or AMD Ryzen Threadripper PRO'],
          ['Error-Correcting Memory', 'Up to 2 TB / 4 TB DDR5 ECC RDIMM for zero data-corruption long simulation runs'],
          ['Multi-GPU Scaling', 'NVIDIA RTX A1000 / 4000 / 5000 / 6000 Ada (up to 4 GPUs on PX with 1850W PSU)'],
          ['High-Speed Storage', 'Front lockable hot-swap NVMe bays + internal PCIe Gen 4/5 M.2 hardware RAID'],
          ['Redundant Security & LAN', 'Dual 10GbE + 1GbE LAN (PX/P7), out-of-band BMC management, dTPM 2.0'],
          ['Systech Delivery & Spares', 'Application BOM matching, workstation UPS pairing, rack rail kits & Pan-India AMC']
        ]
      }
    ]
  },
  {
    id: 'monitors',
    label: 'Monitors',
    count: '03',
    summary: 'ThinkVision ergonomic Full HD, Quad HD USB-C hub displays and 4K UHD panels.',
    contextImg: 'assets/detail-displays.webp',
    contextCaption: 'Ergo-stand ThinkVision display paired alongside shared print and mobility workstations.',
    items: [
      {
        id: 'monitor-fhd',
        name: 'ThinkVision Full HD (1080p)',
        tier: '21.5"–24" Everyday IPS',
        track: 'monitors',
        img: 'assets/bc-monitor-fhd.webp',
        detailImg: 'assets/bc-monitor-fhd-detail.webp',
        spec: '1920×1080 IPS · Lift/Tilt/Pivot stand · Low Blue Light',
        detail: 'Ergonomic, flicker-free Full HD displays built for dual-monitor employee pods and operations floors.',
        highlights: ['3-side NearEdgeless bezels for dual screens', 'Hardware Natural Low Blue Light', 'Full ergonomic LTPS stand + VESA', 'Built-in USB hub on T-Series'],
        hotspots: [
          [50, 19, 'NearEdgeless Matte Anti-Glare IPS', 'Minimal 2mm bezel makes side-by-side dual-monitor setups visually seamless across engineering bays.'],
          [50, 56, 'TÜV Eyesafe Certified Comfort', 'Reduces harmful blue light hardware-side without yellowing color accuracy during 9-hour shifts.'],
          [50, 82, 'Ergo Lift, Tilt, Swivel & 90° Pivot', 'Tool-less snap stand integrates a neat smartphone slot and rear cable channel; supports VESA Tiny mount.']
        ],
        subModels: [
          ['ThinkVision S22i / S24i Series', 'Compact Everyday Desk', '21.5" & 23.8" Full HD IPS · HDMI + VGA · Sleek tilt stand', 'Cost-effective commercial screens with crisp IPS angles for reception, branch counters and labs.'],
          ['ThinkVision T24i / T24v Ergonomic', 'Enterprise Dual-Screen Pod', '23.8" IPS · 4-Port USB 3.2 Hub · HDMI + DP + VGA · Full Ergo', 'Corporate standard monitor with full height/pivot adjustability (T24v adds VoIP camera & mic bar).'],
          ['ThinkVision T24m USB-C Hub', 'Docking-Free Desk Monitor', 'Single-cable USB-C (up to 90W PD) + Daisy Chain DP Out', 'Eliminates external laptop bricks—one cable handles display, USB peripherals and laptop charging.']
        ],
        specs: [
          ['Resolution & Panel Type', '1920×1080 Full HD IPS (178°/178° wide viewing angle) · 250–300 nits'],
          ['Ergonomic Range', '155 mm Height Lift, -5°/+23.5° Tilt, ±45° Swivel, ±90° Portrait Pivot (T-Series)'],
          ['Tiny-in-One Compatibility', 'Rear VESA 100×100 mm mounts ThinkCentre Tiny PCs cleanly behind screen'],
          ['Eye Care Certifications', 'TÜV Rheinland Eye Comfort, Eyesafe 2.0 Hardware Low Blue Light, Flicker-Free'],
          ['Green Standards', 'EPEAT Gold, ENERGY STAR 8.0, TCO Certified 9.0, 90% recycled pulp packaging'],
          ['Systech Delivery & Spares', 'Volume multi-seat brackets, dual monitor arms & 3-Year Advance Replacement Warranty']
        ]
      },
      {
        id: 'monitor-qhd',
        name: 'ThinkVision Quad HD (QHD USB-C)',
        tier: '24"–27" Docking Hub',
        track: 'monitors',
        img: 'assets/bc-monitor-qhd.webp',
        detailImg: 'assets/bc-monitor-qhd-detail.webp',
        spec: '2560×1440 QHD · 90W USB-C Power · Built-in RJ45 LAN',
        detail: 'Single-cable docking monitors that power your ThinkPad, transmit Ethernet and support daisy-chained dual screens.',
        highlights: ['77% more pixels than 1080p', 'Single-cable 90W–100W USB-C charging', 'Integrated Gigabit RJ45 Ethernet', 'Daisy-chain DisplayPort Out'],
        hotspots: [
          [50, 22, '2560×1440 Crisp Multi-Pane Canvas', 'Displays two full documents or IDE panels cleanly at 100% scaling without text fuzziness.'],
          [50, 63, 'Minimalist Brushed Ergo Pedestal', 'Slender architectural aluminium stand keeps hot-desking bays tidy while hiding power and LAN cords.'],
          [58, 79, 'Built-In Docking Matrix (USB-C + RJ45)', 'Connect keyboard, mouse, headset and corporate wired Gigabit LAN straight into the monitor once.']
        ],
        subModels: [
          ['ThinkVision P24h / P27h Series', 'Developer & Analyst Dock', '23.8" & 27" QHD IPS · 100W USB-C · Factory Calibrated Delta E<2', 'Turns every hoteling desk into an instant dual-screen Gigabit workstation via one USB-C plug.'],
          ['ThinkVision T27hv VoIP Conferencing', 'Hybrid Meeting Cabin', '27" QHD · Tiltable 5MP IR Cam + Speakerbar + Microsoft Teams key', 'Built-in webcam, dual noise-canceling mics and Teams button eliminate clutter on cabin desks.'],
          ['ThinkVision P27q (No-Hub Dual QHD)', 'Fixed Dual Desktop Array', '27" QHD · HDMI + DP In + DP Out Daisy Chain · 99% sRGB', 'Ideal alongside ThinkCentre SFF/Workstations where USB-C laptop charging isn’t required.']
        ],
        specs: [
          ['Panel Clarity & Color', '2560×1440 QHD IPS · 99% sRGB, 99% BT.709 · Factory Calibrated Delta E < 2 (P-series)'],
          ['Single-Cable Power & Data', 'USB Type-C Gen 1/2 upstream delivering 90W–100W PD charging to ThinkPad / MacBook'],
          ['Integrated Networking', 'Realtek Gigabit RJ45 Ethernet pass-through with MAC address clone & PXE boot support'],
          ['Daisy-Chaining & KVM', 'DisplayPort 1.4 Out + built-in KVM switch to toggle between desktop & laptop cleanly'],
          ['Ergonomics', 'Full height, tilt, swivel, pivot + phone holder base & clean cable grommet'],
          ['Systech Delivery & Spares', 'Compatible DisplayPort/USB-C 4K cables, dual-arm VESA stands & fleet replacement SKUs']
        ]
      },
      {
        id: 'monitor-4k',
        name: 'ThinkVision 4K UHD',
        tier: '27"–32" Precision & AV',
        track: 'monitors',
        img: 'assets/bc-monitor-4k.webp',
        detailImg: 'assets/bc-monitor-4k-detail.webp',
        spec: '3840×2160 4K · 99% sRGB / DCI-P3 · Thunderbolt 4',
        detail: 'High-density 4K displays for engineering design, analytics dashboards, creative grading and executive cabins.',
        highlights: ['4× pixel density of Full HD', '99% DCI-P3 / 99% Adobe RGB (Creator)', 'Thunderbolt 4 dual-4K daisy chain', 'True 10-bit HDR400 color depth'],
        hotspots: [
          [50, 22, '3840×2160 Hairline-Sharp Studio Canvas', '163 PPI density renders ultra-fine CAD wireframes, 12-point spreadsheet grids and medical imagery crisply.'],
          [49, 64, '5-Way Joystick & ThinkColor Suite', 'Ergonomic rear OSD joystick plus ThinkColor software for instant sRGB, DCI-P3 and PBP/PIP switching.'],
          [50, 82, 'High-Stability Circular Base + KVM', 'Weighted low-profile stand rotates 32" panels smoothly with PiP/PbP to view two systems side-by-side.']
        ],
        subModels: [
          ['ThinkVision P27u / P32p-30 (USB-C)', 'CAD, Finance & Executive', '27" & 31.5" 4K UHD · Thunderbolt 4 / USB-C 100W · RJ45 + KVM', 'Single-cable 4K precision hub designed for P-Series Mobile Workstations and MacBook Pros.'],
          ['ThinkVision P32u Thunderbolt Creator', 'Studio, Video & Simulation', '32" 4K UHD · 99.5% Adobe RGB + 99% DCI-P3 · VESA DisplayHDR 600', 'Reference-grade wide gamut display built for media grading, brand design and medical PACS review.'],
          ['ThinkVision T32p Ultrathin Large Format', 'Executive & Wall Dashboard', '31.5" 4K UHD · USB-C 90W + DP + HDMI · Anti-glare 350 nits', 'Replaces cluttered dual-monitor grids with one sweeping 32-inch 4K panoramic workspace.']
        ],
        specs: [
          ['Resolution & Bit Depth', '3840×2160 (4K UHD) IPS · True 10-bit (1.07 Billion colors) · Up to 600 nits HDR'],
          ['Color Space Coverage', '99%–100% sRGB, up to 99% DCI-P3 & 99.5% Adobe RGB with Delta E < 1.5 calibration'],
          ['Thunderbolt / USB Hub', 'Thunderbolt 4 In + Thunderbolt 4 Out (dual 4K@60Hz daisy chain) · 100W charging + RJ45'],
          ['Dual-Host KVM', 'Smart KVM + Picture-in-Picture / Picture-by-Picture across two independent hosts'],
          ['Accessories Compatibility', 'Modular VoIP MC60 soundbar & ThinkColour calibration management support'],
          ['Systech Delivery & Spares', 'Turnkey CAD/Executive desk bundles with ThinkStation P-Series & wall/arm mounts']
        ]
      }
    ]
  },
  {
    id: 'tablets',
    label: 'Tablets',
    count: '04',
    summary: 'Commercial, detachable 2-in-1, kiosk/shared and paper-like Smart Paper tablets.',
    contextImg: 'assets/detail-displays.webp',
    contextCaption: 'Portable tablets managed centrally with Codeproof MDM alongside desktop & print zones.',
    items: [
      {
        id: 'tab-family',
        name: 'Family & Shared Tablets (Tab P12)',
        tier: '12.7" Kiosk & Training',
        track: 'tablets',
        img: 'assets/bc-tab-family.webp',
        detailImg: 'assets/bc-tab-family-detail.webp',
        spec: '12.7" 3K display · Quad audio · Multi-user profiles',
        detail: 'Large-screen tablets suited to reception check-in kiosks, training rooms, digital catalogues and shared terminals.',
        highlights: ['Expansive 12.7" 3K LTPS screen', 'Quad JBL speakers with Dolby Atmos', '10,200 mAh all-day kiosk battery', 'Multi-window split-screen workflows'],
        hotspots: [
          [26, 30, 'Slim Uni-Body Metal Chassis', '6.9mm sleek aluminium enclosure houses a 13MP rear scan cam and secure magnetic pogo pins.'],
          [60, 56, '12.7" 3K Anti-Fingerprint Glass', 'Near-laptop viewing size makes interactive visitor registration and engineering catalogues effortless.'],
          [20, 74, 'Quad JBL Speaker Chambers', 'Clear room-level voice prompts and product videos without external tabletop speakers.']
        ],
        subModels: [
          ['Lenovo Tab P12 (12.7" 3K)', 'Showroom & Check-In Kiosk', '12.7" 2944×1840 · MediaTek Dimensity · 8 GB / 128–256 GB + MicroSD', 'Turns lobbies, auto showrooms and training lounges into sleek interactive brand touchpoints.'],
          ['Tab P12 Paper Matte Edition', 'Zero-Glare Lobby Display', 'Anti-glare etched matte glass under overhead showroom spotlights', 'Eliminates harsh overhead fluorescent reflections on brightly lit office and clinic walls.'],
          ['Kiosk & Wall-Mount Bundles', 'Lockable Enclosure Kits', 'Continuous power charging mode + lockable tabletop or VESA floor stand', 'Supplied pre-configured in single-app kiosk mode synced cleanly with visitor software.']
        ],
        specs: [
          ['Display & Pixel Clarity', '12.7" 3K (2944×1840) LTPS LCD · 400 nits · Matte edition available'],
          ['Performance & Storage', 'Octa-core processor · 8 GB RAM · 128 GB / 256 GB UFS 2.2 + microSD up to 1 TB'],
          ['Audio & Video Conferencing', '13MP ultra-wide front auto-framing camera + Quad JBL Dolby Atmos speakers'],
          ['Battery Endurance', '10,200 mAh high-density cell · Kiosk Battery Protection Mode prevents swelling'],
          ['Kiosk & Device Security', 'Fingerprint power key + Google Zero-Touch / Codeproof MDM kiosk locking'],
          ['Systech Delivery & Spares', 'Kiosk stands, protective folios, bulk asset enrolment & stylus packs']
        ]
      },
      {
        id: 'tab-2in1',
        name: '2-in-1 Detachable Tablets (Tab P11 Pro)',
        tier: 'Keyboard + Pen Bundle',
        track: 'tablets',
        img: 'assets/bc-tab-2in1.webp',
        detailImg: 'assets/bc-tab-2in1-detail.webp',
        spec: 'OLED display · Snap-on pogo keyboard · Precision Pen',
        detail: 'Ultralight detachable tablets built for field inspections, executive briefings and mobile productivity.',
        highlights: ['Snap-on 2-in-1 magnetic keyboard', 'Built-in 165° fabric kickstand back', 'Precision Pen 3 wireless magnetic charge', 'Wireless secondary Windows monitor mode'],
        hotspots: [
          [66, 26, '11.2" 2.5K 120Hz OLED Display', 'Vivid contrast and ultra-responsive ink tracking for instant on-site photo annotations.'],
          [38, 72, 'Snap-On ThinkPad-Inspired Keyboard Deck', '1.3mm travel scissor-switch keys attach seamlessly via 4-point magnetic pogo pins—no Bluetooth pairing needed.'],
          [75, 76, 'Lenovo Precision Pen 3 Included Ready', 'Magnetically docks and charges on the rear lid while offering 4,096 levels of pressure & tilt sensitivity.']
        ],
        subModels: [
          ['Lenovo Tab P11 Pro (2nd Gen)', 'Field Audit & Executive', '11.2" OLED 120Hz · Keyboard Pack + Precision Pen · 480g tablet', 'Replaces bulky laptops during factory floor walk-throughs, hotel audits and flight travel.'],
          ['Lenovo IdeaPad Duet / Yoga Tab', 'Windows / ChromeOS 2-in-1', '12.4" WQXGA / Windows Pro / ChromeOS detachable enterprise', 'Runs native full Windows/Teams/Office desktop applications in a detachable chassis.'],
          ['Lenovo Freestyle 2nd-Screen Bundle', 'Wireless Extended Monitor', 'Extend/mirror any ThinkPad Windows laptop display wirelessly', 'Gives travelling executives a dual-monitor hotel desk using the tablet as a touch second screen.']
        ],
        specs: [
          ['Screen Tech', '11.2" 2.5K (2560×1536) OLED 120Hz 600-nits · Dolby Vision & HDR10+'],
          ['Detachable Input Ecosystem', '4-pin Pogo Keyboard Pack (with built-in trackpad) + Magnetic Kickstand + Precision Pen 3'],
          ['Multi-Monitor Integration', 'USB-C 3.2 Gen 1 DisplayPort Out + Lenovo Freestyle wireless touch extension'],
          ['Connectivity & Sensors', 'Wi-Fi 6, Bluetooth 5.1, NFC & USB-C charging with 20W Fast Charge'],
          ['Productivity Software', 'Instant Split-Screen multi-tasking, productivity mode taskbar & Microsoft 365 ready'],
          ['Systech Delivery & Spares', 'Supplied complete with keyboard pack, extra pen nibs, sleeves & MDM enrollment']
        ]
      },
      {
        id: 'tab-smb',
        name: 'Small Business Tablets (Tab M11 Plus)',
        tier: 'Field, Clinic & POS',
        track: 'tablets',
        img: 'assets/bc-tab-smb.webp',
        detailImg: 'assets/bc-tab-smb-detail.webp',
        spec: 'LTE / Wi-Fi · Codeproof MDM ready · Rugged case options',
        detail: 'MDM-enrolled fleet tablets for clinical rounds, warehouse scanning, retail POS and site service teams.',
        highlights: ['4G LTE + Wi-Fi always-connected options', 'Codeproof & Android Enterprise Ready', '11" FHD 90Hz toughened glass', 'Optional rugged IP54 folio + handstrap'],
        hotspots: [
          [44, 48, '11" 90Hz Smooth Field Interface', 'Fast barcode check-in, patient chart entry and delivery sign-offs with wet/gloved-finger support modes.'],
          [75, 22, 'Rear 13MP Autofocus Document/QR Cam', 'Instantly captures warehouse inventory labels, ID cards and signed delivery challans cleanly.'],
          [38, 76, 'Long-Life Pencil + Rugged Handstrap Support', 'Pairs easily with rugged bumper cases, magnetic cradles and countertop charging docks.']
        ],
        subModels: [
          ['Lenovo Tab M11 (Wi-Fi & 4G LTE)', 'Clinical, Warehouse & POS', '11" WUXGA 90Hz · Quad Dolby speakers · Optional 4G SIM slot', 'Fleet mainstay for hospital ward rounds, courier pods, logistics dispatch and billing tablets.'],
          ['Tab M11 Ruggedised Fleet Kit', 'Plant Floor & Site Teams', 'Bumper armour + rotating hand-strap + tempered glass', 'Engineered for construction walkdowns, plant preventive checks and outdoor utilities.'],
          ['Codeproof Managed Kiosk Kit', 'Branch Check-In & Surveys', 'Systech configures Codeproof MDM App-Lock + GPS geo-tracking', 'Single-vendor turnkey setup combining Lenovo hardware + Systech-managed Codeproof MDM licences.']
        ],
        specs: [
          ['Connectivity Options', 'Wi-Fi 5/6 Dual-Band + Dedicated 4G LTE Nano-SIM variants with GPS/GLONASS'],
          ['Compute & Storage', 'Octa-core Helio/Snapdragon · 4 GB / 8 GB RAM · 128 GB UFS storage + MicroSD'],
          ['Display & Cameras', '10.95"–11" 1920×1200 IPS 400-nits · 8MP Front + 8MP/13MP AF Rear QR Scanner'],
          ['Audio & Battery', 'Quad Stereo Dolby Atmos speakers · 7,040 mAh all-shift endurance · 3.5mm + USB-C'],
          ['MDM & Governance', 'Android Enterprise Recommended · Pre-enrolled in Codeproof MDM / Intune policies'],
          ['Systech Delivery & Spares', 'Rugged cases, multi-bay gang chargers, screen guards & field warranty support']
        ]
      },
      {
        id: 'tab-smart',
        name: 'Smart Paper & E-Ink Tablets',
        tier: 'E-Ink Executive Folio',
        track: 'tablets',
        img: 'assets/bc-tab-smart.webp',
        detailImg: 'assets/bc-tab-smart-detail.webp',
        spec: '10.3" anti-glare E-Ink · Stylus · Instant note sync',
        detail: 'Paper-like digital notebook for contract annotation, boardroom minutes and eye-strain-free technical reading.',
        highlights: ['Zero-glare 10.3" matte E-Ink panel', 'Battery-free electromagnetic EMR pen', 'Real-time handwriting to typed text', 'Weeks-long single charge endurance'],
        hotspots: [
          [56, 40, 'Matte Anti-Glare E-Ink Canvas', 'Reads like real printed ink even under direct sunlight or bright conference-room spotlights with zero eye strain.'],
          [24, 52, 'Battery-Free Smart Paper EMR Stylus', 'Snaps magnetically with 4,096-level pressure sensitivity, tilt shading and zero charging required.'],
          [50, 74, 'Boardroom Dual-Mic Voice + Sync Notes', 'Records meeting audio linked to handwritten time-stamps, converting cursive notes straight into searchable text.']
        ],
        subModels: [
          ['Lenovo Smart Paper (10.3" 64GB Folio)', 'Executive & Legal Annotation', '10.3" 1872×1404 E-Ink · Dual frontlight · Stylus + magnetic folio', 'Turns 200-page legal contracts, architectural specs and financial statements into a featherweight binder.'],
          ['Engineering Review Bundle', 'PDF Blueprint Markup', '74+ lined/grid/kanban templates + direct PDF/EPUB cloud sync', 'Ideal for technical architects, doctors and faculty annotating manuscripts cleanly offline.'],
          ['Executive Gift & Leadership Pack', 'Company Leadership Kits', 'Laser-clean folio packaging · Cloud drive backup & multi-device app', 'Popular with directors seeking distraction-free deep reading and handwritten board notes.']
        ],
        specs: [
          ['Paper-Like Display', '10.3" Monochrome Matte E-Ink (1872×1404 / 227 PPI) with 24-step warm/cool frontlight'],
          ['EMR Stylus (No Charging)', 'Battery-free magnetic Wacom-style EMR pen · 4,096 pressure + 9 nib presets (ballpoint/pencil/marker)'],
          ['Storage & Audio', '64 GB internal flash (~50,000 pages) · Dual integrated microphones for meeting recordings'],
          ['Build & Endurance', 'Light 408g all-metal zinc/magnesium spine (~5.5 mm thin) · Up to weeks per USB-C charge'],
          ['File Formats & Sync', 'Native PDF, EPUB, DOCX sync · Handwriting-to-text OCR + Smart Paper Cloud / Drive'],
          ['Systech Delivery & Spares', 'Supplied with Lenovo Smart Paper magnetic folio, spare nib packs & corporate invoicing']
        ]
      }
    ]
  }
];

const bcQuickTracks = [
  { id: 'all', label: 'All 16 Offerings' },
  { id: 'pro-laptops', label: 'Professional Laptops' },
  { id: 'workstations', label: 'Workstations' },
  { id: 'student-laptops', label: 'Students & Volume' },
  { id: 'desktops', label: 'Desktops' },
  { id: 'monitors', label: 'Monitors' },
  { id: 'tablets', label: 'Tablets' }
];

const multiOemFleet = ['Dell', 'HP', 'Apple', 'ASUS', 'Acer'];

export const bcSeriesMap = new Map(
  bcCategories.flatMap(cat =>
    cat.items.map(item => [
      'bc-' + item.id,
      { ...item, routeId: 'bc-' + item.id, category: cat }
    ])
  )
);

export function businessComputingCatalog(initialFilter = 'all') {
  const initialActive = bcQuickTracks.some(t => t.id === initialFilter) ? initialFilter : 'all';
  return `<section class="bc-catalog-section" id="business-computing-catalog" data-bc-catalog data-bc-filter="${initialActive}" aria-labelledby="bc-catalog-heading">
    <div class="bc-catalog-header">
      <div>
        <p class="eyebrow">Portfolio · Business Computing Offerings (16 Series)</p>
        <h2 id="bc-catalog-heading">Commercial hardware lined up by role and form factor.</h2>
        <p class="bc-catalog-lead">Compare every Lenovo Laptop, Desktop, Workstation, ThinkVision Monitor and Tablet series—open any model for its 3-view gallery, sub-series lineup and specs.</p>
      </div>
      <div class="bc-platinum-pill">
        <span class="bc-platinum-logo" aria-hidden="true">${partnerBrandLogos.Lenovo || ''}</span>
        <div class="bc-platinum-copy">
          <strong>Authorized Lenovo 360 Platinum</strong>
          <span>28th Anniversary · Bengaluru Fleet &amp; Genuine FRU Hub</span>
          <div class="bc-platinum-links">
            <a class="arrow-link" href="?page=lenovo-partner">Lenovo Hub <span aria-hidden="true">→</span></a>
            <a class="arrow-link" href="?page=lenovo-partner#spares-finder">Spares Finder <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="bc-filter-bar" role="group" aria-label="Filter Business Computing portfolio">
      ${bcQuickTracks.map(track => `<button type="button" class="playbook-tab bc-filter-tab" data-bc-filter="${track.id}" aria-pressed="${track.id === initialActive}">${track.label}</button>`).join('')}
    </div>

    <div class="bc-categories">
      ${bcCategories.map(cat => `<section class="bc-category-block" data-bc-category="${cat.id}" aria-labelledby="bc-cat-${cat.id}">
        <div class="bc-category-head">
          <div>
            <h3 id="bc-cat-${cat.id}">${cat.label}</h3>
            <p>${cat.summary}</p>
          </div>
          <span class="bc-cat-count">${cat.count} Series</span>
        </div>
        <div class="bc-cards-grid">
          ${cat.items.map(item => {
            const detailHref = `?page=bc-${item.id}`;
            const quoteHref = `?page=contact&service=devices&topic=business-computing&focus=${encodeURIComponent(item.name + ' fleet')}`;
            return `<article class="bc-card" data-bc-track="${item.track}">
              <a class="bc-card-art bc-card-art-link" href="${detailHref}" aria-label="View gallery and full specifications for ${item.name}">
                <img src="${item.img}" width="800" height="520" alt="${item.name}" decoding="async">
              </a>
              <div class="bc-card-meta">
                <span class="bc-card-tier">${item.tier}</span>
                <span class="bc-card-views">3 Views · Specs</span>
              </div>
              <h4><a href="${detailHref}">${item.name}</a></h4>
              <p class="bc-card-spec">${item.spec}</p>
              <p class="bc-card-detail">${item.detail}</p>
              <div class="bc-card-foot-actions">
                <a class="arrow-link bc-card-explore" href="${detailHref}">View gallery &amp; specs <span aria-hidden="true">→</span></a>
                <a class="bc-card-quote-pill" href="${quoteHref}">Get quote</a>
              </div>
            </article>`;
          }).join('')}
        </div>
      </section>`).join('')}
    </div>

    <div class="bc-multi-oem-bar" aria-label="Additional commercial hardware brands">
      <div class="bc-multi-oem-copy">
        <strong>Multi-OEM Procurement Desk</strong>
        <span>Standardising mixed fleets alongside Lenovo? We quote Dell, HP, Apple MacBook, ASUS &amp; Acer on a single GST invoice.</span>
      </div>
      <div class="bc-multi-oem-logos">
        ${multiOemFleet.map(brand => `<a class="bc-oem-chip" href="?page=contact&service=devices&topic=business-computing&focus=${encodeURIComponent(brand + ' commercial hardware fleet')}">
          <span class="bc-oem-logo" aria-hidden="true">${partnerBrandLogos[brand] || ''}</span>
          <span>${brand}</span>
        </a>`).join('')}
      </div>
    </div>
  </section>`;
}

export function bindBusinessComputingCatalog(container) {
  if (!container) return;
  const buttons = container.querySelectorAll('[data-bc-filter]');
  const blocks = container.querySelectorAll('[data-bc-category]');
  const applyFilter = filterId => {
    container.dataset.bcFilter = filterId;
    buttons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.bcFilter === filterId)));
    blocks.forEach(block => {
      const catId = block.dataset.bcCategory;
      const cards = block.querySelectorAll('[data-bc-track]');
      let visibleCount = 0;
      cards.forEach(card => {
        const show = filterId === 'all' || catId === filterId || card.dataset.bcTrack === filterId;
        card.hidden = !show;
        if (show) visibleCount += 1;
      });
      block.hidden = visibleCount === 0;
    });
  };
  applyFilter(container.dataset.bcFilter || 'all');
  container.addEventListener('click', event => {
    const btn = event.target.closest('button[data-bc-filter]');
    if (!btn) return;
    applyFilter(btn.dataset.bcFilter);
  });
}

function galleryViewsFor(series) {
  return [
    {
      id: 'studio',
      num: '01',
      label: 'Studio Packshot',
      src: series.img,
      alt: `${series.name} commercial studio packshot`,
      badge: `View 01 of 03 · Studio Packshot — Select pins (01–03)`
    },
    {
      id: 'macro',
      num: '02',
      label: '2× Macro & Ports',
      src: series.detailImg,
      alt: `${series.name} dual-loupe chassis and ports inspection plate`,
      badge: `View 02 of 03 · Dual-Loupe 2× Macro, Display & Port Inspection`,
      title: `Hardware zoom: chassis silhouette, display bezel & input/I/O detail`,
      detail: `${series.spec}. Left panel locks overall proportions while right panels magnify upper chassis/bezel and lower input/port geometry.`
    },
    {
      id: 'workplace',
      num: '03',
      label: 'Workplace Setup',
      src: series.category.contextImg,
      alt: `${series.name} workplace deployment architecture`,
      badge: `View 03 of 03 · Typical Enterprise Workplace Deployment`,
      title: `${series.category.label} rollout ecosystem`,
      detail: `${series.category.contextCaption} Supplied pre-configured with Autopilot imaging, ThinkVision displays, USB-C docks and Systech AMC.`
    }
  ];
}

export function businessComputingDetailPage(routeId) {
  const series = bcSeriesMap.get(routeId);
  if (!series) return '';
  const { category } = series;
  const views = galleryViewsFor(series);
  const firstSpot = series.hotspots[0];
  const quoteHref = `?page=contact&service=devices&topic=business-computing&focus=${encodeURIComponent(series.name + ' fleet')}`;
  const siblingSeries = category.items.filter(item => item.id !== series.id);

  return `<div class="wrap bc-detail-page" data-bc-detail="${series.id}" data-active-view="studio" data-active-spot="0">
    <nav class="repairs-crumb" aria-label="Breadcrumb">
      <a class="crumb" href="?page=solutions">Solutions</a> <span aria-hidden="true">/</span>
      <a class="crumb" href="?page=business-computing">Business Computing</a> <span aria-hidden="true">/</span>
      <span>${category.label}</span> <span aria-hidden="true">/</span>
      <strong>${series.name}</strong>
    </nav>

    <div class="bc-series-switcher" aria-label="Switch Business Computing offering">
      <span class="bc-switcher-label">16 Series:</span>
      <div class="bc-switcher-pills">
        ${[...bcSeriesMap.values()].map(item => `<a class="bc-switch-pill" href="?page=${item.routeId}" aria-current="${item.routeId === routeId ? 'page' : 'false'}">${item.name.split(' (')[0]}</a>`).join('')}
      </div>
    </div>

    <header class="bc-detail-hero">
      <div class="bc-detail-copy">
        <div class="bc-detail-badges">
          <span class="bc-card-tier">${category.label}</span>
          <span class="bc-detail-platinum"><span class="lenovo-pill-dot" aria-hidden="true"></span>Lenovo 360 Platinum · Genuine FRU</span>
        </div>
        <h1>${series.name}</h1>
        <p class="bc-detail-spec-line">${series.spec}</p>
        <p class="bc-detail-lead">${series.detail}</p>
        <ul class="bc-detail-highlights">
          ${series.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="bc-detail-actions">
          <a class="button" href="${quoteHref}">Request ${series.name.split(' (')[0]} quote →</a>
          <a class="button outline" href="?page=lenovo-partner#spares-finder">Genuine FRU spares</a>
          <a class="arrow-link" href="?page=business-computing#business-computing-catalog"><span aria-hidden="true">←</span> All 16 offerings</a>
        </div>
      </div>

      <div class="bc-detail-gallery" id="bc-detail-gallery">
        <div class="wifi-stage-bar">
          <span class="wifi-stage-title"><span class="live-dot" aria-hidden="true"></span><span id="bc-stage-badge">${views[0].badge}</span></span>
          <span class="wifi-stage-hint">${series.tier}</span>
        </div>
        <div class="bc-gallery-stage" id="bc-gallery-stage">
          <img id="bc-stage-img" src="${views[0].src}" width="800" height="520" alt="${views[0].alt}">
          <div class="bc-hotspot-layer" id="bc-hotspot-layer">
            ${series.hotspots.map(([x, y, label], idx) => `<button type="button" class="hero-hotspot bc-hotspot" data-bc-spot="${idx}" style="--x:${x}%;--y:${y}%" aria-pressed="${idx === 0}" aria-controls="bc-detail-readout" aria-label="0${idx + 1}: ${label}"><span aria-hidden="true">0${idx + 1}</span><span class="hero-hotspot-tip" aria-hidden="true">${label}</span></button>`).join('')}
          </div>
        </div>
        <div class="bc-gallery-thumbs" role="group" aria-label="Select hardware view">
          ${views.map((v, idx) => `<button type="button" class="bc-thumb-btn" data-bc-view="${v.id}" aria-pressed="${idx === 0}" aria-controls="bc-gallery-stage">
            <span class="bc-thumb-frame"><img src="${v.src}" width="800" height="520" alt="" decoding="async"></span>
            <span class="bc-thumb-meta"><strong>${v.num} · ${v.label}</strong></span>
          </button>`).join('')}
        </div>
        <div class="bc-detail-readout" id="bc-detail-readout" aria-live="polite">
          <span class="bc-readout-tag">01 / Highlighted Feature</span>
          <strong>${firstSpot[2]}</strong>
          <p>${firstSpot[3]}</p>
        </div>
      </div>
    </header>

    <section class="bc-submodels-section" aria-labelledby="bc-submodels-heading">
      <div class="bc-section-head">
        <div>
          <p class="eyebrow">Recommended Models &amp; Tiers</p>
          <h2 id="bc-submodels-heading">Popular configurations in the ${series.name.split(' (')[0]} family</h2>
        </div>
        <a class="arrow-link" href="${quoteHref}">Need custom RAM/SSD CTO builds? <span aria-hidden="true">→</span></a>
      </div>
      <div class="bc-submodels-grid">
        ${series.subModels.map(([modelName, badge, specLine, summary]) => {
          const cfgHref = `?page=contact&service=devices&topic=business-computing&focus=${encodeURIComponent(modelName + ' (' + series.name + ')')}`;
          return `<article class="bc-submodel-card">
            <span class="bc-card-tier">${badge}</span>
            <h3>${modelName}</h3>
            <p class="bc-card-spec">${specLine}</p>
            <p>${summary}</p>
            <a class="arrow-link" href="${cfgHref}">Quote this configuration <span aria-hidden="true">→</span></a>
          </article>`;
        }).join('')}
      </div>
    </section>

    <section class="bc-specs-section" aria-labelledby="bc-specs-heading">
      <p class="eyebrow">Technical Baseline &amp; Rollout Governance</p>
      <h2 id="bc-specs-heading">Specifications, compatibility &amp; Systech lifecycle support</h2>
      <dl class="bc-specs-grid">
        ${series.specs.map(([dt, dd]) => `<div class="bc-spec-row">
          <dt>${dt}</dt>
          <dd>${dd}</dd>
        </div>`).join('')}
      </dl>
    </section>

    ${siblingSeries.length ? `<section class="bc-related-section" aria-labelledby="bc-related-heading">
      <div class="bc-section-head">
        <div>
          <p class="eyebrow">Compare Nearby in ${category.label}</p>
          <h2 id="bc-related-heading">Other ${category.label} series from Systech</h2>
        </div>
        <a class="arrow-link" href="?page=business-computing#business-computing-catalog">Back to all 16 Business Computing series <span aria-hidden="true">→</span></a>
      </div>
      <div class="bc-cards-grid bc-related-grid">
        ${siblingSeries.map(item => {
          const href = `?page=bc-${item.id}`;
          return `<article class="bc-card">
            <a class="bc-card-art bc-card-art-link" href="${href}" aria-label="View gallery and full specifications for ${item.name}">
              <img src="${item.img}" width="800" height="520" alt="${item.name}" decoding="async">
            </a>
            <div class="bc-card-meta"><span class="bc-card-tier">${item.tier}</span><span class="bc-card-views">3 Views · Specs</span></div>
            <h4><a href="${href}">${item.name}</a></h4>
            <p class="bc-card-spec">${item.spec}</p>
            <a class="arrow-link" href="${href}">Open gallery &amp; specs <span aria-hidden="true">→</span></a>
          </article>`;
        }).join('')}
      </div>
    </section>` : ''}
  </div>
  <section class="closing"><div class="wrap closing-row"><div><p class="eyebrow closing-eyebrow">Procurement &amp; Pre-Imaging Desk</p><h2>Sizing ${series.name.split(' (')[0]} units for your team?</h2><p>Share seat counts, RAM/storage targets and delivery cities for commercial Platinum pricing + Dell/HP/Apple comparisons.</p></div><a class="button" href="${quoteHref}">Request commercial quote</a></div></section>`;
}

export function bindBusinessComputingDetail(container) {
  if (!container) return;
  const series = bcSeriesMap.get('bc-' + container.dataset.bcDetail);
  if (!series) return;
  const views = galleryViewsFor(series);
  const stageImg = container.querySelector('#bc-stage-img');
  const stageBadge = container.querySelector('#bc-stage-badge');
  const hotspotLayer = container.querySelector('#bc-hotspot-layer');
  const readout = container.querySelector('#bc-detail-readout');
  const viewBtns = container.querySelectorAll('[data-bc-view]');
  const spotBtns = container.querySelectorAll('[data-bc-spot]');

  const setHotspot = index => {
    const spot = series.hotspots[index];
    if (!spot) return;
    container.dataset.activeSpot = String(index);
    spotBtns.forEach(btn => btn.setAttribute('aria-pressed', String(Number(btn.dataset.bcSpot) === index)));
    readout.innerHTML = `<span class="bc-readout-tag">0${index + 1} / Highlighted Feature</span><strong>${spot[2]}</strong><p>${spot[3]}</p>`;
  };

  const setView = viewId => {
    const view = views.find(v => v.id === viewId);
    if (!view) return;
    container.dataset.activeView = view.id;
    viewBtns.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.bcView === view.id)));
    stageImg.src = view.src;
    stageImg.alt = view.alt;
    stageBadge.textContent = view.badge;
    hotspotLayer.hidden = view.id !== 'studio';
    if (view.id === 'studio') {
      setHotspot(Number(container.dataset.activeSpot || 0));
    } else {
      readout.innerHTML = `<span class="bc-readout-tag">${view.num} / ${view.label}</span><strong>${view.title}</strong><p>${view.detail}</p>`;
    }
  };

  container.addEventListener('click', event => {
    const viewBtn = event.target.closest('[data-bc-view]');
    if (viewBtn) {
      setView(viewBtn.dataset.bcView);
      return;
    }
    const spotBtn = event.target.closest('[data-bc-spot]');
    if (spotBtn) {
      setHotspot(Number(spotBtn.dataset.bcSpot));
    }
  });
}
