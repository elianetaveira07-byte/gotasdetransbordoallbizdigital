import { Heart, Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';
import familiaImg from '@/assets/matheuzinho_familia.jpg';

const FamilySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const restart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="bg-guia-blue-light py-[72px]" id="familia">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-white inline-block px-3.5 py-1.5 rounded-full mb-3.5">Nossa família</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight flex items-center justify-center gap-3">
            Matheuzinho e nossa família <Heart className="w-7 h-7 text-red-500 fill-red-500" />
          </h2>
          <p className="text-guia-text-muted mt-2 max-w-lg mx-auto">Uma família unida que luta todos os dias para dar o melhor cuidado ao Matheuzinho. Eu, minha esposa e nossos filhos — juntos nessa missão.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-guia-lg">
            <img src={familiaImg} alt="Matheuzinho com sua família" className="w-full h-auto" />
          </div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-guia-lg bg-black">
              <video
                ref={videoRef}
                src="/videos/matheuzinho.mp4"
                muted={muted}
                playsInline
                className="w-full h-auto"
                onEnded={() => setPlaying(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-3">
                <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:scale-110 transition-transform">
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button onClick={restart} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-white/70 text-xs ml-auto">Vídeo do Matheuzinho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
