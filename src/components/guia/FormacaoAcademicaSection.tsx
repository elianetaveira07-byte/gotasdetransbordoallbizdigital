import {
  GraduationCap,
  MapPin,
  CalendarDays,
  Clock,
  Building2,
  BookOpen,
  Home,
  Rocket,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

const cursoInfo = [
  { icon: Building2, label: 'Instituição', value: 'PUC Goiás — Escola Politécnica e de Artes' },
  { icon: GraduationCap, label: 'Curso', value: 'Ciência de Dados e Inteligência Artificial (Superior Tecnológico)' },
  { icon: MapPin, label: 'Modalidade', value: 'Presencial · Câmpus I — Praça Universitária, Setor Universitário, Goiânia/GO' },
  { icon: CalendarDays, label: 'Duração', value: '6 semestres' },
  { icon: Clock, label: 'Turno', value: 'Noturno' },
];

const formacoesAcessiveis = [
  'Google — Data Analytics, Advanced Data Analytics e Machine Learning Crash Course',
  'IBM SkillsBuild e Cognitive Class — Data Science e Python for Data Science',
  'Microsoft Learn — AI-900, DP-900 e Azure AI Fundamentals',
  'AWS Skill Builder — Cloud Practitioner e Machine Learning Foundations',
  'DeepLearning.AI e Coursera (Andrew Ng) — Machine Learning e Deep Learning Specializations',
  'Kaggle Learn — trilhas práticas de Pandas, ML e Deep Learning',
  'Hugging Face Learn — NLP, LLMs e Agents',
  'fast.ai — Practical Deep Learning for Coders',
  'Alura, Rocketseat e Data Science Academy (DSA) no cenário nacional',
  'freeCodeCamp, CS50 (Harvard) e MIT OpenCourseWare — base sólida e gratuita',
];

const eixos = [
  {
    icon: GraduationCap,
    title: 'Faculdade',
    text: 'Proximidade direta com o Câmpus I da PUC Goiás, permitindo uma rotina noturna sustentável, sem comprometer produtividade nem convívio familiar.',
  },
  {
    icon: HeartHandshake,
    title: 'Filho especial',
    text: 'Região com acesso rápido a centros de saúde, terapias, escolas e infraestrutura urbana consolidada — essencial para o cuidado contínuo que ele merece.',
  },
  {
    icon: Home,
    title: 'Família',
    text: 'Bairro tradicional, seguro e arborizado, com qualidade de vida real para minha esposa e meus filhos — um lugar para construir raízes com tranquilidade.',
  },
];

const conexoes = [
  { icon: Home, title: 'Base familiar', sub: 'Setor Universitário / Vila Nova · Goiânia' },
  { icon: GraduationCap, title: 'Base acadêmica', sub: 'PUC Goiás · Câmpus I' },
  { icon: Rocket, title: 'Base profissional', sub: 'Marketing + IA + HostConnectBR em execução' },
];

const FormacaoAcademicaSection = () => {
  return (
    <section id="formacao-academica" className="py-[72px] bg-background">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Próximo passo · formação acadêmica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Ciência de Dados e <span className="text-primary">Inteligência Artificial</span> — o próximo movimento formal da minha trajetória
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75] max-w-3xl">
            A graduação não é o ponto de partida — é a validação e o aprofundamento de um caminho que já venho
            executando há quase três anos, com rotina técnica diária, projeto real em construção e aplicação
            prática constante.
          </p>
        </div>

        {/* Card do curso */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-guia-blue-light flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-blue-light text-primary mb-2">
                Curso escolhido · início planejado
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                Superior Tecnológico em Ciência de Dados e IA — PUC Goiás
              </h3>
            </div>
          </div>

          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8] mb-6">
            Um programa consolidado, com corpo docente doutor, laboratórios especializados, iniciação
            científica e uma abordagem que integra Big Data, Machine Learning, programação, ética e
            aplicação técnica ao mercado. A escolha pela PUC Goiás é estratégica — instituição tradicional,
            estrutura sólida e proximidade real com o ecossistema onde minha família vai viver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-border">
            {cursoInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-guia-blue-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-guia-text-muted mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[0.95rem] text-foreground leading-snug">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complementaridade */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-guia-amber mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-guia-amber-light flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-guia-amber" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-amber-light text-guia-amber mb-2">
                Por que essa faculdade complementa — e não substitui
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                Já venho me formando na prática. A graduação entra como camada estratégica.
              </h3>
            </div>
          </div>

          <div className="text-[0.98rem] text-guia-text-muted leading-[1.8] space-y-3.5 mb-8">
            <p>
              Hoje já atuo com <strong>Python</strong> e outras stacks de dados e IA no dia a dia da
              construção da HostConnectBR e nos estudos aplicados. A graduação não vem preencher uma
              lacuna técnica — ela vem <strong>estruturar formalmente</strong> o que já existe, oferecer
              profundidade acadêmica, acesso a pesquisa, laboratórios especializados, iniciação científica
              e uma rede que o autodidatismo, por mais intenso, não entrega sozinho.
            </p>
          </div>


          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
            <strong>No meu caso específico</strong>, a graduação é um passo consciente dentro de um plano
            maior — soma-se ao que já venho construindo, amplia o alcance profissional e abre portas
            institucionais. Não é pré-requisito para nada do que faço hoje; é continuidade natural do que
            venho executando com clareza.
          </p>
        </div>

        {/* Setor Universitário / Vila Nova */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-guia-green mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-guia-green-light flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-guia-green" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-guia-green-light text-guia-green mb-2">
                Onde a família vai construir raízes
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                Setor Universitário e Vila Nova, em Goiânia — uma escolha estratégica
              </h3>
            </div>
          </div>

          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8] mb-8">
            A escolha por morar no <strong>Setor Universitário</strong> ou na <strong>Vila Nova</strong>{' '}
            não foi aleatória. É uma decisão de vida que une, em um único endereço, três eixos que
            precisam caminhar juntos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {eixos.map((eixo, i) => {
              const Icon = eixo.icon;
              return (
                <div key={i} className="bg-secondary/40 rounded-lg p-6 border border-border">
                  <div className="w-11 h-11 rounded-full bg-guia-green-light flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-guia-green" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{eixo.title}</h4>
                  <p className="text-[0.92rem] text-guia-text-muted leading-[1.7]">{eixo.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-[0.98rem] text-guia-text-muted leading-[1.8] pt-6 border-t border-border">
            O primeiro passo é <strong>estabilizar a família nesse endereço estratégico</strong>. A partir
            dessa base — segura, próxima da faculdade e com toda a estrutura de que meu filho especial
            precisa — a graduação entra como consequência natural do plano. Não é sacrifício. É
            continuidade.
          </p>
        </div>

        {/* Onde tudo se conecta */}
        <div className="bg-secondary/40 rounded-lg p-8 md:p-10 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Onde tudo se conecta
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {conexoes.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-semibold text-foreground leading-tight mb-1">
                      {c.title}
                    </div>
                    <div className="text-sm text-guia-text-muted leading-snug">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-serif text-lg md:text-xl text-foreground leading-snug italic">
            Três frentes, um único plano — construído com clareza, tempo e propósito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormacaoAcademicaSection;
