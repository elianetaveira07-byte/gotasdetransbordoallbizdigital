import { Heart, ArrowDown, MessageCircle, AlertCircle } from 'lucide-react';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';

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
                src={diegoPerfil.url}
                alt="Diego Allas"
                className="relative w-full max-w-sm md:max-w-md h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse-dot" />
              Perfil pessoal · contratado desde 03/08/2026
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Pai, marido, filho.
              <br />
              Agora <em className="text-yellow-300 not-italic">em Goiânia</em>, construindo do zero.
            </h1>
            <p className="text-lg text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Cheguei com minha família em 19/07/2026, encerrando quase 3 anos de imersão na Chapada do
              Araripe. Poucos dias depois, fui contratado: desde 03/08/2026 sou o responsável por criar o
              setor de marketing interno de uma empresa no Setor Sul, em Goiânia — estrutura completa, do CRM
              à automação, do web design ao treinamento do comercial.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#familia"
                className="border-2 border-white/30 text-white text-base font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/10 no-underline"
              >
                <Heart className="w-5 h-5 text-red-400" /> Conheça minha história
              </a>
            </div>
            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400/90 hover:text-green-300 text-sm no-underline"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: (62) 99968-8700
              </a>
              <span className="inline-flex items-center gap-1.5 bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 text-xs font-bold px-2.5 py-1 rounded-full animate-attention-pulse">
                <AlertCircle className="w-3.5 h-3.5" /> Número novo
              </span>
            </div>
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
