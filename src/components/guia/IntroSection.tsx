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
            Meu nome é <strong>Diego Allas</strong>. Sou cearense, vivo hoje no alto da Chapada do Araripe,
            num sítio onde o silêncio é o maior luxo do dia. Marido, pai de três filhos e cuidador do meu enteado
            <strong> Matheuzinho</strong>, que tem síndrome de Dandy-Walker e é a razão de muitas das minhas escolhas.
          </p>
          <p className="mt-4">
            Sou de uma geração que aprendeu a cuidar antes de aprender a vender. Cresci entre a cozinha da família,
            o chão do food service e, mais tarde, os armazéns e câmaras frias da logística. Vinte e quatro anos de
            trabalho de verdade, com mão suja e olho atento — esse é o tipo de currículo que ninguém vê no Instagram.
          </p>
          <p className="mt-4">
            Há alguns anos a vida me trouxe para a serra. E foi aqui, no isolamento, que encontrei tempo para estudar
            como nunca tinha feito antes — marketing, tecnologia, IA, escrita, comportamento humano. Não para virar
            "guru", mas para entender o mundo que meus filhos vão herdar.
          </p>
          <p className="mt-4">
            Esta página não está vendendo nada. É só um espaço pra você me conhecer melhor — minha família, o lugar
            onde vivo hoje, para onde estou indo e por quê. Se quiser conversar, minhas redes e meu WhatsApp estão
            ali embaixo. Pode chamar.
          </p>
          <div className="bg-guia-blue-light rounded-[10px] p-4 mt-5 text-primary font-medium flex items-start gap-2">
            <Heart className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500 fill-red-500" />
            Tudo que está aqui é real. As fotos são da minha família. Os vídeos são do meu dia a dia.
            Sem filtro, sem roteiro, sem vitrine.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
