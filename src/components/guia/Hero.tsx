import { Briefcase, MessageCircle, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="intro" className="relative overflow-hidden text-center py-20 px-6" style={{ background: 'linear-gradient(135deg, #0F2660 0%, #1B3F8A 45%, #2B6CB0 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm px-4 py-2 rounded-full mb-7">
          <Briefcase className="w-4 h-4" /> Diego Allas — ALLBIZ DIGITAL
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl mx-auto mb-6">
          Seu restaurante está perdendo dinheiro todo dia. <em className="text-yellow-300 not-italic">Eu sei exatamente onde.</em>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          24 anos entre o chão do food service e a logística. Mais de 10.000 horas em marketing 360°. R$15.000 do próprio bolso num case real — para provar o método antes de vender qualquer coisa.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center mb-10">
          <a href="#missao" className="bg-white text-primary text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg">
            <TrendingUp className="w-5 h-5" /> Conheça minha trajetória →
          </a>
          <a href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Vi%20sua%20apresenta%C3%A7%C3%A3o%20e%20quero%20conversar." target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/15">
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Award className="w-4 h-4 text-yellow-300" /> Certificado ESPM
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Award className="w-4 h-4 text-yellow-300" /> Google & Meta Certified
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;