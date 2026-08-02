import { BriefcaseBusiness, Handshake, Sparkles, AlertTriangle, Phone } from 'lucide-react';

const DisponibilidadeSection = () => {
  return (
    <section id="disponibilidade" className="py-[72px] bg-background">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-guia-amber bg-guia-amber-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Janela aberta · disponível agora
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Estou <span className="text-primary">disponível</span> — emprego, parceria ou freelancer
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Cheguei em <strong>Goiânia no dia 19/07/2026</strong> com minha família, encerrando a imersão de
            estudo na Chapada do Araripe em 15/07/2026. Desde <strong>20/07/2026</strong> estou entrando em
            contato com empresas todos os dias. Envio esta página como currículo aberto — se você chegou até
            aqui, provavelmente é um sinal. A janela está aberta e o momento certo de conversarmos é agora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
            <Handshake className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Vim para somar</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Não busco um lugar para me acomodar. Busco uma empresa que entenda que estou preparado para
              servir de verdade, contribuir, aprender a operação por dentro e devolver, em resultado, muito
              mais do que me for pedido.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-green">
            <BriefcaseBusiness className="w-6 h-6 text-guia-green mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Áreas e formatos abertos</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Food service completo (gerência, escritório, operação), logística, marketing, IA, atendimento
              — e posições iniciais em áreas novas. CLT, PJ, parceria ou freelancer. Presencial em Goiânia,
              híbrido ou 100% remoto.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-amber">
            <Sparkles className="w-6 h-6 text-guia-amber mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Preparado de verdade</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Me preparei fisicamente, mentalmente e psicologicamente para trabalhar até <strong>16h por dia
              de segunda a segunda</strong>, sem comprometer saúde nem família. Chego inteiro, com quase 3
              anos de imersão contínua e mais de 15 anos de operação real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisponibilidadeSection;
