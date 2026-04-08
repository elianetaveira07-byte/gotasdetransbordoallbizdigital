const gratuitos = [
  { icon: '💊', title: 'Remédios', desc: 'Todos os de alto custo e uso contínuo. Entregues pela Farmácia de Alto Custo do CRER ou via Crer em Casa.' },
  { icon: '🩲', title: 'Fraldas Adultas', desc: 'Quantidade suficiente para o mês inteiro. CRER + Prefeitura + Farmácia Popular cobrem tudo.' },
  { icon: '🦽', title: 'Cadeira de Rodas', desc: 'Feita sob medida na Oficina Ortopédica do CRER. Adaptada para a postura específica dele.' },
  { icon: '🦿', title: 'Órteses e Coletes', desc: 'Órteses, palmilhas, calçados ortopédicos, coletes — tudo sob medida e com manutenção incluída.' },
  { icon: '🥛', title: 'Dieta da Sonda', desc: 'Fórmulas enterais completas + frascos, equipos, sondas de reposição. A nutricionista ajusta tudo.' },
  { icon: '👩‍⚕️', title: 'Equipe em Casa', desc: 'Médico, enfermeiro, fisio, nutricionista, psicólogo — 2 a 3 vezes por semana, sem custo nenhum.' },
];

const GratuitosSection = () => {
  return (
    <div className="bg-guia-green-light py-[72px]" id="oqueganha">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">100% gratuito pelo SUS</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Tudo que o Matheuzinho <span className="text-primary">recebe de graça</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gratuitos.map((g, i) => (
            <div key={i} className="bg-card rounded-lg p-7 shadow-guia text-center transition-all hover:-translate-y-1 border-b-4 border-primary">
              <span className="text-4xl mb-3.5 block">{g.icon}</span>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">{g.title}</h3>
              <p className="text-sm text-guia-text-muted">{g.desc}</p>
              <span className="inline-block text-[0.7rem] font-bold bg-guia-green-light text-guia-green px-2.5 py-1 rounded-full mt-2.5">✓ Gratuito</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GratuitosSection;
