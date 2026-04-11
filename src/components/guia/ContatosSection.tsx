import { MessageCircle, FolderOpen, Video, Instagram, Mail, Phone } from 'lucide-react';

const contatos = [
  { icon: MessageCircle, title: 'WhatsApp Direto', color: 'text-green-600', content: (
    <>
      <a href="https://wa.me/5588988348700?text=Ol%C3%A1%20Diego!" target="_blank" rel="noopener noreferrer" className="block text-green-600 font-semibold no-underline mt-1.5">(88) 98834-8700</a>
      <p className="text-xs text-guia-text-muted mt-1.5">Respondo pessoalmente — sem robô, sem equipe</p>
    </>
  )},
  { icon: Video, title: 'Google Meet — 12h/dia', color: 'text-primary', content: (
    <>
      <p className="text-sm text-guia-text-muted mt-1.5">Disponível para diagnóstico gratuito, consultoria e suporte individual ou em grupo</p>
      <p className="text-xs text-guia-text-muted mt-1.5">Horário: 07h às 19h • Agende pelo WhatsApp</p>
    </>
  )},
  { icon: FolderOpen, title: 'Google Drive Gratuito', color: 'text-primary', content: (
    <>
      <a href="https://drive.google.com/drive/folders/1r8NUEqDhXSoFKOp3V0XEy0vYijdCFxLI?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-primary font-semibold no-underline mt-1.5">Acessar biblioteca →</a>
      <p className="text-xs text-guia-text-muted mt-1.5">Ebooks, planilhas, checklists, vídeos — tudo gratuito</p>
    </>
  )},
  { icon: Instagram, title: 'Instagram', color: 'text-pink-500', content: (
    <>
      <a href="https://instagram.com/diegoallas" target="_blank" rel="noreferrer" className="block text-primary font-semibold no-underline mt-1.5">@diegoallas</a>
      <p className="text-xs text-guia-text-muted mt-1.5">Acompanhe a jornada em tempo real</p>
    </>
  )},
  { icon: Mail, title: 'E-mail Profissional', color: 'text-primary', content: (
    <>
      <a href="mailto:contato@allbizdigital.com" className="block text-primary font-semibold no-underline mt-1.5">contato@allbizdigital.com</a>
      <p className="text-xs text-guia-text-muted mt-1.5">Para propostas comerciais e parcerias</p>
    </>
  )},
  { icon: Phone, title: 'Ligação Direta', color: 'text-primary', content: (
    <>
      <a href="tel:5588988348700" className="block text-primary font-semibold no-underline mt-1.5">(88) 98834-8700</a>
      <p className="text-xs text-guia-text-muted mt-1.5">Prefere ligar? Sem problema — estou disponível</p>
    </>
  )},
];

const ContatosSection = () => {
  return (
    <div className="container" id="contato">
      <section className="py-[72px]">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Fale comigo</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Vamos <span className="text-primary">conversar</span>
          </h2>
          <p className="text-guia-text-muted mt-2 text-base">Escolha o canal que preferir — atendo pessoalmente cada mensagem.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contatos.map((c, i) => (
            <div key={i} className="bg-card rounded-lg p-7 shadow-guia text-center">
              <div className="w-12 h-12 rounded-2xl bg-guia-blue-light flex items-center justify-center mx-auto mb-3">
                <c.icon className={`w-6 h-6 ${c.color}`} />
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">{c.title}</h3>
              {c.content}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContatosSection;
