import { Tooltip } from '@mui/material'
import botanical from '../../assets/florals/editorial-botanical.webp'
import { wedding } from '../../config/wedding.config'
import { Reveal } from '../common/Reveal'
export function DressCodeSection(){return <section className="dress-editorial"><div className="fabric-light"/><img src={botanical} alt=""/><Reveal><p className="section-index">03 / Dress code</p><p className="fashion-label">Código de vestimenta</p><h2>{wedding.dressCode.title}</h2><p className="fashion-copy">Una noche para vestirnos de celebración. Elegí tonos profundos, naturales y cálidos.</p><div className="named-palette" aria-label="Colores sugeridos">{wedding.dressCode.colors.map(color=><Tooltip arrow title={color.name} key={color.name}><button aria-label={color.name} style={{backgroundColor:color.value}}><span>{color.name}</span></button></Tooltip>)}</div><p className="reserved-note">{wedding.dressCode.note}</p></Reveal></section>}
