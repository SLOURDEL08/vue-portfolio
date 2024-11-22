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
      beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        const project = getProjectBySlug(to.params.slug as string)
        if (!project) {
          next({ name: 'not-found' })  // Redirect if project is not found
        } else {
          next()  // Proceed with navigation
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

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
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
