// Central data store for V4U Steel Detailing Services

import { Linkedin } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  industry: string;
  location: string;
  details: string;
  highlights: string[];
  images: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  imagePath: string;
}

export const SITE_INFO = {
  name: 'V4U STEEL DETAILING SERVICES',
  phone: '+91 8098315403',
  linkedin: 'https://www.linkedin.com/company/v4u-steel-detailers',
  email: 'v4udetailers@gmail.com',
  address: 'Rasipuram, Tamilnadu, India',
  tagline: 'Where Precision Meets Passion',
  shortWelcome: `Hi There! Welcome to V4U Steel Detailing Services – where precision meets passion in every beam and bolt. We are a dedicated team of experienced steel detailers committed to delivering high-quality structural and miscellaneous steel detailing services. With a strong foundation in AISC, CISC and ASI standards and hands-on expertise in Tekla Structures, we help fabricators, engineers, and general contractors bring their visions to life with accuracy and efficiency. Whether you're building bridges, commercial spaces, or custom stair systems – we're here to detail your success.`,
};

export const HERO_CONTENT = {
  title: 'V4U STEEL DETAILING SERVICES',
  subtitle: 'Excellence in Every Detail',
  description: 'Expert steel detailing services with AISC, CISC & ASI compliance using Tekla Structures.',
  ctaText: 'Start Your Project',
  ctaSecondary: 'View Portfolio',
};

export const ABOUT = {
  heading: 'About Us',
  content: `V4U Detailing Services is a quality-driven steel detailing firm specializing in both structural and miscellaneous steel detailing using Tekla Structures. Backed by a team of experienced professionals, we deliver fabrication-ready drawings with accuracy, efficiency, and clarity. Our team is well-versed in international detailing standards, including: AISC (American Institute of Steel Construction), CISC (Canadian Institute of Steel Construction), ASI (Australian Steel Institute).`,
  
  whyChooseUs: [
    {
      title: 'Unmatched Accuracy',
      description: 'We follow AISC, CISC, and ASI standards strictly, ensuring every drawing and model is fabrication-ready and clash-free.',
    },
    {
      title: 'Responsive & Reliable',
      description: 'We work closely with your team through clear communication, fast revisions, and consistent delivery — even on tight deadlines.',
    },
    {
      title: 'End-to-End Detailing',
      description: 'From initial IFC drawings to final fabrication packages, we handle everything — including revisions, RFIs, connection modeling, and file generation.',
    },
    {
      title: 'Flexible Engagement Models',
      description: 'Hourly, lump-sum, or milestone-based — we work the way that suits your project and budget.',
    },
  ],
};

export const FOUNDERS_MESSAGE = {
  content: `At V4U Detailing Services, we believe that precision is more than just accuracy — it's a promise. Every model, every drawing, and every connection we detail reflects our commitment to quality, efficiency, and collaboration. 

  Our journey began with a simple belief: that exceptional steel detailing comes from understanding not just the technical requirements, but the real-world challenges that fabricators and contractors face every day. We've built our processes around this understanding, creating workflows that deliver not just accurate drawings, but solutions that work.

  When you partner with V4U, you're not just getting a service provider — you're gaining a teammate who understands the critical role that precision plays in your success. We take pride in being the reliable partner who delivers on time, communicates clearly, and stands behind every drawing we produce.

  Thank you for considering V4U Detailing Services. We look forward to building something exceptional together.`,
  
  signature: 'Muralikrishnan S',
  title: 'Founder & Managing Director',
  company: 'V4U Detailing Services',
};

export const HOW_WE_WORK = [
  {
    step: 1,
    title: 'Understanding Your Project',
    description: 'We begin by reviewing your architectural, structural, and IFC drawings to fully understand project scope, specifications, and timeline requirements.',
  },
  {
    step: 2,
    title: 'Modeling & Drawing Production',
    description: 'Using Tekla Structures, we model the entire structure with precise connections, generate fabrication drawings, and create comprehensive material lists.',
  },
  {
    step: 3,
    title: 'Revisions & Final Deliverables',
    description: 'Based on markups and RFI resolutions, we provide updated IFC drawings, final fabrication packages including BOMs, NC/DXF files, and erection drawings.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'structural',
    title: 'Structural Steel Detailing',
    description: 'Comprehensive structural steel detailing with full AISC/CISC/ASI compliance for beams, columns, braces, anchor plans, frames, and base plates.',
    features: ['AISC/CISC/ASI Standards', 'Connection Design', 'Fabrication Drawings', 'Erection Plans'],
    icon: 'Building2',
    imagePath: '/assets/service/structural-steel.jpg',
  },
  {
    id: 'metalwork',
    title: 'Metalwork Detailing',
    description: 'Specialized detailing for stairs, handrails, ramps, guards, balustrades, grating, and miscellaneous architectural steel elements.',
    features: ['Stair Systems', 'Handrails & Guards', 'Architectural Steel', 'Custom Fabrication'],
    icon: 'Stairs',
    imagePath: '/assets/service/metalwork.jpg',
  },
  {
    id: 'connections',
    title: 'Connection Design',
    description: 'Expert connection design following AISC/CISC standards including end plate, base plate, clip angle, gusset, and splice connections.',
    features: ['End Plate Connections', 'Base Plate Design', 'Moment Connections', 'Splice Details'],
    icon: 'Link',
    imagePath: '/assets/service/connections.jpg',
  },
  {
    id: 'estimation',
    title: 'Material Take-Off & Estimation',
    description: 'Accurate BOQ generation and preliminary quantity estimates to support project planning and budgeting.',
    features: ['Quantity Takeoffs', 'Material Lists', 'Cost Estimation', 'BOM Generation'],
    icon: 'Calculator',
    imagePath: '/assets/service/estimation.jpg',
  },
  {
    id: 'pointcloud',
    title: 'Point Cloud to BIM Conversion',
    description: 'Convert 3D scan data into accurate BIM models for renovation and retrofit projects.',
    features: ['Scan to Model', 'As-Built Modeling', 'Clash Detection', 'Reality Capture'],
    icon: 'Scan',
    imagePath: '/assets/service/pointcloud.jpg',
  },
  {
    id: 'shopdraws',
    title: 'Shop Drawing & CNC File Generation',
    description: 'Complete shop drawing packages with CNC-ready files including DXF, NC1, and BOM exports.',
    features: ['Shop Drawings', 'CNC Files', 'DXF/NC1 Export', 'Fabrication Ready'],
    icon: 'FileText',
    imagePath: '/assets/service/shop-drawings.jpg',
  },
];

export const INDUSTRIES = [
  {
    title: 'Commercial & Institutional',
    description: 'Office buildings, schools, hospitals, and retail spaces requiring precise steel detailing for complex architectural and structural requirements.',
  },
  {
    title: 'Industrial & Manufacturing',
    description: 'Warehouses, factories, and processing facilities with heavy structural loads and specialized equipment support requirements.',
  },
  {
    title: 'Infrastructure & Transport',
    description: 'Bridges, transportation hubs, and infrastructure projects demanding the highest standards of structural integrity and safety.',
  },
  {
    title: 'Residential & Mixed-Use',
    description: 'High-rise residential towers and mixed-use developments with complex steel framing and architectural features.',
  },
  {
    title: 'Retrofit & Renovation',
    description: 'Existing structure modifications and additions requiring careful integration with legacy construction.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'villa-latella',
    title: 'Villa Latella — Phase 29',
    industry: 'Residential & Mixed-Use',
    location: 'Canada',
    details: '15-Storey Residential Building',
    highlights: [
      'Two 15-storey escape stair towers',
      'Embed plate detailing',
      'Connection modeling & RFI coordination',
      'High-rise geometry challenges',
      'Completed within 40 days across 4 phases',
    ],
    stats: [
      { label: 'Structural Steel', value: '80+ tons' },
      { label: 'Misc Steel', value: '30+ tons' },
      { label: 'Project Height', value: '15 storeys' },
      { label: 'Delivery Time', value: '40 days' },
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'skyline-logistics',
    title: 'Skyline Logistics Hub',
    industry: 'Infrastructure & Transport',
    location: 'Chicago, USA',
    details: '180,000 sq ft warehouse steel framing with complex truss systems and loading dock infrastructure.',
    highlights: [
      'Complex truss detailing',
      '4-week turnaround',
      'Heavy crane runway systems',
      'Loading dock integration',
    ],
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'greenleaf-pharma',
    title: 'GreenLeaf Pharmaceuticals Plant',
    industry: 'Industrial & Manufacturing',
    location: 'Toronto, Canada',
    details: '5-story processing facility with heavy mezzanine structures and specialized equipment supports.',
    highlights: [
      'AISC-compliant moment connections',
      'Point cloud to BIM integration',
      'Vibration-sensitive equipment platforms',
      'Clean room structural requirements',
    ],
    images: [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'oceanview-towers',
    title: 'OceanView Residential Towers',
    industry: 'Residential & Mixed-Use',
    location: 'Sydney, Australia',
    details: 'Twin 20-floor towers with integrated balcony steel and architectural features.',
    highlights: [
      'Custom railing and architectural steel detailing',
      'Balcony integration systems',
      'Wind load considerations',
      'Seismic design compliance',
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'metro-hospital',
    title: 'Metro Central Hospital Extension',
    industry: 'Commercial & Institutional',
    location: 'Bengaluru, India',
    details: 'New surgical wing with complex stair and railing systems, medical equipment supports.',
    highlights: [
      'Fast-track revisions',
      'Multi-discipline coordination',
      'Medical equipment integration',
      'Critical infrastructure detailing',
    ],
    images: [
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586773860418-d37222d8eeb4?w=800&h=600&fit=crop',
    ],
  },
];

export const TEAM_STRUCTURE = [
  {
    name: 'Muralikrishnan S',
    position: 'Founder & Managing Director',
    description: 'Visionary leader with 15+ years in steel detailing and structural engineering.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Research & Development Team',
    position: 'R&D Engineer',
    description: 'Innovation specialists focused on advancing detailing methodologies and technology integration.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Project Management',
    position: 'Project Team',
    description: 'Dedicated project coordinators ensuring timely delivery and client communication.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Quality Assurance',
    position: 'Checking Department',
    description: 'Senior and junior checkers maintaining the highest standards of accuracy and compliance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Modeling Specialists',
    position: '3 Tekla Modelers',
    description: '2 senior and 1 junior modeler expert in Tekla Structures and 3D steel modeling.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Connection Design',
    position: 'Connection Design Engineer',
    description: 'Specialized engineer for complex connection design and analysis.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Drafting Team',
    position: '3 GA & Fabrication Drafters',
    description: '2 senior and 1 junior drafter creating detailed fabrication and assembly drawings.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
  },
];

export const DESIGN_PRESETS = {
  design1: {
    name: 'Corporate Clean',
    heroImage: '../../public/assets/v4uhome.jpeg',
    fireMessage: 'Engineering the Future',
  },
  design2: {
    name: 'Dark Bold',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    fireMessage: 'Engineering the Future',
  },
  design3: {
    name: 'Minimal Magazine',
    heroImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop',
    fireMessage: 'Precision Through Simplicity',
  },
  design4: {
    name: 'Blueprint Technical',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop',
    fireMessage: 'Blueprint to Reality',
  },
  design5: {
    name: 'Industrial Modern',
    heroImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=1080&fit=crop',
    fireMessage: 'Where Steel Meets Innovation',
  },
};

export const CONTACT_INFO = {
  ctaHeading: "Let's Work Together",
  ctaText: `Ready to start your next steel detailing project? We're here to help you achieve precision, meet your deadlines, and exceed your expectations. Whether you need structural detailing, miscellaneous steel work, or connection design – let's discuss how we can support your success.`,
  
  founderSignoff: `Looking forward to partnering with you,`,
  founderName: 'Muralikrishnan S',
  founderTitle: 'Founder & Managing Director, V4U Detailing Services',
  
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125129.20673448914!2d78.12858212842578!3d11.459147009888406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc20ec06afb6f%3A0x45b97c5f12fb6da9!2sRasipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1761978958278!5m2!1sen!2sin',
};

export const SEO_DATA = {
  defaultTitle: 'V4U Steel Detailing Services 2025 - Expert Steel Detailing',
  defaultDescription: 'Professional steel detailing services with AISC, CISC & ASI compliance. Expert Tekla Structures modeling for structural and miscellaneous steel projects.',
  defaultImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop',
  
  pages: {
    home: {
      title: 'V4U Steel Detailing Services - Where Precision Meets Passion',
      description: 'Expert steel detailing services with AISC, CISC & ASI compliance using Tekla Structures. Structural & miscellaneous steel detailing for fabricators and contractors.',
    },
    about: {
      title: 'About V4U Steel Detailing - Expert Team & Company Story',
      description: 'Learn about V4U Steel Detailing Services team, our commitment to precision, and international standards compliance (AISC, CISC, ASI).',
    },
    services: {
      title: 'Steel Detailing Services - AISC, CISC & ASI Compliance',
      description: 'Comprehensive steel detailing services including structural steel, metalwork, connections, material takeoff, and shop drawings using Tekla Structures.',
    },
    projects: {
      title: 'Steel Detailing Projects Portfolio - V4U Sample Work',
      description: 'Explore our steel detailing project portfolio including residential towers, industrial facilities, and infrastructure projects.',
    },
    contact: {
      title: 'Contact V4U Steel Detailing Services - Get Your Quote',
      description: 'Contact V4U Steel Detailing Services for your next project. Call +91 8098315403 or email v4udetailers@gmail.com for expert steel detailing.',
    },
  },
};