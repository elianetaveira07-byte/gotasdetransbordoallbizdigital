const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-8 pb-10 px-4 md:px-6 border-t border-yellow-600/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-semibold text-lg tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            DIEGO ALLAS
          </span>
        </div>
        <p className="text-center text-xs text-white/30 leading-relaxed">
          Avenida Independência, 1.615 · Bloco B · Apto 404 · Condomínio Juliana<br />
          Setor Leste Vila Nova · Goiânia-GO · CEP 74645-010<br />
          Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
