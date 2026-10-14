import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Database,
  Download,
  ExternalLink,
  FileCheck2,
  Gauge,
  Handshake,
  KeyRound,
  Mail,
  MessageCircle,
  Network,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';
import heroImage from '@/assets/allbiz-case-hero.jpg';
import commandCenterImage from '@/assets/allbiz-command-center.jpg';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';
import reportAsset from '@/assets/relatorio_implantacao_marketing.docx.asset.json';
import { setPageMeta } from '@/lib/pageMeta';

const WHATSAPP =
  'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego.%20Li%20sua%20apresenta%C3%A7%C3%A3o%20e%20gostaria%20de%20marcar%20uma%20conversa.';

const timeline = [
  { date: '07–14 AGO', title: 'Controle e segurança', text: 'Mapeamento de ativos, recuperação de acessos, e-mail institucional e autenticação em duas etapas.' },
  { date: '11 AGO–01 SET', title: 'Presença local recuperada', text: 'Solicitação, carta física e conclusão da verificação do Perfil da Empresa no Google.' },
  { date: '16–22 SET', title: 'Google Ads regularizado', text: 'Análise do enquadramento, documentação regulatória, G2 Risk Solutions e verificação do anunciante.' },
  { date: '16–30 SET', title: 'Mensuração implantada', text: 'Meta Pixel, GTM, GA4, eventos de conversão, testes em rede e Search Console.' },
  { date: 'AGO–SET', title: 'Marketing conectado ao comercial', text: 'Formulários, CRM, playbooks, manual de objeções e biblioteca de 171 mensagens.' },
  { date: '26 SET', title: 'Inteligência operacional', text: 'Três sistemas estruturados para implantação, indicadores e compliance de conteúdo.' },
];

const delivered = [
  { icon: KeyRound, title: 'Ativos sob controle', text: 'Acessos críticos recuperados, protegidos e documentados para a operação não depender de uma pessoa.' },
  { icon: Search, title: 'Google local verificado', text: 'Perfil corrigido e publicado na Busca e no Maps após um processo de mais de três semanas.' },
  { icon: ShieldCheck, title: 'Google Ads regularizado', text: 'Verificação de serviços financeiros e anunciante concluídas com documentação e enquadramento compatível.' },
  { icon: BarChart3, title: 'Mensuração comprovada', text: 'Pixel, GTM e GA4 validados em camadas, incluindo evento de conversão do WhatsApp.' },
  { icon: Database, title: 'CRM e formulários', text: 'Fluxos de indicação, atendimento e currículos organizados, testados e conectados a uma base de controle.' },
  { icon: Users2, title: 'Comercial capacitado', text: 'Playbooks, objeções e biblioteca pesquisável de respostas para dar consistência ao atendimento.' },
];

const statusGroups = [
  {
    icon: CheckCircle2,
    label: 'Implantado e validado',
    color: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/[0.07]',
    items: ['Acessos e 2FA', 'Perfil no Google', 'Regularização Google Ads', 'Pixel, GTM e GA4', 'Formulários e playbooks'],
  },
  {
    icon: Gauge,
    label: 'Em operação inicial',
    color: 'text-sky-300 border-sky-400/30 bg-sky-400/[0.07]',
    items: ['Campanha Meta em aprendizagem', 'Leitura da qualidade dos leads', 'Uso dos sistemas com dados reais'],
  },
  {
    icon: Route,
    label: 'Próximos passos',
    color: 'text-amber-300 border-amber-400/30 bg-amber-400/[0.07]',
    items: ['CAPI e UTMs', 'Remarketing', 'Integrações e automações', 'Relatórios executivos'],
  },
];

const alignments = [
  { icon: Target, title: 'Proteção veicular', text: 'Experiência recente e documentada com as exigências técnicas, comerciais e regulatórias do setor.' },
  { icon: Network, title: 'Marketing + comercial', text: 'Campanha não vive isolada: atendimento, CRM, origem do lead, objeções e indicadores fazem parte da mesma estrutura.' },
  { icon: Scale, title: 'Performance com compliance', text: 'Crescer sem ultrapassar o vocabulário, as políticas e o enquadramento que a operação pode sustentar.' },
  { icon: Sparkles, title: 'IA sob direção humana', text: 'IA para acelerar documentação, análise e sistemas — sem substituir contexto, fonte ou validação técnica.' },
];

const collaboration = [
  { icon: Wrench, title: 'Projeto de implantação', text: 'Assumir uma frente técnica com começo, fim, documentação e transferência para a equipe.' },
  { icon: Handshake, title: 'Especialista complementar', text: 'Somar à agência em acessos, mensuração, CRM, compliance, automação e estrutura interna do cliente.' },
  { icon: BriefcaseBusiness, title: 'Oportunidade profissional', text: 'Conversar sobre uma função em que execução, operação e visão estratégica sejam aproveitadas juntas.' },
];

const ApresentacaoEmerson = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      'Apresentação para Emerson Xavier · Diego Allas',
      'Caso documentado de implantação de marketing interno em proteção veicular e proposta de conversa profissional com Diego Allas.',
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#080B11] text-white scroll-smooth">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080B11]/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/55 no-underline transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Início
          </Link>
          <div className="text-center leading-none">
            <p className="font-serif text-base font-semibold text-yellow-300">DIEGO ALLAS</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">Diego Allas</p>
          </div>
          <Button asChild size="sm" className="bg-emerald-600 text-white hover:bg-emerald-500">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="no-underline">
              <MessageCircle /> <span className="hidden sm:inline">Conversar</span>
            </a>
          </Button>
        </div>
      </nav>

      <header className="relative min-h-[92vh] overflow-hidden pt-16">
        <img src={heroImage} alt="Estratégia de marketing orientada por dados" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B11] via-[#080B11]/80 to-[#080B11]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent" />
        <div className="container relative flex min-h-[calc(92vh-4rem)] items-center py-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">Uma apresentação preparada para Emerson Xavier</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">
              Eu não cheguei à proteção veicular por um briefing.
              <span className="mt-2 block text-yellow-300">Cheguei pela implantação.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-white/70 md:text-lg">
              Em sete semanas, estruturei a base de um marketing interno que não existia formalmente: acessos, segurança, Google, Meta, mensuração, CRM, comercial, compliance e sistemas de apoio. Quero apresentar o que foi feito — e entender onde essa capacidade pode somar ao ecossistema que você já constrói.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-yellow-400 text-[#080B11] hover:bg-yellow-300">
                <a href="#caso" className="no-underline"><FileCheck2 /> Ver o caso documentado</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="no-underline"><Clock3 /> Propor uma conversa de 20 min</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.14em] text-white/40">
              <span>Goiânia · GO</span><span>Atualizado em 09/10/2026</span><span>Caso anonimizado</span>
            </div>
          </div>
        </div>
        <a href="#contexto" aria-label="Ir para o contexto" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/45 transition-colors hover:text-yellow-300"><ChevronDown className="h-6 w-6 animate-bounce" /></a>
      </header>

      <main>
        <section id="contexto" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02]">
          <div className="container grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">Contexto transparente</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Ainda estou na empresa. A próxima etapa é uma conversa responsável.</h2>
            </div>
            <div className="space-y-4 text-sm leading-[1.8] text-white/65 md:text-base">
              <p>Em <strong className="text-white">09/10/2026</strong>, sigo contratado em regime CLT e cumprindo integralmente minhas responsabilidades. A fundação necessária foi implantada; agora a operação entra em uma fase contínua de dados, otimização e rotina.</p>
              <p>Minha intenção é propor uma transição negociada para prestação de serviços PJ, preservando continuidade, documentação e respeito à empresa. Paralelamente, estou aberto a conversas seletivas com organizações nas quais meu escopo, minha velocidade de execução e minha experiência operacional possam ser mais bem aproveitados.</p>
            </div>
          </div>
        </section>

        <section id="caso" className="scroll-mt-20 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">Caso real · cliente confidencial</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">35 dias úteis. Uma fundação inteira documentada.</h2>
              <p className="mt-5 text-base leading-[1.8] text-white/65">O relatório cobre o período de 07/08 a 30/09/2026 e foi construído com prints, e-mails, protocolos, testes e documentos. O nome da associação e seus dados identificáveis foram omitidos.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {delivered.map(({ icon: Icon, title, text }) => (
                <article key={title} className="border-t border-white/15 py-6">
                  <Icon className="h-5 w-5 text-yellow-300" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0C1320] py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">Linha do tempo</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">A velocidade não veio de pular etapas.</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/60">Veio de investigar, registrar, testar e só então avançar. Cada marco abaixo tem contexto no relatório.</p>
            </div>
            <ol className="border-l border-white/15 pl-7">
              {timeline.map((item) => (
                <li key={item.title} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 border-sky-300 bg-[#0C1320]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">{item.date}</p>
                  <h3 className="mt-2 font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-white/55">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-4 lg:grid-cols-3">
              {statusGroups.map(({ icon: Icon, label, color, items }) => (
                <article key={label} className={`border p-6 ${color}`}>
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5" /><h3 className="font-serif text-xl font-semibold">{label}</h3></div>
                  <ul className="mt-5 space-y-3 text-sm text-white/65">
                    {items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true">—</span>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-[1.8] text-white/45"><strong className="text-white/70">O limite importa:</strong> o caso não apresenta como definitivo nenhum resultado comercial de campanhas recém-publicadas. O valor comprovado até aqui é a construção da infraestrutura e do método de operação.</p>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10">
          <img src={commandCenterImage} alt="Ambiente organizado de implantação e mensuração de marketing" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B11] via-[#080B11]/90 to-[#080B11]/45" />
          <div className="container relative py-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">Método de trabalho</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">Primeiro construir, medir, validar e regularizar. Depois investir.</h2>
              <p className="mt-5 text-base leading-[1.8] text-white/65">Essa frase foi registrada durante a implantação e resume minha forma de trabalhar: nenhuma campanha depende de uma peça que ainda não existe; nenhuma promessa ocupa o lugar da evidência.</p>
            </div>
          </div>
        </section>

        <section id="convergencia" className="scroll-mt-20 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">Por que esta conversa faz sentido</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">Não é uma abordagem genérica para uma agência.</h2>
              <p className="mt-5 text-base leading-[1.8] text-white/65">A comunicação pública da AHAM fala de estratégia, posicionamento, conteúdo, tráfego e apoio ao comercial para associações de proteção veicular. O PV Summit reúne temas como vendas, liderança, regulamentação, finanças e gestão de times. São justamente as fronteiras onde minha implantação recente aconteceu na prática.</p>
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
              {alignments.map(({ icon: Icon, title, text }) => (
                <article key={title} className="flex gap-4 border-t border-white/15 pt-5">
                  <Icon className="mt-1 h-5 w-5 flex-none text-sky-300" />
                  <div><h3 className="font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-[1.75] text-white/55">{text}</p></div>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-xs leading-[1.7] text-white/35">Referências consultadas: canais públicos de Emerson Xavier, AHAM Agência e página do PV Summit. Esta página não presume propriedade do evento nem vínculo anterior entre as partes.</p>
          </div>
        </section>

        <section className="bg-white text-[#121722] py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="mx-auto max-w-sm">
              <img src={diegoPerfil.url} alt="Diego Allas" width={800} height={1000} loading="lazy" className="h-auto w-full object-contain" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Quem pode somar</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">Operação por dentro. Marketing por inteiro.</h2>
              <p className="mt-5 text-base leading-[1.8] text-[#4D5564]">Sou pernambucano, vivo em Goiânia e reúno mais de 15 anos de operação em food service, logística, gestão e atendimento. Nos últimos anos, concentrei essa bagagem em marketing, inteligência artificial e construção de produtos. Não procuro apenas um título: procuro um ambiente onde seja útil resolver problemas difíceis, construir estrutura e fazer a equipe avançar.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="border-t border-[#D6DAE2] pt-4"><strong className="font-serif text-2xl text-primary">15+ anos</strong><p className="mt-1 text-xs text-[#697180]">de operação real</p></div>
                <div className="border-t border-[#D6DAE2] pt-4"><strong className="font-serif text-2xl text-primary">3 setores</strong><p className="mt-1 text-xs text-[#697180]">food, logística e marketing</p></div>
                <div className="border-t border-[#D6DAE2] pt-4"><strong className="font-serif text-2xl text-primary">Goiânia</strong><p className="mt-1 text-xs text-[#697180]">presencial ou híbrido</p></div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><Link to="/diagnostico" className="no-underline">Abrir ferramenta de diagnóstico <ArrowRight /></Link></Button>
                <Button asChild variant="outline"><Link to="/" className="no-underline">Voltar ao guia</Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section id="relatorio" className="scroll-mt-20 py-20">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">Evidência completa</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">Leia o relatório, não apenas esta síntese.</h2>
              <p className="mt-5 text-base leading-[1.8] text-white/65">O documento de 16 páginas descreve atividades, datas, decisões técnicas, limites e próximos passos. Ele foi anonimizado para preservar o cliente, mas mantém o encadeamento necessário para avaliar o trabalho.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45"><span>DOCX · 16 páginas</span><span>Atualizado em 01/10/2026</span><span>Cliente confidencial</span></div>
            </div>
            <div className="border border-yellow-400/25 bg-yellow-400/[0.06] p-7">
              <FileCheck2 className="h-8 w-8 text-yellow-300" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Relatório de implantação do marketing interno</h3>
              <p className="mt-3 text-sm leading-[1.75] text-white/55">Inclui sumário executivo, linha do tempo, frentes de trabalho, funções exercidas, uso de IA, situação real e próximos passos.</p>
              <Button asChild size="lg" className="mt-6 w-full bg-yellow-400 text-[#080B11] hover:bg-yellow-300">
                <a href={reportAsset.url} download="Relatorio-Implantacao-Marketing-Anonimizado-Diego-Allas.docx" className="no-underline"><Download /> Baixar relatório completo</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0C1320] py-20">
          <div className="container">
            <div className="max-w-3xl"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">Possibilidades, não pressupostos</p><h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">Onde uma conversa pode chegar</h2></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {collaboration.map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-white/15 py-6"><Icon className="h-5 w-5 text-sky-300" /><h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-[1.75] text-white/55">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="conversa" className="scroll-mt-20 py-24 text-center">
          <div className="container max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">Emerson, obrigado pela atenção</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Vinte minutos são suficientes para descobrir se existe encaixe.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/65">Sem apresentação ensaiada e sem pedido de decisão imediata. Quero ouvir como vocês trabalham, mostrar os detalhes que importam e entender se posso somar em uma frente real.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="no-underline"><MessageCircle /> Conversar pelo WhatsApp</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"><a href="mailto:anfitriaonexialista@gmail.com?subject=Conversa%20profissional%20-%20Diego%20Allas" className="no-underline"><Mail /> Enviar e-mail</a></Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40"><a href="https://www.ahamagencia.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-inherit hover:text-white">AHAM Agência <ExternalLink className="h-3 w-3" /></a><a href="https://www.ahamagencia.com.br/pvsummit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-inherit hover:text-white">PV Summit <ExternalLink className="h-3 w-3" /></a><Link to="/" className="inline-flex items-center gap-1 text-inherit hover:text-white"><BookOpen className="h-3 w-3" /> História pessoal</Link></div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ApresentacaoEmerson;
