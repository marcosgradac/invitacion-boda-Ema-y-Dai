import cinematicHero from '../assets/images/cinematic-hero.webp'
import storyMain from '../assets/images/ema1-enhanced.webp'
import storyDetail from '../assets/images/ema2-enhanced.webp'
import galleryCenter from '../assets/images/day1-enhanced.webp'
import galleryDetail from '../assets/images/day2-enhanced.webp'
import galleryPortrait from '../assets/images/day3-enhanced.webp'
import galleryStory from '../assets/images/day4-enhanced.webp'
import galleryTopRight from '../assets/images/day5.jpeg'
import type { WeddingConfig } from '../types/wedding'

export const wedding: WeddingConfig = {
  couple: { names: 'Emanuel & Daiana', first: 'Emanuel', second: 'Daiana', initials: 'E & D' },
  date: '2026-09-12T13:00:00-03:00', displayDate: '12 · 09 · 2026', shortDate: '12 SEP 2026',
  intro: { loader: 'Una historia está por comenzar', envelope: 'Tenemos una invitación para vos' },
  story: { copy: 'La vida nos encontró sin avisar y, desde entonces, elegimos caminar juntos. Hoy abrimos un nuevo capítulo y queremos que seas parte de él.', quote: 'Donde sea, pero con vos.', moments: [{ year: '2015', title: 'Nos encontramos' }, { year: '2015', title: 'Dijimos que sí' }, { year: '2026', title: 'Comienza para siempre' }] },
  event: { dateLabel: '12 de septiembre', gatheringTime: '12:30 hs', ceremonyTime: '13:00 hs', mealTime: '13:30 hs', toastPrice: '$10.000 por persona', toastIncludes: 'Incluye vajilla.', childrenNote: 'Los menores de 10 años no pagan.' },
  location: { name: 'Salón Orión', address: 'Caseros 461', province: 'Río Tercero, Córdoba', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+Ori%C3%B3n%2C+Caseros+461%2C+R%C3%ADo+Tercero%2C+C%C3%B3rdoba', mapEmbedUrl: 'https://www.google.com/maps?q=Sal%C3%B3n+Ori%C3%B3n%2C+Caseros+461%2C+R%C3%ADo+Tercero%2C+C%C3%B3rdoba&output=embed' },
  gifts: { alias: 'emanuelvanegas.ok', holder: 'Emanuel & Daiana', bank: 'Brubank' },
  whatsapp: { number: '5493571550683', deadline: '5 de septiembre', message: '¡Hola! Quiero confirmar mi asistencia al casamiento de Ema y Dai. Mi nombre es: ' },
  musicUrl: '',
  images: { hero: cinematicHero, storyMain, storyDetail, gallery: [{ src: galleryPortrait, label: 'Retrato principal' }, { src: galleryTopRight, label: 'Un instante' }, { src: galleryCenter, label: 'Para siempre' }, { src: galleryDetail, label: 'Un detalle' }, { src: galleryStory, label: 'Nuestra historia' }] },
}
