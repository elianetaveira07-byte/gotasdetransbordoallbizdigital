const Footer = () => {
  return (
    <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0F2660' }}>
      <p className="font-semibold text-white/80">ALLBIZ DIGITAL — Diego Allas • Marketing para Food Service</p>
      <p className="mt-2">
        WhatsApp:{' '}
        <a href="https://wa.me/5588988348700" className="text-white/80 no-underline">(88) 98834-8700</a>
        {' '}•{' '}
        <a href="mailto:contato@allbizdigital.com" className="text-white/80 no-underline">contato@allbizdigital.com</a>
      </p>
      <p className="mt-2 text-xs opacity-50">Chapada do Araripe, PE → Goiânia, GO • Abril 2026 • Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
