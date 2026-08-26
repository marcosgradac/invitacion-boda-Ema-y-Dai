import { useEffect, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { LoadingScreen } from './components/intro/LoadingScreen'
import { EnvelopeOpening } from './components/intro/EnvelopeOpening'
import { HeroSection } from './components/sections/HeroSection'
import { StorySection } from './components/sections/StorySection'
import { EncounterInfoSection } from './components/sections/EncounterInfoSection'
import { EventSection } from './components/sections/EventSection'
import { WhatsAppSection } from './components/sections/WhatsAppSection'
import { GiftsSection } from './components/sections/GiftsSection'
import { GallerySection } from './components/sections/GallerySection'
import { Footer } from './components/sections/Footer'
import { MusicButton } from './components/common/MusicButton'
import './styles/luxury.css'
import './styles/overrides.css'
import './styles/story-adjustments.css'

type Stage = 'loading' | 'envelope' | 'invitation'

export default function App() {
  const [stage, setStage] = useState<Stage>('loading')
  const [copied, setCopied] = useState(false)
  useEffect(() => { const timer = window.setTimeout(() => setStage('envelope'), 1900); return () => window.clearTimeout(timer) }, [])
  useEffect(() => { if(stage==='invitation') window.scrollTo({top:0,left:0,behavior:'instant'}) }, [stage])
  return <main className="app-shell"><AnimatePresence mode="wait">
    {stage==='loading'&&<LoadingScreen key="loading"/>}
    {stage==='envelope'&&<EnvelopeOpening key="envelope" onOpen={()=>setStage('invitation')}/>} 
    {stage==='invitation'&&<motion.article key="invite"><HeroSection/><StorySection/><GallerySection/><EncounterInfoSection/><EventSection/><GiftsSection onCopy={()=>setCopied(true)}/><WhatsAppSection/><Footer/><MusicButton/></motion.article>}
  </AnimatePresence><Snackbar open={copied} autoHideDuration={2200} onClose={()=>setCopied(false)}><Alert severity="success" variant="filled">Alias copiado</Alert></Snackbar></main>
}
