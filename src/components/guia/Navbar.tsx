import { Briefcase, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 px-6 py-3.5 flex items-center justify-between gap-4 flex-wrap">
      <Link to="/" className="flex items-center gap-3 no-underline">
        <div className="w-11 h-11 bg-primary rounded-[14px] flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-serif text-lg font-semibold text-primary leading-tight">ALLBIZ DIGITAL</h1>
          <p className="text-xs text-guia-text-muted">Diego Allas • Marketing para Food Service • 2026</p>
        </div>
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
              className="text-sm font-medium text-guia-text-muted no-underline px-3 py-1.5 rounded-full transition-all hover:bg-guia-blue-light hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/comunidade"
            className="text-sm font-semibold text-white no-underline px-4 py-1.5 rounded-full bg-primary hover:bg-primary/90 transition-all"
          >
            🔥 Gotas de Transbordo
          </Link>
        </div>
      )}
      <div className="text-xs font-semibold text-green-600 bg-green-100 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse-dot inline-block" />
        <Sparkles className="w-3 h-3" /> Atualizado Abril 2026
      </div>
    </nav>
  );
};

export default Navbar;
