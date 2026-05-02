import { Heart } from 'lucide-react';
import iconeLogo from '@/assets/icone_logo.png';

const ConclusaoSection = () => {
  return (
    <div className="container pb-[72px]">
      <div
        className="rounded-2xl px-8 py-16 md:px-12 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2b 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 70%)' }}
        />
        <div className="relative">
          <div className="flex justify-center mb-5">
            <img src={iconeLogo} alt="Diego Allas" className="h-16 w-auto" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 flex items-center justify-center gap-3">
            Obrigado por chegar até aqui <Heart className="w-7 h-7 text-red-400 fill-red-400" />
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            Da Chapada do Araripe pra você — com carinho.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusaoSection;
