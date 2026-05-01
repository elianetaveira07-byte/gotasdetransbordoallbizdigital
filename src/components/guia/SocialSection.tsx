import { Instagram, Facebook, Youtube, MessageCircle, Mail, Link2, Music2 } from 'lucide-react';
import iconeLogo from '@/assets/icone_logo.png';

const socials = [
  {
    icon: Link2,
    title: 'Linktree',
    handle: '@allbizdigitalconsultoria',
    desc: 'Todos os meus links em um só lugar',
    href: 'https://linktr.ee/allbizdigitalconsultoria',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    handle: '@allbizdigitalmkt',
    desc: 'Bastidores, família e estudos',
    href: 'https://www.instagram.com/allbizdigitalmkt',
    gradient: 'from-pink-500 via-fuchsia-500 to-orange-500',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    handle: '/allbizdigitalmkt',
    desc: 'Conecte-se comigo no Facebook',
    href: 'https://www.facebook.com/allbizdigitalmkt',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    handle: '@allbizdigital',
    desc: 'Vídeos e registros da jornada',
    href: 'https://www.youtube.com/@allbizdigital',
    gradient: 'from-red-500 to-red-700',
  },
  {
    icon: Music2,
    title: 'TikTok',
    handle: '@allbizdigitalmkt',
    desc: 'Momentos rápidos e reais',
    href: 'https://tiktok.com/@allbizdigitalmkt',
    gradient: 'from-slate-700 via-pink-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    handle: '(88) 98834-8700',
    desc: 'Fale comigo direto. Sem robô.',
    href: 'https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Mail,
    title: 'E-mail',
    handle: 'anfitriaonexialista@gmail.com',
    desc: 'Para conversas mais longas',
    href: 'mailto:anfitriaonexialista@gmail.com',
    gradient: 'from-amber-500 to-yellow-600',
  },
];

const SocialSection = () => {
  return (
    <section
      id="redes"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2b 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 70%)' }}
      />
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <img src={iconeLogo} alt="Diego Allas" className="h-20 w-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400/80 inline-block px-3.5 py-1.5 rounded-full mb-4 border border-yellow-400/20 bg-yellow-400/5">
            Me siga & fale comigo
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Vamos nos conectar
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Meu Instagram pessoal está em pausa, mas estou ativo nessas redes da ALLBIZ DIGITAL.
            Me segue, manda mensagem, comenta — gosto de conversar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-yellow-400/40 transition-all hover:-translate-y-1 hover:bg-white/[0.07] no-underline overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`}
              />
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-yellow-400/90 text-sm font-medium mb-1.5 break-all">{s.handle}</p>
                <p className="text-white/60 text-sm">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-12 max-w-xl mx-auto">
          Chapada do Araripe, PE → Goiânia, GO • Em transição com a família
        </p>
      </div>
    </section>
  );
};

export default SocialSection;
