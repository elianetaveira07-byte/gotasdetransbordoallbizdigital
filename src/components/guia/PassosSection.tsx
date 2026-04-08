const passos = [
  { num: 1, title: 'Pais vão primeiro para Goiânia', desc: 'Alugam uma casa simples com contrato no nome de um dos pais. Isso é obrigatório para atualizar o Cartão SUS em Goiânia.' },
  { num: 2, title: 'Atualizar o Cartão SUS', desc: 'Levar na UBS de Goiânia: CPF, comprovante de residência (contrato de aluguel), RG e o cartão antigo de Palmas-TO. O SUS é nacional, mas o cadastro precisa estar em Goiânia.' },
  { num: 3, title: 'Reativar o prontuário no CRER', desc: 'Levar todos os laudos antigos (de 10 anos atrás!) + laudos novos + relatório médico completo do Cariri/Palmas. Como ele já foi paciente, é bem mais rápido — pode sair em dias!' },
  { num: 4, title: 'Pedir o Crer em Casa na primeira consulta', desc: 'Na primeira consulta já peçam o laudo para o "Crer em Casa". A triagem é feita logo após o cadastro reativado. Quando aprovado, a equipe começa a ir em casa.' },
  { num: 5, title: 'Trazer o Matheuzinho', desc: 'Só na data da consulta marcada. Enquanto isso, ele fica tranquilo em Palmas com os avós. Sem pressa, tudo organizado antes.' },
];

const PassosSection = () => {
  return (
    <div className="container" id="passos">
      <section className="py-[72px]">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Plano da mudança</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Passo a passo <span className="text-primary">bem simples</span>
          </h2>
        </div>
        <div className="flex flex-col relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/10" />
          {passos.map((p) => (
            <div key={p.num} className="flex gap-6 relative pb-10 last:pb-0">
              <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-semibold relative z-10 shadow-[0_0_0_6px_hsl(var(--background))]">
                {p.num}
              </div>
              <div className="bg-card rounded-lg p-7 flex-1 shadow-guia">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">{p.title}</h3>
                <p className="text-[0.95rem] text-guia-text-muted">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PassosSection;
