import { Sparkles, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
      <Link to="/" className="flex items-center gap-3 no-underline group">
        {/* Professional logo mark */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform" />
          <div className="relative w-full h-full bg-primary rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl tracking-tighter" style={{ fontFamily: "'Georgia', serif" }}>A</span>
          </div>
        </div>
        <div className="leading-none">
          <h1 className="text-xl font-bold text-primary tracking-tight leading-tight" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: '-0.02em' }}>
            ALLBIZ <span className="font-light">DIGITAL</span>
          </h1>
          <p className="text-[11px] text-guia-text-muted tracking-wide uppercase mt-0.5">Diego Allas • Marketing Food Service</p>
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
            className="text-sm font-semibold text-white no-underline px-4 py-1.5 rounded-full bg-primary hover:bg-primary/90 transition-all inline-flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5" /> Gotas de Transbordo
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
