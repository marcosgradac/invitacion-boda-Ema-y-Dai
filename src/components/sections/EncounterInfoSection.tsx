import CelebrationRounded from '@mui/icons-material/CelebrationRounded'
import ChurchRounded from '@mui/icons-material/ChurchRounded'
import RestaurantRounded from '@mui/icons-material/RestaurantRounded'
import { motion } from 'framer-motion'
import { wedding } from '../../config/wedding.config'
import { Reveal } from '../common/Reveal'

const moments = [
  { time: wedding.event.gatheringTime, title: 'Encuentro a la canasta', icon: <CelebrationRounded /> },
  { time: wedding.event.ceremonyTime, title: 'Ceremonia', icon: <ChurchRounded /> },
  { time: wedding.event.mealTime, title: 'Comida', icon: <RestaurantRounded /> },
]

export function EncounterInfoSection() {
  return <section className="encounter-info" aria-labelledby="encounter-title">
    <Reveal>
      <p className="section-index">02 / Nuestro encuentro</p>
      <span className="encounter-date">{wedding.event.dateLabel}</span>
      <h2 id="encounter-title">Información<br/><em>del encuentro</em></h2>
      <div className="encounter-moments">
        {moments.map((moment, index) => <div className="encounter-moment" key={moment.title}>
          <div className="encounter-icon">{moment.icon}</div>
          <motion.i initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: .65, delay: index * .12 }}/>
          <div><strong>{moment.time}</strong><span>{moment.title}</span></div>
        </div>)}
      </div>
      <div className="toast-card">
        <small>Valor del brindis</small>
        <strong>{wedding.event.toastPrice}</strong>
        <span>{wedding.event.toastIncludes}</span>
        <div className="children-note"><b>Importante</b><span>{wedding.event.childrenNote}</span></div>
      </div>
    </Reveal>
  </section>
}
