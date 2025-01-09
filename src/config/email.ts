import emailjs from '@emailjs/browser'

export const emailConfig = {
  serviceId: 'service_4nv83gn',
  templateId: 'template_aftgpjj',
  publicKey: 'tZdelOh6myVpeQUbp'
}

// Initialiser EmailJS
emailjs.init(emailConfig.publicKey)