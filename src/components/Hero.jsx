import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import CountUp from './ui/CountUp'
import photo from '../assets/photo.png'

const stats = [
  { to: 3, suffix: '+', label: 'Projects' },
  { to: 10, suffix: '+', label: 'Technologies' },
  { to: 8, suffix: ' yrs', label: 'Learning to code' },
]

const photoMotion = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
}

function StatusCard({ className = '' }) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      href="#contact"
      className={`items-center justify-between gap-4 rounded-2xl border border-beige/20 bg-[rgba(59,42,30,0.72)] p-4 pl-5 text-beige backdrop-blur-md ${className}`}
    >
      <div>
        <strong className="block text-sm font-medium">Ready to join your team</strong>
        <p className="mt-1 text-[13px] leading-snug text-beige/80">
          Looking for my first role as a fullstack developer.
        </p>
      </div>
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-beige text-ink">
        <ArrowUpRight size={18} />
      </span>
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pb-4 pt-4 lg:pt-8">
      <Container>
        <div className="relative rounded-[28px] border border-line bg-surface lg:min-h-[520px] 2xl:min-h-[600px]">

          {/* Foto mobile dan tablet */}
          <div className="relative lg:hidden">
            <div className="h-[340px] overflow-hidden rounded-t-[28px] bg-linear-to-b from-sand to-surface md:h-[380px]">
              <motion.img
                {...photoMotion}
                src={photo}
                alt="Zildane Syahada"
                className="mx-auto mt-6 block h-[520px] w-auto max-w-none md:h-[560px]"
              />
            </div>
            <StatusCard className="absolute inset-x-4 -bottom-8 flex md:inset-x-auto md:left-1/2 md:w-[400px] md:-translate-x-1/2" />
          </div>

          {/* Foto desktop */}
          <div className="absolute inset-y-0 right-0 hidden w-[44%] justify-center overflow-hidden rounded-r-[28px] lg:flex 2xl:w-[40%]">
            <motion.img
              {...photoMotion}
              src={photo}
              alt="Zildane Syahada"
              className="mt-10 h-[760px] w-auto max-w-none self-start 2xl:h-[900px]"
            />
          </div>
          <StatusCard className="absolute bottom-8 right-8 z-10 hidden w-[300px] lg:flex 2xl:w-[340px]" />

          {/* Teks */}
          <div className="relative z-10 p-6 pt-14 md:p-10 md:pt-16 lg:max-w-[600px] lg:p-16 2xl:max-w-[720px]">
            <Reveal as="p" delay={0.05} className="text-[15px] font-medium text-muted">
              Hello I&apos;m Zildane Syahada
            </Reveal>

            <Reveal
              as="h1"
              delay={0.15}
              className="mt-3.5 font-serif text-[32px] font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-[56px] 2xl:text-[68px]"
            >
              I build web apps
              <span className="block font-medium italic text-clay">end to end.</span>
            </Reveal>

            <Reveal
              as="p"
              delay={0.25}
              className="mt-5 max-w-[440px] leading-relaxed text-muted lg:text-[17px] 2xl:text-lg"
            >
              Fullstack web developer working with React, Laravel, and MySQL.
              Information Systems student who builds clean products that actually run.
            </Reveal>

            <Reveal delay={0.35} className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Button href="#projects" className="w-full sm:w-auto">
                View projects <ArrowRight size={16} />
              </Button>
              <Button
                variant="secondary"
                href="/cv.pdf"
                download="Zildane_Syahada_CV.pdf"
                className="w-full sm:w-auto"
              >
                Download CV <Download size={16} />
              </Button>
            </Reveal>

            <Reveal
              delay={0.45}
              className="mt-9 flex flex-wrap gap-x-8 gap-y-5 border-t border-line pt-6 lg:max-w-[480px] lg:gap-x-10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-[28px] leading-tight lg:text-[32px]">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}