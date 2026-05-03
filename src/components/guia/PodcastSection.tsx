import { Headphones, Mic, Radio, Play, ExternalLink, Waves } from 'lucide-react';
import logoPodcast from '@/assets/logo_podcast_allbiz.png';

const PodcastSection = () => {
  return (
    <section
      id="podcast"
      className="relative w-full py-24 md:py-32 px-4 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 60%), linear-gradient(180deg, #0a0e14 0%, #0D1117 50%, #0a0e14 100%)',
      }}
    >
      {/* Animated radial glow behind logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40 animate-pulse-dot"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.08) 35%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating sound waves decorations */}
      <Waves className="absolute top-12 left-8 md:left-20 w-16 h-16 md:w-24 md:h-24 text-yellow-400/10 -rotate-12 pointer-events-none" />
      <Waves className="absolute bottom-12 right-8 md:right-20 w-16 h-16 md:w-24 md:h-24 text-yellow-400/10 rotate-12 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Section eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 mb-8">
          <Radio className="w-3.5 h-3.5 text-yellow-400 animate-pulse-dot" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-yellow-300/90">
            No ar • Podcast
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-white leading-tight">
          Allbiz Digital{' '}
          <em className="not-italic bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Podcast
          </em>
        </h2>
        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Conversas reais sobre marketing, food service, escala e bastidores de quem trabalha com mão suja e olho atento.
          Simples, direto — e novos episódios a caminho.
        </p>

        {/* Logo with luxurious frame */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Outer rotating glow ring */}
            <div
              className="absolute -inset-6 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(212,175,55,0.6), rgba(255,215,0,0.2), rgba(212,175,55,0.6), rgba(184,134,11,0.3), rgba(212,175,55,0.6))',
              }}
            />
            {/* Gold border frame */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)]">
              <div className="relative rounded-full bg-black p-2">
                <img
                  src={logoPodcast}
                  alt="Allbiz Digital Podcast"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-contain block"
                />
                {/* Floating mic badge */}
                <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(212,175,55,0.6)] border-2 border-black/40">
                  <Mic className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="https://soundcloud.com/podcastallbizdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm md:text-base shadow-[0_8px_24px_-6px_rgba(249,115,22,0.6)] hover:from-orange-400 hover:to-orange-500 transition-all no-underline"
          >
            <Play className="w-5 h-5 fill-white" />
            Ouvir no SoundCloud
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
          <a
            href="#redes"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-yellow-400/40 text-yellow-200 hover:bg-yellow-400/10 hover:border-yellow-300/70 text-sm md:text-base font-medium transition-all no-underline"
          >
            <Headphones className="w-4 h-4" />
            Outros canais
          </a>
        </div>

        <p className="text-xs text-white/40 italic">
          Novos episódios em produção — fique de olho.
        </p>
      </div>
    </section>
  );
};

export default PodcastSection;
