import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-4 md:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
      <Link to="/" className="no-underline group">
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-semibold text-lg sm:text-xl md:text-2xl tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            DIEGO ALLAS
          </span>
          <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">Diego Allas</span>
        </div>
      </Link>
      <div className="hidden md:flex gap-1.5 flex-wrap">
        {[
          { href: '#intro-bio', label: 'Sobre mim' },
          { href: '#contratado', label: 'Onde estou hoje' },
          { href: '/apresentacao-emerson', label: 'Caso documentado' },
          { href: '#familia', label: 'Família' },
          { href: '#vantagens', label: 'Goiânia' },
          { href: '#galeria', label: 'Galeria' },
        ].map(link => (
          <Link
            key={link.href}
            to={link.href}
            className="text-sm font-medium text-white/60 no-underline px-3 py-1.5 rounded-full transition-all hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
