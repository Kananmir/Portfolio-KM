import Link from 'next/link'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export const Navigation: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <nav className={cn('flex gap-8 items-center', className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-warm-brown hover:text-dusty-blue transition-colors duration-300 font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
