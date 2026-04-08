const Hero = () => {
  return (
    <section id="intro" className="relative overflow-hidden text-center py-20 px-6" style={{ background: 'linear-gradient(135deg, #0F2660 0%, #1B3F8A 45%, #2B6CB0 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm px-4 py-2 rounded-full mb-7">
          👨‍👧‍👦 Para os avós do Matheuzinho em Palmas-TO
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-3xl mx-auto mb-6">
          O guia mais fácil para entender por que Goiânia é a <em className="text-yellow-300 not-italic">melhor escolha</em> para o Matheuzinho
        </h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
          Tudo explicado bem simples, como se a gente estivesse conversando na sala de casa. O Matheuzinho de 23 anos merece o melhor cuidado do Brasil.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a href="#vantagens" className="bg-white text-primary text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg">
            📍 Ver todas as vantagens →
          </a>
          <a href="https://wa.me/6299955400" target="_blank" rel="noreferrer" className="border-2 border-white/50 text-white text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/15">
            📲 Falar com o CRER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
