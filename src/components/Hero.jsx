import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import Button from './ui/Button'
import photo from '../assets/photo.png'

const stats = [
  { value: '3+', unit: 'Projects', caption: 'Completed works' },
  { value: '10+', unit: 'Technologies', caption: 'Modern tech stack' },
  { value: '8 yrs', unit: 'Learning', caption: 'Learning to code' },
]

const strip = [
  'React', 'Laravel', 'MySQL', 'Tailwind CSS', 'React Native',
  'Flutter', 'PHP', 'Git', 'Figma',
]

function StatusCard({ className = '' }) {
  return (
    <a
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
    </a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-[1120px] px-5 pb-14 pt-4 md:px-6 lg:pt-8">
      <div className="relative rounded-[28px] border border-line bg-surface lg:min-h-[520px]">

        {/* Foto mobile dan tablet: kepala tetap di dalam panel */}
        <div className="relative lg:hidden">
          <div className="h-[340px] overflow-hidden rounded-t-[28px] bg-linear-to-b from-sand to-surface md:h-[380px]">
            <img
              src={photo}
              alt="Zildane Syahada"
              className="mx-auto mt-6 block h-[520px] w-auto max-w-none md:h-[560px]"
            />
          </div>
          <StatusCard className="absolute inset-x-4 -bottom-8 flex md:inset-x-auto md:left-1/2 md:w-[400px] md:-translate-x-1/2" />
        </div>

        {/* Foto desktop: di dalam kartu, dipotong di bagian bawah */}
        <div className="absolute inset-y-0 right-0 hidden w-[44%] justify-center overflow-hidden rounded-r-[28px] lg:flex">
          <img
            src={photo}
            alt="Zildane Syahada"
            className="mt-10 h-[760px] w-auto max-w-none self-start"
          />
        </div>
        <StatusCard className="absolute bottom-8 right-8 z-10 hidden w-[300px] lg:flex" />

        {/* Teks */}
        <div className="relative z-10 p-6 pt-14 md:p-10 md:pt-16 lg:max-w-[600px] lg:p-16">
          <p className="text-[15px] font-medium text-muted">Hello I'm Zildane Syahada</p>

          <h1 className="mt-3.5 font-serif text-[32px] font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-[56px]">
            I build web apps
            <span className="block font-medium italic text-clay">end to end.</span>
          </h1>

          <p className="mt-5 max-w-[440px] leading-relaxed text-muted lg:text-[17px]">
            Fullstack web developer working with React, Laravel, and MySQL.
            Information Systems student who builds clean products that actually run.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Button href="#projects" className="w-full sm:w-auto">
              View projects <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" href="/cv.pdf" download className="w-full sm:w-auto">
              Download CV <Download size={16} />
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-5 border-t border-line pt-6 lg:max-w-[480px] lg:gap-x-10">
            {stats.map((s) => (
              <div key={s.unit}>
                <p className="font-serif text-[28px] leading-tight lg:text-[32px]">
                  {s.value}{' '}
                  <span className="font-sans text-xs text-muted">/ {s.unit}</span>
                </p>
                <p className="mt-0.5 text-[13px] text-muted">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}