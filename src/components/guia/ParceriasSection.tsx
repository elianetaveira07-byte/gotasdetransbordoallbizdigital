import {
  Download,
  MessageCircle,
  Handshake,
  ShieldCheck,
  CalendarClock,
  Users2,
  Wrench,
  Target,
  Sparkles,
  TrendingUp,
  Network,
  BadgeCheck,
  Lock,
  MapPinned,
  Gauge,
} from 'lucide-react';

import pdfAsset from '@/assets/parcerias_allbiz.pdf.asset.json';
import heroImg from '@/assets/parcerias_hero.jpg';
import redeImg from '@/assets/parcerias_rede.jpg';
import setupImg from '@/assets/parcerias_setup.jpg';

const WA =
  'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Quero%20entender%20o%20Programa%20de%20Parcerias%20ALLBIZ.';

const pilares = [
  {
    icon: CalendarClock,
    title: 'Parceria de 6 meses, sem fidelidade',
    desc: 'Seis meses é o tempo mínimo honesto para estruturar e medir. Mas não existe contrato amarrado: o parceiro sai quando quiser.',
  },
  {
    icon: Handshake,
    title: 'Não é agência, é acompanhamento',
    desc: 'Consultoria prática, dentro da realidade do negócio local. Processo + presença, sem promessa milagrosa e sem guru.',
  },
  {
    icon: TrendingUp,
    title: 'Base, processo e crescimento',
    desc: 'Primeiro a fundação técnica. Depois a rotina de marketing. Só então a escala — nessa ordem, sempre.',
  },
];

const investimento = [
  { label: 'Primeira mensalidade', value: 'R$ 500', note: 'entrada do Plano Parceiro' },
  { label: 'Demais mensalidades', value: 'R$ 700', note: 'R$ 500 com indicação no mês' },
  { label: 'Setup técnico 48h', value: 'R$ 1.400', note: 'taxa única, abatível por indicações' },
];

const setupItens = [
  'Meta Business estruturado profissionalmente (BM, ativos, permissões).',
  'Organização de contas, páginas, catálogos e pixels no Meta.',
  'Base técnica pronta para tráfego pago sem desperdício de verba.',
  'Perfil da Empresa no Google atualizado e otimizado para busca local.',
  'Segurança digital do perfil pessoal e da empresa (Meta, Google e apps).',
  'Preparação para escala: eventos, conversões e rastreamento corretos.',
];

const meuComplemento = [
  {
    icon: Network,
    title: 'Canal próprio de aquisição',
    desc: 'Cardápio digital e delivery direto (Cardápio Web, Repediu, Goomer, Anota AI) para o negócio parar de depender só de marketplace.',
  },
  {
    icon: MapPinned,
    title: 'SEO local + GEO 2026',
    desc: 'Ranqueamento no mapa do bairro e citação nas respostas de ChatGPT, Gemini, Perplexity e AI Overviews.',
  },
  {
    icon: Users2,
    title: 'CRM e recompra',
    desc: 'Base organizada, funil no WhatsApp, reativação em dia fraco e clube de vantagens. Cliente que já comprou é o mais barato.',
  },
  {
    icon: Gauge,
    title: 'Indicadores reais',
    desc: 'Origem da venda, ticket por canal, curva ABC, CAC e margem real. Decisão com número, não com achismo.',
  },
  {
    icon: Sparkles,
    title: 'IA aplicada à operação',
    desc: 'LLMs no dia a dia: atendimento, resposta a avaliações, conteúdo, análise de comentários e relatórios automáticos.',
  },
  {
    icon: Wrench,
    title: 'Implantação e treinamento presencial',
    desc: 'Ferramentas configuradas de verdade e equipe treinada para usar — aula presencial, aqui em Goiânia.',
  },
];

const ParceriasSection = () => {
  return (
    <section id="parcerias" className="bg-[#080B11] text-white">
      {/* Capa cinematográfica */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Consultoria estratégica em um restaurante local à noite, em Goiânia"
          loading="lazy"
          width={1600}
          height={912}
          className="w-full h-[380px] md:h-[460px] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-[#080B11]/70 to-[#080B11]/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-10 md:pb-14">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] uppercase text-yellow-300/90 border border-yellow-500/30 bg-yellow-500/10 px-3.5 py-1.5 rounded-full">
              <BadgeCheck className="w-3.5 h-3.5" /> ALLBIZ Digital · Goiânia 2026
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-semibold leading-[1.1] max-w-3xl">
              Programa de Parcerias{' '}
              <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                ALLBIZ
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg leading-[1.8]">
              Crescimento real para negócios locais — estruturado, medido e sem dependência de agência. Consultoria
              prática que constrói base, processo e escala, respeitando a realidade de cada casa.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-14 md:py-16 space-y-16">
        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pilares.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-yellow-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/60 leading-[1.75]">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Investimento */}
        <div>
          <div className="max-w-2xl">
            <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-yellow-300/80">
              Plano Parceiro
            </span>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold leading-tight">
              Investimento transparente, do primeiro dia ao sexto mês
            </h3>
          </div>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            {investimento.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/[0.07] to-transparent p-6"
              >
                <p className="text-xs uppercase tracking-widest text-white/45 mb-2">{v.label}</p>
                <p className="font-serif text-3xl md:text-4xl font-semibold bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                  {v.value}
                </p>
                <p className="mt-2 text-sm text-white/55 leading-snug">{v.note}</p>
              </div>
            ))}
          </div>

          {/* Indicações */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                <Users2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold">Programa de Indicações</h4>
                <p className="mt-2 text-sm md:text-base text-white/65 leading-[1.8]">
                  Cada parceiro pode indicar outros negócios locais ou prestadores de serviço e ganhar{' '}
                  <strong className="text-white">R$ 200 de desconto na mensalidade</strong> por contrato fechado (limite
                  de 1 indicação por mês). No setup técnico, até 7 indicações abatem a taxa — prazo de 6 meses para
                  indicar.
                </p>
                <p className="mt-3 font-serif text-lg text-yellow-300/90 italic">
                  “Não é desconto. É acesso.” — crescimento em rede, não concorrência.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Setup 48h */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={setupImg}
              alt="Setup técnico de contas de anúncio, pixel e rastreamento sendo configurado"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/80 to-transparent" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-widest uppercase text-white/85 bg-black/50 border border-white/15 px-3 py-1.5 rounded-full">
              <Lock className="w-3.5 h-3.5 text-yellow-400" /> Setup 48h
            </span>
          </div>
          <div>
            <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-yellow-300/80">
              Fundação do crescimento digital
            </span>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold leading-tight">
              Setup técnico completo em 48h — feito junto com você
            </h3>
            <ul className="mt-5 space-y-3">
              {setupItens.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-[0.95rem] text-white/70 leading-[1.7]">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-green-500/25 bg-green-500/[0.07] p-5">
              <p className="text-sm text-white/80 leading-[1.7]">
                <strong className="text-green-300">Benefício incluso no plano:</strong> gestão de tráfego durante toda
                a parceria, sem custo adicional.
              </p>
            </div>
          </div>
        </div>

        {/* Meu complemento estratégico */}
        <div>
          <div className="max-w-2xl">
            <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-yellow-300/80">
              O que eu somo à parceria
            </span>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold leading-tight">
              Da fundação técnica ao marketing 360º dentro da operação
            </h3>
            <p className="mt-4 text-white/60 text-base leading-[1.8]">
              O Programa de Parcerias abre a porta. O que faz o negócio crescer depois é o trabalho de dentro — canal
              próprio, dados, recompra, SEO local e equipe treinada.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {meuComplemento.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <Icon className="w-6 h-6 text-yellow-400 mb-3" />
                  <h4 className="font-serif text-lg font-semibold mb-2">{c.title}</h4>
                  <p className="text-sm text-white/60 leading-[1.75]">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conclusão + CTA com download */}
      <div className="relative">
        <img
          src={redeImg}
          alt="Vista aérea noturna de Goiânia com a malha de luzes formando uma rede"
          loading="lazy"
          width={1600}
          height={912}
          className="w-full h-[420px] md:h-[480px] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#080B11]/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-3xl text-center">
            <Target className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl md:text-4xl font-semibold leading-tight">
              Quando um negócio cresce,{' '}
              <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                toda a rede cresce junto
              </span>
            </h3>
            <p className="mt-4 text-white/70 text-sm md:text-lg leading-[1.8]">
              Crescer junto, fortalecer negócios locais, criar conexões reais e gerar resultado sustentável. Baixe a
              apresentação completa e vamos marcar uma conversa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={pdfAsset.url}
                download="Programa-de-Parcerias-ALLBIZ-2026-Goiania.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-600 text-[#1a1200] text-sm font-bold px-7 py-4 rounded-full no-underline hover:brightness-110 transition-all shadow-lg shadow-yellow-900/40"
              >
                <Download className="w-4 h-4" /> Baixar apresentação (PDF)
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-7 py-4 rounded-full transition-colors no-underline"
              >
                <MessageCircle className="w-4 h-4" /> Agendar uma conversa
              </a>
            </div>
            <p className="mt-5 text-xs text-white/40">
              ALLBIZ Digital · Diego Allas · Goiânia-GO · Programa de Parcerias 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParceriasSection;
