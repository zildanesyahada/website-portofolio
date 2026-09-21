import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
]
const ids = links.map((l) => l.id)

// Menu aktif mengikuti section yang sedang terlihat
function useActiveSection() {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}

// Menandai apakah halaman sudah di-scroll
function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const scrolled = useScrolled()

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'max-md:border-b max-md:border-line max-md:bg-beige/80 max-md:backdrop-blur-md'
          : ''
      }`}
    >
      <Container
        className={`transition-[padding] duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo + nama (memudar di desktop saat di-scroll) */}
          <a
            href="#home"
            aria-label="Zildane Syahada, home"
            className={`flex items-center gap-3 justify-self-start transition-all duration-300 ${
              scrolled ? 'md:invisible md:-translate-y-2 md:opacity-0' : ''
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-base font-semibold tracking-tight text-beige md:h-11 md:w-11 md:text-lg">
              ZS
            </span>
            <span className="text-xl font-medium tracking-tight text-ink md:text-[22px]">
              Zildane Syahada
            </span>
          </a>

          {/* Menu pill (tablet ke atas) */}
          <nav
            aria-label="Main"
            className={`hidden items-center gap-1 rounded-full border border-line bg-surface/85 px-3 py-2 backdrop-blur-md transition-shadow duration-300 md:flex ${
              scrolled ? 'shadow-[0_8px_24px_rgba(59,42,30,0.08)]' : ''
            }`}
          >
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`px-3 py-1 text-sm transition-colors duration-200 lg:px-4 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </span>
                </a>
              )
            })}

            {/* Contact masuk ke dalam pill saat di-scroll */}
            <AnimatePresence initial={false}>
              {scrolled && (
                <motion.a
                  key="pill-contact"
                  href="#contact"
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: 'auto', marginLeft: 4 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden whitespace-nowrap rounded-full bg-ink py-1.5 text-sm font-medium text-beige hover:bg-ink-hover"
                >
                  <span className="block px-4">Contact</span>
                </motion.a>
              )}
            </AnimatePresence>
          </nav>

          {/* Tombol Contact (tablet ke atas, memudar saat di-scroll) */}
          <div
            className={`hidden justify-self-end transition-all duration-300 md:block ${
              scrolled ? 'md:invisible md:-translate-y-2 md:opacity-0' : ''
            }`}
          >
            <Button href="#contact" size="sm">Contact</Button>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </Container>

      {/* Dropdown mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-5 top-full mt-2 rounded-2xl border border-line bg-surface p-2 md:hidden"
          >
{links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`flex h-12 items-center border-b border-line px-3 ${
                  active === l.id ? 'font-medium text-ink' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">
              Contact
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}