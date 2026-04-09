import { CheckCircle } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">A história</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Leia com <span className="text-primary">atenção e carinho</span>
          </h2>
        </div>
        <div className="bg-card rounded-lg p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.75]">
          <p>Eu sou Diego Allas, pai do Matheuzinho. Ele tem 23 anos, paralisia cerebral grave — não anda, não fala, usa sonda na barriga, tem estenose no esôfago e toma muitos remédios. Nossa família está se preparando para se mudar para <strong>Goiânia (GO)</strong> porque lá existe o melhor lugar do Brasil para cuidar dele.</p>
          <p className="mt-4">Este guia explica tudo de forma clara — as instituições, os direitos, o passo a passo da mudança e por que eu estou me dedicando tanto a esse projeto.</p>
          <div className="bg-guia-green-light rounded-[10px] p-4 mt-5 text-guia-green font-medium flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            O plano é: eu vou primeiro para Goiânia com minha esposa e meus dois filhos pequenos, alugamos uma casa, organizamos tudo — e depois trazemos o Matheuzinho para morar conosco e cuidar dele. Assim fica mais tranquilo e sem pressa.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
