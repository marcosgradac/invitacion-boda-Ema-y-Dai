import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) { const reduce = useReducedMotion(); return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .65 }}>{children}</motion.div> }
