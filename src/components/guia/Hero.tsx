import { ArrowDown, MessageCircle, FileCheck2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';

const Hero = () => {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-professional text-professional-ink py-12 md:py-16"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <img
                src={diegoPerfil.url}
                alt="Diego Allas"
                width={800}
                height={1000}
                className="relative w-full max-w-[230px] lg:max-w-[300px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-professional-highlight text-xs font-semibold uppercase mb-4">
              <MapPin className="h-4 w-4" /> Goiânia · Marketing e operação
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-4">Diego Allas</h1>
            <p className="text-2xl md:text-3xl font-serif leading-tight text-professional-highlight mb-5">Marketing que conecta anúncio, atendimento e operação.</p>
            <p className="text-base text-professional-muted max-w-xl mx-auto lg:mx-0 mb-7 leading-relaxed">Executo conteúdo, mídia paga e organização comercial com a visão de quem já viveu a operação. Em Goiânia, implantei uma base de marketing interno em sete semanas — com acessos, Google, Meta, mensuração, CRM e rotinas documentadas.</p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button asChild variant="professional" size="lg" className="h-auto whitespace-normal py-3"><Link to="/caso-documentado"><FileCheck2 /> Ver o que já implantei</Link></Button>
              <Button asChild variant="professional-outline" size="lg" className="h-auto whitespace-normal py-3"><a href="https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional." target="_blank" rel="noopener noreferrer"><MessageCircle /> Conversar sobre uma oportunidade</a></Button>
            </div>
            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-professional-muted hover:text-professional-ink text-sm no-underline"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: (62) 99968-8700
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="#metodo" aria-label="Conhecer o método de trabalho" className="text-professional-muted hover:text-professional-highlight transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
