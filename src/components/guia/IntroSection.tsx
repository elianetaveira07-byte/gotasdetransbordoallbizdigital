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
            Meu nome é <strong>Diego Allas</strong>. Sou pernambucano e vivo hoje no alto da Chapada do Araripe,
            num sítio onde o silêncio é o maior luxo do dia. Sou casado e pai de três filhos:
            <strong> Matheuzinho</strong>, que tem síndrome de Dandy-Walker e sofreu uma paralisia cerebral grave
            ao nascer — sendo a razão de muitas das minhas escolhas —, <strong>Lucas Gabriel</strong>, de 11 anos,
            e <strong>Sarah Gabrielly</strong>, de 3 anos.
          </p>
          <p className="mt-4">
            Esta página não está vendendo nada. É apenas um espaço para você me conhecer melhor — minha família,
            o lugar onde vivo hoje, para onde estou indo e o porquê dessa caminhada. Se quiser conversar, minhas
            redes sociais e meu WhatsApp estão logo abaixo. Pode me chamar.
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
