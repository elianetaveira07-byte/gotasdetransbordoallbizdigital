import { useEffect, useState } from 'react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';

const STORAGE_KEY = 'allbiz_welcome_seen_at';
const DAY_MS = 24 * 60 * 60 * 1000;

// Partículas douradas em tela cheia — posições fixas para não variar entre renders
const particles = [
  { left: '6%', top: '14%', size: 4, delay: '0s' },
  { left: '14%', top: '68%', size: 3, delay: '0.6s' },
  { left: '24%', top: '30%', size: 2, delay: '1.2s' },
  { left: '33%', top: '80%', size: 3, delay: '0.3s' },
  { left: '42%', top: '12%', size: 4, delay: '0.9s' },
  { left: '52%', top: '74%', size: 2, delay: '1.5s' },
  { left: '61%', top: '22%', size: 3, delay: '0.4s' },
  { left: '70%', top: '62%', size: 2, delay: '1.1s' },
  { left: '78%', top: '36%', size: 4, delay: '1.8s' },
  { left: '86%', top: '10%', size: 3, delay: '0.7s' },
  { left: '90%', top: '78%', size: 2, delay: '1.4s' },
  { left: '18%', top: '50%', size: 2, delay: '2s' },
];

const WelcomeScreen = () => {
  const [visible, setVisible] = useState(false);

  const enter = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* storage indisponível: apenas entra */
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
      if (!cancelled) setVisible(true);
    }, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') enter();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 welcome-overlay overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Boas-vindas de Diego Allas"
    >
      {/* Fundo cinematográfico em tela cheia */}
      <div className="absolute inset-0 bg-[#0D1117]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(212,175,55,0.16) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Linhas horizontais sutis de textura */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(212,175,55,0.5) 3px 4px)',
        }}
      />

      {/* Partículas douradas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-yellow-300/60 welcome-particle"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-lg text-center welcome-card">
        {/* Foto com anel pulsante */}
        <div className="inline-block rounded-2xl p-1 bg-gradient-to-br from-yellow-300/70 to-yellow-600/20 welcome-ring mb-6">
          <img
            src={diegoPerfil.url}
            alt="Diego Allas"
            className="w-24 h-auto rounded-[0.9rem] object-contain block"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Antes de começar
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
          Obrigado por estar <em className="text-yellow-300 not-italic">aqui</em>.
        </h1>

        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
          De coração: gratidão por dedicar o seu tempo ao que eu construí. Entre, fique à vontade —
          tudo aqui foi feito pra você.
        </p>

        {/* Botão de entrada com efeito visual */}
        <button
          onClick={enter}
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-4 bg-yellow-400 text-[#0D1117] text-base md:text-lg font-bold animate-attention-pulse transition-transform hover:scale-[1.04] shadow-[0_16px_40px_-10px_rgba(212,175,55,0.55)]"
        >
          Entrar
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          <span
            className="absolute top-0 bottom-0 w-1/3 bg-white/40 blur-md -skew-x-12 welcome-shine"
            aria-hidden="true"
          />
        </button>

        {/* Frase curta para depois */}
        <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
          Depois, se quiser, me segue lá e vê o que Deus vai fazer na minha vida:{' '}
          <a
            href="https://www.instagram.com/diegoallas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-yellow-300/90 hover:text-yellow-300 font-medium transition-colors hover:underline underline-offset-4"
          >
            <Instagram className="w-4 h-4" /> @diegoallas
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
