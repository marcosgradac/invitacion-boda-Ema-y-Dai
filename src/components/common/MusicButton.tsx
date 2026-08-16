import { useRef, useState } from 'react'
import { Fab, Tooltip } from '@mui/material'
import MusicNoteRounded from '@mui/icons-material/MusicNoteRounded'
import MusicOffRounded from '@mui/icons-material/MusicOffRounded'
import { wedding } from '../../config/wedding.config'
export function MusicButton() { const audio = useRef<HTMLAudioElement>(null); const [on,setOn] = useState(false); const [loading,setLoading]=useState(false); if(!wedding.musicUrl)return null; const toggle = async () => { if(!audio.current)return;if(on){audio.current.pause();setOn(false);return}setLoading(true);try{audio.current.volume=.38;await audio.current.play();setOn(true)}finally{setLoading(false)} }; return <><Tooltip title={on?'Pausar música':'Reproducir música'}><span className={`music-wrap ${loading?'loading':''}`}><Fab size="small" onClick={toggle} aria-label={on?'Pausar música':'Reproducir música'}>{on ? <MusicNoteRounded/> : <MusicOffRounded/>}</Fab></span></Tooltip><audio ref={audio} src={wedding.musicUrl} loop preload="metadata" /></> }
