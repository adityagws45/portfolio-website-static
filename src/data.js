export const profile = {
  fullName: 'Aditya Gawas',
  headline: 'Full Stack Developer',
  tagline: 'Fast, modern portfolio website with the same content and images.',
  shortIntro:
    'Building scalable web applications with clean code and modern technologies.',
  aboutText:
    'I’m a full-stack developer passionate about creating modern, scalable products.',
  location: 'Pune, India',
  email: 'gawasaditya111@gmail.com',
  phone: '+91 9322060612',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://www.linkedin.com/in/yourusername',
  twitterUrl: '',
  resumeUrl: '/images/Aditya_Gawas.pdf',
  profileImageUrl: '/images/PHOTO.png',
  resumeName: 'Aditya_Gawas.pdf',
};

export const coreFocus = [
  'Python and Django backend systems',
  'Responsive, modern UI experiences',
  'REST APIs, databases, and deployment',
  'Fast, clean, maintainable code',
];

export const stats = [
  { value: '8+', label: 'Projects shipped' },
  { value: '1+', label: 'Years building' },
  { value: '100%', label: 'Focused on quality' },
];

export const skillCategories = [
  {
    icon: 'bi-code-slash',
    label: 'Languages',
    skills: [
      { name: 'Python', proficiency: 90 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'SQL', proficiency: 80 },
      { name: 'Java', proficiency: 70 },
    ],
  },
  {
    icon: 'bi-layout-wtf',
    label: 'Frontend',
    skills: [
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 90 },
      { name: 'Bootstrap', proficiency: 90 },
      { name: 'React', proficiency: 75 },
    ],
  },
  {
    icon: 'bi-database',
    label: 'Backend & Databases',
    skills: [
      { name: 'Django', proficiency: 90 },
      { name: 'REST APIs', proficiency: 85 },
      { name: 'SQLite', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 75 },
    ],
  },
  {
    icon: 'bi-tools',
    label: 'Frameworks & Tools',
    skills: [
      { name: 'Django REST Framework', proficiency: 85 },
      { name: 'Git & GitHub', proficiency: 90 },
      { name: 'Vite', proficiency: 80 },
      { name: 'Tailwind', proficiency: 75 },
    ],
  },
  {
    icon: 'bi-cloud-arrow-up',
    label: 'Deployment',
    skills: [
      { name: 'Render', proficiency: 80 },
      { name: 'Gunicorn', proficiency: 75 },
      { name: 'WhiteNoise', proficiency: 80 },
      { name: 'Procfile', proficiency: 70 },
    ],
  },
  {
    icon: 'bi-gear',
    label: 'Practices',
    skills: [
      { name: 'Responsive Design', proficiency: 90 },
      { name: 'Clean Code', proficiency: 88 },
      { name: 'Testing', proficiency: 72 },
      { name: 'Documentation', proficiency: 85 },
    ],
  },
];

export const projects = [

  {
    title: 'Mockify AI – Mock Interview',
    image: '/images/mockify-ai-mock-interview.png',
    shortDescription: 'AI-powered mock interview platform.',
    description:
      'Practice technical interviews with AI-generated questions and instant feedback.',
    tech: ['Django', 'React', 'AI', 'REST API'],
    featured: true,
    githubUrl: 'https://github.com/yourusername/mockify-ai',
    liveUrl: '',
  },
  {
    title: 'QuickMove',
    image: '/images/quickmove.png',
    shortDescription: 'Logistics & delivery tracking web app.',
    description:
      'Quotes, live tracking, and order management for a moving & delivery service.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    featured: true,
    githubUrl: 'https://github.com/yourusername/quickmove',
    liveUrl: '',
  },
  {
    title: 'ShopSphere',
    image: '/images/Shopsphere.png',
    shortDescription: 'E-commerce storefront.',
    description:
      'A modern e-commerce app with product catalog, cart, and checkout flow.',
    tech: ['Django', 'Bootstrap', 'SQLite'],
    featured: false,
    githubUrl: 'https://github.com/yourusername/shopsphere',
    liveUrl: '',
  },
  {
    title: 'Smart Email Assistant',
    image: '/images/smart-email-assistant.png',
    shortDescription: 'Email drafting and summarization tool.',
    description:
      'Automates email drafting and summarization using language models.',
    tech: ['Python', 'Django', 'AI'],
    featured: false,
    githubUrl: 'https://github.com/yourusername/smart-email-assistant',
    liveUrl: '',
  },




    {
    title: 'Employee Management',
    image: '/images/EmployeeManagement.png',
    shortDescription: 'Full-stack employee management system.',
    description:
      'A Django-based HR tool with role-based access, CRUD operations, and reporting.',
    tech: ['Django', 'Python', 'Bootstrap', 'SQLite'],
    featured: true,
    githubUrl: 'https://github.com/yourusername/employee-management',
    liveUrl: '',
  },
];

export const workHistory = [
  {
    roleTitle: 'FrontEnd Developer (Intern)',
    organization: 'Coding Savvy',
    location: 'Pune, India',
    startDate: 'Dec 2024 ',
    endDate: 'Jan 2025',
    
    descriptionLines: [
      'Built Live web applications.',
      'Collaborated with designers to ship responsive, accessible UIs.',
    
    ],
  },
  
];

export const educationHistory = [
  {
    roleTitle: 'B.E. Information Technology',
    organization: 'University of Pune',
    location: 'Pune, India',
    startDate: '2022',
    endDate: '2026',
    isCurrent: false,
    descriptionLines: [
      'Focused on software engineering, web development, and databases.',
     
    ],
  },
];

export const certifications = [
  {
    title: 'Python & Django Bootcamp',
    issuer: 'Udemy',
    issueDate: '2026',
    badgeImageUrl: '/images/Python_Django.png',
    credentialUrl: '',
  },
  {
    title: 'Java & Spring Boot',
    issuer: ' Kiranacademy',
    issueDate: '2026',
    badgeImageUrl: '/images/Java_Springboot.png',
    credentialUrl: '',
  },
 
];
