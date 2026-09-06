import {
  Search,
  MessageCircle,
  Instagram,
  QrCode,
  Store,
  Calculator,
  Users2,
  Lock,
  UserCheck,
  Download,
  Gavel,
  Wallet,
  TrendingDown,
  ShieldAlert,
  FileText,
} from 'lucide-react';

import ebookAsset from '@/assets/estrutura_invisivel.pdf.asset.json';
import celularImg from '@/assets/estrutura_celular.jpg';

const essenciais = [
  { icon: Search, t: 'Google Perfil da Empresa', d: 'Nome, endereço e telefone certos, horário atualizado, fotos reais e resposta a todas as avaliações — boas e ruins.' },
  { icon: MessageCircle, t: 'WhatsApp organizado', d: 'Número comercial separado do pessoal, com catálogo e resposta rápida. Pedido, reclamação e fornecedor não podem viver no mesmo caos.' },
  { icon: Instagram, t: 'Redes no nome certo', d: 'Não precisa postar cinco vezes por dia. Precisa estar no controle da empresa — não no celular de ex-funcionário ou de agência que foi embora.' },
  { icon: QrCode, t: 'Canal próprio de delivery', d: 'Cardápio digital com link e QR Code para receber pedido direto, sem comissão de 12% a 30% — e com o contato do cliente ficando com você.' },
  { icon: Store, t: 'Marketplace bem configurado', d: 'Cardápio atualizado, foto de prato real (nada de banco de imagem) e preço correto, sem ruptura de item.' },
  { icon: Calculator, t: 'Ficha técnica e margem real', d: 'Você pode estar vendendo o prato mais popular no prejuízo. Saber o custo e o que sobra depois da comissão é sobrevivência.' },
  { icon: Users2, t: 'Uma lista de clientes', d: 'Nome, telefone e o que a pessoa mais pede já bastam. Sem isso, o cliente se perde para sempre depois da primeira compra.' },
  { icon: Lock, t: 'Senha forte e verificação em duas etapas', d: 'O item mais esquecido e o que mais dá dor de cabeça depois. Custa zero, leva dez minutos, evita meses de problema.' },
  { icon: UserCheck, t: 'Um responsável', d: 'Nem que seja você, ou alguém de confiança, uma hora por semana. O erro não é não ter agência — é não ter ninguém responsável.' },
];

const fatos = [
  {
    icon: Gavel,
    data: 'Fevereiro / 2026',
    t: 'Meta condenada por bloqueio indevido de conta comercial',
    d: 'O Tribunal de Justiça de Mato Grosso confirmou a condenação da Meta por bloquear Instagram e Facebook comercial sem indicar a regra violada, determinando reativação e indenização.',
    fonte: 'TJMT, 4ª Câmara de Direito Privado',
  },
  {
    icon: MessageCircle,
    data: 'Janeiro e outubro / 2026',
    t: 'WhatsApp muda o modelo de cobrança duas vezes no mesmo ano',
    d: 'Em janeiro a cobrança passou de “por conversa” para “por mensagem”. Em outubro, até respostas dentro da janela de atendimento passam a ser cobradas, incluindo o uso de IA por token.',
    fonte: 'Provedores oficiais de WhatsApp Business API',
  },
  {
    icon: TrendingDown,
    data: 'Junho / 2026',
    t: '9,1 milhões de CNPJs negativados — recorde histórico',
    d: 'Maior número da série da Serasa Experian desde 2016. Micro e pequenas empresas são 95% dos casos, e Serviços — onde o food service está classificado — lidera com 55,7%.',
    fonte: 'Serasa Experian',
  },
  {
    icon: ShieldAlert,
    data: '2026',
    t: 'ANPD vira agência reguladora, com food service no radar',
    d: 'Fiscalização prioritária que inclui dados de fidelidade, dados de saúde (alergia e restrição alimentar) e uso de inteligência artificial. O setor alimentício é citado nominalmente.',
    fonte: 'Lei nº 15.352/2026',
  },
  {
    icon: Wallet,
    data: 'Janeiro / 2027',
    t: 'Reforma Tributária cobra formalização das pequenas empresas',
    d: 'Prazo oficial para que micro e pequenas empresas do Simples Nacional estejam com sistema fiscal e emissão de nota totalmente adequados às novas regras.',
    fonte: 'Sebrae, Fenacon',
  },
];

const EstruturaInvisivelSection = () => {
  return (
    <>
      {/* Abertura */}
      <section id="estrutura-invisivel" className="scroll-mt-[150px] relative bg-[#0B1220] text-white overflow-hidden">
        <img
          src={celularImg}
          alt="Cliente decidindo onde comer pelo celular, à noite, na rua"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220]/85 to-[#0B1220]" />
        <div className="container relative max-w-4xl py-[72px]">
          <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
            Governança digital · guia gratuito 2026
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-[1.15]">
            Quem não é visto,{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              não é lembrado
            </span>
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-[1.8]">
            Ninguém mais sai de casa para descobrir restaurante andando na rua. A pessoa abre o celular: pergunta ao
            Google, olha o iFood, pergunta ao ChatGPT onde comer perto dela, rola o Instagram enquanto decide. Se a sua
            casa não está ali na hora da decisão, você nem entra na disputa — o cliente não escolheu o concorrente,
            ele só não sabia que você existia.
          </p>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
            Depois de auditar a estrutura digital de restaurantes reais — recuperando conta perdida, Business Manager
            criado por agência que nem existe mais, cadastro de cliente guardado sem base legal — um padrão se repete
            em praticamente toda casa: ninguém nunca tratou os ativos digitais do restaurante como patrimônio da
            empresa.
          </p>
          <blockquote className="mt-7 border-l-[3px] border-yellow-500/60 pl-5 font-serif text-xl md:text-2xl italic text-yellow-200/90 leading-snug">
            “Não é sobre crescer mais rápido. É sobre continuar existindo.”
          </blockquote>
        </div>
      </section>

      {/* Os 9 essenciais */}
      <section id="essencial" className="scroll-mt-[150px] py-[72px] bg-background">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">
              Capítulo 01 do guia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              As nove coisas para olhar <span className="text-primary">esta semana</span>
            </h2>
            <p className="mt-4 text-guia-text-muted text-base md:text-lg leading-[1.75]">
              Você não precisa virar especialista em marketing digital. Mas precisa garantir que estes nove pontos
              existem — cada um deles, sozinho, já é motivo real de perda de cliente quando está faltando. Nada aqui é
              luxo: é o mínimo, do mesmo jeito que alvará e caixa organizado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {essenciais.map((e, i) => {
              const Icon = e.icon;
              return (
                <div key={i} className="bg-card rounded-lg p-6 shadow-guia border-t-[4px] border-primary">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-serif text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1.5 leading-snug">{e.t}</h3>
                  <p className="text-sm text-guia-text-muted leading-[1.7]">{e.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-card rounded-lg p-7 shadow-guia border-l-[5px] border-guia-amber">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">O que acontece com quem ignora</h3>
            <p className="text-[0.98rem] text-guia-text-muted leading-[1.8]">
              Restaurante que não aparece no Google perde para o vizinho que aparece, mesmo com comida pior. Quem
              depende 100% de um único aplicativo perde a margem inteira no dia em que a taxa subir. Quem não guarda
              contato de cliente paga de novo, do zero, para trazer de volta alguém que já foi seu.{' '}
              <strong className="text-foreground">
                Marketing digital básico não é mais despesa — é estrutura mínima de sobrevivência.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Por que agora */}
      <section id="por-que-agora" className="scroll-mt-[150px] py-[72px] bg-[#0D1117] text-white">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
              Capítulo 02 · com fonte verificável
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
              Por que agora —{' '}
              <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                isso já aconteceu
              </span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg leading-[1.8]">
              Cinco fatos com data e fonte que mostram que a estrutura digital deixou de ser opcional — e o motivo é
              jurídico, financeiro e regulatório, não só de marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fatos.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                  <Icon className="w-5 h-5 text-yellow-400 mb-3" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">{f.data}</p>
                  <h3 className="font-serif text-lg font-semibold leading-snug mb-2">{f.t}</h3>
                  <p className="text-sm text-white/60 leading-[1.7]">{f.d}</p>
                  <p className="mt-3 text-xs text-yellow-300/70">Fonte: {f.fonte}</p>
                </div>
              );
            })}

            <div className="bg-gradient-to-b from-yellow-500/[0.09] to-transparent border border-yellow-500/25 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <FileText className="w-5 h-5 text-yellow-400 mb-3" />
                <h3 className="font-serif text-lg font-semibold leading-snug mb-2">
                  Tudo isso está no guia, por escrito
                </h3>
                <p className="text-sm text-white/60 leading-[1.7]">
                  “A Estrutura Invisível” reúne os fatos, o mapa da auditoria e o checklist completo. Distribuição
                  gratuita, sem cadastro.
                </p>
              </div>
              <a
                href={ebookAsset.url}
                download="A-Estrutura-Invisivel-Diego-Allas.pdf"
                className="mt-5 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-500 text-[#0D1117] text-sm font-bold px-5 py-3 rounded-full no-underline hover:brightness-110 transition-all"
              >
                <Download className="w-4 h-4" /> Baixar o guia (PDF)
              </a>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="font-serif text-xl font-semibold mb-2">A leitura honesta</h3>
            <p className="text-sm md:text-base text-white/65 leading-[1.8]">
              A cobrança das plataformas tende a aumentar, a exigência de verificação formal tende a ficar mais
              rígida, a fiscalização de dados tende a intensificar e a pressão fiscal tem prazo formal para 2027. Quem
              deixar para organizar depois que o problema bateu à porta vai competir em desvantagem contra quem
              resolveu agora, com calma, sem estar sob pressão.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstruturaInvisivelSection;
