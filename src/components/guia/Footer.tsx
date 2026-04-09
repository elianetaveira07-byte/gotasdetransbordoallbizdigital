const Footer = () => {
  return (
    <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0F2660' }}>
      <p>Guia feito com dedicação por Diego Allas, baseado em informações oficiais do SUS e CRER • Abril 2026</p>
      <p className="mt-2">
        Para reativar o prontuário, ligue para o CRER:{' '}
        <a href="tel:6232323000" className="text-white/80 no-underline">(62) 3232-3000</a> e diga:{' '}
        <em>"Ex-paciente de quase 10 anos atrás, queremos reativar"</em>
      </p>
      <p className="mt-2 text-xs opacity-50">Salve este guia e compartilhe com quem precisa saber. ALLBIZ DIGITAL • Diego Allas</p>
    </footer>
  );
};

export default Footer;
