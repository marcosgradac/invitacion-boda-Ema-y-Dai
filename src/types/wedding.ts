export interface WeddingConfig {
  couple: { names: string; first: string; second: string; initials: string }
  date: string; displayDate: string; shortDate: string
  intro: { loader: string; envelope: string }
  story: { copy: string; quote: string; moments: { year: string; title: string }[] }
  event: { dateLabel: string; gatheringTime: string; ceremonyTime: string; mealTime: string; toastPrice: string; toastIncludes: string; childrenNote: string }
  location: { name: string; address: string; province: string; mapsUrl: string; mapEmbedUrl: string; coordinates?: { lat: number; lng: number } }
  gifts: { alias: string; holder: string; bank?: string }
  whatsapp: { number: string; deadline: string; message: string }
  musicUrl?: string
  images: { hero?: string; storyMain?: string; storyDetail?: string; gallery: { src?: string; label: string }[] }
}
