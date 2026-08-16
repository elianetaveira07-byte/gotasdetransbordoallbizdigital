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
  Network,
  Search,
  Bot,
  Sparkles,
  Camera,
  Star,
  QrCode,
  Percent,
  Repeat,
  BarChart3,
  Package,
  Globe,
  Smartphone,
  Presentation,
} from 'lucide-react';

import BibliotecaFoodSection from '@/components/guia/BibliotecaFoodSection';
import ParceriasSection from '@/components/guia/ParceriasSection';
import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';

const WA = 'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Vi%20sua%20p%C3%A1gina%20de%20food%20service.';

const dores = [
  'Não existe setor interno de marketing — tudo é feito no improviso, sem responsável, sem rotina e sem calendário.',
  'Dependência quase total do iFood: a casa vive de um único canal e paga comissão que hoje vai de ~12% (entrega própria) a 27–30% quando entra a logística do app.',
  'Não existe canal próprio de delivery — nenhum cardápio digital, nenhum link direto, nenhum pedido chegando sem intermediário.',
  'Preço definido "no olho", sem ficha técnica nem CMV real — o prato que mais vende costuma ser o que menos dá lucro.',
  'Margem por canal desconhecida: ninguém sabe quanto sobra de um pedido do salão, do app e do WhatsApp.',
  'Perfil da Empresa no Google abandonado: sem fotos, sem posts, sem categorias certas, sem responder avaliação — fora do mapa do bairro.',
  'A casa não aparece quando alguém pergunta ao ChatGPT, Gemini ou Perplexity onde comer na região — e em 2026 isso já é canal de descoberta.',
  'Tráfego pago sem setup técnico correto — pixel, conversões e catálogo mal configurados queimando verba.',
  'Base de clientes perdida: nenhum CRM, nenhuma recompra trabalhada, nenhuma lista para reativar em dia fraco.',
  'WhatsApp bagunçado: pedido, reserva, reclamação e fornecedor no mesmo lugar, sem etiqueta, sem funil e sem histórico.',
  'Segunda a quinta com salão vazio e nenhuma ação estruturada para preencher os horários fracos.',
  'Avaliações negativas sem resposta e sem processo de recuperação do cliente insatisfeito.',
  'Rotatividade alta e equipe de salão sem treinamento de atendimento e venda sugestiva — que é onde o ticket médio nasce.',
  'Conteúdo social feito quando "dá tempo": sem linha editorial, sem foto boa do prato e sem vídeo que gere pedido.',
  'Cardápio sem engenharia: itens âncora, campeões e "abacaxis" misturados, sem destaque visual para o que dá margem.',
  'Ruptura de item e cardápio desatualizado no app, derrubando posicionamento e gerando cancelamento.',
  'Zero leitura de dados: nada de origem de venda, curva ABC, ticket por canal ou taxa de recompra.',
];

const servicos = [
  {
    icon: Megaphone,
    title: 'Marketing 360º interno — online e offline',
    desc: 'Implantação completa do setor de marketing dentro da casa: rotina, calendário, responsáveis, métricas e processos que continuam rodando mesmo quando eu não estou lá.',
  },
  {
    icon: Network,
    title: 'Canal próprio de delivery',
    desc: 'Implantação, atualização ou manutenção do canal próprio (Cardápio Web, Repediu, Goomer, Anota AI, Delivery Direto, Saipos e similares): link direto, cupons, área de entrega, taxa, integração com WhatsApp e impressão na cozinha. O objetivo é simples — parar de depender só de marketplace.',
  },
  {
    icon: Store,
    title: 'Gestão de iFood e marketplaces',
    desc: 'Posicionamento, campanhas e cupons, curva de produtos, fotos, tempo de preparo, avaliações, disputas, leitura de margem por canal e correção de ruptura. Marketplace é vitrine — não pode ser o negócio inteiro.',
  },
  {
    icon: Users2,
    title: 'CRM, recompra e fidelidade',
    desc: 'Cadastro e segmentação da base, funil no WhatsApp, campanhas de reativação, aniversariantes, clube de vantagens e cashback. Cliente que já comprou é o mais barato de trazer de volta.',
  },
  {
    icon: Calculator,
    title: 'Precificação, ficha técnica e CMV',
    desc: 'Ficha técnica prato a prato, CMV real, custo por canal, engenharia de cardápio e precificação com margem definida. Aqui eu não só oriento — se precisar, eu boto a mão e faço.',
  },
  {
    icon: Target,
    title: 'Tráfego pago Google e Meta',
    desc: 'Campanhas com foco em movimento de salão, delivery próprio e pedido direto: geolocalização por raio, públicos de recompra, catálogo, criativos testados e verba controlada.',
  },
  {
    icon: Search,
    title: 'SEO local + GEO (busca por IA)',
    desc: 'Perfil da Empresa no Google trabalhado de verdade (categorias, fotos, posts, avaliações, perguntas) somado a site com dados estruturados, NAP consistente e conteúdo local — para ranquear no mapa e também ser citado por ChatGPT, Gemini, Perplexity e AI Overviews.',
  },
  {
    icon: Bot,
    title: 'IA e automação aplicadas à operação',
    desc: 'Uso prático de LLMs no dia a dia: atendimento e triagem no WhatsApp, respostas a avaliações, análise de comentários, previsão de demanda, criação de conteúdo, relatórios automáticos e apoio à decisão do dono.',
  },
  {
    icon: BarChart3,
    title: 'Dados e indicadores',
    desc: 'Painel simples com o que importa: origem da venda, ticket médio por canal, curva ABC, taxa de recompra, custo de aquisição e margem real. Decisão com número, não com achismo.',
  },
  {
    icon: MapPinned,
    title: 'Presença offline e ponto de venda',
    desc: 'Cardápio impresso e engenharia visual, sinalização e fachada, QR Code e NFC na mesa, materiais de PDV, parcerias com o comércio da região, ações de bairro e eventos.',
  },
  {
    icon: Wrench,
    title: 'Implantação de ferramentas e integrações',
    desc: 'Escolha, configuração e integração dos sistemas do setor (cardápio digital, PDV, robô de WhatsApp, CRM, fidelidade) — com treino da equipe para usar de verdade.',
  },
  {
    icon: Settings2,
    title: 'Setup técnico ponta a ponta',
    desc: 'Contas, pixel, tags, eventos, conversões, catálogo, UTMs e rastreamento — Google e Meta configurados corretamente desde a base.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento, consultoria e aulas presenciais',
    desc: 'Aulas e treinamento para dono, gestão, cozinha e salão: atendimento, venda sugestiva, padrão de serviço, uso das ferramentas e leitura de indicadores. Presencial sempre.',
  },
  {
    icon: Camera,
    title: 'Social media e audiovisual (com parceiros)',
    desc: 'Linha editorial, calendário e roteiro eu faço. Produção pesada de foto e vídeo entra com minha rede de parceiros — e estou montando estrutura própria de câmera, iluminação, lapela e drone.',
  },
];

const canais = [
  {
    icon: Network,
    title: 'Canal próprio (site/cardápio digital)',
    desc: 'Pedido direto, sem comissão de app, com dados do cliente ficando com a casa. É o ativo mais importante e o mais esquecido.',
  },
  {
    icon: Store,
    title: 'Marketplaces (iFood e outros)',
    desc: 'Continuam sendo vitrine e descoberta. A meta não é sair — é reduzir a dependência e transformar cliente de app em cliente da casa.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp organizado',
    desc: 'Catálogo, atendimento com automação, etiquetas, listas de transmissão segmentadas e recompra ativa.',
  },
  {
    icon: Globe,
    title: 'Google: mapa, busca e IA',
    desc: 'Perfil da Empresa otimizado, SEO local e GEO para aparecer também nas respostas geradas por inteligência artificial.',
  },
  {
    icon: Target,
    title: 'Mídia paga',
    desc: 'Meta e Google segmentados por raio, com criativo de comida que dá fome e destino no canal próprio.',
  },
  {
    icon: Repeat,
    title: 'Base própria (CRM)',
    desc: 'A lista de clientes é o canal mais barato do mundo. Aniversário, reativação, clube e campanha de dia fraco.',
  },
  {
    icon: QrCode,
    title: 'Presencial e PDV',
    desc: 'QR Code e NFC na mesa, cardápio bem construído, venda sugestiva no salão e captação de cadastro no balcão.',
  },
  {
    icon: Handshake,
    title: 'Parcerias e comunidade local',
    desc: 'Comércio vizinho, empresas do entorno, condomínios, eventos de bairro e criadores locais.',
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
    desc: 'Diagnóstico, implantação ou correção de uma frente específica (canal próprio, delivery, iFood, Google, SEO local, precificação, tráfego). Escopo fechado, prazo e entrega definidos.',
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
              href="#biblioteca"
              className="inline-flex items-center justify-center gap-2 border border-yellow-500/40 hover:bg-yellow-500/10 text-yellow-300 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              Biblioteca gratuita
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

      {/* Multicanal */}
      <section id="canais" className="py-[72px] bg-secondary/40">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              Canais de aquisição
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sua casa não pode viver de <span className="text-primary">um canal só</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              A conta é dura: dependendo do plano, o marketplace fica com algo entre ~12% e 30% do pedido — e ainda
              guarda o cliente. Marketplace é vitrine, e vitrine boa. Mas quem só tem vitrine não tem negócio. Meu
              trabalho é abrir o maior número possível de canais e fazer todos apontarem para o canal próprio e para a
              base da casa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {canais.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug">{c.title}</h3>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-card rounded-lg p-7 md:p-9 shadow-guia border-l-[5px] border-guia-green">
            <div className="flex items-center gap-3 mb-3">
              <Percent className="w-6 h-6 text-guia-green" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Canal próprio: implantação, atualização ou manutenção
              </h3>
            </div>
            <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
              Se a casa não tem canal próprio, eu implanto do zero. Se tem e está abandonado, eu atualizo. Se está
              rodando, eu faço a manutenção viva — cardápio, foto, preço, área de entrega, taxa, cupom, integração
              com WhatsApp e impressão na cozinha. E, junto, a migração inteligente: cada pedido do app vira uma
              chance de trazer aquele cliente para o canal direto na próxima compra.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                'Cardápio digital próprio com link e QR Code da casa',
                'Cupom de primeira compra direta e clube de recompra',
                'Área de entrega e taxa por raio, com margem calculada',
                'Integração com PDV, WhatsApp e impressão automática',
                'Encarte na embalagem levando o cliente para o canal direto',
                'Comparativo real de margem: app x direto x salão',
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

      {/* SEO local + GEO */}
      <section id="seo-geo" className="py-[72px] bg-background">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-guia-amber bg-guia-amber-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              SEO local · GEO 2026
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Ser achado no mapa — e agora também{' '}
              <span className="text-guia-amber">dentro das respostas de IA</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Quase ninguém faz SEO local bem feito no food service, e em 2026 o trabalho até cresceu: além do mapa do
              Google, o cliente pergunta ao ChatGPT, ao Gemini e ao Perplexity onde comer. Isso é GEO — otimizar para
              ser citado por mecanismos generativos. Quem organiza os dados da casa agora sai na frente enquanto o
              vizinho ainda nem descobriu que esse canal existe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: MapPinned,
                title: 'Perfil da Empresa no Google',
                desc: 'Categorias corretas, horário, atributos, área de atendimento, fotos reais em rotina, posts semanais, perguntas e respostas e produtos cadastrados.',
              },
              {
                icon: Star,
                title: 'Avaliações como ativo',
                desc: 'Processo de pedido de avaliação no salão e no delivery, resposta a 100% dos comentários e recuperação de cliente insatisfeito antes de virar nota 1.',
              },
              {
                icon: Search,
                title: 'Site e dados estruturados',
                desc: 'Página local rápida, NAP consistente em todos os diretórios, schema de restaurante, cardápio e horário legíveis por máquina.',
              },
              {
                icon: Sparkles,
                title: 'GEO / busca generativa',
                desc: 'Conteúdo que responde perguntas reais ("melhor pizza no Setor Sul", "restaurante que entrega até 23h") em formato que a IA consegue citar, com fonte e consistência de informação.',
              },
              {
                icon: Globe,
                title: 'Presença distribuída',
                desc: 'Google, Apple Maps, Waze, TripAdvisor, marketplaces, guias locais e redes — a mesma informação, sem divergência, alimentando os modelos.',
              },
              {
                icon: BarChart3,
                title: 'Medição do local',
                desc: 'Ligações, rotas, cliques no site, termos de descoberta e evolução da posição no mapa do bairro — relatório mensal simples.',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-amber">
                  <Icon className="w-6 h-6 text-guia-amber mb-3" />
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug">{c.title}</h3>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IA */}
      <section id="ia" className="py-[72px] bg-[#0D1117] text-white">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
              IA aplicada · não é modinha
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
              As LLMs entraram na cozinha —{' '}
              <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                e eu sei usar
              </span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
              O próprio iFood já colocou inteligência artificial no WhatsApp do parceiro. A diferença não está mais em
              ter acesso à IA — está em quem sabe aplicar dentro da operação. Eu uso IA todos os dias há mais de dois
              anos, e trago isso para dentro da casa de forma prática: menos trabalho manual, mais velocidade e
              decisão baseada em dado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bot, t: 'Atendimento e triagem', d: 'Automação no WhatsApp para dúvida, cardápio, status de pedido e reserva — sem perder o toque humano no que importa.' },
              { icon: Star, t: 'Leitura de avaliações', d: 'Análise em massa dos comentários do Google e dos apps para achar o padrão real de reclamação e elogio.' },
              { icon: Package, t: 'Demanda e compras', d: 'Previsão por dia e por item, apoio na lista de compras e no combate à ruptura e ao desperdício.' },
              { icon: Sparkles, t: 'Conteúdo em escala', d: 'Roteiro, legenda, descrição de prato, resposta padrão e criativo de anúncio produzidos em minutos.' },
              { icon: Calculator, t: 'Apoio a custo e preço', d: 'Simulação de cenário de CMV, taxa e margem por canal para decidir preço com segurança.' },
              { icon: BarChart3, t: 'Relatório automático', d: 'Resumo semanal de vendas, canais e indicadores em linguagem que o dono entende.' },
              { icon: Users2, t: 'Segmentação de base', d: 'Classificação de clientes por frequência, ticket e recência para campanha de recompra certeira.' },
              { icon: Presentation, t: 'Treino da equipe', d: 'Material de treinamento, script de atendimento e simulação de situação real do salão.' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <Icon className="w-5 h-5 text-yellow-400 mb-2.5" />
                  <h3 className="text-sm font-bold text-white mb-1.5">{c.t}</h3>
                  <p className="text-xs text-white/55 leading-[1.7]">{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offline + parcerias */}
      <section className="py-[72px] bg-background">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-guia-green bg-guia-green-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              Offline e ponto de venda
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Marketing não acaba na tela — <span className="text-guia-green">acaba na mesa</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Muita agência para no anúncio. Eu venho do salão, então enxergo o que acontece depois do clique: como o
              cliente é recebido, o que o cardápio comunica, o que a equipe oferece e o motivo pelo qual ele volta —
              ou não.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'Engenharia de cardápio: destaque para o que dá margem, retirada dos itens que só ocupam espaço',
              'Cardápio impresso e digital com foto, descrição e ordem que aumentam ticket',
              'QR Code e NFC na mesa ligados a cardápio, avaliação e cadastro no CRM',
              'Treinamento de atendimento e venda sugestiva com a equipe de salão',
              'Materiais de PDV: display, encarte na embalagem, adesivo de fachada e sinalização',
              'Ações de bairro, parceria com o comércio vizinho, empresas e condomínios do entorno',
              'Panfletagem e mídia geolocalizada com QR rastreável (dá para medir de verdade)',
              'Datas comemorativas, eventos na casa e calendário de ações para os dias fracos',
              'Padrão de embalagem e experiência de entrega — o delivery também é vitrine',
              'Captação de cadastro no balcão e no salão para alimentar a base própria',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 py-1">
                <CheckCircle2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
                <span className="text-[0.95rem] text-foreground leading-[1.65]">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card rounded-lg p-7 md:p-9 shadow-guia border-l-[5px] border-primary">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Social media e audiovisual: estratégia comigo, produção com parceiros
              </h3>
            </div>
            <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
              Linha editorial, calendário, roteiro, direção de conteúdo e leitura de resultado são meus. Para a
              produção pesada de foto e vídeo, estou montando uma rede de parceiros de confiança em Goiânia — e, em
              paralelo, me estruturando financeiramente para ter equipamento próprio: câmera fotográfica
              profissional, iluminação, microfone de lapela, drone e o restante do kit. Prefiro dizer isso na cara do
              que prometer o que ainda não entrego sozinho.
            </p>
          </div>
        </div>
      </section>

      {/* Setup técnico Meta + Google */}
      <section id="setup-tecnico" className="py-[72px] bg-[#0B1220] text-white">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold tracking-widest uppercase text-sky-300 bg-sky-500/10 border border-sky-400/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
              Serviço exclusivo · Meta + Google
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
              Setup técnico completo —{' '}
              <span className="bg-gradient-to-b from-sky-200 via-sky-400 to-sky-600 bg-clip-text text-transparent">
                a base que quase nenhum negócio local tem
              </span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
              Antes de qualquer verba entrar, a casa precisa de estrutura. Business Manager organizado, contas ligadas
              corretamente, pixel e API de conversões funcionando, catálogo íntegro, Google Ads com conversões reais e
              o Perfil da Empresa no Google configurado para o tipo certo de negócio. Aqui no Brasil a maioria dos
              negócios locais nunca teve isso feito por inteiro — e muita agência cobra à parte ou entrega pela metade.
              Eu faço esse setup do começo ao fim, para qualquer negócio local, com atenção especial ao food service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Settings2 className="w-6 h-6 text-sky-300" />
                <h3 className="font-serif text-xl font-semibold">Meta (Facebook e Instagram)</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  'Business Manager criado e organizado: ativos, permissões, usuários, parceiros e níveis de acesso',
                  'Verificação do negócio, domínio verificado e propriedade dos ativos no nome do dono — nunca da agência',
                  'Conta de anúncios, formas de pagamento, limite de gasto, fuso e moeda corretos',
                  'Pixel instalado, eventos padronizados e API de Conversões (server-side) para não perder dado',
                  'Priorização de eventos com Agregação de Eventos e domínio de destino configurado',
                  'Catálogo de produtos/cardápio, conjuntos e integração com o canal próprio de delivery',
                  'Instagram e página ligados ao BM, caixa unificada, mensagens e botões de ação',
                  'Públicos personalizados, similares, exclusões e regras de remarketing por comportamento',
                  'Nomenclatura de campanha, UTMs e estrutura de conta que dá para ler no relatório',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-sky-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 leading-[1.7]">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-sky-300" />
                <h3 className="font-serif text-xl font-semibold">Google (Ads, Analytics e Perfil da Empresa)</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  'Conta Google Ads estruturada, faturamento, fuso, moeda e acesso administrativo do dono',
                  'GA4 + Google Tag Manager instalados, eventos e conversões importadas de verdade',
                  'Conversões que importam: pedido no canal próprio, clique no WhatsApp, ligação, rota e reserva',
                  'Merchant Center e feed quando o negócio comporta, além de extensões e ativos completos',
                  'Perfil da Empresa no Google: criação, verificação, reivindicação e recuperação de perfil perdido',
                  'Categoria principal e secundárias corretas para o tipo de negócio local (aqui muita casa erra)',
                  'NAP consistente, horários, feriados, área de atendimento, atributos, serviços e cardápio no perfil',
                  'Fotos, posts, perguntas e respostas, produtos e rotina de avaliações com resposta',
                  'Search Console, sitemap, dados estruturados e monitoramento de chamadas e rotas',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-sky-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 leading-[1.7]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: AlertTriangle, t: 'Diagnóstico antes de tudo', d: 'Auditoria do que existe hoje: contas duplicadas, pixel morto, conversão fantasma, perfil suspenso e acesso perdido.' },
              { icon: Utensils, t: 'Food service em destaque', d: 'Setup pensado para pedido: raio de entrega, horário de pico, catálogo do cardápio, rota, ligação e pedido direto.' },
              { icon: Handshake, t: 'Tudo no nome do dono', d: 'Entrego documentado, com acessos no CNPJ do cliente. Se um dia a gente parar, a estrutura fica com a empresa.' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <Icon className="w-5 h-5 text-sky-300 mb-2.5" />
                  <h3 className="text-sm font-bold text-white mb-1.5">{c.t}</h3>
                  <p className="text-xs text-white/55 leading-[1.7]">{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <BibliotecaFoodSection />

      <ParceriasSection />

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
