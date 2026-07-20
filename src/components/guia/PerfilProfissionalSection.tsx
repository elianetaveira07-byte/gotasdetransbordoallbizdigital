import { TrendingUp, ChefHat, Truck, Rocket, GraduationCap, BookOpen, Clock, Wallet } from 'lucide-react';

const trajetoria = [
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
  'Gerência de unidade e operações (food service, varejo, franquias)',
  'Escritório: administrativo, compras, comercial, back-office',
  'Logística, expedição, planejamento e supply chain',
  'Marketing, growth, mídia paga e conteúdo',
  'IA aplicada, automações e construção de produto digital',
  'Atendimento, relacionamento e experiência do cliente',
  'Posições iniciais em novas áreas — quero aprender a sua operação por dentro',
];

const numeros = [
  { icon: Clock, value: '15.000+', label: 'horas de formação em Marketing e IA', sub: '10–14h/dia · 2 anos e 7 meses' },
  { icon: BookOpen, value: '1.500+', label: 'livros e materiais estudados', sub: 'leitura técnica e estratégica contínua' },
  { icon: Wallet, value: 'R$ 100k+', label: 'investidos na transição de carreira', sub: 'mentorias, eventos, cursos e imersões' },
];

const PerfilProfissionalSection = () => {
  return (
    <section id="perfil-profissional" className="py-[72px] bg-secondary/40">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Perfil profissional
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Trajetória, <span className="text-primary">transição</span> e o que estou construindo agora
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75] max-w-3xl">
            Uma leitura honesta de onde venho, o que entrego hoje e para onde estou caminhando. Sem retoques
            de vitrine — apenas o histórico real e o trabalho que segue em curso.
          </p>
        </div>

        {/* Trajetória */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trajetoria.map((item, i) => {
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

        {/* Startup em construção */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-guia-amber mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-guia-amber-light flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-guia-amber" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-amber-light text-guia-amber mb-2">
                Em construção · pré-MVP
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                HostConnectBR — construindo um SaaS do zero, sozinho
              </h3>
            </div>
          </div>
          <div className="text-[0.98rem] text-guia-text-muted leading-[1.8] space-y-3.5">
            <p>
              A HostConnectBR é um projeto autoral de SaaS que estou desenvolvendo de forma independente. Hoje
              está na fase de <strong>concepção de produto</strong>, com <strong>demonstração publicada</strong> e
              estrutura em estágio <strong>pré-MVP</strong>.
            </p>
            <p>
              O projeto avança sem investidores e sem aporte externo. Estou construindo com o que existe de
              gratuito e acessível no ecossistema — ferramentas open source, camadas gratuitas de nuvem,
              comunidades técnicas e o próprio tempo dedicado à execução.
            </p>
            <p>
              É um processo delicado, técnico e naturalmente demorado quando conduzido por uma única pessoa,
              acumulando os papéis de produto, engenharia, design, marketing e operação. Ainda assim, o
              planejamento é claro: <strong>chegar ao mercado em breve</strong>, com uma primeira versão
              enxuta, funcional e pronta para validação real com usuários.
            </p>
          </div>
        </div>

        {/* Formação / Transição */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-guia-green">
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
      </div>
    </section>
  );
};

export default PerfilProfissionalSection;
