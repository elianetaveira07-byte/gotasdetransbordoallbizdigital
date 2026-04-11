import { Award, BookOpen, BarChart3, Users, Zap, Shield } from 'lucide-react';

const diferenciais = [
  { icon: Award, title: 'Certificações reais', desc: 'ESPM, Google Ads, Meta Blueprint, Placa 100K. Cada credencial é comprovada — não é selo decorativo.' },
  { icon: BookOpen, title: '12 anos no chão de food', desc: 'Cozinha, balcão, delivery, operação. Eu sei o que é estar no seu lugar porque já estive lá.' },
  { icon: BarChart3, title: 'Dados, não achismo', desc: 'Dashboard com métricas reais, relatórios transparentes, resultados documentados em tempo real.' },
  { icon: Users, title: 'Atendimento pessoal', desc: 'Não sou agência com 50 clientes. Atendo poucos para entregar muito. Google Meet 12h por dia.' },
  { icon: Zap, title: 'IA aplicada ao food', desc: 'Ensino a usar LLMs, automação, geração de imagem — ferramentas que economizam horas todo dia.' },
  { icon: Shield, title: 'Transparência total', desc: 'Mostro tudo: comprovantes, passagens aéreas, emails, cursos, investimentos. Pode conferir ao vivo.' },
];

const DocumentosSection = () => {
  return (
    <div className="bg-guia-blue-light py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-white inline-block px-3.5 py-1.5 rounded-full mb-3.5">Por que me escolher</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            O que me diferencia de <span className="text-primary">qualquer agência</span>
          </h2>
          <p className="text-guia-text-muted mt-2 text-base max-w-2xl">Modelo "Solo" — eficiência sobre tamanho. Menos clientes, mais resultado. Sem equipe genérica — você fala direto comigo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((d, i) => (
            <div key={i} className="bg-card rounded-lg p-7 shadow-guia transition-all hover:-translate-y-1 hover:shadow-guia-lg">
              <div className="w-12 h-12 rounded-xl bg-guia-blue-light flex items-center justify-center mb-3.5">
                <d.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">{d.title}</h3>
              <p className="text-sm text-guia-text-muted">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentosSection;
