import logoSecundario from '@/assets/logo_secundario.png';

const Footer = () => {
  return (
    <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0D1117' }}>
      <div className="flex justify-center mb-4">
        <img src={logoSecundario} alt="Diego Allas — Estratégia & Escala" className="h-16 w-auto" />
      </div>
      <p className="font-semibold text-white/80">ALLBIZ DIGITAL — Diego Allas • Marketing para Food Service</p>
      <p className="mt-2">
        WhatsApp:{' '}
        <a href="https://wa.me/5588988348700" className="text-white/80 no-underline">(88) 98834-8700</a>
        {' '}•{' '}
        <a href="mailto:anfitriaonexialista@gmail.com" className="text-white/80 no-underline">anfitriaonexialista@gmail.com</a>
      </p>
      <p className="mt-2 text-xs opacity-50">Chapada do Araripe, PE → Goiânia, GO • Abril 2026 • Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;