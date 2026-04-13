import { Sparkles, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoPrincipal from '@/assets/logo_principal.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
      <Link to="/" className="flex items-center gap-3 no-underline group">
        <img src={logoPrincipal} alt="Diego Allas — Estratégia & Escala" className="h-10 md:h-12 w-auto" />
      </Link>
      {isHome && (
        <div className="hidden md:flex gap-1.5 flex-wrap">
          {[
            { href: '#vantagens', label: 'Por que Goiânia' },
            { href: '#missao', label: 'A Missão' },
            { href: '#marketing', label: 'Resultados' },
            { href: '#contato', label: 'Contato' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 no-underline px-3 py-1.5 rounded-full transition-all hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/comunidade"
            className="text-sm font-semibold text-gray-900 no-underline px-4 py-1.5 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-all inline-flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5" /> Gotas de Transbordo
          </Link>
        </div>
      )}
      <div className="text-xs font-semibold text-green-400 bg-green-400/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap border border-green-400/20">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot inline-block" />
        <Sparkles className="w-3 h-3" /> Abril 2026
      </div>
    </nav>
  );
};

export default Navbar;