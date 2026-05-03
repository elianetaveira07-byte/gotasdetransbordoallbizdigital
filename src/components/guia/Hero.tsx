import { Heart, ArrowDown, Instagram, MessageCircle } from 'lucide-react';
import diegoPerfil from '@/assets/diego_allas_perfil.png';

const Hero = () => {
  return (
    <section
      id="intro"
      className="relative overflow-hidden px-6 py-16 md:py-24"
      style={{ background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2b 50%, #0D1117 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%)' }}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 via-amber-500/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src={diegoPerfil}
                alt="Diego Allas — Estratégia & Escala"
                className="relative w-full max-w-sm md:max-w-md h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse-dot" />
              Perfil pessoal
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Pai, marido, filho.
              <br />
              <em className="text-yellow-300 not-italic">Em transição</em> da Chapada do Araripe para Goiânia.
            </h1>
            <p className="text-lg text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Esta página é meu cantinho na internet. Como meu Instagram pessoal está em pausa, é aqui que conto
              quem eu sou, quem é minha família e por que estamos nos mudando para Goiânia.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#redes"
                className="bg-yellow-400 text-gray-900 text-base font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg no-underline"
              >
                <Instagram className="w-5 h-5" /> Me siga nas redes
              </a>
              <a
                href="#familia"
                className="border-2 border-white/30 text-white text-base font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/10 no-underline"
              >
                <Heart className="w-5 h-5 text-red-400" /> Conheça minha história
              </a>
            </div>
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400/90 hover:text-green-300 text-sm mt-6 no-underline"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp: (88) 98834-8700
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="#intro-bio" className="text-white/40 hover:text-yellow-300 transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
