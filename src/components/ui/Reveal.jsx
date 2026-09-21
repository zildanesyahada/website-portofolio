import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ as = 'div', delay = 0, y = 20, className = '', children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}