
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
    description: 'Une agence fictive de marketing web créée pour mettre en valeur mes compétences en design et en développement front-end. Ce projet met en avant l\'intégration moderne et les composants réutilisables.',
    client: 'Projet personnel',
    year: '2023',
    website: 'https://chipper-rabanadas-970272.netlify.app/',
    tags: ['Design UI/UX', 'Développement Front-end', 'Responsive'],
    techs: [
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Framer Motion', icon: 'logos:framer' },
    ],
    services: [
      {
        title: 'Design UI/UX',
        description: 'Conception complète de l\'interface utilisateur dans Figma, en mettant l\'accent sur une expérience utilisateur moderne et intuitive pour une agence de marketing web.'
      },
      {
        title: 'Développement Frontend',
        description: 'Développement avec React, TypeScript et Tailwind CSS. Mise en œuvre de composants réutilisables, y compris des carrousels, des formulaires et des systèmes de réservation.'
      },
      {
        title: 'Responsive',
        description: 'Mise en œuvre d\'un design entièrement responsive sur tous les appareils, garantissant une expérience utilisateur fluide de l\'ordinateur de bureau au mobile avec une approche mobile-first.'
      }
    ],
    imagePath: '/images/work/digitalizerr/home.webp',
    altImagePath: '/images/work/digitalizerr/alt.webp',
    date: "2024-01-15",
    gallery: [
      '/images/work/digitalizerr/gallery.webp',
      '/images/work/digitalizerr/gallery1.webp',
      '/images/work/digitalizerr/gallery2.webp',
      '/images/work/digitalizerr/gallery3.webp',
      '/images/work/digitalizerr/gallery4.webp',
      '/images/work/digitalizerr/gallery5.webp',
      '/images/work/digitalizerr/gallery6.webp',
    ],
  },
  {
    id: '2',
    slug: 'breeder',
    title: 'Breeder',
    description: 'Une reproduction complexe d\'un site web avec des animations avancées GSAP et des transitions fluides entre les pages.',
    client: 'Projet personnel',
    year: '2024',
    website: 'https://brand-breeder-app.netlify.app/',
    tags: ['Animations complexes', 'Développement Frontend', 'Design UI/UX'],
    techs: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'GSAP', icon: 'logos:greensock-icon' },
    ],
    services: [
      {
        title: 'Animations avancées',
        description: 'Mise en œuvre d\'animations complexes avec GSAP, comprenant des transitions continues entre les pages et des interactions sophistiquées sur tout le site.'
      },
      {
        title: 'Développement Frontend',
        description: 'Créé avec Vue.js et TypeScript, avec gestion du routeur pour des animations fluides et gestion de l\'état entre les pages.'
      },
      {
        title: 'Responsive',
        description: 'Mise en œuvre d\'un design responsive pixel-perfect avec alignement de la grille et maintien de l\'intégrité des animations sur toutes les tailles d\'appareils.'
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
    description: 'Une reproduction minutieuse de la page d\'accueil d\'Acolyte, avec des animations GSAP sophistiquées et une gestion précise des mises en page. Ce projet démontre une implémentation avancée du frontend avec des animations subtiles et séquentielles.',
    client: 'Projet personnel',
    year: '2024',
    website: 'https://acolyte-mu.vercel.app/',
    tags: ['Développement Frontend', 'Animation', 'Design de mise en page'],
    techs: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'GSAP', icon: 'logos:greensock-icon' },
    ],
    services: [
      {
        title: 'Développement d\'animations',
        description: 'Mise en œuvre d\'animations subtiles et sophistiquées avec GSAP, avec un timing séquentiel et des transitions fluides entre les éléments.'
      },
      {
        title: 'Ingénierie de mise en page',
        description: 'Gestion précise des espacements et des alignements, garantissant une reproduction parfaite des mises en page complexes et un comportement responsive.'
      },
      {
        title: 'Intégration Frontend',
        description: 'Créé avec Vue.js et TypeScript, en mettant l\'accent sur une architecture de code propre et des performances d\'animations optimisées.'
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
    description: 'Un site personnalisé Next.js avec un système de formulaire multi-étapes et des animations sophistiquées. Ce projet met en valeur les pratiques modernes de développement web avec un accent sur l\'expérience utilisateur et la performance.',
    client: 'Projet personnel',
    year: '2024',
    website: 'https://digitoile.fr',
    tags: ['Développement Frontend', 'Design UI/UX', 'Développement de formulaires'],
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
        title: 'Intégration de design',
        description: 'Intégration pixel-perfect des designs Figma, garantissant une qualité visuelle cohérente sur toutes les pages et composants.'
      },
      {
        title: 'Développement de formulaires',
        description: 'Mise en œuvre d\'un système de formulaire multi-étapes avec React Hook Form, incluant la validation et des transitions fluides.'
      },
      {
        title: 'Motion Design',
        description: 'Intégration d\'animations fluides avec Framer Motion pour améliorer l\'expérience utilisateur et l\'interactivité de l\'interface.'
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
    description: 'Une reproduction fidèle de la page d\'accueil de Ferrari Beverly Hills, avec des carrousels personnalisés et des éléments de navigation interactifs. Ce projet démontre une attention minutieuse aux détails du design et des interactions utilisateur fluides.',
    client: 'Projet personnel',
    year: '2024',
    website: 'https://endearing-bubblegum-84fec1.netlify.app/',
    tags: ['Développement Frontend', 'Intégration UI', 'Design interactif'],
    techs: [
      { name: 'React', icon: 'logos:react' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'CSS', icon: 'vscode-icons:file-type-css' },
    ],
    services: [
      {
        title: 'Intégration UI',
        description: 'Reproduction précise de la page d\'accueil officielle de Ferrari Beverly Hills, en maintenant l\'esthétique et la fidélité du design de la marque.'
      },
      {
        title: 'Composants interactifs',
        description: 'Développement d\'une fonctionnalité de carrousel personnalisé et de navigation interactive, y compris un menu mobile et une barre de navigation déroulante.'
      },
      {
        title: 'Design responsive',
        description: 'Mise en œuvre de mises en page responsive avec une attention particulière à la navigation mobile et aux éléments interactifs.'
      }
    ],
    imagePath: '/images/work/ferrari/home.png',
    altImagePath: '/images/work/ferrari/alt.png',
    date: "2024-02-20",
    gallery: [
      '/images/work/ferrari/gallery1.png',
      '/images/work/ferrari/gallery2.png',
      '/images/work/ferrari/gallery3.png',
      '/images/work/ferrari/gallery4.png',
      '/images/work/ferrari/gallery5.png',
    ],
  },
   {
   id: '6',
   slug: 'reactflix',
   title: 'Reactflix',
   description: "Une application multi-pages inspirée de Netflix, avec du contenu dynamique, des composants réutilisables et un système de navigation verticale. Une vitrine de l'architecture des composants React et du design responsive.",
   client: 'Projet personnel',
   year: '2024',
   website: 'https://peppy-unicorn-081057.netlify.app',
   tags: ['Développement Frontend', 'Architecture de composants', 'Design UI/UX'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
     { name: 'Figma', icon: 'logos:figma' },
   ],
   services: [
     {
       title: 'Design UI/UX',
       description: "Création d'une interface inspirée de Netflix dans Figma, en mettant l'accent sur l'expérience utilisateur et l'organisation du contenu avec une navigation verticale."
     },
     {
       title: 'Architecture de composants',
       description: "Développement d'un système de composants évolutif avec des éléments réutilisables pour une construction et une maintenance de page efficaces."
     },
     {
       title: 'Intégration responsive',
       description: "Mise en place d'un système de design entièrement responsive pour garantir une expérience cohérente sur tous les appareils et tailles d'écran."
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
   description: "Un clone de la page d'accueil de Tesla avec des animations séquentielles de sections et des arrière-plans dynamiques. Ce projet démontre des animations avancées de défilement et des systèmes de navigation responsive.",
   client: 'Projet personnel',
   year: '2024',
   website: 'https://shiny-yeot-0fdc3e.netlify.app',
   tags: ['Développement Frontend', 'Animation', 'Design interactif'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
   ],
   services: [
     {
       title: 'Animations séquentielles',
       description: "Mise en place d'animations de sections par section avec des images et vidéos d'arrière-plan synchronisées, créant une expérience immersive de défilement."
     },
     {
       title: 'Navigation interactive',
       description: "Développement de systèmes de navigation responsive incluant des menus déroulants et une interface mobile optimisée avec un toggle."
     },
     {
       title: 'Gestion des arrière-plans',
       description: "Création d'un système d'arrière-plan dynamique gérant aussi bien les images que les vidéos avec des transitions fluides entre les sections."
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
   description: "Une application web dynamique inspirée par Uber Eats, avec des capacités de recherche fonctionnelles et des listes de restaurants interactives. Construite avec React et JavaScript moderne.",
   client: 'Projet personnel',
   year: '2024',
   website: 'https://fastidious-muffin-3654c6.netlify.app',
   tags: ['Application web', 'Fonctionnalité de recherche', 'Contenu dynamique'],
   techs: [
     { name: 'React', icon: 'logos:react' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'CSS', icon: 'vscode-icons:file-type-css' },
   ],
   services: [
     {
       title: 'Implémentation de recherche',
       description: "Développement d'un système de recherche fonctionnel avec filtrage en temps réel et affichage des résultats pour découvrir des restaurants."
     },
     {
       title: 'Pages dynamiques',
       description: "Création de pages et listes de restaurants dynamiques avec gestion interactive du contenu et gestion de l'état."
     },
     {
       title: 'Développement UI',
       description: "Mise en place d'une interface utilisateur responsive et intuitive suivant les patterns de design d'Uber Eats."
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
   description: 'Une application complète de transformation physique offrant des plans de repas et des recettes personnalisés basés sur les profils et objectifs des utilisateurs. Construite avec Vue.js, Node.js et Firebase pour une expérience utilisateur complète.',
   client: 'Projet personnel',
   year: '2024',
   website: 'diet-ia.vercel.app',
   tags: ['Développement Full Stack', 'Authentification utilisateur', 'Personnalisation'],
   techs: [
     { name: 'Vue.js', icon: 'logos:vue' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Node.js', icon: 'logos:nodejs-icon' },
     { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
     { name: 'Firebase', icon: 'logos:firebase' },
   ],
   services: [
     {
       title: 'Développement Backend',
       description: 'Implémentation du backend Node.js avec TypeScript, incluant middleware, systèmes d\'authentification et opérations CRUD.'
     },
     {
       title: 'Gestion des utilisateurs',
       description: 'Développement d\'un système complet d\'authentification et de gestion de profil utilisateur avec Firebase, incluant le stockage sécurisé des données.'
     },
     {
       title: 'Système de personnalisation',
       description: 'Création d\'un système intelligent de recommandation pour les repas et recettes basé sur les profils, objectifs et préférences des utilisateurs.'
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
   description: 'Un site WordPress personnalisé pour une agence de marketing avec implémentation de suivi sur mesure, optimisation SEO et composants de diaporama personnalisés. Construit avec un focus sur la performance et l\'analyse.',
   client: 'Toast Collectif',
   year: '2024',
   website: 'https://toast-collectif.fr',
   tags: ['Développement WordPress', 'Analytiques', 'Composants personnalisés'],
   techs: [
     { name: 'WordPress', icon: 'logos:wordpress-icon' },
     { name: 'JavaScript', icon: 'logos:javascript' },
     { name: 'Figma', icon: 'logos:figma' },
     { name: 'Google Tag Manager', icon: 'logos:google-tag-manager' },
     { name: 'SEO', icon: 'solar:ranking-bold' },
   ],
   services: [
     {
       title: 'Développement WordPress personnalisé',
       description: 'Développement d\'un thème WordPress sur mesure avec des composants personnalisés incluant des diaporamas et des éléments interactifs.'
     },
     {
       title: 'Intégration d\'analytiques',
       description: 'Implémentation d\'un suivi complet utilisant Google Tag Manager pour une analyse approfondie du comportement des utilisateurs.'
     },
     {
       title: 'Optimisation de la performance',
       description: 'Optimisation SEO et amélioration des performances pour une visibilité optimale dans les moteurs de recherche et une expérience utilisateur fluide.'
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
   description: 'Un site portfolio complet construit avec Next.js, proposant des capacités de filtrage avancées, des vitrines de projets dynamiques et des expériences interactives. Cette plateforme démontre les pratiques modernes de développement web et de conception d\'expérience utilisateur.',
   client: 'Projet personnel',
   year: '2024',
   website: 'https://portfolio.slourdel.fr',
   tags: ['Développement Frontend', 'Conception UX', 'Développement interactif'],
   techs: [
     { name: 'Next.js', icon: 'logos:nextjs-icon' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
   ],
   services: [
     {
       title: 'Système de filtrage avancé',
       description: 'Implémentation d\'un système de filtrage sophistiqué pour les projets et expériences, permettant une découverte et une navigation efficaces du contenu.'
     },
     {
       title: 'Expérience interactive',
       description: 'Développement d\'interactions utilisateur engageantes et d\'animations fluides à travers le site, améliorant l\'expérience utilisateur globale.'
     },
     {
       title: 'Développement de formulaires',
       description: 'Création de formulaires de contact robustes avec validation et retour utilisateur fluide, assurant des canaux de communication efficaces.'
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
{
   id: '12',
   slug: 'finance-app',
   title: 'Application Financière',
   description: 'Une application de gestion financière personnelle avec tableau de bord interactif, suivi des dépenses et visualisation des données. Développée avec des technologies modernes pour offrir une expérience utilisateur intuitive et des analyses financières pertinentes.',
   client: 'Projet personnel',
   year: '2024',
   website: 'https://finance-app.slourdel.fr',
   tags: ['Application web', 'Dashboard interactif', 'Visualisation de données'],
   techs: [
     { name: 'Next.js', icon: 'logos:nextjs-icon' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
     { name: 'Chart.js', icon: 'logos:chartjs' },
   ],
   services: [
     {
       title: 'Tableau de bord interactif',
       description: 'Création d\'un tableau de bord financier complet avec widgets personnalisables pour le suivi des dépenses, revenus et objectifs financiers.'
     },
     {
       title: 'Visualisation de données',
       description: 'Développement de graphiques et diagrammes interactifs pour visualiser les tendances financières et faciliter la prise de décision.'
     },
     {
       title: 'Gestion des transactions',
       description: 'Implémentation d\'un système de gestion des transactions avec catégorisation automatique et filtrage avancé des données financières.'
     }
   ],
   imagePath: '/images/work/finance-app/home.png',
   altImagePath: '/images/work/finance-app/home.png',
   date: "2024-03-25",
   gallery: [
     '/images/work/finance-app/gallery.png',
     '/images/work/finance-app/gallery1.png',
     '/images/work/finance-app/gallery2.png',
     '/images/work/finance-app/gallery3.png',
     '/images/work/finance-app/gallery4.png',
   ],
},
{
   id: '13',
   slug: 'diet-app',
   title: 'Application de Régime',
   description: 'Une application de suivi nutritionnel et de planification de repas, offrant des programmes personnalisés basés sur les objectifs de santé des utilisateurs. Conçue pour simplifier la préparation des repas et le suivi des progrès avec une interface intuitive.',
   client: 'Projet personnel',
   year: '2024',
   website: 'https://diet-app.slourdel.fr',
   tags: ['Application mobile', 'Suivi nutritionnel', 'Planification de repas'],
   techs: [
     { name: 'React Native', icon: 'logos:react' },
     { name: 'TypeScript', icon: 'logos:typescript-icon' },
     { name: 'Firebase', icon: 'logos:firebase' },
     { name: 'Node.js', icon: 'logos:nodejs-icon' },
   ],
   services: [
     {
       title: 'Développement d\'application mobile',
       description: 'Création d\'une application React Native cross-platform avec une expérience utilisateur fluide et des performances optimisées.'
     },
     {
       title: 'Système de suivi nutritionnel',
       description: 'Implémentation d\'un système de suivi des apports nutritionnels avec calcul automatique des calories et des macronutriments.'
     },
     {
       title: 'Planificateur de repas',
       description: 'Développement d\'un planificateur de repas hebdomadaire avec suggestions personnalisées et liste de courses automatique.'
     }
   ],
   imagePath: '/images/work/diet-app/home.png',
   altImagePath: '/images/work/diet-app/home.png',
   date: "2024-03-25",
   gallery: [
     '/images/work/diet-app/gallery.png',
     '/images/work/diet-app/gallery1.png',
     '/images/work/diet-app/gallery2.png',
     '/images/work/diet-app/gallery3.png',
     '/images/work/diet-app/gallery4.png',
   ],
},
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
}