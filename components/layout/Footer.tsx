import { socialLinks, footerData } from '@/data/footer'
import { Github, Linkedin, Mail } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
}

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-brown text-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">Kanan</h3>
            <p className="text-cream text-opacity-75">{footerData.tagline}</p>
          </div>
          <div />
          <div className="flex gap-6 md:justify-end">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soft-gold transition-colors duration-300"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              )
            })}
          </div>
        </div>
        <div className="border-t border-cream border-opacity-20 pt-8">
          <p className="text-center text-cream text-opacity-75 text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
