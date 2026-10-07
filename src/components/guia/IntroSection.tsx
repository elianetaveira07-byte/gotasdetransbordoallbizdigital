import { Heart } from 'lucide-react';

const IntroSection = () => {
  return (
    <section id="intro-bio" className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-4">
            Sobre mim
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Um pouco de <span className="text-primary italic">quem eu sou</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Lado pessoal */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full" aria-hidden="true"></div>
              <p className="text-lg leading-relaxed text-guia-text-muted pl-6">
                Meu nome é <strong className="text-guia-text font-semibold">Diego Allas</strong>. Sou pernambucano e,
                desde 19/07/2026, vivo com minha família em{' '}
                <strong className="text-guia-text font-semibold">Goiânia</strong>, depois de quase três anos de imersão
                de estudo no alto da Chapada do Araripe — um sítio onde o silêncio virou minha maior escola.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-guia border border-border">
              <p className="text-sm leading-relaxed text-guia-text-muted italic">
                Sou casado e pai de três filhos:{' '}
                <span className="text-guia-text font-medium not-italic">Matheuzinho</span>, que tem síndrome de
                Dandy-Walker e sofreu uma paralisia cerebral grave ao nascer — sendo a razão de muitas das minhas
                escolhas —,{' '}
                <span className="text-guia-text font-medium not-italic">Lucas Gabriel</span>, de 11 anos, e{' '}
                <span className="text-guia-text font-medium not-italic">Sarah Gabrielly</span>, de 3 anos. Eles são a
                razão de cada escolha que tomo.
              </p>
            </div>
          </div>

          {/* Trajetória e propósito */}
          <div className="md:col-span-7">
            <div className="bg-foreground text-background rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-guia-lg">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-guia-blue-mid/20 blur-3xl -mr-16 -mt-16"
                aria-hidden="true"
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-guia-blue-light">
                  Minha trajetória e propósito
                </h3>

                <div className="space-y-6 leading-relaxed text-background/70">
                  <p>
                    Esta página é meu espaço pessoal e também minha história profissional: aqui você conhece minha
                    família, o lugar de onde vim e para onde estou indo.
                  </p>
                  <p>
                    Cheguei inteiro, com mais de{' '}
                    <span className="text-background font-medium">15 anos de operação real</span> e quase 3 anos de
                    reconstrução técnica contínua. Desde{' '}
                    <span className="text-background font-medium">03/08/2026</span> apliquei tudo isso na prática na
                    implantação do setor de marketing interno de uma empresa no Setor Sul, em Goiânia.
                  </p>
                  <p>
                    Em 05/10/2026, continuo contratado e preparo uma{' '}
                    <span className="text-guia-blue-light font-medium">transição responsável</span> para atuação como
                    prestador, preservando a continuidade do que foi construído.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-background/15 flex items-start gap-4">
                  <div className="bg-guia-blue-mid/20 p-3 rounded-xl shrink-0">
                    <Heart className="w-6 h-6 text-guia-blue-light fill-guia-blue-light" aria-hidden="true" />
                  </div>
                  <p className="text-xs md:text-sm text-background/60 uppercase tracking-widest leading-relaxed">
                    Tudo o que está aqui é real. As fotos são da minha família. Os vídeos fazem parte do meu dia a
                    dia.{' '}
                    <span className="text-background normal-case tracking-normal font-medium">
                      Sem filtro, sem roteiro, sem vitrine.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
