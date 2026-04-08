const IntroSection = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Olá, avós!</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Leia com <span className="text-primary">calma e carinho</span>
          </h2>
        </div>
        <div className="bg-card rounded-lg p-10 shadow-guia border-l-[5px] border-primary text-base leading-[1.75]">
          <p>Vocês cuidam do Matheuzinho há muitos anos com tanto amor. Agora a família está pensando em mudar para <strong>Goiânia (GO)</strong> porque lá existe o melhor lugar do Brasil para cuidar de um jovem de 23 anos com paralisia cerebral grave, que não anda, não fala, usa sonda na barriga, tem estenose no esôfago e toma muitos remédios.</p>
          <p className="mt-4">Este guia é para vocês lerem com calma, em voz alta se quiserem, e entenderem tudo. É como um livro que conversa com vocês.</p>
          <div className="bg-guia-green-light rounded-[10px] p-4 mt-5 text-guia-green font-medium">
            ✅ O plano é: os pais vão primeiro para Goiânia, alugam uma casa, organizam tudo — e depois levam o Matheuzinho na data da consulta. Assim fica mais tranquilo e sem pressa.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
