import { TrendingUp, ChefHat, Truck, GraduationCap, BookOpen, Clock, Wallet, CheckCircle2 } from 'lucide-react';

const trajetoriaAnterior = [
  {
    icon: TrendingUp,
    period: '~2 anos',
    role: 'Responsável por Marketing — Food Service',
    detail: 'Liderança da estratégia comercial e de marketing com resultado consolidado de 12× de crescimento em faturamento no período.',
  },
  {
    icon: ChefHat,
    period: '~10 anos',
    role: 'Food Service — operação completa',
    detail: 'Vivi o food service por inteiro: cozinha, salão, atendimento, gestão de equipes, padronização de processos, compras, custos, escritório administrativo e gerência de unidade. Do balcão à tomada de decisão.',
  },
  {
    icon: Truck,
    period: '~6 anos',
    role: 'Logística & Supply Chain',
    detail: 'Atuação em três empresas do setor: Special Fruit, Agronogueira e MAXPET (Goiânia), com foco em planejamento, distribuição, roteirização e eficiência da cadeia.',
  },
];

const areasAbertas = [
  'Estruturação de setor interno de marketing do zero',
  'CRM, funis, cadências e relatórios de origem de venda',
  'Automação, integrações e IA aplicada à rotina comercial',
  'Web design, landing pages, SEO local e Perfil da Empresa',
  'Mídia paga (Google e Meta), conteúdo e branding aplicado',
  'Treinamento e alinhamento do setor comercial',
  'Food service completo, logística e gestão de operação',
];

const numeros = [
  { icon: Clock, value: '15.000+', label: 'horas de formação em Marketing e IA', sub: '10–14h/dia · 2 anos e 7 meses' },
  { icon: BookOpen, value: '1.500+', label: 'livros e materiais estudados', sub: 'leitura técnica e estratégica contínua' },
  { icon: Wallet, value: 'R$ 100k+', label: 'investidos na transição de carreira', sub: 'mentorias, eventos, cursos e imersões' },
];

const PerfilProfissionalSection = () => {
  return (
    <section id="perfil-profissional" className="pt-28 pb-[72px] bg-secondary/40">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Perfil profissional
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Marketing, IA e operação — <span className="text-primary">de 2024 para frente</span>
          </h1>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75] max-w-3xl">
            Diego Allas · Goiânia. Formação intensa, repertório aplicado e uma base operacional que coloca o
            setor interno de marketing colado na realidade de quem vende, atende e entrega.
          </p>
        </div>

        {/* Formação / Transição */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-guia-green mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-guia-green-light flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-guia-green" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-green-light text-guia-green mb-2">
                Formação atual · transição de carreira
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                Quase 3 anos em imersão contínua — Marketing, IA e construção de produto
              </h3>
            </div>
          </div>

          <div className="text-[0.98rem] text-guia-text-muted leading-[1.8] space-y-3.5 mb-8">
            <p>
              Nos últimos <strong>2 anos e 7 meses</strong> venho conduzindo uma transição de carreira
              estruturada, com rotina diária de estudo e aplicação prática entre <strong>12 e 16 horas por
              dia</strong>, de forma ininterrupta. Não é uma reciclagem pontual — é uma reconstrução técnica e
              estratégica completa do meu perfil profissional.
            </p>
            <p>
              Essa jornada foi sustentada por um investimento superior a <strong>R$ 100 mil</strong>,
              distribuído em mentorias de alto nível, eventos e palestras presenciais, cursos online
              especializados, imersões e <strong>visitas técnicas a agências de marketing em Curitiba (PR)</strong>,
              além de material de estudo, ferramentas e infraestrutura.
            </p>
            <p>
              O foco central é a combinação entre <strong>Marketing, Inteligência Artificial e construção de
              produto digital</strong>, unindo a bagagem operacional de mais de 15 anos em food service, logística
              e gestão a uma nova camada técnica preparada para o mercado atual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
            {numeros.map((n, i) => {
              const Icon = n.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-guia-green-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-guia-green" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-foreground leading-none mb-1">
                      {n.value}
                    </div>
                    <div className="text-sm text-foreground font-medium leading-snug">{n.label}</div>
                    <div className="text-xs text-guia-text-muted mt-0.5">{n.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Áreas abertas */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary mb-12">
          <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-blue-light text-primary mb-3">
            Repertório que sustenta a entrega
          </span>
          <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-3">
            Operação por dentro + marketing por inteiro
          </h3>
          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8] mb-6">
            Meu diferencial vem de ter vivido a operação de verdade antes de assumir o marketing — food
            service, logística e gestão de equipe. Esse histórico muda a forma de construir um setor
            interno: campanha, CRM, automação e treinamento comercial nascem colados na realidade de quem
            vende, atende e entrega. Hoje aplico esse repertório na empresa em que atuo, que é de outro
            segmento, fora do food service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {areasAbertas.map((a, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
                <span className="text-[0.95rem] text-foreground leading-[1.6]">{a}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-guia-text-muted leading-[1.75] mt-6 pt-5 border-t border-border">
            <strong>Disponibilidade com responsabilidade:</strong> sigo cumprindo minha função atual e vou
            propor uma transição formal, com continuidade e documentação. Estou aberto a conversas seletivas
            com empresas, agências e operações de food service sobre projetos, parceria PJ ou oportunidade
            profissional — sem conflito de agenda e sem expor informações confidenciais.
          </p>
        </div>

        {/* Histórico */}
        <div className="">
          <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-blue-light text-primary mb-4">
            Experiências · em poucas palavras
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trajetoriaAnterior.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-7 shadow-guia border-t-[4px] border-primary flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-guia-blue-light flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-guia-text-muted">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground leading-snug mb-2">
                    {item.role}
                  </h3>
                  <p className="text-[0.95rem] text-guia-text-muted leading-[1.7]">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfilProfissionalSection;
