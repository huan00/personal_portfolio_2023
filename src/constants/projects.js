import {
  devise,
  socialMedia,
  fridayLaundry,
  smartTrading
} from '../assets/images/projects/export'

export const projects = [
  {
    name: 'devise',
    imgUrl: devise,
    desc: 'Free lance project, refresh start up letsdevise website. Develope and host',
    tech: ['react', 'CSS'],
    url: 'https://letsdevise.co'
  },
  {
    name: 'social media',
    imgUrl: socialMedia,
    desc: 'MERN Stack application. Web app for posting image and short desc. fully auth and google oauth support.',
    tech: ['react', 'CSS', 'MongoDB', 'Node.js', 'Express', 'JWT Auth'],
    url: 'https://hzmedia.netlify.app/'
  },
  {
    name: 'ecommerce',
    imgUrl: fridayLaundry,
    desc: 'Demo e-commerce site built with React, Redux, and styled with CSS. Fully working auth with JWT.',
    tech: ['react', 'redux', 'postgres', 'node.js', 'express', 'JWT Auth'],
    url: 'https://hzecommerce.netlify.app/'
  },
  {
    name: 'smart trading',
    imgUrl: smartTrading,
    desc: 'Simply trading demo site build with React and styled with CSS.',
    tech: ['react', 'CSS'],
    url: 'https://smarttrading.netlify.app/'
  }
]
