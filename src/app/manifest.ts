import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CroQuad',
    short_name: 'CroQuad',
    description: 'CroQuad Hvar official quadbike rental website',
    start_url: '/',
    scope:'/',
    lang:'en',
    categories: ['quad bikes', 'internet', 'renting', 'hvar', 'croquad', 'cro quad', 'tours', 'rent', 'adventures', 'safari', 'lunch', 'explore', 'nature', 'ATV', 'quad', 'Stari Grad', 'Hvar', 'quad hvar', 'hvar quadbikes', 'rent a quad hvar'],
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src:'/favicon-16x16.png',
        sizes:'any',
        type: 'image/png'
      },
      {
        src:'/favicon-32x32.png',
        sizes:'any',
        type: 'image/png'
      },
      {
        src:'/apple-touch-icon.png',
        sizes:'any',
        type: 'image/png'
      },
      {
        src:'/android-chrome-512x512.png',
        sizes:'any',
        type: 'image/png'
      },
    ],
  }
}
