// src/stores/menuStore.ts
import { defineStore } from 'pinia'
import gsap from 'gsap'

interface MenuItem {
  name: string
  path: string
}

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isMenuOpen: false,
    menuItems: [
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ] as MenuItem[]
  }),

  actions: {
    initializeMenuLinks() {
      const menuLinks = document.querySelectorAll('.menu-links a')
      const closeButton = document.querySelector('.close-button')
      gsap.set(menuLinks, { opacity: 0, y: 20 })
      gsap.set(closeButton, { 
        opacity: 0,
        scale: 0,
        rotation: -180
      })
    },

    async toggleMenu() {
      const stripes = document.querySelectorAll('.bg-black')
      const menuLinks = document.querySelectorAll('.menu-links a')
      const closeButton = document.querySelector('.close-button')
      
      if (!this.isMenuOpen) {
        // Animation d'ouverture
        gsap.set(menuLinks, { opacity: 0, y: 20 })

        // Anime les bandes noires
        await gsap.to(stripes, {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut"
        })

        // Anime le bouton close
        gsap.to(closeButton, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        })

        // Anime les liens du menu
        gsap.to(menuLinks, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        })
      } else {
        // Animation de fermeture
        gsap.to(closeButton, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 0.3,
          ease: "power2.in"
        })

        gsap.to(menuLinks, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.in"
        })

        await gsap.to(stripes, {
          yPercent: -100,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut"
        })
      }
      
      this.isMenuOpen = !this.isMenuOpen
    },

    handleNavigation() {
      setTimeout(() => {
        this.toggleMenu()
      }, 300)
    }
  }
})