import { CheckCircle2, Building2, Users, Workflow, Megaphone, Database, MonitorSmartphone, GraduationCap, CalendarCheck, Sprout, ShieldCheck } from 'lucide-react';

const START_DATE = new Date(2026, 7, 3); // 03/08/2026

const escopo = [
  {
    icon: Megaphone,
    title: 'Marketing 360º',
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
            Portfólio 01 · construído em silêncio desde 03/08/2026
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Primeiro a <span className="text-guia-green">estrutura</span>. A vitrine vem depois.
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Depois de chegar em Goiânia com minha família, foram poucos dias de busca até as primeiras
            entrevistas. Duas empresas me chamaram para começar — e uma terceira, exatamente aquela em que eu
            mais tinha interesse, me escolheu. Preferi não desmarcar nenhuma entrevista já agendada, e foi
            justamente essa decisão que abriu a porta certa. Desde <strong>03/08/2026</strong> faço parte
            dessa equipe, no <strong>Setor Sul, em Goiânia</strong>, como responsável principal por criar o
            setor interno de marketing da empresa do zero. Em sete semanas, a base necessária saiu do improviso para
            uma estrutura documentada; a continuidade agora depende de rotina, dados e decisão de investimento.
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
                Contratado e preparando proposta de transição CLT → PJ
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Building2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-foreground leading-snug">Setor Sul · Goiânia-GO</div>
              <div className="text-xs text-guia-text-muted">Transição planejada e respeitosa</div>
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
            Não é apenas "cuidar das redes". É montar um setor interno de marketing completo, com estrutura,
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

        {/* Por que portfólio primeiro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <div className="bg-card rounded-lg p-8 shadow-guia border-t-[4px] border-guia-amber">
            <div className="w-11 h-11 rounded-full bg-guia-amber/15 flex items-center justify-center mb-3">
              <Sprout className="w-5 h-5 text-guia-amber" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-3">
              Por que mostro um caso, e não uma vitrine
            </h3>
            <p className="text-[0.98rem] text-guia-text-muted leading-[1.8] mb-4">
              Este é o meu primeiro portfólio documentado — e é de propósito. Antes de aparecer, preferi
              construir. O que você vê aqui é trabalho real, com datas, entregas e limites declarados, não
              números inflados.
            </p>
            <p className="text-sm font-semibold text-foreground mb-2">O que vem nas próximas camadas, com calma:</p>
            <ul className="space-y-1.5 text-sm text-guia-text-muted leading-[1.7]">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-guia-amber flex-shrink-0 mt-1" />Depoimentos de alunos e clientes reais</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-guia-amber flex-shrink-0 mt-1" />Novos portfólios em segmentos diferentes</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-guia-amber flex-shrink-0 mt-1" />Parcerias com ferramentas (SaaS) adequadas a cada tipo de empresa</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-guia-amber flex-shrink-0 mt-1" />Reconhecimentos que venham como consequência, não como meta</li>
            </ul>
            <p className="mt-4 text-sm text-guia-text-muted leading-[1.7]">
              Em paralelo, desenvolvo um produto próprio, sem pressa de anunciar. Quando estiver pronto, ele fala por si.
            </p>
          </div>

          <div className="bg-foreground text-background rounded-lg p-8 shadow-guia">
            <div className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-guia-amber" />
            </div>
            <h3 className="font-serif text-2xl font-semibold leading-tight mb-3">
              Fora da bolha, por escolha
            </h3>
            <p className="text-[0.98rem] opacity-80 leading-[1.8] mb-4">
              Não estou em grupos de networking pagos nem em eventos de palco toda semana. Boa parte desse
              mercado vende urgência, escassez e prova social fabricada, técnicas de persuasão bem
              conhecidas, para entregar o que hoje qualquer pessoa aprende com estudo sério e boas
              ferramentas de IA.
            </p>
            <p className="text-[0.98rem] opacity-80 leading-[1.8]">
              Meu caminho é outro: estudar, aplicar, documentar e deixar o resultado falar. Menos aparência,
              mais estrutura. Quem decide com critério entende a diferença.
            </p>
          </div>
        </div>

        {/* Fechamento */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary">
          <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-3">
            O trabalho continua. O formato pode evoluir.
          </h3>
          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
            Continuo cumprindo integralmente meu papel. Minha proposta será preservar a continuidade por meio
            de uma prestação de serviços bem definida, com escopo, rotina e documentação. Ao mesmo tempo,
            estou disponível para conversas seletivas sobre projetos, parcerias ou oportunidades profissionais
            em que minha combinação de operação, marketing, dados e inteligência artificial seja necessária.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContratadoSection;
