const ContatosSection = () => {
  return (
    <div className="container">
      <section className="py-[72px]">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Salve agora no celular</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Contatos <span className="text-primary">importantes</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">🏥</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">CRER — Central de Agendamento</h3>
            <a href="tel:6232323000" className="block text-primary font-semibold no-underline mt-1.5">(62) 3232-3000</a>
            <a href="https://wa.me/6299955400" className="block text-green-600 font-semibold no-underline mt-1.5">WhatsApp: (62) 3995-5400</a>
            <p className="text-xs text-guia-text-muted mt-1.5">Diga: "Ex-paciente, queremos reativar o prontuário"</p>
          </div>
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">🏛️</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">Hospital das Clínicas UFG</h3>
            <p className="text-xs text-guia-text-muted mt-1.5">Via regulação SUS ou encaminhamento do CRER</p>
            <p className="text-xs text-guia-text-muted mt-1.5">Campus Samambaia, Goiânia</p>
          </div>
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">🌻</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">Pestalozzi de Goiânia</h3>
            <a href="tel:6235155665" className="block text-primary font-semibold no-underline mt-1.5">(62) 3515-5665</a>
            <p className="text-xs text-guia-text-muted mt-1.5">Av. A, nº 561 – Vila Nova</p>
          </div>
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">📱</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">APC+ (Apoio Familiar)</h3>
            <a href="https://instagram.com/apc.mais" target="_blank" rel="noreferrer" className="block text-primary font-semibold no-underline mt-1.5">@apc.mais no Instagram</a>
            <p className="text-xs text-guia-text-muted mt-1.5">Rede de mais de 150 famílias</p>
          </div>
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">⚖️</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">ADFEGO</h3>
            <a href="tel:6232023313" className="block text-primary font-semibold no-underline mt-1.5">(62) 3202-3313</a>
            <p className="text-xs text-guia-text-muted mt-1.5">Av. Independência, 3026 – Leste Vila Nova</p>
          </div>
          <div className="bg-card rounded-lg p-7 shadow-guia text-center">
            <span className="text-3xl mb-3 block">🤝</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">CREAS</h3>
            <p className="text-xs text-guia-text-muted mt-1.5">Procure a unidade mais próxima na Prefeitura de Goiânia pelo bairro onde vão morar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatosSection;
