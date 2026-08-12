import { CheckCircle2, Building2, Users, Workflow, Megaphone, Database, MonitorSmartphone, GraduationCap, CalendarCheck } from 'lucide-react';

const START_DATE = new Date(2026, 7, 3); // 03/08/2026

const escopo = [
  {
    icon: Megaphone,
    title: 'Marketing 360º interno',
    text: 'Posicionamento, calendário de campanhas, conteúdo, mídia paga (Google e Meta), branding aplicado e métricas — tudo dentro de casa, sem depender de terceiros.',
  },
  {
    icon: Database,
    title: 'CRM e base de clientes',
    text: 'Implantação do CRM, organização da base, funis, cadências de follow-up e relatórios que mostram de onde vem cada venda.',
  },
  {
    icon: Workflow,
    title: 'Automação e IA aplicada',
    text: 'Automações de atendimento, disparos, integrações entre ferramentas e uso de IA para acelerar rotina comercial e produção de conteúdo.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web design e presença digital',
    text: 'Site, landing pages, Perfil da Empresa no Google, SEO local e todos os pontos de contato digitais padronizados.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento do setor comercial',
    text: 'Capacitação do time de vendas: abordagem, script, uso do CRM, qualificação de leads e alinhamento entre marketing e comercial.',
  },
  {
    icon: Users,
    title: 'Estrutura de ponta a ponta',
    text: 'Processos, papéis, rotinas, indicadores e documentação — construindo um setor que continua funcionando e crescendo.',
  },
];

const ContratadoSection = () => {
  const dias = Math.max(1, Math.floor((Date.now() - START_DATE.getTime()) / 86400000) + 1);

  return (
    <section id="contratado" className="py-[72px] bg-background">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-guia-green bg-guia-green-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Capítulo novo · desde 03/08/2026
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Fui <span className="text-guia-green">contratado</span> — e estou construindo o setor de marketing interno
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Depois de chegar em Goiânia com minha família, foram poucos dias de busca até as primeiras
            entrevistas. Duas empresas me chamaram para começar — e uma terceira, exatamente aquela em que eu
            mais tinha interesse, me escolheu. Preferi não desmarcar nenhuma entrevista já agendada, e foi
            justamente essa decisão que abriu a porta certa. Desde <strong>03/08/2026</strong> faço parte
            dessa equipe, no <strong>Setor Sul, em Goiânia</strong>, como responsável principal por criar o
            setor de marketing da empresa do zero.
          </p>
        </div>

        {/* Status card */}
        <div className="bg-gradient-to-r from-guia-green/10 via-emerald-400/10 to-guia-green/10 border-2 border-guia-green/40 rounded-xl p-5 md:p-6 mb-8 grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
          <div className="flex items-center gap-3 md:col-span-2">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-guia-green/15 border border-guia-green/30 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-guia-green" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-guia-green mb-0.5">
                Status atual
              </p>
              <p className="text-base font-semibold text-foreground leading-snug">
                Contratado e atuando presencialmente
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Building2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-foreground leading-snug">Setor Sul · Goiânia-GO</div>
              <div className="text-xs text-guia-text-muted">Equipe e direção excepcionais</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CalendarCheck className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-foreground leading-snug">{dias} dias de casa</div>
              <div className="text-xs text-guia-text-muted">Início em 03/08/2026</div>
            </div>
          </div>
        </div>

        {/* Escopo */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-2">
            O que estou construindo, de ponta a ponta
          </h3>
          <p className="text-guia-text-muted text-[0.98rem] leading-[1.75] max-w-3xl mb-6">
            Não é apenas "cuidar das redes". É montar um setor de marketing interno completo, com estrutura,
            processo e time preparado — algo que hoje é decisivo para qualquer empresa que quer crescer com
            previsibilidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {escopo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-green">
                  <div className="w-11 h-11 rounded-full bg-guia-green-light flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-guia-green" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fechamento */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary">
          <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-3">
            Escolhi a empresa certa — e vim para somar de verdade
          </h3>
          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
            Havia outra proposta com início marcado para 27/08, com documentação já solicitada e seleção
            aprovada. Ainda assim, mantive as entrevistas que já estavam agendadas porque acreditava que o
            encaixe certo apareceria. Apareceu. Hoje trabalho em uma empresa incrível, com uma equipe
            maravilhosa e uma direção que entende o valor de ter marketing dentro de casa. É exatamente o
            ambiente em que eu queria aplicar mais de 15 anos de operação real somados a quase 3 anos de
            imersão em marketing, IA e construção de produto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContratadoSection;
