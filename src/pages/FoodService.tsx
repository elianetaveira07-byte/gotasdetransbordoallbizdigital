import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  CalendarClock,
  MapPin,
  Utensils,
  Megaphone,
  Users2,
  Bike,
  Store,
  Calculator,
  Target,
  MapPinned,
  Settings2,
  Wrench,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  Handshake,
  Clock,
  TrendingUp,
} from 'lucide-react';
import BibliotecaFoodSection from '@/components/guia/BibliotecaFoodSection';
import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';

const WA = 'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Vi%20sua%20p%C3%A1gina%20de%20food%20service.';

const dores = [
  'Não existe setor interno de marketing — tudo é feito no improviso, sem responsável e sem rotina.',
  'Delivery e marketplaces (iFood e afins) rodando sem gestão: comissão alta, cardápio desatualizado, avaliações mal cuidadas.',
  'Preço definido "no olho", sem ficha técnica nem CMV real — o prato que mais vende costuma ser o que menos dá lucro.',
  'Perfil da Empresa no Google abandonado: sem fotos, sem posts, sem respostas e fora do ranking do bairro.',
  'Tráfego pago sem setup técnico correto — pixel, conversões e contas mal configuradas queimando verba.',
  'Base de clientes perdida: nenhum CRM, nenhuma recompra trabalhada, nenhuma lista para reativar em dia fraco.',
  'Equipe de salão sem treinamento de atendimento e de venda sugestiva, que é onde o ticket médio nasce.',
];

const servicos = [
  {
    icon: Megaphone,
    title: 'Marketing 360º interno',
    desc: 'Implantação completa do setor de marketing dentro da casa: rotina, calendário, responsáveis, métricas e processos que continuam rodando mesmo quando eu não estou lá.',
  },
  {
    icon: Users2,
    title: 'CRM e recompra',
    desc: 'Estruturação da base de clientes, cadastro, segmentação, campanhas de reativação, aniversariantes e fidelidade. Cliente que já comprou é o mais barato de trazer de volta.',
  },
  {
    icon: Bike,
    title: 'Gestão de delivery',
    desc: 'Operação de delivery organizada de ponta a ponta: cardápio, fotos, tempos, embalagem, taxa, promoções, canal próprio e redução da dependência de terceiros.',
  },
  {
    icon: Store,
    title: 'Marketplaces (iFood e outros)',
    desc: 'Gestão da loja no iFood e demais marketplaces: posicionamento, campanhas, cupons, avaliações, curva de produtos, margem por canal e correção de rupturas.',
  },
  {
    icon: Calculator,
    title: 'Precificação e ficha técnica',
    desc: 'Ficha técnica prato a prato, CMV, custo real por canal e precificação com margem definida. Aqui eu não só oriento — se precisar, eu boto a mão e faço.',
  },
  {
    icon: Target,
    title: 'Tráfego pago Google e Meta',
    desc: 'Gestão de campanhas no Google Ads e Meta Ads com foco em movimento de salão, delivery e pedidos diretos — verba controlada e leitura de resultado real.',
  },
  {
    icon: MapPinned,
    title: 'Perfil da Empresa no Google e SEO local',
    desc: 'Cadastro, verificação, atualização, fotos, posts, avaliações e trabalho de SEO local para ranquear no mapa do bairro e da região.',
  },
  {
    icon: Settings2,
    title: 'Setup técnico ponta a ponta',
    desc: 'Contas, pixel, tags, eventos, conversões, catálogo, integrações e rastreamento — Google e Meta configurados corretamente desde a base.',
  },
  {
    icon: Wrench,
    title: 'Implantação de ferramentas',
    desc: 'Repediu, Cardápio Web e outras plataformas do food service: escolha, configuração, integração com a operação e treino da equipe para usar de verdade.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento e consultoria presencial',
    desc: 'Aulas, treinamentos e consultoria presencial para dono, gestão e equipe. Presencial sempre — nada online. O aprendizado acontece dentro da operação.',
  },
];

const formatos = [
  {
    icon: Utensils,
    title: 'Freelancer de salão',
    desc: 'Atendente ou garçom aos sábados à noite, domingos e feriados. Chego, somo na operação e faço o serviço bem feito — com mais de 10 anos de food service nas costas.',
  },
  {
    icon: Handshake,
    title: 'Serviço ou projeto pontual',
    desc: 'Diagnóstico, implantação ou correção de uma frente específica (delivery, iFood, Google, precificação, tráfego). Escopo fechado, prazo e entrega definidos.',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento mensal',
    desc: 'Estruturação e condução do marketing e da gestão comercial da casa com rotina mensal, indicadores e reuniões presenciais.',
  },
];

const FoodServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Topo */}
      <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-4 md:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="no-underline flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar</span>
        </Link>
        <span className="font-serif font-semibold text-base sm:text-lg tracking-[0.22em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          DIEGO ALLAS
        </span>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full transition-colors no-underline"
        >
          <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
        </a>
      </nav>

      {/* Hero */}
      <header className="bg-[#0D1117] text-white py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-4xl">
          <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
            Food service · freelancer e serviços
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
            Eu conheço o food service{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              por dentro
            </span>{' '}
            — do salão à planilha de custo
          </h1>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-[1.8]">
            Mais de 10 anos de operação real (cozinha, salão, atendimento, gerência, compras e escritório) somados a
            uma reconstrução técnica em marketing, IA e gestão. Estou disponível para atuar como{' '}
            <strong className="text-white">freelancer de atendimento/garçom</strong> aos sábados, domingos e feriados —
            e para <strong className="text-white">implantar o marketing e a gestão comercial</strong> que hoje faltam
            dentro da maioria das casas.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              <MessageCircle className="w-4 h-4" /> Falar comigo no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              Ver o que eu faço
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: CalendarClock, t: 'Sábados, domingos e feriados', s: 'Dias livres · disponibilidade real' },
              { icon: Clock, t: 'Dias de semana após as 18h', s: 'Emprego fixo CLT durante o dia' },
              { icon: MapPin, t: 'Goiânia-GO · presencial', s: 'Moro no Vila Nova, trabalho no Setor Sul' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
                  <Icon className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-sm font-semibold text-white leading-snug">{c.t}</p>
                  <p className="text-xs text-white/50 mt-1">{c.s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* Como eu entro */}
      <section className="py-[72px] bg-background">
        <div className="container max-w-4xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Como eu começo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Primeiro eu <span className="text-primary">sirvo</span>. Depois eu mostro o que dá para melhorar.
          </h2>
          <div className="mt-6 bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.8]">
            <p>
              Confiança em food service não se compra com apresentação bonita — se ganha no turno cheio, na comanda
              certa, no cliente bem atendido. Por isso eu começo trabalhando: entro como{' '}
              <strong>atendente ou garçom</strong> nos meus dias livres, aprendo a casa por dentro, entendo o cardápio,
              o fluxo, a equipe e o cliente.
            </p>
            <p className="mt-4">
              A partir dali, o que eu enxergo deixa de ser palpite. Quando eu levo uma proposta para o dono, ela vem com
              o nome dos pratos, os horários fracos, as reclamações reais e os números daquela operação. É consultoria
              feita de dentro para fora — e não de fora para dentro.
            </p>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="py-[72px] bg-secondary/40">
        <div className="container max-w-4xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-guia-amber bg-guia-amber-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            O que eu quase sempre encontro
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            As <span className="text-guia-amber">dores</span> que se repetem em quase toda casa
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Não é falta de esforço do dono. É falta de estrutura: ninguém dentro da empresa é dono do marketing e da
            gestão comercial.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {dores.map((d, i) => (
              <div key={i} className="bg-card rounded-lg p-5 shadow-guia flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-guia-amber flex-shrink-0 mt-0.5" />
                <p className="text-[0.95rem] text-foreground leading-[1.7]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-[72px] bg-background">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-guia-green bg-guia-green-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              O que eu implanto
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Implantação <span className="text-guia-green">completa</span> — e não só consultoria de slide
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Eu monto, configuro, treino a equipe e acompanho. Onde precisa de mão, eu ponho a mão.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-green">
                  <div className="w-11 h-11 rounded-full bg-guia-green-light flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5 text-guia-green" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BibliotecaFoodSection />



      {/* Formatos */}
      <section className="py-[72px] bg-secondary/40">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              Formatos de trabalho
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sem vínculo CLT — <span className="text-primary">freelancer, projeto ou mensal</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Tenho emprego fixo CLT em Goiânia e saio às 18h. Minha disponibilidade para outras empresas é à noite nos
              dias de semana e integral aos sábados, domingos e feriados — tudo presencial, aqui em Goiânia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {formatos.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-card rounded-lg p-7 shadow-guia border-l-[5px] border-guia-amber">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Combinados claros desde o início</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                'Nada de CLT: freelancer, PJ, projeto fechado ou mensalidade.',
                'Atendimento sempre presencial — treinamentos e aulas não são online.',
                'Escopo, prazo e valor combinados antes de começar.',
                'Discrição total com números, receitas e informações da casa.',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-foreground leading-[1.6]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[72px] bg-[#0D1117] text-white px-4">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
            Vamos conversar sobre a{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              sua casa
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
            Me chame no WhatsApp e me conte o momento do seu negócio. Se fizer sentido, eu passo aí presencialmente,
            olho a operação e volto com um diagnóstico honesto — sem enrolação e sem promessa de milagre.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-7 py-4 rounded-full transition-colors no-underline"
          >
            <MessageCircle className="w-4 h-4" /> (62) 99968-8700
          </a>
          <p className="mt-5 text-xs text-white/40">
            Diego Allas · Goiânia-GO · food service, marketing e gestão
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FoodServicePage;
