import { AlertTriangle, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-8 pb-10 px-4 md:px-6 border-t border-yellow-600/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-semibold text-lg tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            DIEGO ALLAS
          </span>
        </div>

        <div className="w-full max-w-md bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/15 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 animate-attention-shake" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase text-yellow-400 mb-0.5">Atenção</p>
            <p className="text-sm text-white/80 leading-snug">
              Meu WhatsApp mudou. O número válido agora é{' '}
              <strong className="text-white">(62) 99968-8700</strong>.
            </p>
          </div>
          <a
            href="https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full transition-colors no-underline flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
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
