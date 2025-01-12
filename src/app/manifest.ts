import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Boldo By Wisdom Abah',
    short_name: 'Boldo',
    description: 'Boldo landing page by Wisdom Abah',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#0A2640',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}