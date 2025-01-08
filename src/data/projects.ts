
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  client: string
  year: string
  website?: string // Optionnel
  tags: string[] // Ancien services renommé en tags
    techs?: Array<{
    name: string;
    icon: string;  // Changé de IconType à string
  }>;
  services: {
    title: string
    description: string
  }[]
  imagePath: string
  altImagePath: string
  date: string
   nextProject?: string 
  prevProject?: string 
  gallery: string[]
}




export const projects: Project[] = [
  {
  id: '1',
  slug: 'digitalizerr',
  title: 'Digitalizerr',
  description: 'A fictional web marketing agency designed to showcase my skills in design and front-end development. This project highlights modern integration and reusable components.',
  client: 'Personal Project',
  year: '2023',
  website: 'https://chipper-rabanadas-970272.netlify.app/',
  tags: ['UI/UX Design', 'Front-end Development', 'Responsive'],
  techs: [
    { name: 'React', icon: 'logos:react' },
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    { name: 'Figma', icon: 'logos:figma' },
    { name: 'Framer Motion', icon: 'logos:framer' },
  ],
  services: [
    {
      title: 'UI/UX Design',
      description: 'Complete user interface design in Figma, focusing on an intuitive and modern user experience for a web marketing agency.'
    },
    {
      title: 'Frontend Development',
      description: 'React development with TypeScript and Tailwind CSS. Implementation of reusable components including carousels, forms, and booking systems.'
    },
    {
      title: 'Responsive',
    description: 'Fully responsive design implementation across all devices, ensuring a seamless user experience from desktop to mobile with a mobile-first approach.'
  }
  ],
  imagePath: '/images/work/digitalizerr/home.png',
  altImagePath: '/images/work/digitalizerr/alt.png',
  date: "2024-01-15",
  gallery: [
    '/images/work/digitalizerr/gallery.png',
    '/images/work/digitalizerr/gallery1.png',
    '/images/work/digitalizerr/gallery2.png',
    '/images/work/digitalizerr/gallery3.png',
    '/images/work/digitalizerr/gallery4.png',
    '/images/work/digitalizerr/gallery5.png',
    '/images/work/digitalizerr/gallery6.png',
  ],
},
  {
    id: '2',
    slug: 'breeder',
    title: 'Breeder',
    description: 'A complex animated website reproduction showcasing advanced GSAP animations and seamless page transitions.',
    client: 'Personal Project',
    year: '2024',
    website: 'https://brand-breeder-app.netlify.app/',
    tags: ['Complex Animations', 'Frontend Development', 'UI/UX Design'],
    techs: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'GSAP', icon: 'logos:greensock-icon' },
    ],
    services: [
      {
        title: 'Advanced Animations',
        description: 'Implementation of complex GSAP animations with continuous page transitions and sophisticated user interactions throughout the website.'
      },
      {
        title: 'Frontend Development',
        description: 'Built with Vue.js and TypeScript, featuring router management for seamless animations and state handling across pages.'
      },
      {
        title: 'Responsive',
        description: 'Pixel-perfect responsive implementation with grid alignments and maintained animation integrity across all device sizes.'
      }
    ],
    imagePath: '/images/work/breeder/home.png',
    altImagePath: '/images/work/breeder/alt.png',
    date: "2024-01-20",
    gallery: [
      '/images/work/breeder/gallery1.png',
      '/images/work/breeder/gallery2.png',
      '/images/work/breeder/gallery3.png',
      '/images/work/breeder/gallery4.png',
      '/images/work/breeder/gallery5.png',
      '/images/work/breeder/gallery6.png',
    ],
},
  {
    id: '3',
    slug: 'acolyte',
    title: 'Acolyte',
    description: 'A meticulous reproduction of Acolyte\'s homepage, featuring sophisticated GSAP animations and precise layout management. This project demonstrates advanced frontend implementation with subtle, sequential animations.',
    client: 'Personal Project',
    year: '2024',
    website: 'https://acolyte-mu.vercel.app/',
    tags: ['Frontend Development', 'Animation', 'Layout Design'],
    techs: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'GSAP', icon: 'logos:greensock-icon' },
    ],
    services: [
      {
        title: 'Animation Development',
        description: 'Implementation of subtle and sophisticated GSAP animations with sequential timing and smooth transitions between elements.'
      },
      {
        title: 'Layout Engineering',
        description: 'Precise management of spacing and alignment, ensuring pixel-perfect reproduction of complex layouts and responsive behavior.'
      },
      {
        title: 'Frontend Integration',
        description: 'Built with Vue.js and TypeScript, focusing on clean code architecture and optimal animation performance.'
      }
    ],
    imagePath: '/images/work/acolyte/home.png',
    altImagePath: '/images/work/acolyte/alt.png',
    date: "2024-02-01",
    gallery: [
      '/images/work/acolyte/gallery1.png',
      '/images/work/acolyte/gallery2.png',
      '/images/work/acolyte/gallery4.png',
      '/images/work/acolyte/gallery3.png',
    ],
},
  {
    id: '4',
    slug: 'digitoile',
    title: 'Digitoile',
    description: 'A custom Next.js website featuring a multi-step form system and sophisticated animations. This project showcases modern web development practices with a focus on user experience and performance.',
    client: 'Personal Project',
    year: '2024',
    website: 'https://digitoile.fr',
    tags: ['Frontend Development', 'UI/UX Design', 'Form Development'],
    techs: [
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Framer Motion', icon: 'logos:framer' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Vercel', icon: 'logos:vercel-icon' },
      { name: 'React Hook Form', icon: 'simple-icons:reacthookform' },
    ],
    services: [
      {
        title: 'Design Integration',
        description: 'Pixel-perfect integration of Figma designs, ensuring consistent visual quality across all pages and components.'
      },
      {
        title: 'Form Development',
        description: 'Implementation of a comprehensive multi-step form system with React Hook Form, featuring validation and smooth transitions.'
      },
      {
        title: 'Motion Design',
        description: 'Integration of smooth animations using Framer Motion to enhance user experience and interface interactivity.'
      }
    ],
    imagePath: '/images/work/digitoile/home.png',
    altImagePath: '/images/work/digitoile/alt.png',
    date: "2024-02-15",
    gallery: [
      '/images/work/digitoile/gallery1.png',
      '/images/work/digitoile/gallery2.png',
      '/images/work/digitoile/gallery3.png',
      '/images/work/digitoile/gallery4.png',
      '/images/work/digitoile/gallery5.png',
      '/images/work/digitoile/gallery6.png',
      '/images/work/digitoile/gallery7.png',
    ],
},
   {
   id: '5',
   slug: 'ferrari-beverly',
   title: 'Ferrari Beverly Hills',
   description: 'A faithful reproduction of the Ferrari Beverly Hills homepage, featuring custom carousels and interactive navigation elements. This project demonstrates precise attention to design details and smooth user interactions.',
   client: 'Personal Project',
   year: '2024',
   website: 'https://endearing-bubblegum-84fec1.netlify.app/',
   tags: ['Frontend Development', 'UI Integration', 'Interactive Design'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
   ],
   services: [
     {
       title: 'UI Integration',
       description: 'Precise reproduction of the official Ferrari Beverly Hills homepage, maintaining brand aesthetics and design fidelity.'
     },
     {
       title: 'Interactive Components',
       description: 'Development of custom carousel functionality and interactive navigation including mobile toggle menu and dropdown navbar.'
     },
     {
       title: 'Responsive Design',
       description: 'Implementation of responsive layouts with special attention to mobile navigation and interactive elements.'
     }
   ],
   imagePath: '/images/work/ferrari/home.png',
   altImagePath: '/images/work/ferrari/alt.png',
   date: "2024-02-20",
   gallery: [
       '/images/work/ferrari/gallery.png',
       '/images/work/ferrari/gallery1.png',
       '/images/work/ferrari/gallery2.png',
       '/images/work/ferrari/gallery3.png',
       '/images/work/ferrari/gallery4.png',
       '/images/work/ferrari/gallery5.png',
       '/images/work/ferrari/gallery6.png',
       '/images/work/ferrari/gallery7.png',
   ],
},
   {
   id: '6',
   slug: 'reactflix',
   title: 'Reactflix',
   description: 'A Netflix-inspired multi-page application featuring dynamic content, reusable components, and a vertical navigation system. A showcase of React component architecture and responsive design.',
   client: 'Personal Project',
   year: '2024',
   website: 'https://peppy-unicorn-081057.netlify.app',
   tags: ['Frontend Development', 'Component Architecture', 'UI/UX Design'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
     { name: 'Figma', icon: 'logos:figma' },
   ],
   services: [
     {
       title: 'UI/UX Design',
       description: 'Creation of a Netflix-inspired interface in Figma, focusing on user experience and content organization with vertical navigation.'
     },
     {
       title: 'Component Architecture',
       description: 'Development of a scalable component system with reusable elements for efficient page construction and maintenance.'
     },
     {
       title: 'Responsive Integration',
       description: 'Implementation of a fully responsive design system ensuring consistent experience across all devices and screen sizes.'
     }
   ],
   imagePath: '/images/work/reactflix/home.png',
   altImagePath: '/images/work/reactflix/alt.png',
   date: "2024-03-01",
   gallery: [
     '/images/work/reactflix/gallery1.png',
     '/images/work/reactflix/gallery2.png',
     '/images/work/reactflix/gallery3.png',
     '/images/work/reactflix/gallery4.png',
     '/images/work/reactflix/gallery5.png',
   ],
},
     {
   id: '7',
   slug: 'tesla',
   title: 'Tesla',
   description: 'A clone of Tesla\'s homepage featuring sequential section animations and dynamic backgrounds. This project demonstrates advanced scrolling animations and responsive navigation systems.',
   client: 'Personal Project',
   year: '2024',
   website: 'https://shiny-yeot-0fdc3e.netlify.app',
   tags: ['Frontend Development', 'Animation', 'Interactive Design'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
   ],
   services: [
     {
       title: 'Sequential Animations',
       description: 'Implementation of section-by-section animations with synchronized background images and videos, creating an immersive scrolling experience.'
     },
     {
       title: 'Interactive Navigation',
       description: 'Development of responsive navigation systems including dropdown menus and mobile-optimized toggle interface.'
     },
     {
       title: 'Background Management',
       description: 'Creation of a dynamic background system handling both image and video content with smooth transitions between sections.'
     }
   ],
   imagePath: '/images/work/tesla/home.png',
   altImagePath: '/images/work/tesla/alt.png',
   date: "2024-03-10",
   gallery: [
     '/images/work/tesla/gallery1.png',
     '/images/work/tesla/gallery2.png',
     '/images/work/tesla/gallery3.png',
     '/images/work/tesla/gallery4.png',
     '/images/work/tesla/gallery5.png',
   ],
},
       {
   id: '8',
   slug: 'uber-eat',
   title: 'Uber Eats',
   description: 'A dynamic web application inspired by Uber Eats, featuring functional search capabilities and interactive restaurant listings. Built with React and modern JavaScript.',
   client: 'Personal Project',
   year: '2024',
   website: 'https://fastidious-muffin-3654c6.netlify.app',
   tags: ['Web Application', 'Search Functionality', 'Dynamic Content'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
   ],
   services: [
     {
       title: 'Search Implementation',
       description: 'Development of a functional search system with real-time filtering and results display for restaurant discovery.'
     },
     {
       title: 'Dynamic Pages',
       description: 'Creation of dynamic restaurant pages and listings with interactive content management and state handling.'
     },
     {
       title: 'UI Development',
       description: 'Implementation of a responsive and intuitive user interface following Uber Eats design patterns.'
     }
   ],
   imagePath: '/images/work/ubereat/home.png',
   altImagePath: '/images/work/ubereat/alt.png',
   date: "2024-03-15",
         gallery: [
          '/images/work/ubereat/gallery.png',
     '/images/work/ubereat/gallery1.png',
     '/images/work/ubereat/gallery2.png',
     '/images/work/ubereat/gallery3.png',

   ],
},
   {
   id: '9',
   slug: 'diet-ia',
   title: 'Diet IA',
   description: 'A full-stack fitness transformation application offering personalized meal plans and recipes based on user profiles and goals. Built with Vue.js, Node.js, and Firebase for a complete user experience.',
   client: 'Personal Project',
   year: '2024',
   website: 'diet-ia.vercel.app',
   tags: ['Full Stack Development', 'User Authentication', 'Personalization'],
   techs: [
     { name: 'Vue.js', icon: 'logos:vue' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Node.js', icon: 'logos:nodejs-icon' },
     { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
     { name: 'Firebase', icon: 'logos:firebase' },
   ],
   services: [
     {
       title: 'Backend Development',
       description: 'Implementation of Node.js backend with TypeScript, including middleware, authentication systems, and CRUD operations.'
     },
     {
       title: 'User Management',
       description: 'Development of comprehensive user authentication and profile management using Firebase, including secure data storage.'
     },
     {
       title: 'Personalization System',
       description: 'Creation of an intelligent recommendation system for meals and recipes based on user profiles, goals, and preferences.'
     }
   ],
   imagePath: '/images/work/dietia/home.png',
   altImagePath: '/images/work/dietia/alt.png',
   date: "2024-03-20",
   gallery: [
     '/images/work/dietia/gallery1.png',
     '/images/work/dietia/gallery2.png',
     '/images/work/dietia/gallery3.png',
     '/images/work/dietia/gallery4.png',
     '/images/work/dietia/gallery5.png',
        '/images/work/dietia/gallery6.png',
   ],
},
   {
   id: '10',
   slug: 'toast-collectif',
   title: 'Toast Collectif',
   description: 'A custom WordPress website for a marketing agency featuring custom tracking implementation, SEO optimization, and bespoke slider components. Built with focus on performance and analytics.',
   client: 'Toast Collectif',
   year: '2024',
   website: 'https://toast-collectif.fr',
   tags: ['WordPress Development', 'Analytics', 'Custom Components'],
   techs: [
     { name: 'WordPress', icon: 'logos:wordpress-icon' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'Figma', icon: 'logos:figma' },
     { name: 'Google Tag Manager', icon: 'logos:google-tag-manager' },
     { name: 'SEO', icon: 'solar:ranking-bold' },
   ],
   services: [
     {
       title: 'Custom WordPress Development',
       description: 'Development of a bespoke WordPress theme with custom components including sliders and interactive elements.'
     },
     {
       title: 'Analytics Integration',
       description: 'Implementation of comprehensive tracking using Google Tag Manager for enhanced user behavior analysis.'
     },
     {
       title: 'Performance Optimization',
       description: 'SEO optimization and performance tuning for optimal search engine visibility and user experience.'
     }
   ],
   imagePath: '/images/work/toast/home.png',
   altImagePath: '/images/work/toast/alt.png',
   date: "2024-03-25",
   gallery: [
     '/images/work/toast/gallery1.png',
     '/images/work/toast/gallery2.png',
     '/images/work/toast/gallery3.png',
     '/images/work/toast/gallery4.png',
     '/images/work/toast/gallery5.png',
   ],
  },
   {
   id: '11',
   slug: 'portfolio',
   title: 'Portfolio V1',
   description: 'A comprehensive portfolio website built with Next.js, featuring advanced filtering capabilities, dynamic project showcases, and interactive experiences. This platform demonstrates modern web development practices and user experience design.',
   client: 'Personal Project',
   year: '2024',
   website: 'https://portfolio.slourdel.fr',
   tags: ['Frontend Development', 'UX Design', 'Interactive Development'],
   techs: [
     { name: 'Next.js', icon: 'logos:nextjs-icon' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
   ],
   services: [
     {
       title: 'Advanced Filtering System',
       description: 'Implementation of a sophisticated filtering system for projects and experiences, enabling efficient content discovery and navigation.'
     },
     {
       title: 'Interactive Experience',
       description: 'Development of engaging user interactions and smooth animations throughout the site, enhancing the overall user experience.'
     },
     {
       title: 'Form Development',
       description: 'Creation of robust contact forms with validation and smooth user feedback, ensuring effective communication channels.'
     }
   ],
   imagePath: '/images/work/portfolio/home.png',
   altImagePath: '/images/work/portfolio/home.png',
   date: "2024-03-25",
   gallery: [
     '/images/work/portfolio/gallery1.png',
     '/images/work/portfolio/gallery2.png',
     '/images/work/portfolio/gallery3.png',
     '/images/work/portfolio/gallery4.png',
     '/images/work/portfolio/gallery5.png',
   ],
},
  
  
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
}