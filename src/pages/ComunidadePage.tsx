import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, ChevronDown, ChevronUp, Users, BookOpen, Video, 
  Zap, BarChart3, Award, Target, Clock, Gift, Shield, TrendingUp,
  Check, Star, ArrowRight, Briefcase, Sparkles, Phone, Flame,
  Settings, ShoppingCart, TrendingDown, DollarSign, Smartphone, Lightbulb,
  Store, Timer, Utensils, Eye, Lock, Layers, Globe, Cpu, FileText,
  Mountain, GraduationCap, Heart, MapPin
} from 'lucide-react';
import diegoPhoto from '@/assets/diego_comando_estrategico.png';
import chapadaImg from '@/assets/chapada_serra.png';
import logoPrincipal from '@/assets/logo_principal.png';
import isotipo from '@/assets/isotipo.png';

const temas = [
  { icon: BarChart3, title: 'Google Meu Negócio', desc: 'Otimização completa para aparecer nas buscas locais — fotos, avaliações, posts, palavras-chave.' },
  { icon: Target, title: 'Meta Ads (Facebook e Instagram)', desc: 'Campanhas de tráfego pago com segmentação por raio, remarketing e públicos semelhantes.' },
  { icon: TrendingUp, title: 'Google Ads para Delivery', desc: 'Busca local, display, YouTube — apareça quando o cliente pesquisar comida na sua região.' },
  { icon: Briefcase, title: 'iFood — Otimização Completa', desc: 'Fotos, descrições, área de entrega, promoções, avaliações — tudo para vender mais no app.' },
  { icon: Zap, title: 'IA Aplicada ao Food Service', desc: 'Claude, ChatGPT, geração de imagens, automação de WhatsApp — ferramentas que economizam horas.' },
  { icon: BookOpen, title: 'DRE e Precificação', desc: 'Aprenda a precificar corretamente, controlar custos e entender se seu restaurante dá lucro de verdade.' },
  { icon: Users, title: 'WhatsApp Business e ManyChat', desc: 'Automação de atendimento, cardápio digital, chatbot, campanhas de fidelização.' },
  { icon: Video, title: 'Produção de Conteúdo', desc: 'Fotos profissionais com celular, Reels, Stories — conteúdo que atrai clientes sem gastar nada.' },
];

const beneficios = [
  'Acesso vitalício a todos os materiais (e-books, planilhas, checklists)',
  'Aulas ao vivo diárias no Google Meet (07h–19h)',
  'Comunidade exclusiva de donos de restaurantes',
  'Diagnóstico gratuito da sua presença digital',
  'Como usar IA para acelerar tudo no seu negócio',
  'Suporte contínuo direto com Diego Allas',
  'Além do marketing: o que você precisa saber sobre o mercado digital em 2026 que ninguém está te contando',
  'O oculto dos gurus: O que os Gurus do Digital não mostram nos bastidores — e como isso te custou dinheiro e tempo sem você perceber',
  'A fatia do bolo: As mesmas ferramentas que grandes agências usam estão disponíveis por menos de R$100/mês — e eu vou te mostrar como usar cada uma no seu restaurante',
  'O mundo tecnológico real: LLMs, SaaS, MicroSaaS, White Label, B2B, B2C — sem jargão. O que realmente importa para o dono de restaurante crescer em 2026 usando tecnologia que já existe e custa quase nada',
  'e muito mais.',
];

const faqs = [
  { q: 'Preciso ter conhecimento técnico?', a: 'Não. Começamos do zero absoluto. Se você sabe mexer no celular, consegue acompanhar. Cada passo é prático e visual.' },
  { q: 'Como funcionam as aulas ao vivo?', a: 'São sessões no Google Meet com temas específicos, de 07h às 19h. Você escolhe os que fazem sentido para o seu momento. Pode participar com dúvidas e casos reais.' },
  { q: 'Funciona para delivery sem salão físico?', a: 'Especialmente para você. O método foi construído com delivery no centro: iFood, WhatsApp, Google local, campanhas para horário de pico.' },
  { q: 'Posso participar de qualquer cidade?', a: 'Sim. Tudo é digital — SEO local, Google Meu Negócio, Meta Ads com segmentação por raio. Funciona em qualquer cidade do Brasil.' },
  { q: 'O valor vai aumentar?', a: 'Sim. O preço de entrada é R$97 na primeira semana. Depois sobe progressivamente. Quem entra primeiro paga menos e tem acesso a tudo.' },
  { q: 'Tem garantia?', a: 'Você entra agora e só paga depois de 7 dias. Se em 7 dias você não sentir que valeu, não paga nada. Simples assim.' },
  { q: 'O que está incluído na mentoria individual?', a: 'Sessões ao vivo na sua máquina onde fazemos juntos cada setup — Google Ads, iFood, Meta Business, Cardápio Web, Repediu e mais. Disponível exclusivamente para membros ativos da comunidade.' },
  { q: 'Como funciona o sorteio de 6 meses grátis?', a: 'Uma empresa da comunidade será sorteada para receber audiovisual profissional + tráfego pago (Google e Meta) por 6 meses, com investimento incluso. Basta ser membro ativo.' },
  { q: 'Diego tem experiência prática ou só teoria?', a: 'São 12 anos no chão do food service e logística — cozinha, balcão, expedição, câmara fria, comércio exterior. Mais 10.000 horas em marketing 360°. Tudo documentado e comprovável ao vivo.' },
  { q: 'O que é "transparência total"?', a: 'Mostro ao vivo: comprovantes de cursos, passagens, certificações, investimentos, resultados de campanhas. Pessoalmente ou via Google Meet — sem filtro, sem edição.' },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-semibold text-foreground text-base pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-guia-text-muted text-sm leading-relaxed">{a}</p>}
    </div>
  );
};

const ComunidadePage = () => {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-yellow-600/20 px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <img src={isotipo} alt="DA" className="w-10 h-10 flex-shrink-0" />
          <div>
            <h1 className="text-lg font-bold text-yellow-400 leading-tight tracking-tight">Gotas de Transbordo</h1>
            <p className="text-xs text-white/50">por Diego Allas • ALLBIZ DIGITAL</p>
          </div>
        </Link>
        <a
          href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform inline-flex items-center gap-2 no-underline"
        >
          <MessageCircle className="w-4 h-4" /> Entrar agora
        </a>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden text-center py-20 px-6" style={{ background: 'linear-gradient(135deg, #0D1117 0%, #1B2838 50%, #0F2660 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(200,146,42,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-300 text-sm px-4 py-2 rounded-full mb-6 font-medium">
            <Sparkles className="w-4 h-4" /> Preço de lançamento — R$97 na primeira semana
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Seu restaurante merece <em className="text-yellow-300 not-italic">transbordar</em> de clientes.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Comunidade exclusiva para donos de restaurantes e food service. Diagnóstico gratuito + aulas ao vivo diárias + materiais completos + suporte direto com quem investiu +R$100k para dominar marketing digital aplicado ao food.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2497."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 text-base font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg no-underline"
            >
              Quero entrar por R$97 <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#metodo" className="border-2 border-white/30 text-white text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/10 no-underline">
              Ver como funciona
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-sm">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Aulas ao vivo 07h–19h</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Comunidade exclusiva</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> 7 dias grátis para testar</span>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-[72px] bg-muted/30">
        <div className="container max-w-4xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">A realidade do mercado</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-8">
            Você sabe que precisa. <span className="text-primary">Mas o dia não para.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Settings, title: 'Preso no operacional', desc: 'Resolve problema atrás de problema. Zero tempo para pensar em marketing.' },
              { icon: BookOpen, title: 'Comprou cursos, não aplicou', desc: 'Materiais na gaveta que nunca viraram resultado porque o delivery não para.' },
              { icon: TrendingDown, title: 'Google Meu Negócio esquecido', desc: 'Sua presença digital desatualizada enquanto o concorrente aparece na frente.' },
              { icon: DollarSign, title: 'iFood comendo a margem', desc: 'Taxa alta, sem saber quem é seu cliente nem como trazê-lo de volta.' },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-guia-blue-light flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-guia-text-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-card rounded-lg p-8 shadow-guia border-l-[5px] border-primary">
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "O básico bem feito no digital já coloca você <span className="text-primary font-semibold">na frente de 80% dos restaurantes</span> que não fazem nada direito."
            </p>
            <p className="text-sm text-guia-text-muted mt-3">— Diego Allas, 24 anos entre food service, logística e marketing 360°</p>
          </div>
        </div>
      </section>

      {/* O que você aprende */}
      <section id="metodo" className="py-[72px]">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">O cardápio de temas</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              O que você vai <span className="text-primary">aprender e aplicar</span>
            </h2>
            <p className="text-guia-text-muted mt-3 max-w-2xl mx-auto">Cada tema vira aula prática. O que funciona no case real, você aplica no seu restaurante na mesma semana.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {temas.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia transition-all hover:-translate-y-1 hover:shadow-guia-lg">
                <div className="w-11 h-11 rounded-xl bg-guia-blue-light flex items-center justify-center mb-3">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-base font-semibold text-primary mb-1.5">{t.title}</h3>
                <p className="text-sm text-guia-text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Os 7 Passos */}
      <section className="py-[72px] bg-guia-blue-light">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-white inline-block px-3.5 py-1.5 rounded-full mb-3.5">A metodologia</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Os 7 passos das <span className="text-primary">Gotas de Transbordo</span>
            </h2>
          </div>
          <div className="flex flex-col relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/10" />
            {[
              { n: 1, t: 'Apresentação', d: 'Diagnóstico gratuito — você descobre onde está perdendo clientes.' },
              { n: 2, t: 'Confiança', d: 'Mostramos o que funciona de verdade no food — sem vender sonho.' },
              { n: 3, t: 'Transbordo', d: 'O conhecimento transborda: materiais, checklists, aulas ao vivo e IA.' },
              { n: 4, t: 'Parceria', d: 'A comunidade conecta donos de restaurantes no mesmo caminho.' },
              { n: 5, t: 'Relacionamento', d: 'Aulas contínuas, evolução progressiva, resultado semana a semana.' },
              { n: 6, t: 'Indicação', d: 'Quem cresce indica. Quem indica acumula benefícios.' },
              { n: 7, t: 'Apoio', d: 'Suporte contínuo para nunca ficar emperrado.' },
            ].map((p) => (
              <div key={p.n} className="flex gap-6 relative pb-8 last:pb-0">
                <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-semibold relative z-10 shadow-[0_0_0_6px_hsl(var(--guia-blue-light))]">
                  {p.n}
                </div>
                <div className="bg-card rounded-lg p-6 flex-1 shadow-guia">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">{p.t}</h3>
                  <p className="text-sm text-guia-text-muted">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-[72px]">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Público ideal</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Feito para você, <span className="text-primary">se…</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Utensils, title: 'Tem hamburgueria, pizzaria ou restaurante', desc: 'Delivery ou salão — o método funciona para qualquer operação food service.' },
              { icon: Smartphone, title: 'Nunca fez marketing digital de verdade', desc: 'Começamos do zero, passo a passo, sem jargão.' },
              { icon: Timer, title: 'Não tem tempo para estudar sozinho', desc: 'Aulas ao vivo curtas e práticas. Aplique no mesmo dia.' },
              { icon: Cpu, title: 'Quer aprender a usar IA no negócio', desc: 'Automação, geração de imagens, chatbots — linguagem simples.' },
              { icon: Store, title: 'iFood esquecido ou mal configurado', desc: 'Otimizamos tudo para você aparecer mais e vender mais.' },
              { icon: Lightbulb, title: 'Quer resultado, não só conhecimento', desc: 'Cada aula tem uma ação. O método é para quem executa.' },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-guia-blue-light flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-guia-text-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-[72px]" style={{ background: 'linear-gradient(135deg, rgba(15,38,96,0.04) 0%, transparent 50%, rgba(43,108,176,0.04) 100%)' }}>
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">O que você recebe</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Tudo isso por <span className="text-primary">R$97</span> na primeira semana
            </h2>
            <p className="text-guia-text-muted mt-3 max-w-xl mx-auto">Depois o valor sobe progressivamente. Quem entra primeiro paga menos e tem acesso a tudo — para sempre.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free column */}
            <div className="bg-card rounded-xl shadow-guia overflow-hidden">
              <div className="p-6 bg-muted/50 border-b border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-guia-text-muted mb-2">Entrada</p>
                <h3 className="font-serif text-xl font-semibold text-foreground">Diagnóstico Gratuito</h3>
                <p className="font-serif text-4xl font-bold text-primary mt-2">R$0</p>
                <p className="text-xs text-guia-text-muted mt-1">Completamente gratuito</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Análise do Google Meu Negócio',
                    'Auditoria do iFood',
                    'Revisão do Instagram e WhatsApp',
                    'Identificação dos 3 pontos críticos',
                    'Plano de ação para 30 dias',
                    'Sessão de 30 min no Google Meet',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-guia-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20agendar%20meu%20diagn%C3%B3stico%20gratuito."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center border-2 border-primary text-primary font-semibold py-3 rounded-full hover:bg-primary hover:text-white transition-colors no-underline"
                >
                  Agendar diagnóstico gratuito
                </a>
              </div>
            </div>

            {/* Paid column */}
            <div className="bg-card rounded-xl shadow-guia-lg overflow-hidden border-2 border-primary relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary" />
              <div className="p-6 bg-primary/5 border-b border-primary/20">
                <div className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-2">
                  <Flame className="w-3 h-3" /> Mais popular
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Gotas de Transbordo</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="font-serif text-4xl font-bold text-primary">R$97</p>
                  <span className="text-sm text-guia-text-muted line-through">R$297</span>
                </div>
                <p className="text-xs text-guia-text-muted mt-1">Preço de lançamento — sobe após a 1ª semana</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {beneficios.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2497."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors no-underline"
                >
                  Quero entrar por R$97 →
                </a>
                <p className="text-center text-xs text-guia-text-muted mt-4 leading-relaxed px-2">
                  Você entra agora. Só paga depois de 7 dias. Acesso imediato à comunidade, aos materiais e às aulas ao vivo — sem cartão, sem compromisso. Se em 7 dias você não sentir que valeu, não paga nada. Simples assim. Fazemos diferente porque acreditamos no que entregamos.
                </p>
              </div>
            </div>
          </div>

          {/* Mentoria Individual */}
          <div className="mt-8 bg-card rounded-xl p-8 md:p-10 shadow-guia border-l-[5px] border-primary">
            <div className="flex items-start gap-4 mb-6">
              <Star className="w-7 h-7 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">Mentoria Individual — só para membros da comunidade</h4>
                <p className="text-base text-guia-text-muted leading-relaxed">
                  Quer sair do zero mais rápido do que as aulas em grupo permitem? A mentoria individual é o atalho.
                </p>
              </div>
            </div>

            <p className="text-base leading-[1.75] mb-6">
              Entramos ao vivo na sua máquina — eu e você — e fazemos juntos cada setup do início ao fim. Sem enrolação, sem teoria. Você sai da sessão com tudo funcionando e sabendo o que fazer na semana seguinte.
            </p>

            <h5 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> O que resolvemos juntos na mentoria:
            </h5>

            <div className="space-y-3 mb-8">
              {[
                { icon: BarChart3, text: 'Google Meu Negócio + SEO local — seu restaurante aparecendo nas buscas certas, no bairro certo, na hora que o cliente está com fome' },
                { icon: Target, text: 'Meta Business completo — Instagram, Facebook, WhatsApp Business, Direct e Messenger centralizados num lugar só, sem perder nenhuma conversa' },
                { icon: ShoppingCart, text: 'iFood na prática — gestão real do painel: fotos, cardápio, avaliações, tempo de entrega, taxa de cancelamento e como usar o iFood Ads sem jogar dinheiro fora' },
                { icon: Globe, text: 'Cardápio Web — configuração, integração com o delivery e como usar para criar um canal próprio e parar de depender 100% do iFood' },
                { icon: Users, text: 'Repediu — como usar o CRM para recuperar clientes que sumiram, mandar campanha de WhatsApp que gera pedido de verdade e não virar spam' },
                { icon: BarChart3, text: 'Reportei e mLabs — entender os dados que aparecem nos relatórios e o que fazer com eles na prática, sem precisar ser analista' },
                { icon: Layers, text: 'Integração com PDV — como conectar seu sistema de caixa com as plataformas de delivery para parar de digitar pedido na mão e ter dados reais de faturamento' },
                { icon: MessageCircle, text: 'Gestão do delivery próprio — estrutura de WhatsApp Business, catálogo, mensagem automática, confirmação de pedido e pesquisa de satisfação no piloto automático' },
                { icon: TrendingUp, text: 'Primeiros anúncios no ar — Meta Ads e Google Ads configurados com verba pequena, segmentação local e rastreamento correto desde o primeiro dia' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-guia-blue-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-guia-text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-guia-blue-light rounded-lg p-5 mb-4">
              <p className="text-sm font-semibold text-primary mb-1">A partir de R$97 · Sessão única ou pacote completo</p>
              <p className="text-xs text-guia-text-muted">Disponível exclusivamente para membros ativos da comunidade. Vagas limitadas por semana — atendimento sob agendamento.</p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <p className="text-sm text-foreground italic leading-relaxed">
                "Se você paga o Repediu, o Cardápio Web e o iFood todo mês e ainda não sabe se está funcionando — essa mentoria é exatamente para você."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sorteio */}
      <section className="py-[72px] bg-guia-blue-light">
        <div className="container max-w-3xl text-center">
          <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
            Sorteio: <span className="text-primary">6 meses grátis</span>
          </h2>
          <p className="text-guia-text-muted text-base leading-relaxed max-w-xl mx-auto mb-6">
            Uma empresa da comunidade será sorteada para receber <strong>audiovisual profissional + tráfego pago (Google e Meta) por 6 meses</strong> — com investimento incluso. 
            Valor real: mais de R$15.000. Custo para você: R$0.
          </p>
          <p className="text-sm text-guia-text-muted">Para participar, basta ser membro ativo da comunidade Gotas de Transbordo.</p>
        </div>
      </section>

      {/* Quem está por trás */}
      <section className="py-[72px]">
        <div className="container max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Quem está por trás</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Da ponta da Serra na Chapada do Araripe para <span className="text-primary">transformar negócios</span>
            </h2>
          </div>

          {/* Serra image */}
          <div className="rounded-2xl overflow-hidden shadow-guia-lg mb-10">
            <img src={chapadaImg} alt="Serra da Chapada do Araripe — onde Diego estuda isolado há mais de 2 anos" className="w-full h-auto object-cover max-h-[400px]" />
            <div className="bg-card px-6 py-3 text-center">
              <p className="text-xs text-guia-text-muted italic">Chapada do Araripe, PE — onde o silêncio vira foco e o foco vira resultado</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-guia-lg">
                <img 
                  src={diegoPhoto} 
                  alt="Diego Allas — Estratégia & Escala" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Bio */}
            <div className="md:col-span-3 bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary">
              <p className="text-base leading-[1.75] mb-4">
                Sou <strong>Diego Allas</strong> — consultor empresarial especializado em marketing digital e operações para food service.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Não cheguei aqui pelo caminho curto. São <strong>12 anos no chão do food service</strong> — cozinha, balcão, delivery, expedição, cliente reclamando na porta, motoboy sumindo, pedido errado saindo. Não como consultor. Como operador. Como quem viveu cada problema que hoje ajuda a resolver.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                São também <strong>12 anos em logística e supply chain</strong> — transporte, armazenagem, câmara fria, produção, comércio exterior e despacho aduaneiro. Atuei lado a lado com times de Qualidade e Conformidade em processos de certificação e atendimento regulatório junto ao <strong>MAPA e à ANVISA</strong>, além da aplicação de padrões internacionais como <strong>GlobalG.A.P., HACCP e ISO 22000</strong>, garantindo requisitos para exportação, rastreabilidade e segurança de alimentos.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Também participei de processos ligados ao <strong>OEA</strong> e auditorias internas e externas de qualidade, com foco em conformidade regulatória e melhoria contínua. Essa vivência consolidou um olhar crítico e preventivo — o <strong>"olho de auditor"</strong> — capaz de identificar desvios, mitigar riscos operacionais e assegurar a integridade dos processos antes que se tornem problemas.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Desde 2023, isolado na Chapada do Araripe, mergulhei numa terceira jornada. Mais de <strong>10.000 horas</strong> — não só de marketing digital, mas de marketing em sua visão mais completa: online e offline, imprensa e influência, audiovisual e produção de conteúdo, automação e inteligência artificial, programação básica e no-code, SaaS, MicroSaaS, White Label, B2B e B2C. Estudei os grandes nomes do mercado e os pequenos que já estão pegando a fatia sem que ninguém tenha percebido. Fui fundo no que está oculto por trás dos bastidores — o que funciona de verdade, o que é promessa embrulhada em palco e o que está mudando o jogo em silêncio.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Sou pai de três filhos. Um deles, <strong>Matheus</strong>, tem síndrome de Dandy-Walker e precisa de cuidados e especialistas que só existem em Goiânia — <strong>CRER, Pestalozzi, Hospital das Clínicas</strong>. A mudança planejada até dezembro de 2026 não é só estratégia de mercado. É missão de família. Cada restaurante que cresce com esse método é um passo nessa direção.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Não trabalho com volume. Trabalho com precisão. Não subo o volume antes de saber se a operação aguenta. Como um botão de temperatura que sobe devagar — no ritmo certo, na dose certa, sem queimar o que foi construído.
              </p>
              <p className="text-base leading-[1.75] mb-4">
                Porque número é consequência. A causa mora no processo, na equipe, na cozinha, no estoque e na cabeça do dono.
              </p>
              <p className="text-base leading-[1.75]">
                E eu conheço esse lugar. <strong>Porque já estive lá.</strong>
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['ESPM Marketing Digital', 'Google Certified', 'Meta Blueprint', 'Placa 100K', '12 anos Food & Logística', '10.000h Marketing Digital'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-guia-blue-light text-primary">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="text-primary font-semibold no-underline hover:underline inline-flex items-center gap-1">
              Conheça minha história completa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[72px] bg-muted/30">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Dúvidas</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Perguntas <span className="text-primary">frequentes</span>
            </h2>
          </div>
          <div className="bg-card rounded-lg shadow-guia p-8">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center text-white" style={{ background: 'linear-gradient(135deg, #0F2660 0%, #1B3F8A 50%, #0D1117 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Cada dia sem marketing é dinheiro na mesa do <em className="text-yellow-300 not-italic">concorrente.</em>
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Entre agora por R$97 e comece a transformar seu restaurante. Diagnóstico gratuito incluído. 7 dias grátis para testar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2497."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 text-lg font-bold px-10 py-4 rounded-full inline-flex items-center gap-2.5 hover:bg-yellow-300 hover:-translate-y-0.5 transition-all shadow-lg no-underline"
            >
              Quero entrar por R$97 <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20agendar%20meu%20diagn%C3%B3stico%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 hover:bg-white/10 transition-all no-underline"
            >
              <Phone className="w-5 h-5" /> Diagnóstico gratuito
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/40 text-sm mt-6">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> Pagamento seguro</span>
            <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> Suporte direto</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> 7 dias grátis</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0D1117' }}>
        <p className="font-semibold text-white/80 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" /> Gotas de Transbordo • ALLBIZ DIGITAL
        </p>
        <p className="mt-2">© 2026 Diego Allas • Chapada do Araripe, PE → Goiânia, GO</p>
        <p className="mt-2 text-xs opacity-50">Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default ComunidadePage;