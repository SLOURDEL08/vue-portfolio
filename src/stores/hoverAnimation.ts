// src/directives/hoverSlide.ts
import gsap from 'gsap'

export const vHoverSlide = {
  mounted(el: HTMLElement) {
    // Ne pas appliquer l'animation si l'élément contient un SVG
    if (el.tagName === 'SVG' || el.querySelector('svg')) {
      return
    }

    // Créer un conteneur avec overflow hidden
    const container = document.createElement('div')
    container.style.overflow = 'hidden'
    container.style.height = 'auto'
    container.style.display = 'block'
    
    // Placer l'élément dans le conteneur
    el.parentNode?.insertBefore(container, el)
    container.appendChild(el)
    
    // Styles de base pour l'élément
    gsap.set(el, {
      position: 'relative',
      y: '0',
      padding: '12px 0',
    })

    // Animation
    container.addEventListener('mouseenter', () => {
      gsap.to(el, {
        y: '-100%',
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(el, { y: '100%' })
          gsap.to(el, {
            y: '0',
            duration: 0.1,
            ease: 'power2.out'
          })
        }
      })
    })
  }
}