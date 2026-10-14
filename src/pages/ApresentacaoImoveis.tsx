import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Download, FileCheck2, MapPin, MessageCircle, Megaphone, MessagesSquare, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTop from '@/components/guia/ScrollToTop';
import Footer from '@/components/guia/Footer';
import MetodoSection from '@/components/guia/MetodoSection';
import diegoPerfil from '@/assets/diego_allas_perfil.webp.asset.json';
import reportAsset from '@/assets/relatorio_implantacao_marketing.docx.asset.json';
import { setPageMeta } from '@/lib/pageMeta';

const whatsapp = 'https://wa.me/5562999688700?text=' + encodeURIComponent('Olá, Diego. Vi sua apresentação para a vaga de marketing na Imóveis Goiânia e gostaria de conversar.');
const frentes = [
  { icon: Megaphone, title: 'Anúncios e conteúdo', need: 'Criar e publicar anúncios de imóveis; organizar Instagram e redes sociais.', contribution: 'Trago repertório em conteúdo, mídia paga e organização de rotina. Para imóveis, começaria por informações conferidas, fotos, disponibilidade e uma chamada clara para contato.' },
  { icon: BarChart3, title: 'Meta Ads e desempenho', need: 'Gerenciar tráfego pago e acompanhar os resultados das campanhas.', contribution: 'A implantação documentada inclui Meta, Pixel, GTM e GA4. Minha leitura considera o contato gerado e o retorno do atendimento, não apenas cliques e curtidas.' },
  { icon: Search, title: 'Portais e OLX', need: 'Anunciar em portais imobiliários e manter a divulgação organizada.', contribution: 'Aplicaria uma rotina de cadastro, revisão e atualização dos anúncios. O uso específico dos portais e o padrão da imobiliária precisam ser aprendidos com a equipe.' },
  { icon: MessagesSquare, title: 'Do contato à visita', need: 'Trabalhar com metas, resultados e divulgação orgânica e patrocinada.', contribution: 'Meu repertório em CRM, atendimento e processos pode ajudar a organizar a origem do contato, o responsável pelo retorno e o acompanhamento até a visita, junto ao time comercial.' },
];

const ApresentacaoImoveis = () => {
  useEffect(() => {
    setPageMeta('Diego Allas — Candidatura à Imóveis Goiânia', 'Apresentação para a vaga de assistente de marketing imobiliário: execução prática, Meta Ads, mensuração, CRM e uma implantação documentada em Goiânia.');
  }, []);

  return (
    <div className="bg-background text-foreground">
      <nav aria-label="Navegação da candidatura" className="border-b border-professional-line bg-professional text-professional-ink">
        <div className="container flex min-h-16 items-center justify-between gap-4 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-professional-muted"><ArrowLeft className="h-4 w-4" /> Minha história</Link>
          <Button asChild variant="professional-outline" size="sm"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Conversar</a></Button>
        </div>
      </nav>
      <header className="bg-professional text-professional-ink">
        <div className="container grid gap-8 py-10 md:grid-cols-[1.4fr_0.6fr] md:items-center md:py-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-professional-highlight">Para a equipe da Imóveis Goiânia</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Diego Allas</h1>
            <p className="mt-4 max-w-xl font-serif text-2xl leading-tight text-professional-highlight md:text-3xl">Da publicação do anúncio<br className="hidden md:block" /> ao cuidado com cada contato.</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-professional-muted">Quero participar da seleção para assistente de marketing imobiliário. Trago execução em marketing, experiência de operação e uma implantação documentada em Goiânia — para somar à rotina, não apenas sugerir estratégias.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="professional" size="lg"><a href="#aderencia"><CheckCircle2 /> Como posso contribuir</a></Button>
              <Button asChild variant="professional-outline" size="lg"><Link to="/caso-documentado#caso"><FileCheck2 /> Ver o trabalho realizado</Link></Button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-professional-muted"><MapPin className="h-4 w-4" /> Moro em Goiânia · Interesse em entrevista · Apresentação em 14/10/2026</p>
          </div>
          <div className="mx-auto w-full max-w-[210px] md:max-w-[250px]">
            <img src={diegoPerfil.url} alt="Diego Allas" width={800} height={1000} className="h-auto w-full rounded-lg object-contain" />
            <p className="mt-3 text-center text-xs text-professional-muted">Operação por dentro. Marketing por inteiro.</p>
          </div>
        </div>
        <div className="border-t border-professional-line">
          <div className="container grid grid-cols-3 gap-4 py-5">
            {[['7 semanas', 'de implantação documentada'], ['Google + Meta', 'acessos e mensuração'], ['CRM + rotina', 'marketing junto ao comercial']].map(([value, label]) => <div key={value}><p className="text-sm font-semibold text-professional-highlight md:text-base">{value}</p><p className="mt-1 text-xs leading-relaxed text-professional-muted">{label}</p></div>)}
          </div>
        </div>
      </header>

      <main>
        <section id="aderencia" className="container scroll-mt-8 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase text-guia-green">A vaga e meu repertório</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-4xl">Fazer o dia a dia acontecer.<br />Sem perder a visão do todo.</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">O anúncio de vocês reúne conteúdo, tráfego, portais e acompanhamento de resultados. Abaixo, separo o que já trago do que precisaria adaptar à operação imobiliária.</p>
          <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {frentes.map(({ icon: Icon, title, need, contribution }) => <article key={title} className="border-t border-border pt-5"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-3 font-serif text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm font-medium">Na vaga: {need}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{contribution}</p></article>)}
          </div>
          <div className="mt-9 border-l-4 border-guia-amber bg-guia-amber-light/40 px-5 py-4 text-sm leading-relaxed"><strong>Com transparência:</strong> minha experiência documentada recente é em proteção veicular, não no mercado imobiliário. Não apresento experiência prévia em portais de imóveis nem domínio de Canva como comprovados. Quero conhecer o fluxo de vocês, demonstrar meu repertório e alinhar o que a função exige.</div>
        </section>

        <MetodoSection />

        <section id="prova" className="bg-secondary py-14 md:py-20">
          <div className="container grid gap-9 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div><p className="text-xs font-semibold uppercase text-primary">Mais que uma apresentação</p><h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">Uma estrutura real.<br />Um relatório para avaliar.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">Entre 07/08 e 30/09/2026, organizei acessos, Google, Meta, mensuração, formulários, CRM e playbooks de uma operação. O relatório preserva o cliente e mostra atividades, decisões, validações e próximos passos.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Isso comprova implantação, não um resultado de vendas consolidado. A aplicação ao mercado imobiliário dependeria dos canais, do orçamento e da rotina comercial de vocês.</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/caso-documentado#caso">Conhecer as entregas e seus limites <ArrowRight /></Link></Button></div>
            <article className="rounded-lg border border-border bg-card p-6"><FileCheck2 className="h-7 w-7 text-primary" /><h3 className="mt-4 font-serif text-2xl font-semibold">Relatório de implantação</h3><p className="mt-3 text-sm text-muted-foreground">DOCX · 16 páginas · Caso anonimizado</p><Button asChild className="mt-6 h-auto w-full whitespace-normal py-3"><a href={reportAsset.url} download="Relatorio-Implantacao-Marketing-Anonimizado-Diego-Allas.docx"><Download /> Baixar relatório completo</a></Button><p className="mt-4 text-xs text-muted-foreground">Documento de trabalho; não substitui um currículo.</p></article>
          </div>
        </section>

        <section className="container grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div><Users className="h-5 w-5 text-guia-green" /><h2 className="mt-4 font-serif text-3xl font-semibold">Por que Goiânia</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">Sou pernambucano e vim com minha família em busca de cuidado para meu filho Matheuzinho. Minha história passa por food service, logística, atendimento e gestão. É essa vivência que levo para a forma de trabalhar: ouvir, organizar e cuidar da continuidade.</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/#intro-bio">Conhecer minha história <ArrowRight /></Link></Button></div>
          <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8"><h3 className="font-serif text-2xl font-semibold">Uma conversa, sem pressupostos</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Quero entender as prioridades da vaga presencial e mostrar como posso executar junto à equipe. Não estou condicionando a candidatura a uma contratação PJ.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Na última atualização profissional confirmada, em 09/10/2026, eu permanecia contratado em regime CLT e planejava propor uma transição negociada. Formato, disponibilidade e início precisam ser alinhados na entrevista.</p></div>
        </section>

        <section id="conversa" className="bg-professional py-14 text-professional-ink md:py-20">
          <div className="container max-w-3xl text-center"><p className="text-xs font-semibold uppercase text-professional-highlight">Interesse na seleção</p><h2 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">Vamos conversar sobre a vaga?</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-professional-muted">Obrigado por conhecer meu trabalho. Tenho interesse em participar de uma entrevista e entender onde meu repertório pode ajudar a equipe da Imóveis Goiânia.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="professional" size="lg"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Falar com Diego</a></Button><Button asChild variant="professional-outline" size="lg"><a href="mailto:anfitriaonexialista@gmail.com?subject=Entrevista%20-%20Diego%20Allas">Enviar e-mail <ArrowRight /></a></Button></div></div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ApresentacaoImoveis;