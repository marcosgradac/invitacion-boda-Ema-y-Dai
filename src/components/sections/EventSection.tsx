import MapRounded from '@mui/icons-material/MapRounded'
import { Button } from '@mui/material'
import { Reveal } from '../common/Reveal'
import { wedding } from '../../config/wedding.config'
export function EventSection(){return <section className="event-editorial location-section"><Reveal><p className="dark-index">03 / Ubicación</p><h2>{wedding.location.name}</h2><p className="location-address">{wedding.location.address}<br/><span>{wedding.location.province}</span></p><div className="map-mask map-rect"><iframe title={`Mapa de ${wedding.location.name}`} loading="lazy" src={wedding.location.mapEmbedUrl} allowFullScreen/></div><Button className="maps-button" href={wedding.location.mapsUrl} target="_blank" rel="noopener noreferrer" startIcon={<MapRounded/>} fullWidth>Abrir ubicación en Google Maps</Button></Reveal></section>}
