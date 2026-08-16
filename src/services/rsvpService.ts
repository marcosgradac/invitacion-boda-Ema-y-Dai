import type { RsvpData } from '../types/wedding'
export async function submitRsvp(data: RsvpData): Promise<void> { await new Promise(resolve => window.setTimeout(resolve, 1100)); localStorage.setItem('wedding-rsvp-demo', JSON.stringify(data)) }
