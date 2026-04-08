import { Hospital, Home, Gift, FlaskConical, ClipboardList, Trophy } from 'lucide-react';

const vantagens = [
  { icon: Hospital, title: 'CRER – CER IV', desc: 'O maior nível de complexidade do Ministério da Saúde. Referência nacional para paralisia cerebral grave em adultos.' },
  { icon: Home, title: 'Crer em Casa', desc: 'Equipe completa vai até a casa 2–3 vezes por semana. Não precisa levar o Matheuzinho toda hora.' },
  { icon: Gift, title: 'Tudo de Graça', desc: 'Remédios, fraldas, dieta da sonda, cadeiras adaptadas, órteses, coletes — tudo fornecido pelo SUS.' },
  { icon: FlaskConical, title: 'Hospital das Clínicas', desc: 'Protocolos avançados de nutrição enteral e gastroenterologia — exatamente o que ele precisa com a sonda.' },
  { icon: ClipboardList, title: 'Prontuário já existe', desc: 'Ele foi paciente há quase 10 anos! O prontuário antigo é reativado mais rápido, sem burocracia.' },
  { icon: Trophy, title: 'Top 3 do Brasil', desc: 'CRER + HC/UFG formam um dos melhores conjuntos de cuidado do país para exatamente o perfil dele.' },
];

const VantagensSection = () => {
  return (
    <section id="vantagens" className="container pb-[72px]">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Por que Goiânia?</span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
          O que ele <span className="text-primary">ganha</span> que não tem no Cariri
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {vantagens.map((v, i) => (
          <div key={i} className="bg-card rounded-lg p-7 shadow-guia transition-all hover:-translate-y-1 hover:shadow-guia-lg">
            <div className="w-12 h-12 rounded-xl bg-guia-blue-light flex items-center justify-center mb-3.5">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-primary mb-2">{v.title}</h3>
            <p className="text-sm text-guia-text-muted">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VantagensSection;
