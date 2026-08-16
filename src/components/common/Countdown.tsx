import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../../config/wedding'
const remaining = () => { const diff = Math.max(0, new Date(wedding.date).getTime() - Date.now()); return { Días: Math.floor(diff/86400000), Horas: Math.floor(diff/3600000)%24, Min: Math.floor(diff/60000)%60, Seg: Math.floor(diff/1000)%60 } }
export function Countdown() { const [time, setTime] = useState(remaining); useEffect(() => { const id = window.setInterval(() => setTime(remaining()), 1000); return () => window.clearInterval(id) }, []); return <div className="countdown" aria-label="Cuenta regresiva">{Object.entries(time).map(([label,value]) => <div key={label}><AnimatePresence mode="popLayout"><motion.strong key={value} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>{String(value).padStart(2,'0')}</motion.strong></AnimatePresence><span>{label}</span></div>)}</div> }
