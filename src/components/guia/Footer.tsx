const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-8 pb-10 px-4 md:px-6 border-t border-yellow-600/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-semibold text-lg tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            DIEGO ALLAS
          </span>
          <span className="flex items-center gap-2 mt-1.5 text-[9px] tracking-[0.32em] text-white/40 uppercase">
            <span className="h-px w-4 bg-yellow-400/30" />
            Estratégia &amp; Escala
            <span className="h-px w-4 bg-yellow-400/30" />
          </span>
        </div>
        <p className="text-center text-xs text-white/30">
          Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
