import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import botanical from '../../assets/florals/dondevalaflor.jpeg'
import { wedding } from '../../config/wedding.config'
import { Reveal } from '../common/Reveal'

export function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const mainY = useTransform(scrollYProgress, [0, 1], [35, -35])
  const detailY = useTransform(scrollYProgress, [0, 1], [-15, 20])

  return <section ref={ref} className="story-editorial">
    <div className="torn-top" />
    <Reveal>
      <p className="section-index">01 / Nuestra historia</p>
      <h2>Todo comenzó<br/><em>con un encuentro</em></h2>
      <p className="story-copy">{wedding.story.copy}</p>
    </Reveal>
    <div className="story-collage">
      <motion.div className="organic-photo main-photo" style={{ y: mainY }}>
        {wedding.images.storyMain
          ? <img src={wedding.images.storyMain} alt="Emanuel y Daiana junto a un amigo" />
          : <span>Agregar<br/>fotografía principal<small>images.storyMain</small></span>}
      </motion.div>
      <motion.div className="organic-photo detail-photo" style={{ y: detailY }}>
        {wedding.images.storyDetail
          ? <img src={wedding.images.storyDetail} alt="Emanuel y Daiana" />
          : <span>Agregar fotografía<small>images.storyDetail</small></span>}
      </motion.div>
      <img className="story-branch" src={botanical} alt="" />
    </div>
    <p className="story-quote">{wedding.story.quote}</p>
    <div className="love-timeline">{wedding.story.moments.map(moment => <div key={`${moment.year}-${moment.title}`}><b>{moment.year}</b><i/><span>{moment.title}</span></div>)}</div>
  </section>
}
