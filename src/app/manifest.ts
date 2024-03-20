import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CroQuad',
    short_name: 'CroQuad',
    description: 'CroQuad Hvar official quadbike rental website',
    start_url: '/',
    scope:'/',
    lang:'en',
    categories: ['quad bikes', 'internet', 'renting', 'hvar', 'croquad'],
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/src/app/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src:'/public/favicon-16x16.png',
        sizes:'any',
        type: 'image/x-icon'
      },
      {
        src:'/public/favicon-32x32.png',
        sizes:'any',
        type: 'image/x-icon'
      },

      {
        src:'/public/apple-touch-icon.png',
        sizes:'any',
        type: 'image/x-icon'
      },
      {
        src:'/public/android-chrome-512x512.png',
        sizes:'any',
        type: 'image/x-icon'
      },
    ],
  }
}