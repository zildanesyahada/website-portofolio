import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Container from './ui/Container'
import SectionLabel from './ui/SectionLabel.jsx'
import Reveal from './ui/Reveal.jsx'
import { projectsData } from '../data/projects'
import { techIcons } from '../data/techIcons'

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

function ProjectCard({ project }) {
  const GithubIcon = techIcons['Git/GitHub']?.icon

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col justify-between gap-6 rounded-3xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-ink/50 md:flex-row md:p-6 lg:flex-col"
    >
      <div className="relative flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-line/60 bg-beige/60 p-4 md:w-1/2 lg:w-full">
        <span className="absolute right-3 top-3 rounded-full border border-line/80 bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-muted backdrop-blur-sm">
          {project.category}
        </span>

        <div className="flex h-full w-full flex-col justify-between rounded-xl border border-line/40 bg-surface p-3 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="flex items-center gap-1.5 border-b border-line/30 pb-2">
            <span className="h-2 w-2 rounded-full bg-clay/40" />
            <span className="h-2 w-2 rounded-full bg-clay/40" />
            <span className="h-2 w-2 rounded-full bg-clay/40" />
          </div>
          <div className="space-y-2 py-4">
            <div className="h-3 w-1/3 rounded bg-line/40" />
            <div className="h-2 w-2/3 rounded bg-line/25" />
          </div>
          <div className="h-6 w-full rounded bg-beige/80" />
        </div>
      </div>

      <div className="flex w-full flex-col justify-between md:w-1/2 lg:w-full">
        <div>
          <h3 className="font-serif text-xl font-semibold leading-snug text-ink md:text-2xl lg:text-xl">
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line/80 bg-beige/50 px-2.5 py-1 text-[12px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2.5 border-t border-line/40 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-xs font-medium text-surface transition hover:bg-ink/90"
          >
            Live demo <ExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-xs font-medium text-ink transition hover:border-ink/60 hover:bg-beige/30"
          >
            {GithubIcon ? (
              <GithubIcon size={15} />
            ) : (
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            )}
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-[580px]">
          <Reveal delay={0.05}>
            <SectionLabel>Projects</SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            delay={0.15}
            className="mt-5 font-serif text-[30px] font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-[44px]"
          >
            Recent projects
          </Reveal>

          <Reveal delay={0.25} className="mt-3 text-muted md:text-lg">
            <p>A few things I&apos;ve built, from database to interface.</p>
          </Reveal>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-12 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}