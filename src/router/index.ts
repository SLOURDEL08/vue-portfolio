// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useTransitionStore } from '../stores/transitionStore'
import { getProjectBySlug } from '../data/projects'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () => import('../views/ProjectDetail.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        const project = getProjectBySlug(to.params.slug as string)
        if (!project) {
          next({ name: 'not-found' })
        } else {
          next()
        }
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Restaurer la position précédente lors d'un retour arrière ou refresh
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 100) // Petit délai pour s'assurer que le contenu est chargé
      })
    }

    // Si c'est une navigation vers un hash/anchor
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Pour les nouvelles navigations
    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
})

// Attendre que la page soit chargée avant de démarrer la transition
router.beforeEach(async (to, from, next) => {
  if (!from.name) { // Si c'est un accès direct
    document.documentElement.style.backgroundColor = 'secondary'
    next()
    const transitionStore = useTransitionStore()
    await transitionStore.pageEnter()
  } else {
    next()
  }
})

export default router