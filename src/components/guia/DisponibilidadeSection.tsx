import { useEffect, useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  DoorOpen,
  Handshake,
  Lock,
  MapPin,
  PartyPopper,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';

const STORAGE_KEY = 'diego-allas-busca-emprego-v1';
const HIRE_PASSWORD = 'da846321';
const START_DATE = new Date(2026, 6, 20); // 20/07/2026
const ARRIVAL_DATE = new Date(2026, 6, 19);
const IMERSAO_END = new Date(2026, 6, 15);

type DayStatus = 'idle' | 'contacted';

interface HireInfo {
  date: string; // dia em que marcou
  company?: string;
  role?: string;
  startDate?: string; // início na empresa
  format?: string; // CLT, PJ, etc.
  message?: string;
}

interface State {
  days: Record<string, DayStatus>;
  hired: null | HireInfo;
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

  // Modal de contratação
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<'password' | 'form'>('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [pwError, setPwError] = useState('');
  const [form, setForm] = useState({
    company: '',
    role: '',
    startDate: '',
    format: '',
    message: '',
  });

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

  const isHired = !!state.hired;

  const openModal = () => {
    if (isHired) {
      // Reabrir requer senha também
      setStep('password');
      setPasswordInput('');
      setPwError('');
      setModalOpen(true);
      return;
    }
    setStep('password');
    setPasswordInput('');
    setPwError('');
    setForm({ company: '', role: '', startDate: '', format: '', message: '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPasswordInput('');
    setPwError('');
  };

  const submitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput !== HIRE_PASSWORD) {
      setPwError('Senha incorreta. Só o Diego pode marcar isso.');
      return;
    }
    if (isHired) {
      // Reabrir janela
      setState((prev) => ({ ...prev, hired: null }));
      closeModal();
      return;
    }
    setPwError('');
    setStep('form');
  };

  const submitHire = (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      hired: {
        date: fmtKey(today()),
        company: form.company.trim() || undefined,
        role: form.role.trim() || undefined,
        startDate: form.startDate || undefined,
        format: form.format.trim() || undefined,
        message: form.message.trim() || undefined,
      },
    }));
    closeModal();
  };

  return (
    <section id="disponibilidade" className="py-[72px] bg-background">
      <div className="container">
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
            estudo na Chapada do Araripe em 15/07/2026. Desde <strong>20/07/2026</strong> estou entrando em
            contato com empresas todos os dias. Envio esta página como currículo aberto — se você chegou até
            aqui, provavelmente é um sinal. A janela está aberta e o momento certo de conversarmos é agora.
          </p>
        </div>

        {/* Copy estratégica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
            <Handshake className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Vim para somar</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Não busco um lugar para me acomodar. Busco uma empresa que entenda que estou preparado para
              servir de verdade, contribuir, aprender a operação por dentro e devolver, em resultado, muito
              mais do que me for pedido.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-green">
            <BriefcaseBusiness className="w-6 h-6 text-guia-green mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Áreas e formatos abertos</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Food service completo (gerência, escritório, operação), logística, marketing, IA, atendimento
              — e posições iniciais em áreas novas. CLT, PJ, parceria ou freelancer. Presencial em Goiânia,
              híbrido ou 100% remoto.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-guia-amber">
            <Sparkles className="w-6 h-6 text-guia-amber mb-3" />
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Preparado de verdade</h3>
            <p className="text-sm text-guia-text-muted leading-[1.7]">
              Me preparei fisicamente, mentalmente e psicologicamente para trabalhar até <strong>16h por dia
              de segunda a segunda</strong>, sem comprometer saúde nem família. Chego inteiro, com quase 3
              anos de imersão contínua e mais de 15 anos de operação real.
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
                  Marco cada dia em que estou ativamente conversando com empresas. Quando fechar, registro
                  aqui — protegido por senha, só eu preencho.
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                isHired
                  ? 'bg-guia-green text-white hover:opacity-90'
                  : 'bg-guia-amber text-white hover:opacity-90 shadow-guia'
              }`}
            >
              {isHired ? (
                <>
                  <Lock className="w-4 h-4" /> Reabrir janela (senha)
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" /> Marcar como contratado
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
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                    Porta aberta{state.hired?.company ? ` — ${state.hired.company}` : ''}
                  </h4>
                  {state.hired?.role && (
                    <p className="text-sm text-foreground font-medium mb-1">
                      Cargo: {state.hired.role}
                      {state.hired.format ? ` · ${state.hired.format}` : ''}
                    </p>
                  )}
                  <p className="text-sm text-guia-text-muted leading-[1.7]">
                    Registro em {new Date(state.hired!.date).toLocaleDateString('pt-BR')}
                    {state.hired?.startDate
                      ? ` · início em ${new Date(state.hired.startDate).toLocaleDateString('pt-BR')}`
                      : ''}
                    . Obrigado a todos que conversaram comigo durante a janela — cada mensagem contou.
                  </p>
                  {state.hired?.message && (
                    <p className="text-sm text-foreground italic leading-[1.7] mt-2 border-l-2 border-guia-green pl-3">
                      “{state.hired.message}”
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {!isHired && (
            <p className="mt-6 text-sm text-guia-text-muted leading-[1.7] border-t border-border pt-5">
              Se sua empresa precisa de alguém para <strong>somar de verdade</strong>, este é o momento.
              Sou confiante de que a porta vai abrir rápido, e prefiro que abra na empresa certa. Vamos
              conversar antes que a janela feche.
            </p>
          )}
        </div>
      </div>

      {/* Modal senha + formulário */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-2xl max-w-md w-full p-6 md:p-7 relative border border-border">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center text-guia-text-muted"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'password' ? (
              <form onSubmit={submitPassword}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-guia-amber-light flex items-center justify-center">
                    <Lock className="w-5 h-5 text-guia-amber" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                      {isHired ? 'Reabrir janela' : 'Área restrita'}
                    </h3>
                    <p className="text-xs text-guia-text-muted">
                      Só o Diego marca esta seção.
                    </p>
                  </div>
                </div>
                <label className="block text-sm font-semibold text-foreground mb-2">Senha</label>
                <input
                  type="password"
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPwError('');
                  }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="Digite sua senha"
                />
                {pwError && <p className="text-sm text-red-600 mt-2">{pwError}</p>}
                <button
                  type="submit"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-full hover:opacity-90"
                >
                  {isHired ? 'Reabrir janela' : 'Continuar'}
                </button>
              </form>
            ) : (
              <form onSubmit={submitHire}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-guia-green-light flex items-center justify-center">
                    <PartyPopper className="w-5 h-5 text-guia-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                      Registrar contratação
                    </h3>
                    <p className="text-xs text-guia-text-muted">
                      Estes dados aparecerão em destaque na página.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Empresa</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Cargo</label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                        placeholder="Ex.: Gerente"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Formato</label>
                      <input
                        type="text"
                        value={form.format}
                        onChange={(e) => setForm({ ...form, format: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                        placeholder="CLT, PJ, freela..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Data de início
                    </label>
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Mensagem pública (opcional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none"
                      placeholder="Ex.: obrigado a todos que conversaram comigo…"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-guia-green text-white font-semibold px-4 py-3 rounded-full hover:opacity-90 text-sm"
                  >
                    <Trophy className="w-4 h-4" /> Registrar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default DisponibilidadeSection;
