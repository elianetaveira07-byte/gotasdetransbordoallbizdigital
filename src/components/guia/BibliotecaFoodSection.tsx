import {
  BookOpen,
  Smartphone,
  Bike,
  Mic,
  Cpu,
  Wrench,
  ExternalLink,
  Gift,
} from 'lucide-react';
import capaCozinha from '@/assets/fs_biblioteca_cozinha.jpg';
import capaDelivery from '@/assets/fs_biblioteca_delivery.jpg';
import capaEstudos from '@/assets/fs_biblioteca_estudos.jpg';
import capaHero from '@/assets/fs_biblioteca_hero.jpg';

const LINKTREE = 'https://linktr.ee/shakeomercadoconsultordiego';

const destaques = [
  {
    img: capaCozinha,
    icon: BookOpen,
    tag: 'Aulas e guias',
    title: 'Marketing 360º Food — o guia épico para donos de restaurante',
    desc: 'A aula mais visitada e constantemente atualizada, junto com a Bíblia do Food Digital, o Funil de Vendas Food & Delivery e o Meta Ads Food do zero ao especialista.',
  },
  {
    img: capaDelivery,
    icon: Bike,
    tag: 'Delivery e iFood',
    title: 'Do iFood ao canal próprio — masterclass delivery 2026',
    desc: 'A Escola do Delivery, "Acorda, dono de food!", 18 formas de vender mais no delivery e a leitura real de margem por canal. Tudo com dados verificados.',
  },
  {
    img: capaEstudos,
    icon: Mic,
    tag: 'Podcast e biblioteca',
    title: 'Podcast Allbiz Digital + e-books e PDFs',
    desc: 'Playlist do podcast no SoundCloud, biblioteca de leitura, materiais em PDF e o ecossistema de gestão de uma rede de pastelaria (matriz + 3 filiais) aberto por dentro.',
  },
];

const blocos = [
  {
    icon: Smartphone,
    title: 'Apps gratuitos',
    desc: 'Evolução Digital, Guia Food Service 2026, Tráfego Inteligente para Restaurantes e a Calculadora de Sobrevivência do Delivery.',
  },
  {
    icon: Cpu,
    title: 'IA aplicada ao food',
    desc: 'IA no Food do zero ao automático, o tsunami digital do food service e o que mudou de verdade no setor em 2026.',
  },
  {
    icon: Wrench,
    title: 'Ferramentas e CRMs',
    desc: 'Curadoria de sistemas do setor: Repediu, Cardápio Web, Anota AI, Saipos, Goomer, Fidelizi, Takeat e dezenas de outros — com o que serve para cada porte.',
  },
  {
    icon: Gift,
    title: 'NFC + CRM e notícias',
    desc: 'Opções de cartão e display com tecnologia NFC ligada a CRM, além dos portais de tendência que eu acompanho — sem guru.',
  },
];

const BibliotecaFoodSection = () => {
  return (
    <section id="biblioteca" className="relative bg-[#0D1117] text-white py-[72px] overflow-hidden">
      <img
        src={capaHero}
        alt="Salão de restaurante iluminado à noite"
        width={1600}
        height={704}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0D1117]/85 to-[#0D1117]" />

      <div className="container relative">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
            Acesso gratuito · sem cadastro
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
            Minha biblioteca do food service —{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              aberta para você
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
            Tudo que eu estudo, produzo e atualizo está reunido em um só lugar: aulas completas, e-books, PDFs, apps,
            podcast e curadoria de ferramentas. É material meu, liberado de graça para donos de food service — antes
            mesmo de a gente conversar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {destaques.map((d, i) => {
            const Icon = d.icon;
            return (
              <a
                key={i}
                href={LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-yellow-500/40 transition-colors"
              >
                <div className="relative">
                  <img
                    src={d.img}
                    alt={d.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-300 bg-black/60 border border-yellow-500/30 px-2.5 py-1 rounded-full">
                    <Icon className="w-3.5 h-3.5" /> {d.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold leading-snug text-white group-hover:text-yellow-300 transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-[1.7]">{d.desc}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocos.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                <Icon className="w-5 h-5 text-yellow-400 mb-2.5" />
                <h3 className="text-sm font-bold text-white mb-1.5">{b.title}</h3>
                <p className="text-xs text-white/55 leading-[1.7]">{b.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between bg-white/[0.04] border border-yellow-500/25 rounded-2xl p-6">
          <p className="text-sm text-white/70 leading-[1.7] max-w-xl">
            Eu não cobro nada por esse acervo. Se ajudar a sua casa a vender melhor, já valeu — e se você quiser alguém
            para implantar isso dentro da operação, aí a gente conversa.
          </p>
          <a
            href={LINKTREE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-500 text-[#0D1117] text-sm font-bold px-6 py-3.5 rounded-full no-underline hover:from-yellow-200 hover:to-yellow-400 transition-colors whitespace-nowrap"
          >
            Acessar a biblioteca gratuita <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BibliotecaFoodSection;
