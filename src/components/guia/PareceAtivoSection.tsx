import { XCircle, CheckCircle2, Zap, EyeOff, FileSignature, Link2 } from 'lucide-react';

const numeros = [
  {
    icon: Zap,
    t: '“Impulsionar” não é anúncio',
    d: 'O botão azul do Instagram não tem Pixel nem objetivo de conversão real. Um teste com o mesmo valor investido mostrou resultado até 4x mais eficiente pelo Gerenciador de Anúncios.',
  },
  {
    icon: EyeOff,
    t: 'Curtida não é venda',
    d: 'Mais de 95% do tráfego de um site é anônimo para quem não tem rastreamento. O post pode ter cinquenta mil visualizações e gerar três pedidos — ou trezentos. Sem estrutura, ninguém sabe.',
  },
  {
    icon: FileSignature,
    t: 'Permuta também é publicidade',
    d: 'Ceder comida em troca de post já cria obrigação legal. Sem contrato, o restaurante pode nem ter direito de reaproveitar depois o vídeo que o influenciador gravou.',
  },
  {
    icon: Link2,
    t: 'UTM, CRM e remarketing',
    d: 'Sem etiqueta de rastreio, a origem da venda se perde em “Direto/Nenhum”. Sem atribuição correta, até 30% da verba vai para canal que não funciona. E um CRM bem feito pode levar a recompra de 18% para 42%.',
  },
];

const comparativo = [
  ['Posta todo dia, sem calendário ou estratégia', 'Conteúdo com linha editorial e objetivo claro'],
  ['Impulsiona post sem saber o retorno real', 'Pixel e UTM configurados — sabe o custo por pedido'],
  ['Parceria com influenciador sem contrato', 'Contrato simples assinado, mesmo em permuta'],
  ['Conta administrada por perfil pessoal de terceiro', 'Business Manager verificado, 2FA em tudo'],
  ['Se travar, não prova prejuízo com dado nenhum', 'CRM eleva a recompra de 18% para 42%'],
];

const PareceAtivoSection = () => {
  return (
    <section id="parece-ativo" className="scroll-mt-[150px] py-[72px] bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-guia-amber bg-guia-amber-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
            Capítulo 03 do guia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Parece ativo, <span className="text-guia-amber">mas não está seguro</span>
          </h2>
          <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
            Existe o dono que não faz nada de marketing — e sabe que está atrasado. E existe um segundo tipo, mais
            perigoso: o que já faz bastante coisa e, por isso, se sente seguro sem estar. Videomaker contratado,
            influenciador local, post quase todo dia, verba saindo todo mês. Se tudo isso está em cima de uma
            estrutura que não existe, no minuto em que ela falha o investimento evapora sem deixar rastro de retorno.
          </p>
          <blockquote className="mt-6 border-l-[4px] border-primary pl-5 font-serif text-xl italic text-foreground leading-snug">
            “É a diferença entre decorar uma casa e construir a fundação dela.”
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {numeros.map((n, i) => {
            const Icon = n.icon;
            return (
              <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-l-[5px] border-guia-amber">
                <Icon className="w-5 h-5 text-guia-amber mb-2.5" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5">{n.t}</h3>
                <p className="text-sm text-guia-text-muted leading-[1.7]">{n.d}</p>
              </div>
            );
          })}
        </div>

        {/* A x B */}
        <div className="mt-10 bg-card rounded-lg shadow-guia overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-border">
              <p className="text-[11px] font-bold tracking-widest uppercase text-guia-amber mb-4">
                Restaurante A — parece ativo
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {comparativo.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-guia-amber flex-shrink-0 mt-0.5" />
                    <span className="text-[0.95rem] text-guia-text-muted leading-[1.65]">{c[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-7 bg-guia-green-light/40">
              <p className="text-[11px] font-bold tracking-widest uppercase text-guia-green mb-4">
                Restaurante B — está protegido
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {comparativo.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-guia-green flex-shrink-0 mt-0.5" />
                    <span className="text-[0.95rem] text-foreground leading-[1.65]">{c[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 font-serif text-lg md:text-xl text-foreground italic">
          Conteúdo sem estrutura não é marketing. É decoração em cima de uma casa sem fundação.
        </p>
      </div>
    </section>
  );
};

export default PareceAtivoSection;
