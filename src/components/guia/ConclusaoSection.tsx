import { Heart } from 'lucide-react';

const ConclusaoSection = () => {
  return (
    <div className="container pb-[72px]">
      <div className="rounded-lg px-8 py-16 md:px-12 text-center text-white" style={{ background: 'linear-gradient(135deg, #0F2660, #1B3F8A)' }}>
        <h2 className="font-serif text-4xl font-semibold mb-5 flex items-center justify-center gap-3">
          Essa missão é por amor <Heart className="w-8 h-8 text-red-400 fill-red-400" />
        </h2>
        <p className="text-lg text-white/85 max-w-xl mx-auto mb-8">
          Mudar para Goiânia com toda a família não é fácil, mas vai trazer muito mais qualidade de vida para o Matheuzinho e menos sofrimento para todos nós. O CRER + Crer em Casa + tudo de graça é uma oportunidade que poucas cidades do Brasil oferecem. E eu estou construindo minha carreira lá para sustentar tudo isso.
        </p>
        <div className="inline-flex items-center gap-2.5 bg-white/15 border border-white/25 rounded-full px-7 py-3.5 text-lg text-yellow-300 font-semibold">
          <Heart className="w-5 h-5 text-red-400 fill-red-400" /> O Matheuzinho vai ser muito bem cuidado em Goiânia.
        </div>
      </div>
    </div>
  );
};

export default ConclusaoSection;
