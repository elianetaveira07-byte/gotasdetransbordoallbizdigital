import { Instagram, Facebook, Youtube, MessageCircle, Music2, Link2 } from 'lucide-react';
import logoFull from '@/assets/logo_diego_allas_full.png';

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
    <footer className="text-center py-12 px-6 text-sm text-white/60" style={{ background: '#0D1117' }}>
      {/* Logo principal com borda estratégica dourada */}
      <div className="flex justify-center mb-6">
        <div className="relative inline-block p-[2px] rounded-2xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_30px_-6px_rgba(212,175,55,0.5)]">
          <div className="rounded-2xl bg-[#0D1117] px-8 py-5">
            <img
              src={logoFull}
              alt="Diego Allas — Estratégia & Escala"
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>
        </div>
      </div>

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
      </p>
      <p className="mt-3 text-xs opacity-50">Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
