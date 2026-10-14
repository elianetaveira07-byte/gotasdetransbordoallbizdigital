import { KeyRound, Megaphone, MessagesSquare, BarChart3, ArrowRight, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const etapas = [
  { icon: KeyRound, title: 'Organizar a base', text: 'Acessos, contas, informações e responsabilidades no controle da empresa.' },
  { icon: Megaphone, title: 'Colocar a oferta na rua', text: 'Conteúdo e anúncios coerentes com o que a equipe consegue atender e entregar.' },
  { icon: MessagesSquare, title: 'Cuidar de quem chega', text: 'WhatsApp, atendimento, CRM e acompanhamento conectados à operação presencial.' },
  { icon: BarChart3, title: 'Aprender com os dados', text: 'Origem dos contatos, qualidade das conversas e próximos ajustes explicados com clareza.' },
];

const MetodoSection = () => (
  <section id="metodo" className="scroll-mt-24 border-b border-border bg-card py-14 md:py-20">
    <div className="container">
      <div className="grid gap-7 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase text-guia-green">Da campanha à operação</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">O anúncio é uma parte.<br />O caminho do cliente é o todo.</h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">O dono conhece seu negócio. Meu papel é ouvir, traduzir isso em uma rotina de marketing e ajudar a equipe a executar. Sem exigir que ele vire especialista em plataformas para entender o próprio investimento.</p>
      </div>
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {etapas.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="border-t border-border pt-5">
            <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-primary" /><span className="text-xs text-muted-foreground">0{index + 1}</span></div>
            <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-9 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
        <p className="max-w-xl text-sm text-muted-foreground">Os fundamentos se conectam; os canais, as regras e a rotina mudam de setor para setor. O ponto de partida é entender a operação, não repetir uma receita.</p>
        <Button asChild variant="outline" className="h-auto whitespace-normal py-3"><Link to="/caso-documentado"><FileCheck2 /> Ver o trabalho documentado <ArrowRight /></Link></Button>
      </div>
    </div>
  </section>
);

export default MetodoSection;