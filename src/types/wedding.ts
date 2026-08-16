export interface WeddingConfig {
  couple: { names: string; first: string; second: string; initials: string }
  date: string; displayDate: string; shortDate: string
  intro: { loader: string; envelope: string }
  story: { copy: string; quote: string; moments: { year: string; title: string }[] }
  ceremony: { time: string; venue: string; address: string; province: string; mapsUrl: string; mapEmbedUrl: string }
  reception: { time: string; venue: string; address: string }
  dressCode: { title: string; note: string; colors: { name: string; value: string }[] }
  gifts: { alias: string; holder: string; bank?: string }
  rsvpDeadline: string; musicUrl?: string; contactPhone?: string
  notes: { title: string; text: string }[]
  images: { hero?: string; storyMain?: string; storyDetail?: string; gallery: { src?: string; label: string }[] }
}
export interface RsvpData { name: string; attendance: 'yes' | 'no'; guests: number; dietary: string; message: string }
