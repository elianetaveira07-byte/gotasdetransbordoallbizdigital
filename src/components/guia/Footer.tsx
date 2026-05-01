import { Instagram, Facebook, Youtube, MessageCircle, Music2, Link2 } from 'lucide-react';
import logoSecundario from '@/assets/logo_secundario.png';

const socialLinks = [
  { icon: Link2, href: 'https://linktr.ee/allbizdigitalconsultoria', label: 'Linktree' },
  { icon: Instagram, href: 'https://www.instagram.com/allbizdigitalmkt', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/allbizdigitalmkt', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/@allbizdigital', label: 'YouTube' },
  { icon: Music2, href: 'https://tiktok.com/@allbizdigitalmkt', label: 'TikTok' },
  { icon: MessageCircle, href: 'https://wa.me/5588988348700', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="text-center py-10 px-6 text-sm text-white/60" style={{ background: '#0D1117' }}>
      <div className="flex justify-center mb-5">
        <img src={logoSecundario} alt="Diego Allas — Estratégia & Escala" className="h-16 w-auto" />
      </div>
      <p className="font-semibold text-white/80">Diego Allas — Estratégia & Escala</p>

      <div className="flex justify-center gap-3 mt-5 flex-wrap">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300 text-white/70 flex items-center justify-center transition-all"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      <p className="mt-5">
        <a href="https://wa.me/5588988348700" className="text-white/70 no-underline hover:text-white">(88) 98834-8700</a>
        {' • '}
        <a href="mailto:anfitriaonexialista@gmail.com" className="text-white/70 no-underline hover:text-white">anfitriaonexialista@gmail.com</a>
      </p>
      <p className="mt-3 text-xs opacity-50">Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
