import { TrendingUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConclusaoSection = () => {
  return (
    <div className="container pb-[72px]">
      <div className="rounded-lg px-8 py-16 md:px-12 text-center text-white" style={{ background: 'linear-gradient(135deg, #0F2660, #1B3F8A)' }}>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 flex items-center justify-center gap-3">
          Pronto para crescer? <TrendingUp className="w-8 h-8 text-yellow-300" />
        </h2>
        <p className="text-lg text-white/85 max-w-2xl mx-auto mb-4">
          Você acabou de conhecer minha história, minhas credenciais e minha dedicação. Agora imagine tudo isso aplicado ao <strong>seu restaurante</strong>.
        </p>
        <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
          Diagnóstico gratuito, materiais completos, suporte diário via Google Meet — e quando eu chegar em Goiânia, atendimento presencial. O acesso que hoje é gratuito, amanhã vai custar outro preço.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Vi%20sua%20apresenta%C3%A7%C3%A3o%20e%20quero%20conversar%20sobre%20marketing%20para%20meu%20restaurante."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Diego no WhatsApp
          </a>
          <Link
            to="/comunidade"
            className="inline-flex items-center gap-2.5 bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg text-lg no-underline"
          >
            🔥 Conhecer Gotas de Transbordo
          </Link>
        </div>
        <p className="text-white/50 text-sm">
          Posso mostrar tudo ao vivo: comprovantes, cursos, resultados, mentorias — pessoalmente ou via Google Meet.
        </p>
      </div>
    </div>
  );
};

export default ConclusaoSection;
