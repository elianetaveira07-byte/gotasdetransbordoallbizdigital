import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPrincipal from '@/assets/logo_principal.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
      <Link to="/" className="flex items-center gap-3 no-underline group">
        <img src={logoPrincipal} alt="Diego Allas — Estratégia & Escala" className="h-10 md:h-12 w-auto" />
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
