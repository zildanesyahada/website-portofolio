import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
]
const ids = links.map((l) => l.id)

// Menandai menu sesuai section yang sedang terlihat
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

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  return (
    <header className="relative mx-auto max-w-[1120px] px-5 py-5 md:px-6">
      <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo + nama */}
        <a
          href="#home"
          aria-label="Zildane Syahada, home"
          className="flex items-center gap-2.5 justify-self-start"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[13px] font-semibold tracking-tight text-beige">
            ZS
          </span>
          <span className="text-lg font-medium tracking-tight text-ink">Zildane Syahada</span>
        </a>

        {/* Menu pill (tablet ke atas) */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-line bg-surface px-3 py-2 md:flex"
        >
          {links.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-3 py-1 text-sm transition-colors lg:px-4 ${
                  isActive ? 'font-medium text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span
                  className={`border-b-2 pb-1 ${isActive ? 'border-ink' : 'border-transparent'}`}
                >
                  {l.label}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Tombol Contact (tablet ke atas) */}
        <div className="hidden justify-self-end md:block">
          <Button href="#contact" size="sm">Contact</Button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown mobile */}
      {open && (
        <div className="absolute inset-x-5 top-full z-50 rounded-2xl border border-line bg-surface p-2 md:hidden">
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
        </div>
      )}
    </header>
  )
}