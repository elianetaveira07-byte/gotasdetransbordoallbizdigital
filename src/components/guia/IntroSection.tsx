import { Shield } from 'lucide-react';

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
          <p>Eu sou <strong>Diego Allas</strong>, fundador da <strong>ALLBIZ DIGITAL</strong> — consultoria especializada em marketing digital e operações para food service.</p>
          <p className="mt-4"><strong>12 anos dentro do chão do food service.</strong> Cozinha, balcão, delivery, expedição — como operador, não como consultor. Motoboy sumindo, pedido errado saindo, margem desaparecendo sem que ninguém entendesse por quê. Não li sobre isso. Vivi.</p>
          <p className="mt-4">Outros <strong>12 anos em logística e supply chain</strong> — transporte, armazenagem, câmara fria, produção, comércio exterior e despacho aduaneiro. Atuei lado a lado com times de Qualidade e Conformidade em processos de certificação e atendimento regulatório junto ao <strong>MAPA e à ANVISA</strong>, além da aplicação de padrões internacionais como <strong>GlobalG.A.P., HACCP e ISO 22000</strong> — garantindo requisitos de exportação, rastreabilidade e segurança de alimentos. Isso me deu olho de auditor: a capacidade de identificar onde está o desvio antes que vire problema. O mesmo mundo do food — com outro nome.</p>
          <p className="mt-4">Então veio a terceira camada. Isolado na Chapada do Araripe, mergulhei em mais de <strong>10.000 horas de marketing em sua visão mais completa</strong> — digital e offline, imprensa, influência, audiovisual, automação, inteligência artificial, SaaS, MicroSaaS, B2B e B2C. Estudei os grandes nomes do mercado e os pequenos que já estão pegando a fatia sem que ninguém tenha percebido. Com certificado ESPM, Google e Meta — e mais de <strong>R$100.000 investidos</strong> em formação, ferramentas, equipamentos e execução, cada centavo documentado e comprovável. Mais de <strong>R$15.000</strong> desse total aplicados diretamente num case real, do próprio bolso, para provar o método antes de vender qualquer coisa.</p>
          <p className="mt-4">Tenho um filho especial de 23 anos — <strong>Matheus</strong> tem síndrome de Dandy-Walker, não anda, não fala e precisa de cuidados 24 horas. Goiânia é o único lugar do Brasil que oferece tudo que ele precisa: o CRER, o Hospital das Clínicas e a Pestalozzi. <strong>Minha mudança para Goiânia é uma missão de família e de carreira.</strong></p>
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