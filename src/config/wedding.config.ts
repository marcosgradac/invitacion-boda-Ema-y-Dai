import cinematicHero from '../assets/images/cinematic-hero.webp'
import type { WeddingConfig } from '../types/wedding'

export const wedding: WeddingConfig = {
  couple: { names: 'Sofía & Marcos', first: 'Sofía', second: 'Marcos', initials: 'S & M' },
  date: '2027-05-24T17:00:00-03:00', displayDate: '24 · 05 · 2027', shortDate: '24 MAY 2027',
  intro: { loader: 'Una historia está por comenzar', envelope: 'Tenemos una invitación para vos' },
  story: { copy: 'La vida nos encontró sin avisar y, desde entonces, elegimos caminar juntos. Hoy abrimos un nuevo capítulo y queremos que seas parte de él.', quote: 'Donde sea, pero con vos.', moments: [{ year: '2021', title: 'Nos encontramos' }, { year: '2024', title: 'Dijimos que sí' }, { year: '2027', title: 'Comienza para siempre' }] },
  ceremony: { time: '17:00', venue: 'Finca Los Olivos', address: 'Dirección a confirmar', province: 'Córdoba', mapsUrl: 'https://maps.google.com/?q=Finca+Los+Olivos+Córdoba', mapEmbedUrl: 'https://www.google.com/maps?q=Finca+Los+Olivos+Córdoba&output=embed' },
  reception: { time: '19:00', venue: 'Salón de la Finca', address: 'En el mismo predio' },
  dressCode: { title: 'Elegante', note: 'Con cariño, reservamos el blanco para la novia.', colors: [{ name: 'Bosque', value: '#34473b' }, { name: 'Borgoña', value: '#672f39' }, { name: 'Arena', value: '#c4aa87' }, { name: 'Noche', value: '#242724' }, { name: 'Oliva', value: '#687259' }] },
  gifts: { alias: 'SOFIAYMARCOS.2027', holder: 'Sofía & Marcos', bank: 'Banco a confirmar' },
  rsvpDeadline: '1 de mayo de 2027', musicUrl: '', contactPhone: '',
  notes: [{ title: 'Llegá con tiempo', text: 'Te recomendamos llegar 20 minutos antes para que podamos comenzar juntos.' }, { title: 'Ceremonia desconectada', text: 'Durante la ceremonia, guardemos los celulares y vivamos el momento.' }, { title: 'Clima de campo', text: 'Habrá espacios al aire libre. Una prenda liviana de abrigo puede acompañarte.' }],
  images: { hero: cinematicHero, gallery: [{ label: 'Retrato principal' }, { label: 'Un instante' }, { label: 'Nuestra historia' }, { label: 'Un detalle' }, { label: 'Para siempre' }] },
}
