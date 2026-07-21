import { Heart } from 'lucide-react';

const ConclusaoSection = () => {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1117 0%, #0a0e14 100%)' }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(212,175,55,0.18) 0%, transparent 70%)' }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/60" />
          <Heart className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/60" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
          Obrigado por <em className="not-italic bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">chegar até aqui</em>
        </h2>

        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
          Da Chapada do Araripe para Goiânia — com fé, família e muita vontade de construir.
        </p>

        <p className="mt-6 text-sm md:text-base text-white/40 tracking-wide">
          DIEGO ALLAS
        </p>
      </div>
    </section>
  );
};

export default ConclusaoSection;
