const Footer = () => {
  return (
    <footer className="text-center py-8 px-6 text-sm text-white/60" style={{ background: '#0F2660' }}>
      <p>Guia feito com carinho, baseado em informações oficiais do SUS e CRER • Abril 2026</p>
      <p className="mt-2">
        Qualquer dúvida, os pais podem ligar direto para o CRER:{' '}
        <a href="tel:6232323000" className="text-white/80 no-underline">(62) 3232-3000</a> e dizer:{' '}
        <em>"Ex-paciente de 10 anos atrás, queremos reativar"</em>
      </p>
      <p className="mt-2 text-xs opacity-50">Salve este arquivo e abra no celular ou computador. Pode compartilhar no WhatsApp da família.</p>
    </footer>
  );
};

export default Footer;
