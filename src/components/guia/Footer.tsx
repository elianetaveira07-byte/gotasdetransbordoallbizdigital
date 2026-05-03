import { Instagram, Facebook, Youtube, MessageCircle, Music2, Link2, ExternalLink } from 'lucide-react';
import diegoPerfil from '@/assets/diego_allas_perfil.png';
import iconeLogo from '@/assets/icone_logo.png';

const socialLinks = [
  { icon: Link2, href: 'https://linktr.ee/allbizdigitalconsultoria', label: 'Linktree' },
  { icon: Instagram, href: 'https://www.instagram.com/allbizdigitalmkt', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/allbizdigitalmkt', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/@allbizdigital', label: 'YouTube' },
  { icon: Music2, href: 'https://tiktok.com/@allbizdigitalmkt', label: 'TikTok' },
];

const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-4 pb-10 px-4 md:px-6">
      {/* Premium business card */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-yellow-300/60 via-yellow-600/30 to-yellow-800/20 shadow-[0_0_60px_-12px_rgba(212,175,55,0.35)]">
          <div className="rounded-[27px] bg-gradient-to-br from-[#0F1620] to-[#0a0e14] p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
              {/* Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-44 sm:w-52 md:w-56 rounded-2xl overflow-hidden border border-yellow-500/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
                  <img
                    src={diegoPerfil}
                    alt="Diego Allas — Estratégia & Escala"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <img src={iconeLogo} alt="" className="h-10 w-auto" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.28em] text-yellow-400/90 uppercase">
                      Estratégia & Escala
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-semibold mt-1.5 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Diego Allas — Allbiz Digital
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-5">
                  Estrategista de marketing e escala para o segmento <strong className="text-white">Food</strong>. Sediado na{' '}
                  <strong className="text-white">Chapada do Araripe — Ponta da Serra</strong>, ajudo restaurantes e deliveries a transformar tráfego em{' '}
                  <strong className="text-white">repedidos lucrativos</strong>. Conecte-se nas redes oficiais da{' '}
                  <strong className="text-white">Allbiz Digital</strong>:
                </p>

                {/* Social pills */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-200 text-xs md:text-sm font-medium transition-all no-underline"
                    >
                      <s.icon className="w-4 h-4" />
                      {s.label}
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 w-full sm:w-auto justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm md:text-base shadow-[0_8px_24px_-6px_rgba(16,185,129,0.5)] hover:from-green-400 hover:to-emerald-500 transition-all no-underline"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Direto: (88) 98834-8700
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-xs text-white/40">
          Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
