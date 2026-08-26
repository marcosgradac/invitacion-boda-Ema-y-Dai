import CardGiftcardRounded from '@mui/icons-material/CardGiftcardRounded'
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded'
import { Button } from '@mui/material'
import { wedding } from '../../config/wedding.config'
import { Reveal } from '../common/Reveal'
export function GiftsSection({onCopy}:{onCopy:()=>void}){const copy=async()=>{await navigator.clipboard.writeText(wedding.gifts.alias);onCopy()};return <section className="gift-editorial"><div className="gold-glow"/><Reveal><CardGiftcardRounded className="line-gift"/><p className="dark-index">04 / Regalos</p><h2>El mejor regalo es<br/><em>compartir este día con vos</em></h2><p>Si además deseás acompañarnos con un presente, dejamos nuestros datos.</p><div className="bank-panel"><small>ALIAS</small><strong>{wedding.gifts.alias}</strong><span>{wedding.gifts.holder}</span><i>{wedding.gifts.bank}</i><Button onClick={copy} startIcon={<ContentCopyRounded/>}>Copiar alias</Button></div></Reveal></section>}
