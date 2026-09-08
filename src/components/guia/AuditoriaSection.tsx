import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  KeyRound,
  ShieldCheck,
  Scale,
  BarChart3,
  MessageCircle,
  Download,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ClipboardList,
  ArrowRight,
} from 'lucide-react';

import ebookAsset from '@/assets/estrutura_invisivel.pdf.asset.json';
import fundacaoImg from '@/assets/estrutura_fundacao.jpg';

const WA =
  'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Quero%20o%20diagn%C3%B3stico%20da%20estrutura%20digital%20do%20meu%20neg%C3%B3cio.';

const fases = [
  {
    icon: KeyRound,
    fase: 'Fase 0–2',
    t: 'Diagnóstico e recuperação de acesso',
    d: 'Google, Meta, hospedagem, domínio e e-mails institucionais: mapeamento de tudo que existe e de quem tem acesso hoje, seguido da recuperação formal de cada conta perdida ou fora de controle.',
  },
  {
    icon: ShieldCheck,
    fase: 'Fase 3–6',
    t: 'Segurança e reorganização da estrutura',
    d: 'Verificação em duas etapas em todas as contas, Business Manager verificado no CNPJ correto e isolamento de estruturas antigas (agência anterior, ex-funcionário) sem perder o histórico já publicado.',
  },
  {
    icon: Scale,
    fase: 'Fase 7',
    t: 'LGPD, fiscal e contratos',
    d: 'Base legal para coleta de dados de cliente, formalização de contrato com agências e freelancers e integração real entre emissão fiscal, PDV e marketplaces.',
  },
  {
    icon: BarChart3,
    fase: 'Fase 9–10',
    t: 'Performance, conteúdo e concorrência',
    d: 'Tráfego pago com rastreamento correto, ficha técnica e precificação real, auditoria de marketplaces, influenciadores e benchmarking de concorrência.',
  },
];

const status = [
  'Sem acesso',
  'Risco de bloqueio',
  'Urgente — compliance',
  'Irregular',
  'Sem contrato formal',
  'Recuperado + seguro',
  'Decisão tomada',
];

const perguntas = [
  'Você sabe, com certeza, quem tem acesso ao Instagram e ao Facebook do seu restaurante hoje?',
  'Seu Business Manager está verificado no CNPJ da empresa, ou foi criado por uma agência antiga?',
  'Se seu WhatsApp fosse bloqueado agora, você teria como provar o prejuízo?',
  'Seu cadastro de fidelidade tem consentimento formal do cliente, documentado?',
];

const AuditoriaSection = () => {
  const [respostas, setRespostas] = useState<(boolean | null)[]>([null, null, null, null]);
  const respondidas = respostas.filter((r) => r !== null).length;
  const naoSei = respostas.filter((r) => r === false).length;
  const completo = respondidas === perguntas.length;

  const marcar = (i: number, valor: boolean) =>
    setRespostas((prev) => prev.map((r, idx) => (idx === i ? valor : r)));

  const leitura = () => {
    if (naoSei === 0)
      return {
        cor: 'text-green-300',
        borda: 'border-green-500/30 bg-green-500/[0.07]',
        t: 'Sua base parece organizada — vale só confirmar com evidência',
        d: 'Se você respondeu “sim” às quatro, sua estrutura está acima da média do setor. O próximo passo é documentar isso: print de acesso, verificação de CNPJ e consentimento registrado. Uma auditoria rápida confirma se o que parece certo está mesmo certo.',
      };
    if (naoSei <= 2)
      return {
        cor: 'text-yellow-300',
        borda: 'border-yellow-500/30 bg-yellow-500/[0.07]',
        t: `${naoSei} ponto${naoSei > 1 ? 's' : ''} em aberto — risco moderado`,
        d: 'Cada “não sei” é uma porta destrancada. Dá para resolver com calma agora, antes que vire bloqueio de conta, autuação ou prejuízo que você não consegue provar.',
      };
    return {
      cor: 'text-red-300',
      borda: 'border-red-500/30 bg-red-500/[0.07]',
      t: `${naoSei} pontos em aberto — risco alto`,
      d: 'Sua operação depende hoje de coisas que estão fora do seu controle. Esse é exatamente o cenário em que um bloqueio, uma multa ou um acesso perdido para tudo. Começar pelo mapeamento é urgente.',
    };
  };

  const r = completo ? leitura() : null;

  return (
    <section id="auditoria" className="scroll-mt-[150px] relative bg-[#080B11] text-white overflow-hidden">
      <img
        src={fundacaoImg}
        alt="Estrutura de concreto e aço de uma construção ao anoitecer"
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B11] via-[#080B11]/90 to-[#080B11]" />

      <div className="container relative py-[72px]">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
            Capítulo 04 · o mapa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
            Como funciona uma{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              auditoria de verdade
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
            Não é “dar uma olhada e já volto”. É um processo documentado, em fases, com status claro do que está
            resolvido, em risco ou pendente. A lógica é sempre a mesma: mapear o que existe, recuperar o que foi
            perdido, formalizar no nome certo — e só depois avançar para performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fases.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">{f.fase}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug mb-2">{f.t}</h3>
                <p className="text-sm text-white/60 leading-[1.7]">{f.d}</p>
              </div>
            );
          })}
        </div>

        {/* Vocabulário de status */}
        <div className="mt-7">
          <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-3">
            O vocabulário de uma auditoria séria
          </p>
          <div className="flex flex-wrap gap-2">
            {status.map((s) => (
              <span
                key={s}
                className="text-xs font-semibold text-white/70 bg-white/[0.05] border border-white/15 px-3 py-1.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Autoavaliação */}
        <div className="mt-10 rounded-2xl border border-yellow-500/25 bg-white/[0.03] p-6 md:p-9">
          <div className="flex items-start gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold">Checklist rápido de autoavaliação</h3>
              <p className="mt-2 text-sm text-white/60 leading-[1.7]">
                Quatro perguntas revelam o tamanho real do risco. Responda aqui mesmo — nada é enviado nem guardado.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {perguntas.map((p, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm md:text-[0.95rem] text-white/80 leading-[1.7]">
                  <span className="text-yellow-400 font-bold mr-2">{String(i + 1).padStart(2, '0')}</span>
                  {p}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => marcar(i, true)}
                    className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                      respostas[i] === true
                        ? 'bg-green-500/20 border-green-400/50 text-green-300'
                        : 'bg-white/[0.04] border-white/15 text-white/60 hover:border-white/35'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Sim, tenho certeza
                  </button>
                  <button
                    type="button"
                    onClick={() => marcar(i, false)}
                    className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                      respostas[i] === false
                        ? 'bg-red-500/20 border-red-400/50 text-red-300'
                        : 'bg-white/[0.04] border-white/15 text-white/60 hover:border-white/35'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" /> Não sei
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!completo && (
            <p className="mt-5 text-xs text-white/40">
              {respondidas} de {perguntas.length} respondidas. Se a resposta para qualquer uma for “não sei”, esse já é
              o ponto de partida.
            </p>
          )}

          {completo && r && (
            <div className={`mt-6 rounded-xl border p-6 ${r.borda}`}>
              <h4 className={`font-serif text-lg md:text-xl font-semibold ${r.cor}`}>{r.t}</h4>
              <p className="mt-2 text-sm text-white/70 leading-[1.75]">{r.d}</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-colors no-underline"
                >
                  <MessageCircle className="w-4 h-4" /> Quero o diagnóstico gratuito
                </a>
                <a
                  href={ebookAsset.url}
                  download="A-Estrutura-Invisivel-Diego-Allas.pdf"
                  className="inline-flex items-center justify-center gap-2 border border-yellow-500/40 hover:bg-yellow-500/10 text-yellow-300 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors no-underline"
                >
                  <Download className="w-4 h-4" /> Baixar o guia completo
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CTA para o diagnóstico completo */}
        <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/[0.10] to-transparent p-6 md:p-9">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400">
                Quatro perguntas mostram o sintoma. Vinte e quatro mostram a causa.
              </span>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold leading-snug">
                Faça o diagnóstico completo da estrutura digital da sua casa
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-[1.8]">
                Uma página inteira, gratuita e sem cadastro: 24 pontos em seis áreas — acesso, segurança, LGPD,
                canais, dados e rotina. Cada pergunta explica por que aquilo importa e o que fazer. No final você
                recebe a pontuação por área, o nível de risco e um plano de ação priorizado para baixar em arquivo de
                texto e levar para a reunião com sua equipe.
              </p>
              <p className="mt-3 text-xs text-white/45">
                Leva cerca de 6 minutos · nada é enviado, tudo acontece na sua tela.
              </p>
            </div>
            <Link
              to="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0D1117] text-sm font-bold px-8 py-4 rounded-full transition-colors no-underline flex-shrink-0 whitespace-nowrap"
            >
              <ClipboardList className="w-4 h-4" /> Acessar o diagnóstico completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="mt-7 max-w-3xl text-sm md:text-base text-white/60 leading-[1.8]">
          Uma auditoria não é sobre “achar problema”. É sobre transformar uma sensação vaga de insegurança em um mapa
          claro, documentado e com prioridade — para que a decisão do que resolver primeiro pare de ser no escuro.
        </p>
      </div>
    </section>
  );
};

export default AuditoriaSection;
