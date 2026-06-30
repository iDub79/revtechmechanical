import {
  BookOpen, ShieldCheck, Zap, Droplets, Flame, Link2, Fuel,
  Circle, Gauge, Settings, Truck, type LucideIcon,
} from 'lucide-react'

export interface ServiceContent {
  slug: string
  name: string
  icon: LucideIcon
  // Card + meta
  shortDesc: string
  metaTitle: string
  metaDescription: string
  // Detail page
  tagline: string
  intro: string[]
  includes: string[]
}

export const services: ServiceContent[] = [
  {
    slug: 'log-book-servicing',
    name: 'Log Book Servicing',
    icon: BookOpen,
    shortDesc:
      'Maintain your new car warranty while keeping costs down. We service to manufacturer specifications and stamp your log book.',
    metaTitle: 'Log Book Servicing in Everton Hills, QLD',
    metaDescription:
      'Log book servicing in Everton Hills QLD that protects your new car warranty. Serviced to manufacturer specifications and stamped. All makes and models.',
    tagline: 'Protect your warranty without dealership prices.',
    intro: [
      'A log book service keeps your new car warranty intact by following the manufacturer’s scheduled servicing requirements — and by law you don’t have to use the dealership to do it. At Rev-Tech Mechanical in Everton Hills we service strictly to manufacturer specifications and stamp your log book so your warranty stays valid.',
      'We service all makes and models, use quality parts that meet or exceed OEM specifications, and give you an honest, upfront quote before any work begins — usually at a fraction of dealership pricing.',
    ],
    includes: [
      'Servicing to the manufacturer’s scheduled intervals',
      'Genuine or OEM-equivalent parts and fluids',
      'Log book stamped to keep your new car warranty valid',
      'Full safety and operational inspection',
      'Honest, upfront quote before we start',
    ],
  },
  {
    slug: 'safety-certificates',
    name: 'Safety Certificates',
    icon: ShieldCheck,
    shortDesc:
      'Queensland roadworthy certificates from licensed inspectors. Fast turnaround so you can sell or register your vehicle without delay.',
    metaTitle: 'Safety Certificates (Roadworthy) in Everton Hills, QLD',
    metaDescription:
      'Queensland Safety Certificates (roadworthy) from licensed inspectors in Everton Hills. Fast turnaround to sell, register or transfer your vehicle.',
    tagline: 'Licensed Queensland Safety Certificate inspections.',
    intro: [
      'You need a current Safety Certificate to sell a registered vehicle, transfer registration, or re-register an unregistered vehicle in Queensland. Rev-Tech Mechanical is an Approved Inspection Station with licensed inspectors, so you can get your certificate done properly and on time.',
      'We inspect to the Queensland Transport standard, explain anything that fails clearly, and can carry out any repairs needed to get you certified — all in the one workshop in Everton Hills.',
    ],
    includes: [
      'Inspection to the Queensland Transport safety standard',
      'Licensed inspectors at an Approved Inspection Station',
      'Clear explanation of any items that fail',
      'On-site repairs to get your vehicle certified',
      'Fast turnaround for sale, transfer or re-registration',
    ],
  },
  {
    slug: 'auto-electrical',
    name: 'Auto Electrical',
    icon: Zap,
    shortDesc:
      'Diagnose and repair all vehicle electrical systems including batteries, alternators, starters, lighting, and ECU issues.',
    metaTitle: 'Auto Electrical Repairs in Everton Hills, QLD',
    metaDescription:
      'Auto electrical diagnosis and repair in Everton Hills QLD — batteries, alternators, starter motors, lighting, wiring and ECU faults. All makes and models.',
    tagline: 'From flat batteries to ECU faults — sorted.',
    intro: [
      'Modern vehicles run on complex electrical and electronic systems, and a single fault can leave you stranded or trigger warning lights you can’t ignore. Our team diagnoses and repairs the full range of automotive electrical problems using proper diagnostic equipment — not guesswork.',
      'Whether it’s a battery that won’t hold charge, a failing alternator or starter, dash warning lights, or a wiring fault, we’ll find the root cause and fix it right the first time.',
    ],
    includes: [
      'Battery testing and replacement',
      'Alternator and starter motor repair and replacement',
      'Headlight, tail light and interior lighting faults',
      'Wiring, fuse and connector repairs',
      'ECU and warning-light fault diagnosis',
    ],
  },
  {
    slug: 'oil-and-brake-service',
    name: 'Oil & Brake Service',
    icon: Droplets,
    shortDesc:
      'Regular oil changes extend engine life. Complete brake pad, rotor, and fluid servicing to keep you stopping safely.',
    metaTitle: 'Oil Change & Brake Service in Everton Hills, QLD',
    metaDescription:
      'Oil changes and complete brake servicing in Everton Hills QLD — pads, rotors, fluid and inspection. Keep your engine healthy and your braking safe.',
    tagline: 'Healthy engine, safe braking.',
    intro: [
      'Clean oil and a properly maintained braking system are two of the most important things for a safe, long-lasting vehicle. Regular oil and filter changes protect your engine from wear, while brake servicing makes sure you can stop when it matters most.',
      'We use the correct grade of oil for your vehicle, inspect your brakes at every service, and only recommend work your car genuinely needs — with a clear quote up front.',
    ],
    includes: [
      'Engine oil and filter changes to manufacturer grade',
      'Brake pad and rotor inspection and replacement',
      'Brake fluid check and flush',
      'Brake line and caliper inspection',
      'Full report on brake wear and remaining life',
    ],
  },
  {
    slug: 'ignition-systems',
    name: 'Ignition Systems',
    icon: Flame,
    shortDesc:
      'From spark plugs and leads to modern coil-on-plug systems — we diagnose and repair all ignition faults.',
    metaTitle: 'Ignition System Repairs in Everton Hills, QLD',
    metaDescription:
      'Ignition system repairs in Everton Hills QLD — spark plugs, leads, coils and coil-on-plug faults causing misfires, hard starting and poor economy.',
    tagline: 'Smooth starts and a misfire-free engine.',
    intro: [
      'A worn or faulty ignition system causes hard starting, rough idling, misfires, and poor fuel economy. Whether your vehicle runs traditional spark plugs and leads or a modern coil-on-plug setup, we diagnose and repair ignition faults to restore smooth, reliable performance.',
      'We test before we replace, so you only pay for the parts your vehicle actually needs.',
    ],
    includes: [
      'Spark plug inspection and replacement',
      'Ignition lead and coil testing',
      'Coil-on-plug diagnosis and replacement',
      'Misfire and rough-idle fault finding',
      'Restored performance and fuel economy',
    ],
  },
  {
    slug: 'belts-and-hoses',
    name: 'Belts & Hoses',
    icon: Link2,
    shortDesc:
      'Timing belts, serpentine belts, and cooling hoses. We replace before they fail to prevent costly engine damage.',
    metaTitle: 'Timing Belt & Hose Replacement in Everton Hills, QLD',
    metaDescription:
      'Timing belt, serpentine belt and cooling hose replacement in Everton Hills QLD. Replace before they fail to avoid expensive engine damage.',
    tagline: 'Replace before they fail — not after.',
    intro: [
      'Belts and hoses wear out with age and heat, and when they let go the damage can be expensive — a snapped timing belt alone can destroy an engine. We inspect your belts and hoses at every service and replace them at the right interval to keep you off the side of the road.',
      'We follow manufacturer replacement schedules and use quality parts rated for Queensland conditions.',
    ],
    includes: [
      'Timing belt inspection and replacement',
      'Serpentine and drive belt replacement',
      'Coolant hose inspection and replacement',
      'Tensioner and idler pulley checks',
      'Replacement to manufacturer intervals',
    ],
  },
  {
    slug: 'electronic-fuel-injection',
    name: 'Electronic Fuel Injection',
    icon: Fuel,
    shortDesc:
      'EFI cleaning, injector servicing, and fuel pressure testing to restore performance and fuel economy.',
    metaTitle: 'Electronic Fuel Injection (EFI) Service in Everton Hills, QLD',
    metaDescription:
      'EFI servicing in Everton Hills QLD — injector cleaning, fuel pressure testing and fault diagnosis to restore performance and fuel economy.',
    tagline: 'Restore performance and fuel economy.',
    intro: [
      'Over time, fuel injectors clog and fuel delivery drops off, leaving you with rough running, hesitation, and rising fuel bills. Our EFI servicing cleans and tests the fuel system so your engine runs the way it should.',
      'We test fuel pressure and injector performance properly, identify the real cause of any running issue, and restore smooth, economical power.',
    ],
    includes: [
      'Fuel injector cleaning and servicing',
      'Fuel pressure and delivery testing',
      'Throttle body and intake cleaning',
      'Rough-running and hesitation diagnosis',
      'Restored throttle response and economy',
    ],
  },
  {
    slug: 'wheel-bearings-cv-joints',
    name: 'Wheel Bearings & CV Joints',
    icon: Circle,
    shortDesc:
      'Worn wheel bearings and CV boots cause noise and vibration. We diagnose, repair, and replace to keep you driving safely.',
    metaTitle: 'Wheel Bearing & CV Joint Repair in Everton Hills, QLD',
    metaDescription:
      'Wheel bearing and CV joint repair in Everton Hills QLD. Fix humming, clicking and vibration before it becomes a safety risk. All makes and models.',
    tagline: 'Stop the hum, click and vibration.',
    intro: [
      'A humming noise that changes with speed, or a clicking sound when you turn, usually means a worn wheel bearing or CV joint — and left alone they become a serious safety risk. We diagnose the source accurately and replace worn components before they fail.',
      'We inspect CV boots at every service too, because a split boot caught early saves you the cost of a full joint later.',
    ],
    includes: [
      'Wheel bearing noise diagnosis and replacement',
      'CV joint and boot inspection',
      'CV boot replacement to prevent joint failure',
      'Vibration and steering-noise fault finding',
      'Safe, quiet driving restored',
    ],
  },
  {
    slug: 'power-steering',
    name: 'Power Steering',
    icon: Gauge,
    shortDesc:
      'Hydraulic and electric power steering repairs. From leaky hoses to full rack replacements, we handle it all.',
    metaTitle: 'Power Steering Repairs in Everton Hills, QLD',
    metaDescription:
      'Power steering repairs in Everton Hills QLD — hydraulic and electric systems, leaking hoses, pumps and rack replacements. All makes and models.',
    tagline: 'Light, precise steering — restored.',
    intro: [
      'Heavy or noisy steering, fluid leaks, or a steering wheel that fights back are all signs of a power steering problem. We repair both hydraulic and modern electric power steering systems to bring back light, precise control.',
      'From topping up and flushing fluid to replacing pumps, hoses and complete racks, we diagnose the fault and quote you honestly before any work starts.',
    ],
    includes: [
      'Power steering fluid check and flush',
      'Leaking hose and seal repairs',
      'Power steering pump replacement',
      'Steering rack repair and replacement',
      'Electric power steering fault diagnosis',
    ],
  },
  {
    slug: 'suspension-shock-absorbers',
    name: 'Suspension & Shock Absorbers',
    icon: Settings,
    shortDesc:
      "Worn suspension affects handling and tyre wear. We inspect, diagnose, and restore your vehicle's ride and safety.",
    metaTitle: 'Suspension & Shock Absorber Repair in Everton Hills, QLD',
    metaDescription:
      'Suspension and shock absorber repairs in Everton Hills QLD. Fix bouncy ride, poor handling and uneven tyre wear. Struts, shocks, bushes and more.',
    tagline: 'Better ride, better handling, longer tyre life.',
    intro: [
      'Worn shocks and suspension components make your car bounce, wallow, and handle poorly — and they wear your tyres out unevenly. We inspect the full suspension system and restore the ride comfort, handling and safety your vehicle was built for.',
      'Whether it’s tired shock absorbers, worn bushes, or sagging springs, we’ll show you what’s worn and quote the repair clearly.',
    ],
    includes: [
      'Shock absorber and strut inspection and replacement',
      'Suspension bush and ball joint checks',
      'Coil and leaf spring assessment',
      'Handling, noise and ride-quality diagnosis',
      'Reduced uneven tyre wear',
    ],
  },
  {
    slug: 'diesel-servicing',
    name: 'Diesel Servicing',
    icon: Truck,
    shortDesc:
      'Specialist diesel engine servicing for passenger vehicles, 4WDs, and commercial fleets. All makes and models.',
    metaTitle: 'Diesel Servicing in Everton Hills, QLD',
    metaDescription:
      'Specialist diesel servicing in Everton Hills QLD for passenger cars, 4WDs and commercial fleets. Fuel systems, DPF, glow plugs and scheduled servicing.',
    tagline: 'Specialist diesel care for cars, 4WDs and fleets.',
    intro: [
      'Diesel engines are tough, but they need the right servicing to stay reliable — especially with modern fuel systems and emissions equipment. We service diesel passenger vehicles, 4WDs, and commercial fleets to keep them running strong and economical.',
      'From scheduled servicing to fuel system and DPF issues, we have the knowledge and equipment to look after your diesel properly.',
    ],
    includes: [
      'Scheduled diesel servicing for all makes',
      'Diesel fuel system and injector servicing',
      'Glow plug testing and replacement',
      'DPF and emissions fault diagnosis',
      '4WD and commercial fleet servicing',
    ],
  },
]

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug)
}
