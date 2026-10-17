// All site content lives here — edit this file to update the portfolio.
import blog from './assets/blog.jpg';
import placefinder from './assets/placefinder.jpg';
import productcart from './assets/productcart.jpg';
import foodie from './assets/foodie.jpg';
import countries from './assets/countries.avif';

export const profile = {
  name: 'Sachitanand Prasad Sah',
  shortName: 'Sachitanand',
  role: 'Software Developer',
  roles: ['Angular Developer', 'React Developer', 'Frontend Engineer'],
  location: 'Kathmandu, Nepal',
  email: 'ssnshah725@gmail.com',
  phone: '+977 9819389172',
  resume: 'https://drive.google.com/file/d/1YbY5-4eIQUk73jbAmJHklyyHsZktlTz-/view?usp=sharing',
  questionForm: 'https://forms.gle/uLaTShUKXraAvHJ77',
  tagline:
    'Software developer with 1.5+ years shipping production-grade Angular and React applications across SaaS, fintech, healthcare and ERP — turning complex business requirements into clean, scalable interfaces.',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Sachidanand-sah', icon: 'github', professional: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sachitanand725/', icon: 'linkedin', professional: true },
  { label: 'Instagram', href: 'https://www.instagram.com/sachidanand__sah', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/sachitanand.shah', icon: 'facebook' },
];

export const about = {
  paragraphs: [
    'I’m a results-driven software developer with 1.5+ years of hands-on experience architecting and delivering responsive, user-centric web applications across SaaS, fintech, healthcare and ERP domains. I work primarily with Angular, React, TypeScript and Redux Toolkit.',
    'At IMS Software I ship production features on multi-tenant platforms serving enterprise clients — from digital lending portals for banks to embedded ERP dashboards. I’m comfortable in Agile/Scrum teams, love clean RESTful API integration and data-driven UI, and write code that is maintainable long after launch.',
  ],
  stats: [
    { value: '1.5+', label: 'Years experience' },
    { value: '6+', label: 'Production products' },
    { value: '4', label: 'Industry domains' },
  ],
  facts: [
    { label: 'Focus', value: 'SaaS, fintech, healthcare & ERP' },
    { label: 'Core stack', value: 'Angular, React, TypeScript, Redux Toolkit' },
    { label: 'Based in', value: 'Tinkunne, Kathmandu, Nepal' },
    { label: 'Languages', value: 'English, Nepali, Hindi' },
  ],
};

export const skills = [
  {
    group: 'Frontend',
    items: ['Angular', 'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux Toolkit (RTK Query)', 'Ant Design', 'React Router'],
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'RESTful API design & integration', 'Python', 'Django', '.NET', 'MERN stack'],
  },
  {
    group: 'Data & Visualization',
    items: ['Apache Superset', 'ERP dashboard integration', 'Real-time data visualization'],
  },
  {
    group: 'Architecture',
    items: ['SaaS multi-tenant architecture', 'Role-based access control (RBAC)', 'Subscription management', 'Microservices'],
  },
  {
    group: 'Testing & Tooling',
    items: ['Playwright (E2E)', 'Postman', 'Webpack', 'Babel', 'Chrome DevTools', 'VS Code', 'SourceTree'],
  },
  {
    group: 'Project Management',
    items: ['Agile / Scrum', 'Sprint planning', 'Redmine', 'Daily stand-ups', 'Retrospectives', 'Code review'],
  },
  {
    group: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab'],
  },
  {
    group: 'Other',
    items: ['CI/CD practices', 'Networking', 'OS administration', 'Cross-functional collaboration', 'Technical documentation'],
  },
];

export const experience = [
  {
    role: 'Angular Frontend Developer',
    company: 'IMS Software Pvt Ltd',
    location: 'Kathmandu, Nepal',
    period: 'May 2025 — Present',
    summary:
      'Frontend developer on a cross-functional product team delivering SaaS, fintech, healthcare and ERP solutions for banks, clinic networks and enterprise clients. I own features end to end — from translating business requirements into UI architecture to integrating RESTful APIs and shipping to production — working in an Agile Scrum setup with bi-weekly sprints, daily stand-ups and task tracking in Redmine.',
    points: [
      {
        title: 'Digital Lending Portal',
        domain: 'SaaS · Banking',
        role: 'Frontend architect & developer',
        highlights: [
          'Architected and delivered a dual-portal loan application system — one portal for customers and one for partner banks — letting customers apply for loans across multiple banks from a single unified interface.',
          'Engineered dynamic multi-step application forms with real-time validation, guiding applicants through complex lending workflows with clear feedback at every step.',
          'Built configurable, bank-specific loan product setups so each partner bank can offer its own products, rules and terms without code changes.',
          'Integrated RESTful APIs for application submission and status tracking using Angular, TypeScript, HTML5 and CSS3.',
        ],
      },
      {
        title: 'AppointX',
        domain: 'Multi-tenant SaaS · Healthcare',
        role: 'Frontend developer — build & maintenance',
        highlights: [
          'Built and maintain a multi-tenant clinic appointment platform that serves multiple clinic brands on shared infrastructure, with isolated data and custom branding per tenant.',
          'Developed core modules for appointment scheduling, patient registration and doctor availability management.',
          'Integrated SMS and email notification triggers through RESTful APIs to keep patients and clinic staff informed of bookings and changes.',
        ],
      },
      {
        title: 'Card Payment System',
        domain: 'Fintech',
        role: 'Frontend designer & developer',
        highlights: [
          'Designed and implemented a digital card management dashboard covering card registration, real-time balance inquiries and top-up workflows.',
          'Built paginated transaction history views for fast, reliable browsing of large financial records.',
          'Ensured a fully responsive experience across mobile and desktop breakpoints for customers on any device.',
        ],
      },
      {
        title: 'Account Management Software',
        domain: 'Enterprise · Internal',
        role: 'Frontend developer — access control & billing',
        highlights: [
          'Developed a comprehensive account management module for internal enterprise use, handling user roles, permissions, billing records and audit logs.',
          'Implemented subscription lifecycle management — from activation through renewal and expiry.',
          'Enforced role-based access control (RBAC) with Angular route guards and dynamic, privilege-based menu rendering so users only see what they are authorised to use.',
        ],
      },
      {
        title: 'DMS — Data Management & Visualization',
        domain: 'ERP · Analytics',
        role: 'Dashboard integration developer',
        highlights: [
          'Integrated Apache Superset dashboards into production ERP systems for enterprise clients including Gorkha Brewery and Pidilite (Fevicol).',
          'Embedded interactive, filterable dashboards directly within existing business workflows — no context switching for end users.',
          'Enabled business teams to monitor real-time KPIs, inventory levels and production metrics to support faster, data-driven decisions.',
        ],
      },
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'REST APIs', 'Apache Superset', 'RBAC', 'Agile / Scrum', 'Redmine'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Logiclync Pvt Ltd',
    location: 'Kathmandu, Nepal',
    period: 'Jan 2025 — May 2025',
    summary:
      'Joined the development team as an intern, contributing production features to an outsourced healthcare client project with a focus on React state management, data fetching and API integration.',
    points: [
      {
        title: 'Doctor Appointment Portal',
        domain: 'Healthcare',
        role: 'React developer (intern)',
        highlights: [
          'Contributed to a full-featured doctor appointment web application built with React, Redux Toolkit (RTK Query), Ant Design and React Router.',
          'Implemented server-side pagination and optimistic UI updates for a fast, responsive booking experience.',
          'Applied RTK Query caching strategies to reduce redundant API calls and improve data-fetching efficiency.',
          'Integrated RESTful APIs for doctor listings, slot availability, appointment booking and patient profile management.',
        ],
      },
    ],
    stack: ['React', 'Redux Toolkit', 'RTK Query', 'Ant Design', 'React Router', 'REST APIs'],
  },
];

export const education = [
  {
    degree: 'B.Tech, Computer Science Engineering',
    school: 'ITM University, Gwalior (M.P.), India',
    period: '2020 — 2024',
  },
  {
    degree: 'Higher Secondary Education — Computer Science',
    school: 'Greenland Higher Secondary School, Biratnagar, Nepal',
    period: '2018 — 2020',
  },
];

export const projects = [
  {
    title: 'Saloon Booking Platform',
    subtitle: 'Full stack · Web + Mobile',
    description:
      'Cross-platform booking app for salons and personal-care studios — a React 19 web frontend and an Expo (React Native) mobile app sharing business logic and API contracts. Real-time scheduling with time-slot conflict detection, staff assignment, JWT authentication, Node/Express REST APIs and Playwright end-to-end tests across the booking lifecycle.',
    tags: ['React 19', 'Expo', 'React Native', 'Node.js', 'Express', 'JWT', 'Playwright'],
    featured: true,
  },
  {
    title: 'ProductCart',
    subtitle: 'Inventory management',
    description:
      'Responsive multi-page inventory app to track catalogues, filter by category or price and sort by multiple attributes — built on reusable cards, modals and paginated grids, tuned with lazy loading and memoization.',
    image: productcart,
    tags: ['React', 'Tailwind CSS', 'React Router'],
    live: 'https://product-cart-steel.vercel.app',
    code: 'https://github.com/Sachidanand-sah/Product-Cart-',
  },
  {
    title: 'Blog Application',
    subtitle: 'Content platform',
    description:
      'Blogging platform to create, edit and manage posts with a rich-text editor, protected routes for authenticated users and a polished light/dark interface.',
    image: blog,
    tags: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tiptap'],
    live: 'https://blog-application-sigma-beige.vercel.app',
    code: 'https://github.com/Sachidanand-sah/Blog-Application',
  },
  {
    title: 'PlaceFinder',
    subtitle: 'Maps & discovery',
    description:
      'Angular 17 SPA for discovering places worldwide — debounced RxJS search, auth guards and interceptors, and interactive Leaflet maps for every place.',
    image: placefinder,
    tags: ['Angular 17', 'TypeScript', 'RxJS', 'Leaflet'],
    live: 'https://placefinder-web-six.vercel.app',
    code: 'https://github.com/Sachidanand-sah/Placefinder-Web',
  },
  {
    title: 'Rest Countries Explorer',
    description: 'Search and browse detailed data on every country via the REST Countries API.',
    image: countries,
    tags: ['JavaScript', 'REST API'],
    live: 'https://rest-api-countries-two.vercel.app/',
    code: 'https://github.com/Sachidanand-sah/Rest-API-Countries',
    minor: true,
  },
  {
    title: 'Foodie Hamburger',
    description: 'A responsive restaurant showcase with a gourmet burger menu.',
    image: foodie,
    tags: ['HTML', 'CSS'],
    live: 'https://sachidanand564.netlify.app/',
    code: 'https://github.com/Sachidanand-sah/Foodie-Hamburger-website',
    minor: true,
  },
];
