import AccessTimeRounded from '@mui/icons-material/AccessTimeRounded'
import LocalBarRounded from '@mui/icons-material/LocalBarRounded'
import RestaurantRounded from '@mui/icons-material/RestaurantRounded'
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded'
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { Reveal } from '../common/Reveal'
import { wedding } from '../../config/wedding'

const itinerary=[
  {time:'16:40',title:'Llegada',text:'Recepción de invitados',icon:<AccessTimeRounded/>},
  {time:wedding.ceremony.time,title:'Ceremonia',text:'El momento del sí',icon:<AutoAwesomeRounded/>},
  {time:wedding.reception.time,title:'Celebración',text:'Brindis y bienvenida',icon:<LocalBarRounded/>},
  {time:'20:30',title:'Cena & fiesta',text:'A celebrar hasta el final',icon:<RestaurantRounded/>},
]
export function GuestInfoSection(){return <><section className="section itinerary"><Reveal><p className="kicker">Nuestro día</p><h2>Un recorrido para recordar</h2><div className="timeline">{itinerary.map((item,i)=><div className="timeline-item" key={item.title}><div className="timeline-icon">{item.icon}</div><div><span>{item.time}</span><h3>{item.title}</h3><p>{item.text}</p></div>{i<itinerary.length-1&&<i/>}</div>)}</div></Reveal></section><section className="section essentials"><Reveal><p className="kicker">Todo lo que necesitás saber</p><h2>Antes de venir</h2><p className="essentials-intro">Pequeños detalles para disfrutar el día desde el primer momento.</p><div className="note-list">{wedding.notes.map((note,index)=><Accordion key={note.title} disableGutters elevation={0}><AccordionSummary expandIcon={<ExpandMoreRounded/>} aria-controls={`note-${index}`}><span>0{index+1}</span><strong>{note.title}</strong></AccordionSummary><AccordionDetails id={`note-${index}`}>{note.text}</AccordionDetails></Accordion>)}</div><div className="deadline-card"><span>Confirmaciones hasta</span><strong>{wedding.rsvpDeadline}</strong><p>Así podemos preparar tu lugar con todo el cariño.</p></div></Reveal></section></>}
