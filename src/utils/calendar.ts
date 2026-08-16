import { wedding } from '../config/wedding'
const formatIcs = (date: Date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
export function downloadCalendarEvent() {
  const start = new Date(wedding.date); const end = new Date(start.getTime() + 7 * 60 * 60 * 1000)
  const body = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Sofia y Marcos//Boda//ES','BEGIN:VEVENT',`DTSTART:${formatIcs(start)}`,`DTEND:${formatIcs(end)}`,`SUMMARY:Boda de ${wedding.couple.names}`,`LOCATION:${wedding.ceremony.venue}, ${wedding.ceremony.province}`,'DESCRIPTION:¡Nos casamos! Esperamos compartir este día con vos.','END:VEVENT','END:VCALENDAR'].join('\r\n')
  const url = URL.createObjectURL(new Blob([body], { type: 'text/calendar;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = 'boda-sofia-marcos.ics'; link.click(); URL.revokeObjectURL(url)
}
