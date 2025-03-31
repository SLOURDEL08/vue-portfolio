import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
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
      path: '/projets',
      name: 'projets-liste',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/projets/:slug',
      name: 'projets',
      component: () => import('../views/ProjectDetail.vue'),
      props: true,
      beforeEnter: (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
        const project = getProjectBySlug(to.params.slug as string)
        if (!project) {
          next({ name: 'not-found' })
        } else {
          next()
        }
      }
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach(async (_to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (!from.name) { 
    document.documentElement.style.backgroundColor = 'secondary'
    next()
    const transitionStore = useTransitionStore()
    await transitionStore.pageEnter()
  } else {
    next()
  }
})

export default router