import WhatsApp from '@mui/icons-material/WhatsApp'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { wedding } from '../../config/wedding.config'
import { Reveal } from '../common/Reveal'

export function WhatsAppSection() {
  const href = `https://wa.me/${wedding.whatsapp.number}?text=${encodeURIComponent(wedding.whatsapp.message)}`
  return <section className="whatsapp-rsvp" id="whatsapp-rsvp" aria-labelledby="whatsapp-title">
    <div className="whatsapp-glow"/>
    <Reveal>
      <p className="dark-index">05 / Confirmación</p>
      <h2 id="whatsapp-title">Confirmá tu<br/><em>asistencia</em></h2>
      <p>Nos encantaría compartir este día con vos. Para reservar tu lugar, confirmá tu asistencia respondiendo por WhatsApp.</p>
      <div className="whatsapp-deadline">Confirmar antes del {wedding.whatsapp.deadline}</div>
      <motion.div whileTap={{ scale: .98 }}>
        <Button className="whatsapp-button" href={href} target="_blank" rel="noopener noreferrer" startIcon={<WhatsApp/>} fullWidth>
          Confirmar por WhatsApp
        </Button>
      </motion.div>
      <small className="whatsapp-help">Al tocar el botón se abrirá WhatsApp con el mensaje preparado.</small>
    </Reveal>
  </section>
}
