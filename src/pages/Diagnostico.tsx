import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  KeyRound,
  ShieldCheck,
  Scale,
  BarChart3,
  Store,
  Users,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Download,
  MessageCircle,
  FileText,
  RotateCcw,
  Info,
  Lightbulb,
} from 'lucide-react';

import Footer from '@/components/guia/Footer';
import ScrollToTop from '@/components/guia/ScrollToTop';
import { setPageMeta } from '@/lib/pageMeta';
import heroImg from '@/assets/diagnostico_hero.jpg';
import relatorioImg from '@/assets/diagnostico_relatorio.jpg';
import ebookAsset from '@/assets/estrutura_invisivel.pdf.asset.json';

const WA =
  'https://wa.me/5562999688700?text=Ol%C3%A1%20Diego!%20Fiz%20o%20diagn%C3%B3stico%20da%20estrutura%20digital%20e%20quero%20conversar%20sobre%20o%20resultado.';

type Opcao = 'sim' | 'parcial' | 'nao';

type Pergunta = {
  id: string;
  q: string;
  porque: string;
  acao: string;
};

type Bloco = {
  id: string;
  icon: typeof KeyRound;
  titulo: string;
  resumo: string;
  perguntas: Pergunta[];
};

const blocos: Bloco[] = [
  {
    id: 'acesso',
    icon: KeyRound,
    titulo: 'Acesso e propriedade',
    resumo: 'Quem realmente é dono das contas onde sua marca vive.',
    perguntas: [
      {
        id: 'acesso-1',
        q: 'Você sabe, com certeza, quem tem acesso ao Instagram e ao Facebook da casa hoje?',
        porque:
          'Na maioria dos restaurantes o acesso está espalhado entre ex-funcionário, sobrinho, agência antiga e um celular que já foi trocado. Quando alguém sai brigado, a marca sai junto.',
        acao: 'Liste todos os e-mails e telefones com acesso e remova quem não deveria estar lá.',
      },
      {
        id: 'acesso-2',
        q: 'O Perfil da Empresa no Google está reivindicado e verificado no seu nome?',
        porque:
          'O Google é o primeiro lugar onde alguém decide se vai até você. Perfil sem dono pode ser editado por terceiros e sugerir horário, endereço ou telefone errado.',
        acao: 'Reivindique o perfil pelo Google Perfil da Empresa e conclua a verificação.',
      },
      {
        id: 'acesso-3',
        q: 'O domínio e o e-mail do site estão registrados no CNPJ da empresa?',
        porque:
          'Domínio registrado no CPF do antigo webdesigner é o tipo de coisa que só aparece no dia em que o site sai do ar e ninguém consegue renovar.',
        acao: 'Confira o registro no Registro.br e transfira a titularidade para a empresa.',
      },
      {
        id: 'acesso-4',
        q: 'Existe um e-mail institucional (não pessoal) usado como dono de todas as contas?',
        porque:
          'Contas ancoradas em Gmail pessoal de funcionário viram refém no dia da demissão. E-mail da empresa é o cofre.',
        acao: 'Crie um e-mail administrativo da empresa e migre a propriedade das contas para ele.',
      },
    ],
  },
  {
    id: 'seguranca',
    icon: ShieldCheck,
    titulo: 'Segurança e continuidade',
    resumo: 'O que acontece com o faturamento se uma conta cair hoje à noite.',
    perguntas: [
      {
        id: 'seg-1',
        q: 'A verificação em duas etapas está ativa em Instagram, Facebook, Google e WhatsApp?',
        porque:
          'Quase todo sequestro de conta de restaurante começa com um código de seis dígitos entregue por telefone. Duas etapas corta esse caminho.',
        acao: 'Ative a verificação em duas etapas nas quatro plataformas hoje mesmo.',
      },
      {
        id: 'seg-2',
        q: 'O Business Manager está verificado no CNPJ da empresa?',
        porque:
          'Business Manager criado por agência antiga significa que os ativos, o pixel e o histórico de anúncios pertencem a outra pessoa jurídica.',
        acao: 'Faça a verificação empresarial no Meta com contrato social e comprovante.',
      },
      {
        id: 'seg-3',
        q: 'Se o WhatsApp da casa fosse bloqueado agora, você teria como provar o prejuízo?',
        porque:
          'Sem histórico de pedidos, ticket médio e volume por canal, não há como sustentar recurso, negociação nem eventual ação judicial.',
        acao: 'Exporte mensalmente o relatório de pedidos por canal e guarde em local seguro.',
      },
      {
        id: 'seg-4',
        q: 'Existe backup da lista de clientes fora do celular do gerente?',
        porque:
          'A lista de clientes é o único ativo digital que é 100% seu. Ela não pode morrer junto com um aparelho quebrado.',
        acao: 'Centralize contatos em planilha ou CRM com cópia em nuvem.',
      },
    ],
  },
  {
    id: 'legal',
    icon: Scale,
    titulo: 'LGPD, fiscal e contratos',
    resumo: 'O lado que ninguém olha até chegar a notificação.',
    perguntas: [
      {
        id: 'leg-1',
        q: 'Seu cadastro de fidelidade tem consentimento formal e documentado do cliente?',
        porque:
          'Coletar nome, telefone e aniversário sem base legal é tratamento de dado pessoal irregular. A ANPD já citou o setor de alimentação nas suas prioridades.',
        acao: 'Inclua texto de consentimento e finalidade no formulário, com registro de data.',
      },
      {
        id: 'leg-2',
        q: 'Existe contrato assinado com agência, social media ou freelancer que mexe nas contas?',
        porque:
          'Sem contrato, não há cláusula de devolução de acesso, confidencialidade nem propriedade do material produzido.',
        acao: 'Formalize contrato simples com cláusula de acesso, entrega e encerramento.',
      },
      {
        id: 'leg-3',
        q: 'As parcerias com influenciadores, mesmo em permuta, são formalizadas por escrito?',
        porque:
          'Permuta é publicidade. Sem documento, você não tem direito de reutilizar o vídeo nem garantia do que foi combinado.',
        acao: 'Use um termo de permuta com prazo, entregáveis e cessão de imagem.',
      },
      {
        id: 'leg-4',
        q: 'Emissão fiscal, PDV e marketplaces estão integrados e conciliados?',
        porque:
          'Pedido de marketplace que não desce para o fiscal vira divergência de caixa e risco tributário — ainda mais com a Reforma Tributária entrando em vigor.',
        acao: 'Concilie mensalmente repasse do marketplace, PDV e notas emitidas.',
      },
    ],
  },
  {
    id: 'canais',
    icon: Store,
    titulo: 'Canais e presença',
    resumo: 'Onde a decisão do cliente acontece antes de ele chegar.',
    perguntas: [
      {
        id: 'can-1',
        q: 'Seu Perfil da Empresa no Google tem fotos atuais, horário correto e cardápio publicado?',
        porque:
          'Perfil completo aparece mais em “restaurante perto de mim” e responde a dúvida antes de a pessoa desistir.',
        acao: 'Atualize fotos, horário, atributos e cardápio pelo menos a cada trimestre.',
      },
      {
        id: 'can-2',
        q: 'Você responde as avaliações — inclusive as negativas — em até 48 horas?',
        porque:
          'Resposta pública é vitrine. Quem lê avaliação está a um passo de decidir, e o silêncio conta contra.',
        acao: 'Defina um responsável e um padrão de resposta para avaliações.',
      },
      {
        id: 'can-3',
        q: 'A casa tem canal próprio de delivery, sem depender só de marketplace?',
        porque:
          'No canal próprio a comissão fica com você e o cadastro do cliente também. No marketplace, o cliente é do marketplace.',
        acao: 'Implante um cardápio digital próprio com pedido por WhatsApp ou link de pagamento.',
      },
      {
        id: 'can-4',
        q: 'O nome e o endereço da casa estão idênticos em Google, Instagram, iFood e site?',
        porque:
          'Divergência de nome e endereço confunde buscadores e derruba a posição na busca local — e hoje também nas respostas de IA.',
        acao: 'Padronize nome, endereço e telefone em todos os canais, letra por letra.',
      },
    ],
  },
  {
    id: 'dados',
    icon: BarChart3,
    titulo: 'Dados, tráfego e retorno',
    resumo: 'A diferença entre investir e apostar.',
    perguntas: [
      {
        id: 'dad-1',
        q: 'Os anúncios são feitos pelo Gerenciador, e não pelo botão “impulsionar”?',
        porque:
          'O botão azul não usa pixel nem objetivo de conversão. Com a mesma verba, campanha configurada costuma render várias vezes mais.',
        acao: 'Migre a verba para o Gerenciador de Anúncios com objetivo de conversão.',
      },
      {
        id: 'dad-2',
        q: 'Existe pixel e rastreamento instalados e testados no site e no cardápio digital?',
        porque:
          'Sem rastreamento, a origem da venda se perde e boa parte da verba vai para canal que não funciona.',
        acao: 'Instale o pixel, configure eventos de pedido e valide com o testador.',
      },
      {
        id: 'dad-3',
        q: 'Você sabe o custo por pedido de cada canal no último mês?',
        porque:
          'Sem custo por pedido, não existe decisão de investimento — existe intuição.',
        acao: 'Monte um painel simples com verba, pedidos e custo por canal.',
      },
      {
        id: 'dad-4',
        q: 'A ficha técnica dos pratos está atualizada com a margem real?',
        porque:
          'Vender mais um prato de margem negativa só acelera o prejuízo. Marketing sem ficha técnica escala o erro.',
        acao: 'Refaça a ficha técnica dos dez pratos mais vendidos com custo atual.',
      },
    ],
  },
  {
    id: 'pessoas',
    icon: Users,
    titulo: 'Pessoas e rotina',
    resumo: 'Estrutura que depende de memória não é estrutura.',
    perguntas: [
      {
        id: 'pes-1',
        q: 'Existe uma pessoa formalmente responsável pelo digital da casa?',
        porque:
          'Quando é “todo mundo um pouquinho”, é ninguém. Sem dono, nada é mantido.',
        acao: 'Nomeie um responsável com rotina e checklist semanal definidos.',
      },
      {
        id: 'pes-2',
        q: 'Existe rotina escrita de atendimento no WhatsApp (tempo de resposta e padrão)?',
        porque:
          'O WhatsApp é o balcão digital. Resposta lenta ou sem padrão derruba conversão silenciosamente.',
        acao: 'Documente saudação, tempo máximo de resposta e respostas rápidas salvas.',
      },
      {
        id: 'pes-3',
        q: 'A equipe de salão sabe pedir avaliação e cadastrar cliente sem constranger?',
        porque:
          'A maior fonte de avaliação e de base de clientes é a mesa — e ela costuma estar desperdiçada.',
        acao: 'Treine um roteiro curto de pedido de avaliação no fechamento da conta.',
      },
      {
        id: 'pes-4',
        q: 'Existe calendário de conteúdo, mesmo simples, para os próximos 30 dias?',
        porque:
          'Postar por impulso gera conteúdo desconexo e caro. Calendário transforma esforço em linha editorial.',
        acao: 'Monte um calendário mensal com pilares fixos por dia da semana.',
      },
    ],
  },
];

const totalPerguntas = blocos.reduce((acc, b) => acc + b.perguntas.length, 0);

const pontos: Record<Opcao, number> = { sim: 2, parcial: 1, nao: 0 };

const opcoes: { valor: Opcao; label: string; icon: typeof CheckCircle2 }[] = [
  { valor: 'sim', label: 'Sim, com certeza', icon: CheckCircle2 },
  { valor: 'parcial', label: 'Mais ou menos', icon: HelpCircle },
  { valor: 'nao', label: 'Não / não sei', icon: AlertTriangle },
];

const faixa = (pct: number) => {
  if (pct >= 80)
    return {
      nivel: 'Estrutura madura',
      cor: 'text-green-300',
      borda: 'border-green-500/30 bg-green-500/[0.07]',
      barra: 'bg-green-400',
      texto:
        'Sua base está acima da média do setor. O trabalho agora é de evidência e manutenção: documentar acessos, revisar trimestralmente e usar os dados que você já tem para decidir onde investir.',
    };
  if (pct >= 55)
    return {
      nivel: 'Estrutura parcial',
      cor: 'text-yellow-300',
      borda: 'border-yellow-500/30 bg-yellow-500/[0.07]',
      barra: 'bg-yellow-400',
      texto:
        'O básico existe, mas depende de memória e de pessoas específicas. É o cenário mais comum — e o mais fácil de resolver antes de virar crise, porque ainda há acesso e histórico para trabalhar.',
    };
  if (pct >= 30)
    return {
      nivel: 'Estrutura frágil',
      cor: 'text-orange-300',
      borda: 'border-orange-500/30 bg-orange-500/[0.07]',
      barra: 'bg-orange-400',
      texto:
        'Boa parte da operação digital está fora do seu controle direto. Um bloqueio de conta, uma saída de funcionário ou uma notificação já seriam suficientes para parar o faturamento por dias.',
    };
  return {
    nivel: 'Estrutura crítica',
    cor: 'text-red-300',
    borda: 'border-red-500/30 bg-red-500/[0.07]',
    barra: 'bg-red-400',
    texto:
      'Hoje a casa vende apesar da estrutura, não por causa dela. A prioridade não é conteúdo nem anúncio: é recuperar acesso, propriedade e segurança antes de investir mais um real em mídia.',
  };
};

const Diagnostico = () => {
  const [respostas, setRespostas] = useState<Record<string, Opcao>>({});
  const [nome, setNome] = useState('');
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      'Diagnóstico da estrutura digital · Allbiz Digital',
      'Checklist interativo e gratuito de 24 pontos para avaliar acesso, segurança, LGPD, canais e dados do seu restaurante. Resultado na hora e relatório em texto.',
    );
  }, []);

  const respondidas = Object.keys(respostas).length;
  const progresso = Math.round((respondidas / totalPerguntas) * 100);

  const resultado = useMemo(() => {
    const porBloco = blocos.map((b) => {
      const max = b.perguntas.length * 2;
      const soma = b.perguntas.reduce((acc, p) => acc + (respostas[p.id] ? pontos[respostas[p.id]] : 0), 0);
      return { bloco: b, soma, max, pct: Math.round((soma / max) * 100) };
    });
    const soma = porBloco.reduce((acc, b) => acc + b.soma, 0);
    const max = totalPerguntas * 2;
    const pct = Math.round((soma / max) * 100);
    const pendencias = blocos
      .flatMap((b) => b.perguntas.map((p) => ({ b, p })))
      .filter(({ p }) => respostas[p.id] !== 'sim');
    return { porBloco, soma, max, pct, pendencias };
  }, [respostas]);

  const marcar = (id: string, valor: Opcao) => setRespostas((prev) => ({ ...prev, [id]: valor }));

  const completo = respondidas === totalPerguntas;
  const f = faixa(resultado.pct);

  const reiniciar = () => {
    setRespostas({});
    setMostrar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const gerarRelatorio = () => {
    const data = new Date().toLocaleDateString('pt-BR');
    const linha = '='.repeat(64);
    const rotulo: Record<Opcao, string> = {
      sim: 'SIM',
      parcial: 'PARCIAL',
      nao: 'NAO / NAO SEI',
    };

    const partes: string[] = [];
    partes.push(linha);
    partes.push('DIAGNOSTICO DA ESTRUTURA DIGITAL - FOOD SERVICE');
    partes.push('Metodologia A Estrutura Invisivel - Diego Allas');
    partes.push(linha);
    partes.push('');
    if (nome.trim()) partes.push(`Estabelecimento: ${nome.trim()}`);
    partes.push(`Data do diagnostico: ${data}`);
    partes.push(`Pontuacao geral: ${resultado.soma} de ${resultado.max} (${resultado.pct}%)`);
    partes.push(`Nivel: ${f.nivel.toUpperCase()}`);
    partes.push('');
    partes.push(f.texto);
    partes.push('');
    partes.push(linha);
    partes.push('RESULTADO POR AREA');
    partes.push(linha);
    resultado.porBloco.forEach((b) => {
      const barras = Math.round(b.pct / 10);
      partes.push('');
      partes.push(`${b.bloco.titulo.toUpperCase()} - ${b.pct}%`);
      partes.push(`[${'#'.repeat(barras)}${'.'.repeat(10 - barras)}]`);
      b.bloco.perguntas.forEach((p) => {
        const r = respostas[p.id];
        partes.push(`  - [${r ? rotulo[r] : 'SEM RESPOSTA'}] ${p.q}`);
      });
    });
    partes.push('');
    partes.push(linha);
    partes.push('PLANO DE ACAO SUGERIDO (pontos em aberto)');
    partes.push(linha);
    if (resultado.pendencias.length === 0) {
      partes.push('');
      partes.push('Nenhum ponto em aberto. Proximo passo: documentar evidencias e revisar a cada trimestre.');
    } else {
      resultado.pendencias.forEach(({ b, p }, i) => {
        partes.push('');
        partes.push(`${String(i + 1).padStart(2, '0')}. [${b.titulo}] ${p.q}`);
        partes.push(`    Por que importa: ${p.porque}`);
        partes.push(`    O que fazer: ${p.acao}`);
      });
    }
    partes.push('');
    partes.push(linha);
    partes.push('PROXIMO PASSO');
    partes.push(linha);
    partes.push('');
    partes.push('Diego Allas - Marketing 360 e governanca digital para food service');
    partes.push('WhatsApp: (62) 99968-8700');
    partes.push('E-mail: anfitriaonexialista@gmail.com');
    partes.push('Instagram: @allbizdigital');
    partes.push('');
    partes.push('Este relatorio e uma autoavaliacao. A auditoria completa verifica cada ponto com evidencia.');
    partes.push(linha);

    const blob = new Blob([partes.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const slug = nome.trim() ? nome.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : 'estrutura-digital';
    a.download = `diagnostico-${slug}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const verResultado = () => {
    setMostrar(true);
    setTimeout(() => {
      document.getElementById('resultado')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-white">
      {/* Barra superior */}
      <header className="sticky top-0 z-50 bg-[#080B11]/95 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between gap-3 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white no-underline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <span className="font-serif text-sm sm:text-base tracking-[0.18em] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            ALLBIZ DIGITAL
          </span>
        </div>
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Cozinha de restaurante à noite vista através de um vidro, com linhas de projeto sobrepostas"
          width={1600}
          height={912}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B11]/80 via-[#080B11]/85 to-[#080B11]" />
        <div className="container relative py-16 md:py-24">
          <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 inline-block px-3.5 py-1.5 rounded-full mb-5">
            Diagnóstico gratuito · 24 pontos · sem cadastro
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-[1.15] max-w-3xl">
            Descubra, em 6 minutos, o que está{' '}
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              fora do seu controle
            </span>{' '}
            na estrutura digital da sua casa.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-[1.85]">
            Vinte e quatro perguntas em seis áreas: acesso, segurança, LGPD, canais, dados e rotina. Cada resposta vem
            com a explicação do porquê aquilo importa e o que fazer a respeito. No final você recebe uma pontuação, um
            plano de ação priorizado e pode baixar tudo em um arquivo de texto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#checklist"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0D1117] text-sm font-bold px-7 py-3.5 rounded-full transition-colors no-underline"
            >
              Começar o diagnóstico
            </a>
            <a
              href={ebookAsset.url}
              download="A-Estrutura-Invisivel-Diego-Allas.pdf"
              className="inline-flex items-center gap-2 border border-yellow-500/40 hover:bg-yellow-500/10 text-yellow-300 text-sm font-semibold px-7 py-3.5 rounded-full transition-colors no-underline"
            >
              <Download className="w-4 h-4" /> Baixar o guia em PDF
            </a>
          </div>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              ['24', 'pontos avaliados'],
              ['6', 'áreas da operação'],
              ['0', 'dado enviado'],
              ['1', 'relatório em .txt'],
            ].map(([n, t]) => (
              <div key={t} className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5">
                <p className="font-serif text-2xl font-semibold text-yellow-300">{n}</p>
                <p className="text-[11px] uppercase tracking-widest text-white/45 mt-1">{t}</p>
              </div>
            ))}
          </div>
          <Link to="/apresentacao-emerson" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 no-underline hover:text-sky-200">
            <FileText className="h-4 w-4" /> Conheça uma implantação real documentada
          </Link>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: HelpCircle,
              t: '1. Responda com sinceridade',
              d: '“Não sei” é uma resposta válida e, muitas vezes, a mais reveladora. Ninguém está avaliando você — o objetivo é enxergar o mapa real.',
            },
            {
              icon: Lightbulb,
              t: '2. Aprenda em cada pergunta',
              d: 'Abaixo de cada item há o motivo de aquilo importar e a ação concreta para resolver, mesmo que você faça por conta própria.',
            },
            {
              icon: FileText,
              t: '3. Leve o relatório',
              d: 'No final, pontuação por área, nível de risco e plano de ação priorizado — para baixar em texto e discutir com sua equipe.',
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="flex gap-4">
                <Icon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold">{c.t}</h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-[1.7]">{c.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="scroll-mt-[80px] container py-14 md:py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Checklist completo da estrutura digital</h2>
          <p className="mt-3 text-white/65 leading-[1.8]">
            Opcional: escreva o nome da casa para que ele apareça no relatório. Nada é enviado — tudo acontece aqui, na
            sua tela.
          </p>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do restaurante (opcional)"
            className="mt-4 w-full max-w-md bg-white/[0.05] border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-yellow-500/60 transition-colors"
          />
        </div>

        <div className="space-y-10">
          {blocos.map((b, bi) => {
            const Icon = b.icon;
            const dados = resultado.porBloco[bi];
            return (
              <div key={b.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white/35">
                        Área {String(bi + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug">{b.titulo}</h3>
                      <p className="text-sm text-white/55 mt-1">{b.resumo}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-2xl font-semibold text-yellow-300">{dados.pct}%</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/35">nesta área</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {b.perguntas.map((p, pi) => {
                    const atual = respostas[p.id];
                    return (
                      <div key={p.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-sm md:text-[0.95rem] text-white/85 leading-[1.7]">
                          <span className="text-yellow-400 font-bold mr-2">
                            {bi + 1}.{pi + 1}
                          </span>
                          {p.q}
                        </p>

                        <div className="mt-3.5 flex flex-wrap gap-2.5">
                          {opcoes.map((o) => {
                            const OIcon = o.icon;
                            const ativo = atual === o.valor;
                            const estilo =
                              o.valor === 'sim'
                                ? 'bg-green-500/20 border-green-400/50 text-green-300'
                                : o.valor === 'parcial'
                                  ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300'
                                  : 'bg-red-500/20 border-red-400/50 text-red-300';
                            return (
                              <button
                                key={o.valor}
                                type="button"
                                onClick={() => marcar(p.id, o.valor)}
                                className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                                  ativo
                                    ? estilo
                                    : 'bg-white/[0.04] border-white/15 text-white/60 hover:border-white/35'
                                }`}
                              >
                                <OIcon className="w-3.5 h-3.5" /> {o.label}
                              </button>
                            );
                          })}
                        </div>

                        {atual && atual !== 'sim' && (
                          <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/[0.06] p-4 space-y-2">
                            <p className="text-xs text-white/70 leading-[1.7] flex gap-2">
                              <Info className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-yellow-300">Por que importa: </strong>
                                {p.porque}
                              </span>
                            </p>
                            <p className="text-xs text-white/70 leading-[1.7] flex gap-2">
                              <Lightbulb className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-yellow-300">O que fazer: </strong>
                                {p.acao}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={verResultado}
            disabled={respondidas === 0}
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#0D1117] text-sm font-bold px-8 py-4 rounded-full transition-colors"
          >
            Ver meu resultado
          </button>
          <p className="text-xs text-white/45">
            {respondidas} de {totalPerguntas} respondidas
            {!completo && respondidas > 0 && ' — você pode ver o parcial e continuar depois.'}
          </p>
        </div>
      </section>

      {/* Resultado */}
      {mostrar && (
        <section id="resultado" className="scroll-mt-[80px] relative border-t border-white/10 overflow-hidden">
          <img
            src={relatorioImg}
            alt="Planta arquitetônica e molho de chaves douradas sobre mesa de madeira escura"
            width={1600}
            height={912}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B11] via-[#080B11]/92 to-[#080B11]" />

          <div className="container relative py-14 md:py-20">
            <div className={`rounded-2xl border p-6 md:p-9 ${f.borda}`}>
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/40">
                Resultado do diagnóstico
              </span>
              <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
                <p className="font-serif text-5xl md:text-6xl font-semibold text-white">{resultado.pct}%</p>
                <h2 className={`font-serif text-2xl md:text-3xl font-semibold ${f.cor}`}>{f.nivel}</h2>
              </div>
              <div className="mt-4 h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full rounded-full ${f.barra}`} style={{ width: `${resultado.pct}%` }} />
              </div>
              <p className="mt-5 text-sm md:text-base text-white/75 leading-[1.85] max-w-3xl">{f.texto}</p>
              {!completo && (
                <p className="mt-3 text-xs text-white/45">
                  Resultado parcial: {respondidas} de {totalPerguntas} perguntas respondidas.
                </p>
              )}
            </div>

            {/* Por área */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {resultado.porBloco.map((b) => {
                const Icon = b.bloco.icon;
                const bf = faixa(b.pct);
                return (
                  <div key={b.bloco.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4.5 h-4.5 text-yellow-400" />
                        <span className="font-serif text-base font-semibold">{b.bloco.titulo}</span>
                      </div>
                      <span className={`text-sm font-bold ${bf.cor}`}>{b.pct}%</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full ${bf.barra}`} style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Plano de ação */}
            <div className="mt-10">
              <h3 className="font-serif text-xl md:text-2xl font-semibold">
                Plano de ação priorizado{' '}
                <span className="text-white/40 text-base font-sans font-normal">
                  ({resultado.pendencias.length} ponto{resultado.pendencias.length === 1 ? '' : 's'} em aberto)
                </span>
              </h3>
              {resultado.pendencias.length === 0 ? (
                <p className="mt-3 text-white/70 leading-[1.8] max-w-3xl">
                  Nenhum ponto em aberto pelas suas respostas. O próximo passo deixa de ser corrigir e passa a ser
                  comprovar: reunir evidência de cada item e revisar a cada trimestre.
                </p>
              ) : (
                <div className="mt-5 space-y-3">
                  {resultado.pendencias.map(({ b, p }, i) => (
                    <div key={p.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-400 font-bold text-sm mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">{b.titulo}</p>
                          <p className="text-sm text-white/85 leading-[1.7] mt-1">{p.q}</p>
                          <p className="text-xs text-white/60 leading-[1.7] mt-2">
                            <strong className="text-yellow-300">O que fazer: </strong>
                            {p.acao}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ações */}
            <div className="mt-10 rounded-2xl border border-yellow-500/25 bg-white/[0.03] p-6 md:p-9">
              <h3 className="font-serif text-xl md:text-2xl font-semibold">Leve esse mapa com você</h3>
              <p className="mt-2 text-sm text-white/65 leading-[1.8] max-w-2xl">
                O relatório sai em arquivo de texto, com pontuação por área, todas as respostas e o plano de ação. Dá
                para imprimir, mandar para o sócio ou usar como pauta de reunião com a equipe.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  type="button"
                  onClick={gerarRelatorio}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0D1117] text-sm font-bold px-6 py-3.5 rounded-full transition-colors"
                >
                  <FileText className="w-4 h-4" /> Baixar relatório (.txt)
                </button>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-colors no-underline"
                >
                  <MessageCircle className="w-4 h-4" /> Conversar sobre o resultado
                </a>
                <button
                  type="button"
                  onClick={reiniciar}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white/70 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Refazer
                </button>
              </div>
              <p className="mt-5 text-xs text-white/40 leading-[1.7] max-w-2xl">
                Este é um diagnóstico de autoavaliação. A auditoria completa verifica cada ponto com evidência —
                print de acesso, verificação de CNPJ, contrato e registro de consentimento.
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Diagnostico;
