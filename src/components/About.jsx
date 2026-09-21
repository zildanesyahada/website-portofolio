import Container from './ui/Container'
import SectionLabel from './ui/SectionLabel.jsx'
import { techStack } from '../data/techStack'
import { techIcons } from '../data/techIcons'

function TechTile({ name }) {
  const { icon: Icon, color } = techIcons[name]

  return (
    <div
      style={{ '--brand': color }}
      className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-beige px-2 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-ink md:py-6"
    >
      <Icon
        size={30}
        aria-hidden="true"
        className="text-muted/50 transition-colors duration-300 group-hover:text-[color:var(--brand)] [@media(hover:none)]:text-[color:var(--brand)]"
      />
      <span className="text-center text-[12px] leading-tight text-muted transition-colors duration-300 group-hover:text-ink md:text-[13px]">
        {name}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Kiri: teks */}
          <div>
            <SectionLabel>About me</SectionLabel>

            <h2 className="mt-5 font-serif text-[30px] font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-[44px]">
              I work across the whole product,
              <span className="block font-medium italic text-clay">
                from database to interface.
              </span>
            </h2>

            <div className="mt-6 max-w-[500px] space-y-4 leading-relaxed text-muted 2xl:text-[17px]">
              <p>
                I&apos;m a fullstack web developer and Information Systems student based in
                Bekasi. I like the whole process: planning with flowcharts and wireframes,
                designing the database, and building the interface people actually use.
              </p>
              <p>
                I started with software engineering in vocational school and built React and
                React Native apps during my internship. Now I&apos;m looking for an internship
                or entry-level role where I can contribute to real products.
              </p>
            </div>
          </div>

          {/* Kanan: kartu tech stack */}
          <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
            <h3 className="font-semibold">Tech stack</h3>

            <div className="mt-5 space-y-6">
              {techStack.map((g) => (
                <div key={g.group}>
                  <p className="mb-3 text-sm font-medium text-clay">{g.group}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {g.items.map((name) => (
                      <TechTile key={name} name={name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}