import { useEffect } from 'react';
import Navbar from '@/components/guia/Navbar';
import Hero from '@/components/guia/Hero';
import MetodoSection from '@/components/guia/MetodoSection';
import IntroSection from '@/components/guia/IntroSection';
import PerfilProfissionalSection from '@/components/guia/PerfilProfissionalSection';
import ContratadoSection from '@/components/guia/ContratadoSection';
import FamilySection from '@/components/guia/FamilySection';
import VantagensSection from '@/components/guia/VantagensSection';
import InstitutionsSection from '@/components/guia/InstitutionsSection';
import GratuitosSection from '@/components/guia/GratuitosSection';
import CarouselSection from '@/components/guia/CarouselSection';
import MarketingSection from '@/components/guia/MarketingSection';
import ConclusaoSection from '@/components/guia/ConclusaoSection';
import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';
import WelcomeScreen from '@/components/guia/WelcomeScreen';
import { setPageMeta } from '@/lib/pageMeta';

const Index = () => {
  useEffect(() => {
    setPageMeta(
      'Diego Allas — Marketing conectado à operação em Goiânia',
      'Conteúdo, anúncios, mensuração e CRM conectados ao atendimento e à operação. Conheça o trabalho documentado e a trajetória de Diego Allas em Goiânia.',
    );
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <MetodoSection />
      <IntroSection />
      <PerfilProfissionalSection />
      <ContratadoSection />
      <FamilySection />
      <VantagensSection />
      <InstitutionsSection />
      <GratuitosSection />
      <CarouselSection />
      <MarketingSection />
      <ConclusaoSection />
      <Footer />
      <ScrollToTop />
      <WelcomeScreen />
    </div>
  );
};

export default Index;
