import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
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
  'Dependência quase total do marketplace: a casa vive de um único canal e paga comissão que vai de ~12% (entrega própria) a 27–30% quando entra a logística do app.',
  'Não existe canal próprio de delivery — nenhum cardápio digital, nenhum link direto, nenhum pedido chegando sem intermediário.',
  'Preço definido "no olho", sem ficha técnica nem CMV real — o prato que mais vende costuma ser o que menos dá lucro.',
  'Margem por canal desconhecida: ninguém sabe quanto sobra de um pedido do salão, do app e do WhatsApp.',
  'Perfil da Empresa no Google abandonado e ausência nas respostas de ChatGPT, Gemini e Perplexity — fora do mapa e fora da busca por IA.',
  'Tráfego pago sem setup técnico correto — pixel, conversões e catálogo mal configurados queimando verba.',
  'Base de clientes perdida: nenhum CRM, nenhuma recompra trabalhada, nenhuma lista para reativar em dia fraco.',
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
    icon: BarChart3,
    title: 'Dados e indicadores',
    desc: 'Painel simples com o que importa: origem da venda, ticket médio por canal, curva ABC, taxa de recompra, custo de aquisição e margem real. Decisão com número, não com achismo.',
  },
  {
    icon: Settings2,
    title: 'Setup técnico ponta a ponta',
    desc: 'Contas, pixel, tags, eventos, conversões, catálogo, UTMs e rastreamento — Google e Meta configurados corretamente desde a base, além da implantação e integração das ferramentas do setor.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento e aulas presenciais',
    desc: 'Treinamento para dono, gestão, cozinha e salão: atendimento, venda sugestiva, padrão de serviço, uso das ferramentas e leitura de indicadores. Presencial sempre.',
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
    title: 'Presencial, PDV e comunidade local',
    desc: 'QR Code e NFC na mesa, venda sugestiva no salão, captação de cadastro no balcão e parceria com o comércio vizinho.',
  },
];

const formatos = [
  {
    icon: Presentation,
    title: 'Diagnóstico presencial',
    desc: 'Leitura completa da operação, dos canais e dos números, com relatório de prioridades e plano de ação. É o ponto de partida de qualquer trabalho comigo.',
  },
  {
    icon: Handshake,
    title: 'Projeto de implantação',
    desc: 'Escopo fechado para uma frente específica: setup técnico Meta e Google, canal próprio de delivery, SEO local e GEO, CRM, precificação ou engenharia de cardápio.',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento mensal',
    desc: 'Condução do marketing 360º e da gestão comercial da casa: rotina, calendário, tráfego, indicadores e reuniões presenciais com a direção.',
  },
];



const provas = [
  { icon: Utensils, t: '10+ anos dentro da operação', d: 'Cozinha, salão, gerência, compras e escritório — inclusive gestão de rede de pastelaria com matriz e 3 filiais.' },
  { icon: Settings2, t: 'Setup técnico Meta + Google', d: 'BM, pixel, API de Conversões, GA4, Ads e Perfil da Empresa configurados do zero, no CNPJ do dono.' },
  { icon: GraduationCap, t: 'Ciência de Dados e IA · PUC Goiás', d: 'Graduação em andamento, aplicada em indicadores, previsão de demanda e IA na operação.' },
  { icon: BookOpen, t: 'Acervo público e gratuito', d: 'Aulas, e-books, apps e podcast do food service abertos para qualquer dono — antes de qualquer proposta.' },
];

const FoodServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Marketing 360º para food service em Goiânia · Diego Allas';
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
            Marketing 360º e gestão para food service · Goiânia
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
            Eu construo o{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              marketing que falta
            </span>{' '}
            dentro do seu restaurante
          </h1>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-[1.8]">
            Canal próprio de delivery, setup técnico Meta e Google, SEO local e GEO, CRM e recompra, precificação e
            indicadores reais. Mais de 10 anos de operação de food service somados à parte técnica que quase nenhuma
            casa tem feita por inteiro — implantação de verdade, presencial, com a equipe treinada e a estrutura no
            nome do dono.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              <MessageCircle className="w-4 h-4" /> Solicitar diagnóstico
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-yellow-500/40 hover:bg-yellow-500/10 text-yellow-300 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              O que eu implanto
            </a>
            <a
              href="#biblioteca"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors no-underline"
            >
              Meu acervo público
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Utensils, t: '10+ anos de food service', s: 'Cozinha, salão, gerência, compras e escritório' },
              { icon: Settings2, t: 'Setup técnico Meta + Google', s: 'BM, pixel, CAPI, GA4, Ads e Perfil da Empresa' },
              { icon: MapPin, t: 'Goiânia-GO · presencial', s: 'Implantação e treinamento dentro da casa' },
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

      {/* Índice */}
      <nav className="bg-[#0D1117] border-b border-white/10 px-4 md:px-6 py-4">
        <div className="container max-w-5xl">
          <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-3">Navegue pela página</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '#como-eu-comeco', label: 'Meu método' },
              { href: '#dores', label: 'Dores do food service' },
              { href: '#servicos', label: 'O que eu implanto' },
              { href: '#canais', label: 'Canais de aquisição' },
              { href: '#seo-geo', label: 'SEO local + GEO' },
              { href: '#ia', label: 'IA aplicada' },
              { href: '#setup-tecnico', label: 'Setup Meta + Google' },
              { href: '#biblioteca', label: 'Acervo público' },
              { href: '#parcerias', label: 'Programa de Parcerias' },
              { href: '#formatos', label: 'Como eu trabalho' },
              { href: '#contato', label: 'Solicitar diagnóstico' },
            ].map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-yellow-500/40 px-3 py-1.5 rounded-full transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Método */}
      <section id="como-eu-comeco" className="py-[72px] bg-background">
        <div className="container max-w-4xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Meu método
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Diagnóstico <span className="text-primary">dentro da operação</span> — não a partir de um slide
          </h2>
          <div className="mt-6 bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.8]">
            <p>
              Antes de propor qualquer coisa, eu leio a casa: cardápio, ficha técnica, CMV, mix de canais, margem por
              pedido, fluxo de salão, rotina de equipe, perfil no Google, estrutura de contas e histórico de
              avaliações. Vem de mais de 10 anos de food service — cozinha, salão, gerência, compras e escritório —
              somados à parte técnica de marketing, dados e IA.
            </p>
            <p className="mt-4">
              O resultado é um diagnóstico com nome de prato, horário fraco, número real e prioridade definida. A
              partir dele eu digo o que dá para resolver em 30 dias, o que é estrutural e o que não vale a pena fazer
              agora. Quando o encaixe não existe, eu falo — é mais barato para todo mundo.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', t: 'Leitura da operação', d: 'Visita presencial, dados, canais e conversa com dono e equipe.' },
              { n: '02', t: 'Diagnóstico priorizado', d: 'O que sangra dinheiro hoje e o que sustenta crescimento depois.' },
              { n: '03', t: 'Implantação', d: 'Setup técnico, canal próprio, CRM, SEO local, tráfego e treinamento.' },
              { n: '04', t: 'Indicadores', d: 'Margem por canal, recompra, CAC e origem da venda em rotina mensal.' },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-lg p-5 shadow-guia border-t-[4px] border-primary">
                <span className="font-serif text-2xl font-semibold text-primary">{s.n}</span>
                <h3 className="font-serif text-base font-semibold text-foreground mt-1.5 mb-1.5">{s.t}</h3>
                <p className="text-sm text-guia-text-muted leading-[1.7]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Dores */}
      <section id="dores" className="py-[72px] bg-secondary/40">
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
      <section id="offline" className="py-[72px] bg-background">
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
      <section id="formatos" className="py-[72px] bg-secondary/40">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              Como eu trabalho
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Três formatos, um mesmo <span className="text-primary">padrão de entrega</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Atendo um número limitado de casas em Goiânia, sempre presencialmente. A porta de entrada é o
              diagnóstico: sem entender a operação por dentro, eu não proponho nada.
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
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Como eu conduzo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                'Escopo, prazo, indicadores e valor definidos antes de começar.',
                'Trabalho por projeto ou mensalidade — atuação como prestador, não como funcionário.',
                'Treinamento e implantação presenciais: ferramenta configurada e equipe usando de verdade.',
                'Todos os ativos no CNPJ do cliente. Se a parceria acabar, a estrutura fica com a empresa.',
                'Relatório com número real de origem de venda, margem por canal e recompra.',
                'Discrição total com receitas, custos e informações da casa.',
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
      <section id="contato" className="py-[72px] bg-[#0D1117] text-white px-4">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
            Solicite um{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              diagnóstico
            </span>{' '}
            da sua operação
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
            Eu trabalho com poucas casas por vez, porque implantação séria exige presença. Me conte o momento do seu
            negócio: se houver encaixe, eu vou até a operação, faço a leitura técnica e volto com um diagnóstico
            honesto — sem promessa de milagre.
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
            Diego Allas · Goiânia-GO · marketing 360º, delivery e gestão para food service
          </p>
        </div>
      </section>


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FoodServicePage;
