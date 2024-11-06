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

export interface Service {
  title: string
  description: string
}