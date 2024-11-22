export interface Project {
  id: string
  slug: string
  title: string
  description: string
  client: string
  year: string
  website?: string // Optionnel
  tags: string[] // Ancien services renommé en tags
  services: {
    title: string
    description: string
  }[]
  imagePath: string
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
    description: 'A cutting-edge digital platform designed to revolutionize the way people interact with technology.',
    client: 'Canon Inc.',
    year: '2023',
    website: 'www.example.com',
    tags: ['Digital Design', 'Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/work/digitalizerr/home.png',
    nextProject: 'noise',
    prevProject: 'robot',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '2',
    slug: 'noise',
    title: 'Noise',
    description: 'An innovative sound design project pushing the boundaries of audio experience.',
    client: 'Sony Music',
    year: '2023',
    tags: ['Sound Design', 'Digital Art'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/rose.webp',
    nextProject: 'robot',
    prevProject: 'camera',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '3',
    slug: 'robot',
    title: 'Robot',
    description: 'A state-of-the-art automation project combining AI and robotics.',
    client: 'Tesla',
    year: '2023',
    website: 'www.robotproject.com',
    tags: ['Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/gant.webp',
    nextProject: 'camera',
    prevProject: 'noise',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
   {
    id: '4',
    slug: 'camera',
    title: 'Camera',
    description: 'A cutting-edge digital platform designed to revolutionize the way people interact with technology.',
    client: 'Canon Inc.',
    year: '2023',
    website: 'www.example.com',
     tags: ['Digital Design', 'Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/wall.webp',
    nextProject: 'noise',
    prevProject: 'robot',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '5',
    slug: 'noise',
    title: 'Noise',
    description: 'An innovative sound design project pushing the boundaries of audio experience.',
    client: 'Sony Music',
    year: '2023',
    tags: ['Sound Design', 'Digital Art'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/rose.webp',
    nextProject: 'robot',
    prevProject: 'camera',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '6',
    slug: 'robot',
    title: 'Robot',
    description: 'A state-of-the-art automation project combining AI and robotics.',
    client: 'Tesla',
    year: '2023',
    website: 'www.robotproject.com',
    tags: ['Motion Design', 'Development'],
    imagePath: '/images/gant.webp',
    services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    nextProject: 'camera',
    prevProject: 'noise',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
   {
    id: '7',
    slug: 'camera',
    title: 'Camera',
    description: 'A cutting-edge digital platform designed to revolutionize the way people interact with technology.',
    client: 'Canon Inc.',
    year: '2023',
    website: 'www.example.com',
     tags: ['Digital Design', 'Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/wall.webp',
    nextProject: 'noise',
    prevProject: 'robot',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '8',
    slug: 'noise',
    title: 'Noise',
    description: 'An innovative sound design project pushing the boundaries of audio experience.',
    client: 'Sony Music',
    year: '2023',
    tags: ['Sound Design', 'Digital Art'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/rose.webp',
    nextProject: 'robot',
    prevProject: 'camera',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '9',
    slug: 'robot',
    title: 'Robot',
    description: 'A state-of-the-art automation project combining AI and robotics.',
    client: 'Tesla',
    year: '2023',
    website: 'www.robotproject.com',
    tags: ['Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/gant.webp',
    nextProject: 'camera',
    prevProject: 'noise',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
   {
    id: '10',
    slug: 'camera',
    title: 'Camera',
    description: 'A cutting-edge digital platform designed to revolutionize the way people interact with technology.',
    client: 'Canon Inc.',
    year: '2023',
    website: 'www.example.com',
     tags: ['Digital Design', 'Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/wall.webp',
    nextProject: 'noise',
    prevProject: 'robot',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '11',
    slug: 'noise',
    title: 'Noise',
    description: 'An innovative sound design project pushing the boundaries of audio experience.',
    client: 'Sony Music',
    year: '2023',
    tags: ['Sound Design', 'Digital Art'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/rose.webp',
    nextProject: 'robot',
    prevProject: 'camera',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  {
    id: '12',
    slug: 'robot',
    title: 'Robot',
    description: 'A state-of-the-art automation project combining AI and robotics.',
    client: 'Tesla',
    year: '2023',
    website: 'www.robotproject.com',
    tags: ['Motion Design', 'Development'],
     services: [
    {
      title: 'Motion Design',
      description: 'Created fluid and dynamic animations to showcase robot movements and interactions in an intuitive and engaging way.'
    },
    {
      title: 'Development',
      description: 'Implemented cutting-edge robotics control systems and AI integration using modern technologies and frameworks.'
    }
  ],
    imagePath: '/images/gant.webp',
    nextProject: 'camera',
    prevProject: 'noise',
    date: "2024-05-12",
      gallery: [
    '/images/wall.webp',
    '/images/wall.webp',
    '/images/wall.webp',
  ],
  },
  
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
}