import { ArrowUpRight, Download, Mail } from 'lucide-react'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import { contactLinks, gmailUrl } from '../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[#2E231A] p-6 text-[#F5F2EB] md:p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              
              <div className="lg:col-span-7">
                <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-[#F5F2EB]/80">
                  Contact
                </span>

                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#F5F2EB] sm:text-4xl lg:text-5xl">
                  Have a role in mind?
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#F5F2EB]/70 sm:text-base">
                  I&apos;m open to internship and entry-level roles. Send me a message and I&apos;ll get back to you.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F5F2EB] px-6 text-sm font-medium text-[#2E231A] transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    <Mail size={18} />
                    <span>Send an email</span>
                  </a>

                  <a
                    href="/cv.pdf"
                    download="Zildane_Syahada_CV.pdf"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#F5F2EB]/30 bg-transparent px-6 text-sm font-medium text-[#F5F2EB] transition-colors hover:bg-white/5 sm:w-auto"
                  >
                    <span>Download CV</span>
                    <Download size={18} />
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-2.5 text-xs text-[#F5F2EB]/70 sm:text-sm">
                  <span>Open to work, based in Bekasi, Indonesia</span>
                </div>
              </div>

              <div className="border-t border-[#F5F2EB]/15 pt-6 lg:col-span-5 lg:border-t-0 lg:pt-0">
                <div className="divide-y divide-[#F5F2EB]/15 border-y border-[#F5F2EB]/15">
                  {contactLinks.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 transition-colors hover:opacity-80"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 text-[#F5F2EB] transition-transform group-hover:scale-105">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-[#F5F2EB] sm:text-base">
                              {item.name}
                            </h3>
                            <p className="text-xs text-[#F5F2EB]/60 sm:text-sm">
                              {item.handle}
                            </p>
                          </div>
                        </div>

                        <span className="text-[#F5F2EB]/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F5F2EB]">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}