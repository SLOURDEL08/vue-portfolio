// src/directives/hoverSlide.ts
import gsap from 'gsap'

// Directive texte (inchangée)
export const vHoverSlide = {
  mounted(el: HTMLElement) {
    if (el.tagName === 'SVG' || el.querySelector('svg')) {
      return
    }

    const container = document.createElement('div')
    container.style.overflow = 'hidden'
    container.style.height = 'auto'
    container.style.display = 'block'
    
    el.parentNode?.insertBefore(container, el)
    container.appendChild(el)
    
    gsap.set(el, {
      position: 'relative',
      y: '0',
      padding: '12px 0',
    })

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

// Nouvelle directive pour l'animation diagonale
export const vHoverDiagonal = {
  mounted(el: HTMLElement) {
    const image = el.querySelector('img')
    if (!image) return

    const animateImage = () => {
      gsap.to(image, {
        x: '100%',
        y: '100%',
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(image, { 
            x: '-100%',
            y: '-100%'
          })
          gsap.to(image, {
            x: 0,
            y: 0,
            duration: 0.1,
            ease: 'power2.out'
          })
        }
      })
    }

    let isAnimating = false

    // Appliquer l'animation sur tout le conteneur
    el.addEventListener('mouseenter', () => {
      if (!isAnimating) {
        isAnimating = true
        animateImage()
        setTimeout(() => {
          isAnimating = false
        }, 250)
      }
    })

    el.addEventListener('mouseleave', () => {
      isAnimating = false
    })
  }
}