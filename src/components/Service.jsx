import { Check, Code2, Database, LayoutGrid, Smartphone } from 'lucide-react'
import Container from './ui/Container'
import Reveal from './ui/Reveal'

const services = [
  {
    icon: Code2,
    title: 'Frontend development',
    description: 'Responsive web interfaces that are clean and easy to use.',
    features: [
      'React components',
      'Tailwind CSS styling',
      'Responsive layouts',
    ],
  },
  {
    icon: Database,
    title: 'Backend and database',
    description: 'Server logic and structured databases behind web apps.',
    features: [
      'Laravel and CodeIgniter',
      'MySQL database design',
      'Frontend and backend integration',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile app development',
    description: 'Cross-platform mobile apps from a single codebase.',
    features: [
      'React Native',
      'Flutter',
      'Mobile-first UI',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'UI design and documentation',
    description: 'Planning the product before writing code.',
    features: [
      'Wireframes in Figma',
      'Flowcharts',
      'Requirement documents (SRS)',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 md:py-20">
      <Container>
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <Reveal>
            <span className="inline-block rounded-full border border-line bg-sand/50 px-3.5 py-1 text-xs font-medium text-muted">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              What I can do
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-2 text-sm text-muted md:text-base">
              The kind of work I can take on in your team.
            </p>
          </Reveal>
        </div>

        {/* Services Grid (1 kolom di Mobile, 2 kolom di Tablet/Desktop) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((s, index) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={0.1 * index}>
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-line/70 bg-surface/80 p-6 md:p-8">
                  <div>
                    {/* Icon + Title & Description */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sand/80 text-ink md:h-12 md:w-12">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold tracking-tight md:text-xl lg:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">
                          {s.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider Line */}
                    <div className="my-5 border-t border-line/60" />

                    {/* Features Checklist */}
                    <ul className="space-y-2.5">
                      {s.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-xs text-ink/90 md:text-sm">
                          <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full border border-line text-muted md:h-5 md:w-5">
                            <Check size={11} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}