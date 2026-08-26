import { motion } from 'framer-motion'
import { wedding } from '../../config/wedding.config'

export function LoadingScreen(){return <motion.section className="cinema-loader" exit={{opacity:0,filter:'blur(14px)',scale:1.04}} transition={{duration:.7}}><div className="loader-light"/><div className="loader-dust">{Array.from({length:12},(_,i)=><i key={i}/>)}</div><motion.div className="drawn-monogram" initial={{clipPath:'inset(0 100% 0 0)'}} animate={{clipPath:'inset(0 0% 0 0)'}} transition={{duration:1.35,ease:'easeInOut'}}>{wedding.couple.initials}</motion.div><p>{wedding.intro.loader}</p><div className="cinema-progress"><motion.i initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1.8,ease:'easeInOut'}}/></div></motion.section>}
