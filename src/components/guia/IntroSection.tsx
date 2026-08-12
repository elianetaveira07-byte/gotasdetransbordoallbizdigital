import { Heart } from 'lucide-react';

const IntroSection = () => {
  return (
    <section id="intro-bio" className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Sobre mim
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Um pouco de <span className="text-primary">quem eu sou</span>
          </h2>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.8]">
          <p>
            Meu nome é <strong>Diego Allas</strong>. Sou pernambucano e, desde 19/07/2026, vivo com minha
            família em <strong>Goiânia</strong>, depois de quase três anos de imersão de estudo no alto da
            Chapada do Araripe — um sítio onde o silêncio virou minha maior escola. Sou casado e pai de três
            filhos: <strong>Matheuzinho</strong>, que tem síndrome de Dandy-Walker e sofreu uma paralisia
            cerebral grave ao nascer — sendo a razão de muitas das minhas escolhas —, <strong>Lucas
            Gabriel</strong>, de 11 anos, e <strong>Sarah Gabrielly</strong>, de 3 anos.
          </p>
          <p className="mt-4">
            Esta página é meu espaço pessoal e também minha história profissional: aqui você conhece minha
            família, o lugar de onde vim e para onde estou indo. Cheguei inteiro, com mais de 15 anos de
            operação real e quase 3 anos de reconstrução técnica contínua — e desde <strong>03/08/2026</strong>
            estou aplicando tudo isso na prática, liderando a criação do setor de marketing interno de uma
            empresa no Setor Sul, em Goiânia.
          </p>
          <div className="bg-guia-blue-light rounded-[10px] p-4 mt-5 text-primary font-medium flex items-start gap-2">
            <Heart className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500 fill-red-500" />
            Tudo o que está aqui é real. As fotos são da minha família. Os vídeos fazem parte do meu dia a dia.
            Sem filtro, sem roteiro, sem vitrine.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
