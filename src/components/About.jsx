import { motion } from 'framer-motion'
import Container from './ui/Container'
import SectionLabel from './ui/SectionLabel.jsx'
import Reveal from './ui/Reveal.jsx'
import { techStack } from '../data/techStack'
import { techIcons } from '../data/techIcons'

// Variants animasi grid & item tech stack
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Jeda 80ms antar ikon (lebih terasa)
      delayChildren: 0.2,    // Tunggu card luar muncul dulu baru ikon bermunculan
    },
  },
}

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

function TechTile({ name }) {
  const { icon: Icon, color } = techIcons[name]

  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      style={{ '--brand': color }}
      className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border-solid border-[0.5px] border-line bg-beige px-2 py-5 transition-colors duration-300 hover:border-ink/60 md:py-6"
    >
      <Icon
        size={30}
        aria-hidden="true"
        className="text-muted/50 transition-all duration-300 group-hover:scale-110 group-hover:text-[color:var(--brand)] [@media(hover:none)]:text-[color:var(--brand)]"
      />
      <span className="text-center text-[12px] leading-tight text-muted transition-colors duration-300 group-hover:text-ink md:text-[13px]">
        {name}
      </span>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-16 pt-6 md:pb-20 md:pt-8 lg:pb-24 lg:pt-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Kolom Kiri: Teks */}
          <div>
            <Reveal delay={0.05}>
              <SectionLabel>About me</SectionLabel>
            </Reveal>

            <Reveal
              as="h2"
              delay={0.15}
              className="mt-5 font-serif text-[30px] font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-[44px]"
            >
              I work across the whole product,
              <span className="mt-2 block font-normal italic text-clay">
                from database to interface.
              </span>
            </Reveal>

            <Reveal delay={0.25} className="mt-6 max-w-[500px] space-y-4 leading-relaxed text-muted 2xl:text-[17px]">
              <p>
                I&apos;m a full-stack developer and Information Systems student based in Bekasi.
                I enjoy bridging the gap between backend structure and user experience from
                designing database schemas to engineering clean, responsive interfaces.
              </p>
              <p>
                My background in software engineering started in vocational school, giving me a
                solid foundation in building practical web and mobile applications with React and
                React Native.
              </p>
            </Reveal>
          </div>

          {/* Kolom Kanan: Card Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-line bg-surface p-6 md:p-8"
          >
            <h3 className="font-semibold">Tech stack</h3>

            <div className="mt-5 space-y-6">
              {techStack.map((g) => (
                <div key={g.group}>
                  <p className="mb-3 text-sm font-medium text-clay">{g.group}</p>
                  
                  <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-3"
                  >
                    {g.items.map((name) => (
                      <TechTile key={name} name={name} />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}