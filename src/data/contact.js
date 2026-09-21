import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export const emailAddress = 'zildanesyahada02@gmail.com'

const subject = encodeURIComponent("Inquiry: Career Opportunity / Project Collaboration")
const body = encodeURIComponent(
`Hi Zildane,

I came across your portfolio and was impressed with your background and work. 

I would like to discuss a potential opportunity at [Company / Project Name] that aligns well with your skill set.

Please let me know if you are open to having a brief conversation.

Best regards,
[Your Name]`
)

export const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`

export const contactLinks = [
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/zildane-syahada-bba343265',
    href: 'https://www.linkedin.com/in/zildane-syahada-bba343265', // Tambahkan https://
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    handle: 'github.com/zildanesyahada',
    href: 'https://github.com/zildanesyahada',
    icon: FaGithub,
  },
  {
    name: 'Email',
    handle: emailAddress,
    href: gmailUrl,
    icon: Mail,
  },
]