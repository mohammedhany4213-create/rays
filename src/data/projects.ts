export type ProjectCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Agricultural';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  coverImage: string;
  images: string[];
  location: string;
  capacity: string;
  systemType: string;
  date: string;
  description: string;
  challenges: string;
  solution: string;
  results: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "villa-new-cairo",
    title: "New Cairo Luxury Villa",
    subtitle: "Off-grid residential solar system with battery storage",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "New Cairo, Egypt",
    capacity: "20 kW",
    systemType: "On-Grid with Battery Backup",
    date: "March 2025",
    description: "A premium residential solar installation for a luxury villa in New Cairo's Fifth Settlement. The system provides complete energy independence with intelligent battery management and real-time monitoring via mobile app.",
    challenges: "The project required navigating strict HOA aesthetic guidelines while maximizing panel efficiency. Roof angle variations and partial shading from mature trees required a custom string configuration and optimizer deployment.",
    solution: "We deployed a hybrid micro-inverter system with individual panel optimizers, allowing each panel to operate at peak efficiency regardless of shading. Panels were carefully positioned to complement the villa's architectural lines.",
    results: [
      "95% reduction in monthly electricity bills",
      "Zero-export grid configuration achieved",
      "Full system payback projected within 4.5 years",
      "CO₂ offset of 18 tonnes per year",
    ],
    featured: true,
  },
  {
    id: "commercial-mall-6th-october",
    title: "6th of October Commercial Center",
    subtitle: "Large-scale rooftop commercial installation",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "6th of October City, Giza",
    capacity: "150 kW",
    systemType: "On-Grid Commercial",
    date: "January 2025",
    description: "A large-scale commercial solar project powering a busy shopping complex. The system reduces peak-hour grid dependency and qualifies the facility for Egypt's net-metering program.",
    challenges: "Integrating a high-capacity system with an operational shopping center without disrupting business required phased installation and careful load scheduling.",
    solution: "Installation was carried out in three phases during off-peak hours. A custom SCADA monitoring system was installed to provide real-time visibility of energy production and consumption.",
    results: [
      "70% reduction in peak electricity demand charges",
      "Annual savings exceeding EGP 1.2 million",
      "Net-metering credits applied quarterly",
      "System capacity expandable to 300 kW",
    ],
    featured: true,
  },
  {
    id: "agricultural-fayoum",
    title: "Fayoum Agricultural Station",
    subtitle: "Solar-powered irrigation for a 200-acre farm",
    category: "Agricultural",
    coverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Fayoum Governorate",
    capacity: "75 kW",
    systemType: "Off-Grid Agricultural",
    date: "November 2024",
    description: "A completely off-grid solar pumping system replacing diesel generators for a large agricultural estate. The system powers irrigation pumps and farm operations reliably throughout the year.",
    challenges: "Remote location with no grid connection, extreme summer temperatures, and the need to power variable loads across multiple irrigation zones.",
    solution: "Deployed a robust off-grid system with oversized battery bank and intelligent load management. IP66-rated all outdoor components and implemented automated pump scheduling based on solar availability.",
    results: [
      "Eliminated 100% diesel fuel consumption",
      "Annual savings of EGP 480,000 in fuel costs",
      "Carbon footprint reduced by 65 tonnes CO₂/year",
      "System uptime exceeds 99.2%",
    ],
    featured: true,
  },
  {
    id: "industrial-tenth-ramadan",
    title: "Tenth of Ramadan Industrial Facility",
    subtitle: "High-capacity industrial rooftop installation",
    category: "Industrial",
    coverImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Tenth of Ramadan City",
    capacity: "500 kW",
    systemType: "On-Grid Industrial",
    date: "September 2024",
    description: "RAYS' largest installation — a 500 kW rooftop system for a major manufacturing facility, significantly reducing their energy-intensive production costs.",
    challenges: "Structural load calculations for an aging roof, three-phase load balancing across multiple production lines, and ensuring zero downtime during installation.",
    solution: "A comprehensive structural audit preceded installation. Ground-mounted ballast racking was used to distribute weight evenly. Load balancing was achieved through a custom inverter cluster configuration.",
    results: [
      "Annual energy production of 750 MWh",
      "Covers 40% of total facility energy demand",
      "ROI achieved within 3 years",
      "Qualifies for Egypt's industrial renewable incentive program",
    ],
    featured: false,
  },
  {
    id: "residential-sheikh-zayed",
    title: "Sheikh Zayed Community Solar",
    subtitle: "Shared solar project for a private residential compound",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Sheikh Zayed, Giza",
    capacity: "35 kW",
    systemType: "On-Grid with Net Metering",
    date: "July 2024",
    description: "A shared solar installation serving a private residential compound, distributed across three villa rooftops with a unified monitoring system for all residents.",
    challenges: "Designing a fair energy-sharing model between three households with different consumption patterns and roof orientations.",
    solution: "Implemented a virtual net-metering arrangement with smart meters at each unit and an energy management platform providing each household with their individual production and savings dashboard.",
    results: [
      "Average 80% bill reduction per household",
      "Shared monitoring app used by all residents",
      "System expandable as compound grows",
      "First community solar project in the area",
    ],
    featured: false,
  },
  {
    id: "commercial-north-coast",
    title: "North Coast Hotel Complex",
    subtitle: "Beachfront hospitality solar installation",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "North Coast, Egypt",
    capacity: "200 kW",
    systemType: "Hybrid On-Grid",
    date: "May 2024",
    description: "A premium solar installation for a luxury beachfront hotel, covering common area electricity and reducing the environmental footprint of their hospitality operations.",
    challenges: "Coastal salt-air environment requiring marine-grade components, aesthetic integration with luxury architecture, and managing seasonal demand fluctuations.",
    solution: "Specified marine-grade aluminum racking and salt-mist certified inverters. Panels were integrated into architectural canopy structures over parking areas, serving dual function as shade and energy generation.",
    results: [
      "Covers 60% of common area electricity",
      "Marine environment rating: 25-year warranty maintained",
      "Carbon-neutral branding for hotel's ESG reporting",
      "Guest EV charging powered by solar array",
    ],
    featured: false,
  },
];

export const projectCategories: ProjectCategory[] = ['Residential', 'Commercial', 'Industrial', 'Agricultural'];
