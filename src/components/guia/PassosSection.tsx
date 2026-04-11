import { MessageCircle, FolderOpen } from 'lucide-react';

const passos = [
  { num: 1, title: 'Diagnóstico gratuito do seu negócio', desc: 'Em 30 minutos de Google Meet, analiso sua presença digital: Google Meu Negócio, iFood, Instagram, WhatsApp Business. Você descobre exatamente onde está perdendo clientes — sem custo.' },
  { num: 2, title: 'Plano de ação personalizado', desc: 'Após o diagnóstico, entrego um plano com as 3 prioridades que vão gerar resultado mais rápido no seu restaurante. Cada ação é prática e aplicável no mesmo dia.' },
  { num: 3, title: 'Acesso aos materiais gratuitos', desc: 'Ebooks, planilhas, checklists, vídeos — tudo que investi +R$100k para aprender, organizado e disponível no Google Drive. Conteúdo que estão cobrando por aí, eu entrego grátis.' },
  { num: 4, title: 'Acompanhamento via Google Meet', desc: 'Disponível 12h por dia para tirar dúvidas, ensinar passo a passo e ajudar na execução. Individual ou em grupo — como se estivesse pegando na sua mão.' },
  { num: 5, title: 'Resultados documentados em tempo real', desc: 'Cada conquista, cada número, cada evolução é documentada. Quando eu chegar em Goiânia com a credencial ESPM e a Placa 100K — você já vai ter visto tudo acontecer.' },
];

const PassosSection = () => {
  return (
    <div className="container" id="passos">
      <section className="py-[72px]">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Como funciona</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            O caminho para <span className="text-primary">fazer seu restaurante crescer</span>
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

        {/* CTA after steps */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://drive.google.com/drive/folders/1r8NUEqDhXSoFKOp3V0XEy0vYijdCFxLI?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <FolderOpen className="w-5 h-5" />
            Acessar materiais gratuitos
          </a>
          <a
            href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!%20Vi%20sua%20apresenta%C3%A7%C3%A3o%20e%20quero%20agendar%20um%20diagn%C3%B3stico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-500 text-white font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar diagnóstico gratuito
          </a>
        </div>
      </section>
    </div>
  );
};

export default PassosSection;
