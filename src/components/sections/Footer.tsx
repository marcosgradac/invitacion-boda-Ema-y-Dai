import { wedding } from '../../config/wedding.config'
export function Footer(){return <footer><div className="footer-mark">{wedding.couple.initials}</div><p>Gracias por ser parte de nuestra historia</p><small>{wedding.displayDate}</small><span>❦</span></footer>}
