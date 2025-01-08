// src/stores/transitionStore.ts
import { defineStore } from 'pinia'
import gsap from 'gsap'
import { useMenuStore } from './menuStore'

export const useTransitionStore = defineStore('transition', {
  state: () => ({
    isTransitioning: false
  }),

  actions: {
    async pageEnter() {
      const menuStore = useMenuStore()
      
      if (menuStore.isMenuOpen) return
      this.isTransitioning = true

      // Créer le conteneur de transition
      const transitionContainer = document.createElement('div')
      transitionContainer.className = 'fixed top-0 left-0 w-full h-screen z-[90] pointer-events-none'
      document.body.appendChild(transitionContainer)

      // Créer les bandes avec les mêmes classes que dans le menu
      const stripes = Array.from({ length: 5 }).map((_, i) => {
        const stripe = document.createElement('div')
        stripe.className = 'absolute top-0 w-[20%] h-full bg-secondary'
        stripe.style.left = `${i * 20}%`
        stripe.style.transform = 'translateY(0)' // Position initiale
        transitionContainer.appendChild(stripe)
        return stripe
      })

      // Animation identique à la fermeture du menu
      const tl = gsap.timeline({
        onComplete: () => {
          transitionContainer.remove()
          this.isTransitioning = false
        }
      })

      await tl
        .to(stripes, {
          yPercent: -100,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut"
        })
    }
  }
})