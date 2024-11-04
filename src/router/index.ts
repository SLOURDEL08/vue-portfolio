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
  ]
})

// Attendre que la page soit chargée avant de démarrer la transition
router.beforeEach(async (to, from, next) => {
  if (!from.name) { // Si c'est un accès direct
    document.documentElement.style.backgroundColor = 'secondary' // Fond noir pendant le chargement
    next()
    const transitionStore = useTransitionStore()
    await transitionStore.pageEnter()
  } else {
    next()
  }
})

export default router