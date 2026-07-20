import { useEffect, useMemo, useState } from 'react';
import { BriefcaseBusiness, CalendarCheck2, CheckCircle2, DoorOpen, Handshake, MapPin, PartyPopper, Sparkles, Trophy } from 'lucide-react';

const STORAGE_KEY = 'diego-allas-busca-emprego-v1';
const START_DATE = new Date(2026, 6, 20); // 20/07/2026 (mês 0-index)
const ARRIVAL_DATE = new Date(2026, 6, 19); // 19/07/2026
const IMERSAO_END = new Date(2026, 6, 15); // 15/07/2026

type DayStatus = 'idle' | 'contacted';

interface State {
  days: Record<string, DayStatus>; // yyyy-mm-dd -> status
  hired: null | { date: string; company?: string };
}

const fmtKey = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const fmtLabel = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', weekday: 'short' });

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const loadState = (): State => {
  if (typeof window === 'undefined') return { days: {}, hired: null };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { days: {}, hired: null };
    return JSON.parse(raw);
  } catch {
    return { days: {}, hired: null };
  }
};

const saveState = (s: State) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
};

const DisponibilidadeSection = () => {
  const [state, setState] = useState<State>({ days: {}, hired: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setState(loadState());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveState(state);
  }, [state, mounted]);

  const days = useMemo(() => {
    const list: Date[] = [];
    const end = state.hired ? new Date(state.hired.date) : today();
    const cur = new Date(START_DATE);
    while (cur <= end) {
      list.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    // garantir ao menos 14 dias visíveis (grade cheia)
    while (list.length < 14) {
      const next = new Date(list[list.length - 1]);
      next.setDate(next.getDate() + 1);
      list.push(next);
    }
    return list;
  }, [state.hired]);

  const diasAtivos = Object.values(state.days).filter((s) => s === 'contacted').length;
  const diasCorridos = Math.max(
    1,
    Math.floor((today().getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)) + 1,
  );

  const toggleDay = (key: string) => {
    if (state.hired) return;
    setState((prev) => {
      const next = { ...prev.days };
      if (next[key] === 'contacted') delete next[key];
      else next[key] = 'contacted';
      return { ...prev, days: next };
    });
  };

  const marcarContratado = () => {
    if (state.hired) {
      if (!confirm('Deseja desmarcar a contratação e reabrir a janela?')) return;
      setState((prev) => ({ ...prev, hired: null }));
      return;
    }
    const empresa = prompt('Qual empresa (opcional)? Você pode deixar em branco.') || undefined;
    setState((prev) => ({ ...prev, hired: { date: fmtKey(today()), company: empresa } }));
  };

  const isHired = !!state.hired;

  return (
    <section id="disponibilidade" className="py-[72px] bg-background">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-guia-amber bg-guia-amber-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            {isHired ? 'Janela encerrada · contratado' : 'Janela aberta · disponível agora'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            {isHired ? (
              <>
                Fui <span className="text-guia-green">contratado</span> — obrigado a quem abriu a porta
              </>
            ) : (
              <>
                Estou <span className="text-primary">disponível</span> — emprego, parceria ou freelancer
              </>
            )}
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Cheguei em <strong>Goiânia no dia 19/07/2026</strong> com minha família, encerrando a imersão de
            estudo na Chapada do Araripe em 15/07/2026. A partir de <strong>20/07/2026</strong> comecei a
            conversar com empresas todos os dias. Se você chegou até aqui, provavelmente é um sinal — a janela
            está aberta e o momento certo de conversarmos é agora.
          </p>
        </div>

        {/* Copy estratégica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
            <Handshake className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Vim para somar</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Não busco um lugar para me acomodar — busco uma empresa que entenda que estou preparado para
              contribuir de verdade, evoluir com o time e devolver, em resultado, muito mais do que recebo.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-green">
            <BriefcaseBusiness className="w-6 h-6 text-guia-green mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Formatos abertos</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              CLT, PJ, parceria estratégica ou freelancer pontual. Presencial em Goiânia, híbrido ou 100%
              remoto. O que importa é encontrar o encaixe certo entre o que entrego e o que a empresa precisa.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-amber">
            <Sparkles className="w-6 h-6 text-guia-amber mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Momento raro</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              2026 está delicado. Mão de obra realmente qualificada, comprometida e madura ficou escassa.
              Chego inteiro, com quase 3 anos de imersão contínua e mais de 15 anos de operação real por trás.
            </p>
          </div>
        </div>

        {/* Painel de acompanhamento */}
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-guia border-l-[5px] border-primary">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-guia-blue-light flex items-center justify-center flex-shrink-0">
                <DoorOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-tight">
                  Acompanhe minha busca em tempo real
                </h3>
                <p className="text-sm text-guia-text-muted mt-0.5">
                  Marco cada dia em que estou ativamente conversando com empresas. Quando fechar, marco aqui.
                </p>
              </div>
            </div>
            <button
              onClick={marcarContratado}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                isHired
                  ? 'bg-guia-green text-white hover:opacity-90'
                  : 'bg-guia-amber text-white hover:opacity-90 shadow-guia'
              }`}
            >
              {isHired ? (
                <>
                  <Trophy className="w-4 h-4" /> Contratado — clique para reabrir
                </>
              ) : (
                <>
                  <PartyPopper className="w-4 h-4" /> Marcar como contratado
                </>
              )}
            </button>
          </div>

          {/* Marcos fixos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <div className="rounded-lg border border-border p-4 bg-secondary/40">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-guia-text-muted mb-1">
                <CalendarCheck2 className="w-4 h-4" /> 15/07/2026
              </div>
              <p className="text-sm text-foreground">Encerramento da imersão na Chapada do Araripe.</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-secondary/40">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-guia-text-muted mb-1">
                <MapPin className="w-4 h-4" /> 19/07/2026
              </div>
              <p className="text-sm text-foreground">Chegada com a família em Goiânia — nova base.</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-guia-blue-light">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary mb-1">
                <BriefcaseBusiness className="w-4 h-4" /> 20/07/2026
              </div>
              <p className="text-sm text-foreground font-medium">Início oficial da busca por oportunidades.</p>
            </div>
          </div>

          {/* Contadores */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg bg-secondary/40 p-4">
              <div className="font-serif text-3xl font-semibold text-primary leading-none">{diasCorridos}</div>
              <div className="text-xs text-guia-text-muted mt-1 uppercase tracking-wider font-semibold">
                dias desde o início
              </div>
            </div>
            <div className="rounded-lg bg-secondary/40 p-4">
              <div className="font-serif text-3xl font-semibold text-guia-green leading-none">
                {diasAtivos}
              </div>
              <div className="text-xs text-guia-text-muted mt-1 uppercase tracking-wider font-semibold">
                dias com contatos ativos
              </div>
            </div>
            <div className="rounded-lg bg-secondary/40 p-4 col-span-2 md:col-span-1">
              <div
                className={`font-serif text-3xl font-semibold leading-none ${
                  isHired ? 'text-guia-green' : 'text-guia-amber'
                }`}
              >
                {isHired ? 'Fechado' : 'Aberto'}
              </div>
              <div className="text-xs text-guia-text-muted mt-1 uppercase tracking-wider font-semibold">
                status da janela
              </div>
            </div>
          </div>

          {/* Grade de dias */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-lg font-semibold text-foreground">Linha do tempo da busca</h4>
              {!isHired && (
                <span className="text-xs text-guia-text-muted">
                  Clique em um dia para marcar/desmarcar
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {days.map((d) => {
                const key = fmtKey(d);
                const isFuture = d > today();
                const status = state.days[key];
                const isHiredDay = isHired && state.hired?.date === key;
                const active = status === 'contacted';
                return (
                  <button
                    key={key}
                    disabled={isFuture || isHired}
                    onClick={() => toggleDay(key)}
                    className={`text-left rounded-lg border p-3 transition-all ${
                      isHiredDay
                        ? 'bg-guia-green text-white border-guia-green shadow-guia'
                        : active
                          ? 'bg-guia-blue-light border-primary text-primary'
                          : isFuture
                            ? 'bg-secondary/30 border-border text-guia-text-muted opacity-50'
                            : 'bg-card border-border hover:border-primary hover:bg-guia-blue-light/50 text-foreground'
                    } ${isHired && !isHiredDay ? 'opacity-70' : ''}`}
                  >
                    <div className="text-[11px] font-bold tracking-wider uppercase opacity-80">
                      {fmtLabel(d)}
                    </div>
                    <div className="text-xs mt-1 flex items-center gap-1 font-medium">
                      {isHiredDay ? (
                        <>
                          <Trophy className="w-3 h-3" /> Contratado
                        </>
                      ) : active ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" /> Em contato
                        </>
                      ) : isFuture ? (
                        'aguardando'
                      ) : (
                        'marcar dia'
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {isHired && (
            <div className="mt-6 rounded-lg bg-guia-green-light border border-guia-green p-5">
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-guia-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                    Porta aberta{state.hired?.company ? ` — ${state.hired.company}` : ''}
                  </h4>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">
                    Registro oficial em {new Date(state.hired!.date).toLocaleDateString('pt-BR')}. Obrigado a
                    todos que conversaram comigo durante a janela — cada mensagem contou.
                  </p>
                </div>
              </div>
            </div>
          )}

          {!isHired && (
            <p className="mt-6 text-sm text-guia-text-muted leading-[1.7] border-t border-border pt-5">
              Se a sua empresa precisa de alguém para <strong>somar de verdade</strong> — em marketing, IA
              aplicada, operação ou construção de produto — este é o momento certo. Sou confiante de que a
              porta vai abrir rápido, e prefiro que abra na empresa certa. Vamos conversar antes que a janela
              feche.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DisponibilidadeSection;
