import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Volume2, VolumeX, BookOpen, GraduationCap, Users, Gift, MessageCircle, FolderOpen, Clock, Sparkles, Mountain, TrendingUp } from 'lucide-react';

import imgFilhosCarrinho from '@/assets/marketing_filhos_carrinho.jpg';
import imgPaiFilhoPraia from '@/assets/marketing_pai_filho_praia.jpg';
import imgPaiFilhoPiscina from '@/assets/marketing_pai_filho_piscina.jpg';
import imgDiegoCarro from '@/assets/marketing_diego_carro.jpg';
import imgDiegoChapada from '@/assets/marketing_diego_chapada.jpg';
import imgFamiliaPraiaNoite from '@/assets/marketing_familia_praia_noite.jpg';
import imgFamiliaShopping from '@/assets/marketing_familia_shopping.jpg';
import imgKiwify from '@/assets/marketing_kiwify.jpg';
import imgFilhoTrofeu from '@/assets/marketing_filho_trofeu.jpg';
import imgMatheuzinhoLivros from '@/assets/marketing_matheuzinho_livros.jpg';
import imgConquista from '@/assets/marketing_conquista.png';
import imgEsposaFilho from '@/assets/marketing_esposa_filho.jpg';
import imgFamilia2 from '@/assets/marketing_familia2.jpg';
import imgFamiliaJardim from '@/assets/marketing_familia_jardim.jpg';
import imgDiegoPiscinaFilhos from '@/assets/marketing_diego_piscina_filhos.jpg';
import imgCasalPraia from '@/assets/marketing_casal_praia.jpg';

const photos = [
  { src: imgDiegoChapada, alt: 'Diego na Chapada do Araripe — onde tudo começou', caption: 'Chapada do Araripe — 2 anos de estudo intensivo na serra' },
  { src: imgDiegoCarro, alt: 'Diego Allas', caption: 'Diego Allas — Fundador da ALLBIZ DIGITAL' },
  { src: imgConquista, alt: 'Conquistas e resultados no digital', caption: 'Resultados reais — cada número é documentado' },
  { src: imgKiwify, alt: 'Conquista Kiwify — resultados comprovados', caption: 'Educação sempre em primeiro lugar' },
  { src: imgFamiliaShopping, alt: 'Família no shopping — Matheuzinho estudando', caption: 'Família unida — cada momento é valorizado' },
  { src: imgFilhoTrofeu, alt: 'Filho com troféu de aluno destaque', caption: 'A família que me motiva todos os dias' },
  { src: imgMatheuzinhoLivros, alt: 'Matheuzinho com seus livros', caption: 'Elimine o que não te ajudar a crescer e evoluir.' },
  { src: imgEsposaFilho, alt: 'Esposa e filho estudando juntos', caption: 'Desde o colo, já se constrói o futuro de um filho.' },
  { src: imgPaiFilhoPraia, alt: 'Pai e filho na praia', caption: 'Lazer em família — equilíbrio é essencial' },
  { src: imgPaiFilhoPiscina, alt: 'Pai e filho na piscina', caption: 'Momentos que valem mais que qualquer certificação' },
  { src: imgFamilia2, alt: 'Família reunida', caption: 'Cada momento de ensino é uma semente de futuro.' },
  { src: imgFilhosCarrinho, alt: 'Filhos juntos no shopping', caption: 'Irmãos juntos — a felicidade é simples' },
  { src: imgFamiliaPraiaNoite, alt: 'Família na praia à noite', caption: 'Praia à noite — criando memórias' },
  { src: imgCasalPraia, alt: 'Casal na praia — amor e parceria', caption: 'Amor e parceria — a base de tudo' },
  { src: imgDiegoPiscinaFilhos, alt: 'Diego na piscina com os filhos', caption: 'Momentos de lazer com os filhos — o que mais vale' },
  { src: imgFamiliaJardim, alt: 'Família no jardim', caption: 'Família reunida — cada dia é uma conquista' },
];

const videos = [
  { src: '/videos/marketing_video1.mp4', title: 'Jornada espiritual e familiar' },
  { src: '/videos/marketing_video2.mp4', title: 'Bastidores da preparação' },
  { src: '/videos/marketing_video3.mp4', title: 'Momentos em família' },
  { src: '/videos/marketing_video4.mp4', title: 'Dia a dia na serra' },
  { src: '/videos/marketing_video5.mp4', title: 'Estudos e dedicação' },
  { src: '/videos/marketing_video6.mp4', title: 'Registro da jornada' },
  { src: '/videos/marketing_video7.mp4', title: 'Família e propósito' },
];

const entregas = [
  { icon: FolderOpen, title: 'Biblioteca gratuita no Google Drive', desc: 'Ebooks, apostilas, planilhas, checklists — tudo que estão cobrando no digital, eu entrego grátis.' },
  { icon: Users, title: 'Google Meet 12h/dia', desc: 'Suporte individual e em grupo para empresários. Ensino passo a passo como se estivesse pegando na mão.' },
  { icon: Gift, title: 'Sorteio: 6 meses grátis', desc: 'Uma empresa será sorteada para receber audiovisual + tráfego pago (Google e Meta) — investimento incluso.' },
  { icon: BookOpen, title: 'Cursos e materiais próprios', desc: 'Conteúdo que eu mesmo criei com base em +R$100k investidos em mentorias, imersões e certificações.' },
  { icon: Sparkles, title: 'Ensino a usar IA corretamente', desc: 'LLMs, automações, ferramentas — sem mistério, sem guru. Resultados rápidos sem cair em golpes.' },
  { icon: Clock, title: 'Depoimentos e provas ao vivo', desc: 'Mostro tudo: comprovantes de cursos, passagens aéreas, emails, resultados. Transparência total.' },
];

const VideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const restart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-guia-lg bg-black">
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        playsInline
        className="w-full aspect-[9/16] object-cover"
        onEnded={() => setPlaying(false)}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center gap-2">
        <button onClick={togglePlay} className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary hover:scale-110 transition-transform">
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button onClick={restart} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button onClick={toggleMute} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
        <span className="text-white/70 text-xs ml-auto truncate">{title}</span>
      </div>
    </div>
  );
};

const MarketingSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => setCurrentPhoto((p) => (p === 0 ? photos.length - 1 : p - 1));
  const nextPhoto = () => setCurrentPhoto((p) => (p === photos.length - 1 ? 0 : p + 1));

  return (
    <section id="marketing" className="py-[72px] bg-guia-blue-light">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-white inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            O que o marketing me proporcionou
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight flex items-center justify-center gap-3">
            <Mountain className="w-7 h-7 text-primary" />
            +R$100.000 investidos no silêncio da Serra
          </h2>
          <p className="text-guia-text-muted mt-3 max-w-3xl mx-auto text-base leading-relaxed">
            2 anos isolado na Chapada do Araripe, estudando 12 a 16 horas por dia. +R$100.000 em cursos online, livros, mentorias presenciais e imersões de alta performance. 
            Tudo registrado: emails, comprovantes, passagens aéreas, fotos e vídeos reais. Não é promessa — é preparação documentada para chegar em Goiânia com credencial, resultado e propósito.
          </p>
        </div>

        {/* Photo Gallery */}
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
          Registros reais da minha jornada e da minha família
        </h3>
        <div className="relative mb-10">
          <div className="relative rounded-xl overflow-hidden shadow-guia-lg bg-black aspect-[4/3] md:aspect-[16/9]">
            <img
              src={photos[currentPhoto].src}
              alt={photos[currentPhoto].alt}
              className="w-full h-full object-contain bg-black transition-opacity duration-200"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-5">
              <p className="text-white text-sm md:text-base font-medium">{photos[currentPhoto].caption}</p>
              <p className="text-white/60 text-xs mt-1">{currentPhoto + 1} / {photos.length}</p>
            </div>
            {/* Navigation arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPhoto(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentPhoto ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className="mb-12">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            Alguns registros em vídeo
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {videos.map((v, i) => (
              <VideoPlayer key={i} src={v.src} title={v.title} />
            ))}
          </div>
        </div>

        {/* Manifesto */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary mb-10">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" /> O que estou construindo — e por que isso importa para você
          </h3>
          <p className="text-base leading-[1.75] mb-4">
            Não estou usando esse espaço para pedir ajuda ou te forçar a nada. Estou <strong>investindo o meu próprio dinheiro</strong> — em anúncios Meta e Google, consultorias gratuitas, serviços aplicados — porque sei que o <strong>depoimento real vale mais que qualquer promessa</strong>.
          </p>
          <p className="text-base leading-[1.75] mb-4">
            Em troca de cada trabalho gratuito, peço apenas o depoimento. Cada número, cada resultado, cada conquista está sendo documentada em tempo real para construir o <strong>maior case de sucesso do food delivery em Goiânia</strong>.
          </p>
          <p className="text-base leading-[1.75]">
            Quando eu chegar em Goiânia com a <strong>certificação ESPM, a Placa 100K, certificações Google e Meta</strong> — o acesso vai custar outro preço. Agora é a janela para me conhecer, entender minha história e ter acesso direto a tudo que sei.
          </p>
        </div>

        {/* O que vou entregar */}
        <div className="mb-10">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            O que você recebe — tudo gratuito
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {entregas.map((e, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia transition-all hover:-translate-y-1 hover:shadow-guia-lg">
                <div className="w-11 h-11 rounded-xl bg-guia-blue-light flex items-center justify-center mb-3">
                  <e.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif text-base font-semibold text-primary mb-1.5">{e.title}</h4>
                <p className="text-sm text-guia-text-muted leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="rounded-xl p-8 md:p-10 text-white text-center" style={{ background: 'linear-gradient(135deg, hsl(222,67%,32%) 0%, #2B6CB0 100%)' }}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
            Acesse os materiais gratuitos agora
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Tudo que investi em +R$100k de estudos está sendo organizado e disponibilizado gratuitamente. 
            Planilhas, ebooks, checklists, vídeos e muito mais. Se quiser tirar dúvidas ou ver tudo ao vivo, me chame no WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/drive/folders/1r8NUEqDhXSoFKOp3V0XEy0vYijdCFxLI?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              <FolderOpen className="w-5 h-5" />
              Acessar Google Drive gratuito
            </a>
            <a
              href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Vi%20o%20guia%20e%20quero%20acessar%20os%20materiais%20gratuitos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 text-white font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-white/50 text-xs mt-5">
            Posso mostrar tudo ao vivo: comprovantes, cursos, resultados, mentorias — pessoalmente ou via Google Meet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
