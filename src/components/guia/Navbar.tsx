import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import iconeLogoDA from '@/assets/icone_logo_da.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
      <Link to="/" className="flex items-center gap-3 no-underline group">
        <div className="relative flex items-center justify-center p-1.5 rounded-xl border border-yellow-400/40 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/10 shadow-[0_0_20px_-4px_rgba(212,175,55,0.4)] group-hover:border-yellow-300/70 transition-all">
            <img src={iconeLogoDA} alt="Diego Allas" className="h-10 md:h-12 w-auto" />
        </div>
        <div className="flex flex-col leading-none">
          <span
            className="font-serif font-semibold text-lg md:text-xl tracking-[0.18em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            DIEGO ALLAS
          </span>
          <span className="hidden sm:flex items-center gap-2 mt-1 text-[9px] md:text-[10px] tracking-[0.32em] text-white/50 uppercase">
            <span className="h-px w-4 bg-yellow-400/40" />
            Estratégia &amp; Escala
            <span className="h-px w-4 bg-yellow-400/40" />
          </span>
        </div>
      </Link>
      <div className="hidden md:flex gap-1.5 flex-wrap">
        {[
          { href: '#intro-bio', label: 'Sobre mim' },
          { href: '#familia', label: 'Família' },
          { href: '#vantagens', label: 'Goiânia' },
          { href: '#galeria', label: 'Galeria' },
          { href: '#redes', label: 'Me siga' },
        ].map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/60 no-underline px-3 py-1.5 rounded-full transition-all hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="text-xs font-semibold text-yellow-300 bg-yellow-400/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap border border-yellow-400/20">
        <Sparkles className="w-3 h-3" /> Diego Allas
      </div>
    </nav>
  );
};

export default Navbar;
