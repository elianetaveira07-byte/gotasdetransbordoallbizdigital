import { useEffect, useState } from 'react';
import { Instagram, X, Sparkles } from 'lucide-react';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';

const STORAGE_KEY = 'allbiz_welcome_seen_at';
const DAY_MS = 24 * 60 * 60 * 1000;

// Partículas douradas flutuantes — posições fixas para não variar entre renders
const particles = [
  { left: '10%', top: '16%', size: 4, delay: '0s' },
  { left: '22%', top: '64%', size: 3, delay: '0.6s' },
  { left: '34%', top: '24%', size: 2, delay: '1.2s' },
  { left: '48%', top: '10%', size: 3, delay: '0.3s' },
  { left: '60%', top: '70%', size: 4, delay: '0.9s' },
  { left: '72%', top: '20%', size: 2, delay: '1.5s' },
  { left: '84%', top: '48%', size: 3, delay: '0.4s' },
  { left: '92%', top: '76%', size: 2, delay: '1.1s' },
  { left: '16%', top: '84%', size: 3, delay: '1.8s' },
  { left: '68%', top: '86%', size: 2, delay: '0.7s' },
];

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* storage indisponível: apenas fecha */
    }
  };

  useEffect(() => {
    let cancelled = false;
    let last = 0;
    try {
      last = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    } catch {
      /* sem storage: mostra sempre */
    }
    if (Date.now() - last < DAY_MS) return;
    const t = window.setTimeout(() => {
      if (!cancelled) setOpen(true);
    }, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 welcome-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Diego Allas está de volta ao Instagram"
    >
      {/* Backdrop cinematográfico */}
      <button
        className="absolute inset-0 w-full h-full bg-[#0D1117]/85 backdrop-blur-md cursor-default"
        onClick={dismiss}
        aria-label="Fechar mensagem"
        tabIndex={-1}
      />

      {/* Moldura com gradiente dourado */}
      <div className="relative w-full max-w-md rounded-[2rem] p-px bg-gradient-to-br from-yellow-200/80 via-yellow-500/30 to-yellow-500/0 shadow-[0_40px_90px_-24px_rgba(212,175,55,0.4)] welcome-card">
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-b from-[#151b26] to-[#0D1117] px-6 sm:px-10 pt-10 pb-9 text-center">
          {/* Glow superior + partículas */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 rounded-full bg-yellow-400/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {particles.map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-yellow-300/60 welcome-particle"
                style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
              />
            ))}
          </div>

          <button
            onClick={dismiss}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-20 p-2 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            {/* Foto com anel pulsante */}
            <div className="inline-block rounded-2xl p-1 bg-gradient-to-br from-yellow-300/70 to-yellow-600/20 welcome-ring mb-5">
              <img
                src={diegoPerfil.url}
                alt="Diego Allas"
                className="w-24 h-auto rounded-[0.9rem] object-contain block"
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Instagram reativado hoje
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
              Estou de volta. <em className="text-yellow-300 not-italic">E dessa vez, é pessoal.</em>
            </h2>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
              Fiquei um tempo longe das redes — por motivos que faziam todo sentido. Hoje reabri meu Instagram:
            </p>

            <p className="font-serif text-yellow-300 text-2xl font-semibold tracking-wide mb-4">@diegoallas</p>

            <p className="text-white/55 text-sm leading-relaxed mb-7">
              Sem robô, sem mensagem automática. Quem escreve, fala comigo — e eu respondo. Se quiser acompanhar o
              que Deus vai fazer na minha vida, me segue lá.
            </p>

            <a
              href="https://www.instagram.com/diegoallas"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto overflow-hidden rounded-full px-8 py-3.5 font-semibold text-white no-underline bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] shadow-[0_12px_30px_-8px_rgba(253,29,29,0.5)] transition-transform hover:scale-[1.03]"
            >
              <Instagram className="w-5 h-5" />
              Seguir @diegoallas
              <span
                className="absolute top-0 bottom-0 w-1/3 bg-white/25 blur-md -skew-x-12 welcome-shine"
                aria-hidden="true"
              />
            </a>

            <div>
              <button
                onClick={dismiss}
                className="mt-4 text-white/40 hover:text-white/80 text-sm transition-colors hover:underline underline-offset-4"
              >
                Quero conhecer o site primeiro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
