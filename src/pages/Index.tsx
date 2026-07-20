import Navbar from '@/components/guia/Navbar';
import Hero from '@/components/guia/Hero';
import IntroSection from '@/components/guia/IntroSection';
import PerfilProfissionalSection from '@/components/guia/PerfilProfissionalSection';
import DisponibilidadeSection from '@/components/guia/DisponibilidadeSection';
import FamilySection from '@/components/guia/FamilySection';
import VantagensSection from '@/components/guia/VantagensSection';
import InstitutionsSection from '@/components/guia/InstitutionsSection';
import GratuitosSection from '@/components/guia/GratuitosSection';
import CarouselSection from '@/components/guia/CarouselSection';
import MarketingSection from '@/components/guia/MarketingSection';
import ConclusaoSection from '@/components/guia/ConclusaoSection';
import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <IntroSection />
      <PerfilProfissionalSection />
      <DisponibilidadeSection />
      <FamilySection />
      <VantagensSection />
      <InstitutionsSection />
      <GratuitosSection />
      <CarouselSection />
      <MarketingSection />
      <ConclusaoSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
