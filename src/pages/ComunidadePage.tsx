import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, ChevronDown, ChevronUp, Users, BookOpen, Video, 
  Zap, BarChart3, Award, Target, Clock, Gift, Shield, TrendingUp,
  Check, Star, ArrowRight, Briefcase, Sparkles, Phone
} from 'lucide-react';

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
  'Certificado de participação',
  'Acesso ao projeto em tempo real — cada conquista documentada',
  'Suporte contínuo direto com Diego Allas',
];

const faqs = [
  { q: 'Preciso ter conhecimento técnico?', a: 'Não. Começamos do zero absoluto. Se você sabe mexer no celular, consegue acompanhar. Cada passo é prático e visual.' },
  { q: 'Como funcionam as aulas ao vivo?', a: 'São sessões no Google Meet com temas específicos, de 07h às 19h. Você escolhe os que fazem sentido para o seu momento. Pode participar com dúvidas e casos reais.' },
  { q: 'Funciona para delivery sem salão físico?', a: 'Especialmente para você. O método foi construído com delivery no centro: iFood, WhatsApp, Google local, campanhas para horário de pico.' },
  { q: 'Posso participar de qualquer cidade?', a: 'Sim. Tudo é digital — SEO local, Google Meu Negócio, Meta Ads com segmentação por raio. Funciona em qualquer cidade do Brasil.' },
  { q: 'O valor vai aumentar?', a: 'Sim. O preço de entrada é R$39 na primeira semana. Depois sobe progressivamente. Quem entra primeiro paga menos e tem acesso a tudo.' },
  { q: 'Tem garantia?', a: 'Se em 7 dias você sentir que não é pra você, devolvemos 100% do valor. Sem burocracia, sem pergunta.' },
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 px-6 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-11 h-11 bg-primary rounded-[14px] flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold text-primary leading-tight">Gotas de Transbordo</h1>
            <p className="text-xs text-guia-text-muted">por Diego Allas • ALLBIZ DIGITAL</p>
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
            <Sparkles className="w-4 h-4" /> Preço de lançamento — R$39 na primeira semana
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Seu restaurante merece <em className="text-yellow-300 not-italic">transbordar</em> de clientes.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Comunidade exclusiva para donos de restaurantes e food service. Diagnóstico gratuito + aulas ao vivo diárias + materiais completos + suporte direto com quem investiu +R$100k para dominar marketing digital aplicado ao food.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2439."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 text-base font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-yellow-300 hover:-translate-y-0.5 shadow-lg no-underline"
            >
              Quero entrar por R$39 <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#metodo" className="border-2 border-white/30 text-white text-base font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all hover:bg-white/10 no-underline">
              Ver como funciona
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-sm">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Aulas ao vivo 07h–19h</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Comunidade exclusiva</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Garantia de 7 dias</span>
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
              { emoji: '⚙️', title: 'Preso no operacional', desc: 'Resolve problema atrás de problema. Zero tempo para pensar em marketing.' },
              { emoji: '📚', title: 'Comprou cursos, não aplicou', desc: 'Materiais na gaveta que nunca viraram resultado porque o delivery não para.' },
              { emoji: '📉', title: 'Google Meu Negócio esquecido', desc: 'Sua presença digital desatualizada enquanto o concorrente aparece na frente.' },
              { emoji: '💸', title: 'iFood comendo a margem', desc: 'Taxa alta, sem saber quem é seu cliente nem como trazê-lo de volta.' },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{p.emoji}</span>
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
            <p className="text-sm text-guia-text-muted mt-3">— Diego Allas, após 12 anos no chão de food service</p>
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
              { emoji: '🍔', title: 'Tem hamburgueria, pizzaria ou restaurante', desc: 'Delivery ou salão — o método funciona para qualquer operação food service.' },
              { emoji: '📵', title: 'Nunca fez marketing digital de verdade', desc: 'Começamos do zero, passo a passo, sem jargão.' },
              { emoji: '⏰', title: 'Não tem tempo para estudar sozinho', desc: 'Aulas ao vivo curtas e práticas. Aplique no mesmo dia.' },
              { emoji: '📱', title: 'Quer aprender a usar IA no negócio', desc: 'Automação, geração de imagens, chatbots — linguagem simples.' },
              { emoji: '🏪', title: 'iFood esquecido ou mal configurado', desc: 'Otimizamos tudo para você aparecer mais e vender mais.' },
              { emoji: '💡', title: 'Quer resultado, não só conhecimento', desc: 'Cada aula tem uma ação. O método é para quem executa.' },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{p.emoji}</span>
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
              Tudo isso por <span className="text-primary">R$39</span> na primeira semana
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
                <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-2">
                  🔥 Mais popular
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Gotas de Transbordo</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="font-serif text-4xl font-bold text-primary">R$39</p>
                  <span className="text-sm text-guia-text-muted line-through">R$197</span>
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
                  href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2439."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors no-underline"
                >
                  Quero entrar por R$39 →
                </a>
                <p className="text-center text-xs text-guia-text-muted mt-3">Garantia de 7 dias • Acesso imediato</p>
              </div>
            </div>
          </div>

          {/* Upsell */}
          <div className="mt-6 bg-card rounded-lg p-6 shadow-guia flex gap-4 items-start">
            <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Mentoria Individual (para membros)</h4>
              <p className="text-sm text-guia-text-muted">Quer ir mais rápido? A mentoria individual por <strong className="text-primary">R$500</strong> é o atalho: entramos ao vivo na sua máquina e fazemos juntos cada setup — do Google Ads ao ManyChat.</p>
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
        <div className="container max-w-4xl">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Quem está por trás</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Da ponta da Serra para <span className="text-primary">transformar negócios</span>
            </h2>
          </div>
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary">
            <p className="text-base leading-[1.75] mb-4">
              Sou <strong>Diego Allas</strong> — consultor empresarial especializado em marketing digital para food service. <strong>12 anos dentro do chão de restaurante</strong>: cozinha, balcão, delivery, operação. Não falo sobre o que li — eu vivi.
            </p>
            <p className="text-base leading-[1.75] mb-4">
              Hoje estudo <strong>12 horas por dia</strong> isolado na Chapada do Araripe, dominando cada ferramenta do marketing digital moderno — para chegar em Goiânia pronto para transformar negócios com <strong>resultado real, não promessa</strong>.
            </p>
            <p className="text-base leading-[1.75] mb-4">
              Tenho um filho especial que precisa de cuidados contínuos em Goiânia. Cada restaurante que cresce com meu método é um passo nessa missão maior. <strong>Não é só negócio — é propósito.</strong>
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['ESPM Marketing Digital', 'Google Certified', 'Meta Blueprint', 'Placa 100K', '12 anos Food Service'].map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-guia-blue-light text-primary">{tag}</span>
              ))}
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
            Entre agora por R$39 e comece a transformar seu restaurante. Diagnóstico gratuito incluído. Garantia de 7 dias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Quero%20entrar%20na%20comunidade%20Gotas%20de%20Transbordo%20por%20R%2439."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 text-lg font-bold px-10 py-4 rounded-full inline-flex items-center gap-2.5 hover:bg-yellow-300 hover:-translate-y-0.5 transition-all shadow-lg no-underline"
            >
              Quero entrar por R$39 <ArrowRight className="w-5 h-5" />
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
            <span>🔒 Pagamento seguro</span>
            <span>💬 Suporte direto</span>
            <span>📱 Acesso imediato</span>
            <span>🤝 Garantia 7 dias</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0D1117' }}>
        <p className="font-semibold text-white/80">💧 Gotas de Transbordo • ALLBIZ DIGITAL</p>
        <p className="mt-2">© 2026 Diego Allas • Chapada do Araripe, PE → Goiânia, GO</p>
        <p className="mt-2 text-xs opacity-50">Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default ComunidadePage;
