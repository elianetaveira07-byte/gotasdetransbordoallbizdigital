import { Shield, Truck } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Quem está por trás</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Uma história que explica <span className="text-primary">por que eu entrego tanto</span>
          </h2>
        </div>
        <div className="bg-card rounded-lg p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.75]">
          <p>Eu sou <strong>Diego Allas</strong>, fundador da <strong>ALLBIZ DIGITAL</strong> — consultoria especializada em marketing digital para food service. Passei 2 anos isolado na Chapada do Araripe, estudando 12 a 16 horas por dia, investindo mais de R$100.000 em cursos, mentorias, certificações e imersões.</p>
          <p className="mt-4">Antes do marketing digital, construí <strong>12 anos de carreira em operações logísticas e supply chain</strong> — transporte, armazém, estoque, câmara fria, produção, comércio exterior e despacho aduaneiro. Desenvolvi visão completa da cadeia operacional: do recebimento da mercadoria até a entrega ao cliente final, passando por documentação fiscal, conformidade regulatória e gestão de equipes.</p>
          <p className="mt-4">Atuei lado a lado com os times de Qualidade e Conformidade nos processos de certificação para exportação — onde os critérios são rígidos e qualquer desvio compromete o embarque. Vivenciei na prática as exigências de organismos como <strong>MAPA, ANVISA, INMETRO e certificadoras internacionais</strong>, participando ativamente das auditorias, adequações de processo e controles que garantem que o produto chegue ao mercado externo dentro dos padrões exigidos.</p>
          <p className="mt-4">Tenho um filho especial de 23 anos com paralisia cerebral grave — e Goiânia é o único lugar do Brasil que oferece tudo que ele precisa: o CRER, o Hospital das Clínicas, a Pestalozzi, e o programa Crer em Casa. <strong>Minha mudança para Goiânia é uma missão de família e de carreira.</strong></p>
          <p className="mt-4">Abaixo você vai entender por que escolhi Goiânia, o que estou construindo profissionalmente e como posso ajudar o seu restaurante a crescer de verdade — com resultado documentado, não promessa.</p>
          <div className="bg-guia-green-light rounded-[10px] p-4 mt-5 text-guia-green font-medium flex items-start gap-2">
            <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
            Cada certificação, cada investimento, cada resultado está documentado e pode ser comprovado ao vivo — pessoalmente ou via Google Meet. Transparência total.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
