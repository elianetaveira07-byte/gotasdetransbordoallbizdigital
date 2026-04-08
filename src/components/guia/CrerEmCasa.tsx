const CrerEmCasa = () => {
  return (
    <div className="rounded-lg p-8 md:p-[52px] text-white mb-9" style={{ background: 'linear-gradient(135deg, hsl(222,67%,32%) 0%, #2B6CB0 100%)' }}>
      <h2 className="font-serif text-3xl font-semibold mb-3">🏠 Crer em Casa — atendimento na sua porta</h2>
      <p className="text-lg text-white/85 max-w-xl mb-9">
        O programa mais incrível do CRER: uma equipe completa de saúde vai até a casa do Matheuzinho, 2 a 3 vezes por semana. Ele não precisa sair de casa para quase nada.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: '2–3x', desc: 'visitas por semana' },
          { num: '5+', desc: 'profissionais na equipe' },
          { num: '100%', desc: 'gratuito pelo SUS' },
        ].map((s, i) => (
          <div key={i} className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
            <span className="font-serif text-5xl font-light text-yellow-300 block leading-none mb-1.5">{s.num}</span>
            <p className="text-sm text-white/80">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
        {[
          { title: 'Quem pode pedir?', desc: 'Pacientes com alta dependência funcional, como paralisia cerebral grave, que não conseguem ir ao CRER facilmente.' },
          { title: 'Como funciona?', desc: 'Na primeira consulta presencial, peça o laudo para o "Crer em Casa". A equipe faz triagem e, se aprovado, começa a ir em casa.' },
          { title: 'Quem vem em casa?', desc: 'Médico, enfermeiro, fisioterapeuta, terapeuta ocupacional, fonoaudiólogo, nutricionista e psicólogo.' },
          { title: 'E os remédios?', desc: 'A equipe já leva e entrega em casa! Remédios de alto custo, fraldas, dieta da sonda — tudo.' },
        ].map((c, i) => (
          <div key={i} className="bg-white/10 rounded-[14px] p-5 border border-white/15">
            <h4 className="text-sm font-semibold text-yellow-300 mb-1.5">{c.title}</h4>
            <p className="text-sm text-white/80">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrerEmCasa;
