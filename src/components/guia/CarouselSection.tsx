import { useState, useEffect, useCallback } from 'react';
import flamboyantLago from '@/assets/goiania_parque_flamboyant_lago.jpg';
import flamboyantArvore from '@/assets/goiania_parque_flamboyant_arvore.jpg';
import vacaBrava from '@/assets/goiania_vaca_brava_dia.jpg';

const slides = [
  { img: flamboyantLago, caption: '🌊 Parque Flamboyant • Lago e natureza no coração da cidade' },
  { img: flamboyantArvore, caption: '🌺 Parque Flamboyant • Flamboyant em flor' },
  { img: vacaBrava, caption: '🌳 Parque Vaca Brava • Um dos parques mais bonitos de Goiânia' },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);

  const goSlide = useCallback((n: number) => {
    setCurrent(((n % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goSlide(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goSlide]);

  return (
    <div className="bg-foreground py-20" id="goiania">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-white bg-white/15 inline-block px-3.5 py-1.5 rounded-full mb-3.5">A cidade</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight">
            Goiânia — <span className="text-yellow-300">Linda e acolhedora</span>
          </h2>
          <p className="text-white/70 mt-2">Uma cidade moderna, verde, com qualidade de vida e os melhores serviços de saúde do Centro-Oeste.</p>
        </div>
        <div className="relative rounded-lg overflow-hidden aspect-[16/7] max-h-[480px]">
          <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((s, i) => (
              <div key={i} className="flex-shrink-0 w-full h-full relative">
                <img src={s.img} alt={s.caption} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent text-white px-7 pt-10 pb-6 text-sm font-medium">
                  {s.caption}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => goSlide(current - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-white/90 border-none cursor-pointer text-xl flex items-center justify-center shadow-lg text-primary font-bold hover:scale-105 transition-transform z-10">←</button>
          <button onClick={() => goSlide(current + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-white/90 border-none cursor-pointer text-xl flex items-center justify-center shadow-lg text-primary font-bold hover:scale-105 transition-transform z-10">→</button>
        </div>
        <div className="flex gap-2 justify-center mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className={`h-2 rounded-full border-none cursor-pointer transition-all ${i === current ? 'bg-white w-6' : 'bg-white/35 w-2'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
