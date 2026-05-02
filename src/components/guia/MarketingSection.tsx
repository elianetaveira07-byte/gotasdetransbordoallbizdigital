import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Volume2, VolumeX, Camera, Film } from 'lucide-react';

import imgFilhosCarrinho from '@/assets/marketing_filhos_carrinho.jpg';
import imgPaiFilhoPraia from '@/assets/marketing_pai_filho_praia.jpg';
import imgPaiFilhoPiscina from '@/assets/marketing_pai_filho_piscina.jpg';
import imgDiegoCarro from '@/assets/marketing_diego_carro.jpg';
import imgDiegoChapada from '@/assets/marketing_diego_chapada.jpg';
import imgFamiliaPraiaNoite from '@/assets/marketing_familia_praia_noite.jpg';
import imgFamiliaShopping from '@/assets/marketing_familia_shopping.jpg';
import imgFilhoTrofeu from '@/assets/marketing_filho_trofeu.jpg';
import imgMatheuzinhoLivros from '@/assets/marketing_matheuzinho_livros.jpg';
import imgEsposaFilho from '@/assets/marketing_esposa_filho.jpg';
import imgFamilia2 from '@/assets/marketing_familia2.jpg';
import imgFamiliaJardim from '@/assets/marketing_familia_jardim.jpg';
import imgDiegoPiscinaFilhos from '@/assets/marketing_diego_piscina_filhos.jpg';
import imgCasalPraia from '@/assets/marketing_casal_praia.jpg';

const photos = [
  imgDiegoChapada,
  imgDiegoCarro,
  imgFamiliaShopping,
  imgFilhoTrofeu,
  imgMatheuzinhoLivros,
  imgEsposaFilho,
  imgPaiFilhoPraia,
  imgPaiFilhoPiscina,
  imgFamilia2,
  imgFilhosCarrinho,
  imgFamiliaPraiaNoite,
  imgCasalPraia,
  imgDiegoPiscinaFilhos,
  imgFamiliaJardim,
];

const videos = [
  '/videos/marketing_video1.mp4',
  '/videos/marketing_video2.mp4',
  '/videos/marketing_video3.mp4',
  '/videos/marketing_video4.mp4',
  '/videos/marketing_video5.mp4',
  '/videos/marketing_video6.mp4',
  '/videos/marketing_video7.mp4',
  '/videos/marketing_video8.mp4',
  '/videos/marketing_video9.mp4',
];

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
    setPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-guia-lg bg-black max-w-sm mx-auto">
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        playsInline
        preload="auto"
        className="w-full aspect-[9/16] object-cover"
        onEnded={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center gap-2">
        <button onClick={togglePlay} className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary hover:scale-110 transition-transform">
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button onClick={restart} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button onClick={toggleMute} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

const MarketingSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => setCurrentPhoto((p) => (p === 0 ? photos.length - 1 : p - 1));
  const nextPhoto = () => setCurrentPhoto((p) => (p === photos.length - 1 ? 0 : p + 1));

  return (
    <section id="galeria" className="py-[72px] bg-guia-blue-light">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-white inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Meu feed
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight flex items-center justify-center gap-3">
            <Camera className="w-7 h-7 text-primary" />
            Momentos da minha vida
          </h2>
          <p className="text-guia-text-muted mt-3 max-w-2xl mx-auto text-base leading-relaxed">
            Família, filhos, a serra, pequenas vitórias, dias comuns. É o feed que eu não posto em rede social —
            mas guardo aqui pra quem quiser olhar.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="relative mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-guia-lg bg-black aspect-[4/3] md:aspect-[16/9] max-w-4xl mx-auto">
            {/* Pré-carrega todas as fotos para troca instantânea */}
            {photos.map((p, i) => (
              <img
                key={i}
                src={p}
                alt={`Foto ${i + 1} de ${photos.length}`}
                loading="eager"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-contain bg-black ${i === currentPhoto ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 md:p-5">
              <p className="text-white/70 text-xs">{currentPhoto + 1} / {photos.length}</p>
            </div>
            <button
              onClick={prevPhoto}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-2xl mx-auto">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPhoto(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentPhoto ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className="mb-4">
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
              <Film className="w-6 h-6 text-primary" /> Alguns registros em vídeo
            </h3>
            <p className="text-guia-text-muted text-sm md:text-base leading-relaxed">
              Pedaços do meu dia: o sítio, a família, os estudos, a estrada.
              Sem produção, sem roteiro — só a vida acontecendo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videos.map((src, i) => (
              <VideoPlayer key={i} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
