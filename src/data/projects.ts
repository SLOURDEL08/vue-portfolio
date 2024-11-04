export interface Project {
  id: string
  slug: string
  title: string
  description: string
  client: string
  year: string
  website?: string // Optionnel
  services: string[]
  imagePath: string
  nextProject?: string // Slug du projet suivant pour la navigation
  prevProject?: string // Slug du projet précédent pour la navigation
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'camera',
    title: 'Camera',
    description: 'A cutting-edge digital platform designed to revolutionize the way people interact with technology.',
    client: 'Canon Inc.',
    year: '2023',
    website: 'www.example.com',
    services: ['Digital Design', 'Motion Design', 'Development'],
    imagePath: '/src/assets/wall.webp',
    nextProject: 'noise',
    prevProject: 'robot',
      gallery: [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
  ],
  },
  {
    id: '2',
    slug: 'noise',
    title: 'Noise',
    description: 'An innovative sound design project pushing the boundaries of audio experience.',
    client: 'Sony Music',
    year: '2023',
    services: ['Sound Design', 'Digital Art'],
    imagePath: '/src/assets/rose.webp',
    nextProject: 'robot',
    prevProject: 'camera',
      gallery: [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
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
    services: ['Motion Design', 'Development'],
    imagePath: '/src/assets/gant.webp',
    nextProject: 'camera',
    prevProject: 'noise',
      gallery: [
    '/src/assets/wall.webp',
    '/src/assets/wall.webp',
    '/src/assets/wall.webp'
  ],
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
}