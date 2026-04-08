const docs = [
  'Laudos e exames antigos do CRER (de 10 anos atrás)',
  'Receitas atuais de TODOS os remédios',
  'Relatório médico completo do Cariri / Palmas',
  'Cartão SUS de Palmas-TO (antigo)',
  'CPF e RG do Matheuzinho e dos dois pais',
  'Comprovante de residência em Goiânia (contrato de aluguel)',
  'Número do prontuário antigo do CRER (se souberem)',
  'Exames recentes: sangue, imagem, gastro',
];

const DocumentosSection = () => {
  return (
    <div className="bg-guia-amber-light py-14">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Lista de documentos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Deixe tudo <span className="text-primary">pronto antes de ir</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {docs.map((d, i) => (
            <div key={i} className="flex gap-3 items-start bg-card rounded-[14px] p-4 shadow-guia text-sm">
              <span className="flex-shrink-0 text-xl">📄</span>
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentosSection;
