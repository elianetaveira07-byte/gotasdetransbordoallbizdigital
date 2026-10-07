import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-8 pb-10 px-4 md:px-6 border-t border-yellow-600/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-semibold text-lg tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            ALLBIZ DIGITAL
          </span>
          <span className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">Diego Allas</span>
        </div>

        <a
          href="https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-400/90 hover:text-green-300 text-sm no-underline"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp: (62) 99968-8700
        </a>

        <a href="mailto:anfitriaonexialista@gmail.com" className="inline-flex items-center gap-2 text-white/45 hover:text-white text-sm no-underline">
          <Mail className="w-4 h-4" /> anfitriaonexialista@gmail.com
        </a>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/35">
          <Link to="/apresentacao-emerson" className="text-inherit hover:text-white">Caso documentado</Link>
          <Link to="/diagnostico" className="text-inherit hover:text-white">Diagnóstico</Link>
        </div>

        <p className="text-center text-xs text-white/30 leading-relaxed">
          Goiânia-GO · Atendimento presencial, híbrido ou remoto<br />
          Chapada do Araripe, PE → Goiânia, GO · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
