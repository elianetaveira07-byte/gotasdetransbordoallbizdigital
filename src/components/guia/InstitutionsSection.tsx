import InstitutionCard from './InstitutionCard';
import CrerEmCasa from './CrerEmCasa';
import { Phone, MessageCircle } from 'lucide-react';

import crerImg from '@/assets/CRER.jpg';
import hcImg from '@/assets/hospitaldasclinicas.jpg';
import pestalozziImg from '@/assets/pestalozzi.jpg';
import creasImg from '@/assets/creas.jpg';
import apcImg from '@/assets/APC.jpg';
import adfegoImg from '@/assets/adfego.png';

const InstitutionsSection = () => {
  return (
    <>
      {/* CRER */}
      <div className="bg-guia-blue-light py-[72px]" id="crer">
        <div className="container">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Principal referência</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              CRER — <span className="text-primary">Centro Estadual de Reabilitação</span>
            </h2>
          </div>
          <InstitutionCard
            image={crerImg}
            imageAlt="CRER - Centro Estadual de Reabilitação e Readaptação Dr. Henrique Santillo"
            badge="CER IV • SUS Gratuito • Referência Nacional"
            badgeColor="blue"
            title="O lugar nº 1 no Brasil para o Matheuzinho"
            subtitle="Centro Estadual de Reabilitação e Readaptação Dr. Henrique Santillo"
            paragraphs={[
              'O CRER é classificado como <strong>CER IV</strong> — o nível máximo do Ministério da Saúde. É referência nacional em reabilitação para pessoas com deficiência física grave, incluindo paralisia cerebral em adultos.',
              'Fica em <strong>Goiânia (GO)</strong> e oferece desde fisioterapia intensiva até a fabricação de cadeiras de rodas sob medida, tudo <strong>100% gratuito</strong> pelo SUS.',
            ]}
            features={[
              'Fisioterapia motora e respiratória especializada',
              'Terapia ocupacional e fonoaudiologia',
              'Oficina Ortopédica (cadeira sob medida, órteses, coletes)',
              'Programa Crer em Casa (equipe vai na residência)',
              'Farmácia de Alto Custo dentro do hospital',
              'Nutrição enteral supervisionada (dieta da sonda)',
            ]}
            contact={
              <>
                <a href="tel:6232323000" className="text-primary no-underline font-medium text-sm inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> (62) 3232-3000</a>
                {' · '}
                <a href="https://wa.me/6299955400" className="text-primary no-underline font-medium text-sm inline-flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> WhatsApp (62) 3995-5400</a>
                <br />
                <span className="text-xs text-guia-text-muted">Diga que é ex-paciente e quer reativar o prontuário</span>
              </>
            }
          />
          <CrerEmCasa />
        </div>
      </div>

      {/* Hospital das Clínicas */}
      <div className="container" id="hc">
        <section className="py-[72px]">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Hospital Universitário</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Hospital das Clínicas — <span className="text-primary">UFG / Ebserh</span>
            </h2>
          </div>
          <InstitutionCard
            image={hcImg}
            imageAlt="Hospital das Clínicas da UFG"
            badge="Hospital Universitário • Alta Complexidade"
            badgeColor="green"
            title="Referência em gastroenterologia e nutrição enteral"
            paragraphs={[
              'O Hospital das Clínicas da UFG é o principal hospital universitário de Goiás. Para o Matheuzinho, é estratégico porque tem <strong>protocolos avançados de nutrição enteral e gastroenterologia</strong> — exatamente o que ele precisa com a sonda e a estenose no esôfago.',
              'Aqui ele pode fazer exames complexos, biópsias, dilatação esofágica e acompanhamento com especialistas que lidam com os casos mais raros do Centro-Oeste.',
            ]}
            features={[
              'Gastroenterologia com especialistas em estenose esofágica',
              'Nutrição enteral avançada com protocolos próprios',
              'Exames de alta complexidade (endoscopia, TC, RM)',
              'Equipe multidisciplinar acadêmica',
              'Integração direta com o CRER para encaminhamentos',
            ]}
            contact={
              <span className="text-sm text-guia-text-muted">Acesso via regulação SUS ou encaminhamento do CRER • Campus Samambaia, Goiânia-GO</span>
            }
            reverse
          />
        </section>
      </div>

      {/* Pestalozzi */}
      <div className="bg-guia-blue-light py-[72px]" id="pestalozzi">
        <div className="container">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Reabilitação e inclusão</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Pestalozzi — <span className="text-primary">Centro de Reabilitação</span>
            </h2>
          </div>
          <InstitutionCard
            image={pestalozziImg}
            imageAlt="Associação Pestalozzi de Goiânia"
            badge="Reabilitação • Gratuito • Complementar"
            badgeColor="green"
            title="Reabilitação complementar e atividades inclusivas"
            paragraphs={[
              'A Pestalozzi de Goiânia é uma das maiores instituições de apoio à pessoa com deficiência do Centro-Oeste. Oferece <strong>reabilitação complementar</strong> ao CRER, com foco em atividades inclusivas, terapias ocupacionais e suporte à família.',
              'Enquanto o CRER cuida da parte médica e técnica, a Pestalozzi cuida do dia a dia: atividades de estimulação, convivência social e apoio emocional para o cuidador.',
            ]}
            features={[
              'Estimulação multissensorial para PCD grave',
              'Atividades inclusivas e de socialização',
              'Suporte psicológico para pais e cuidadores',
              'Complemento perfeito ao tratamento do CRER',
              'Atendimento gratuito',
            ]}
            contact={
              <>
                <a href="tel:6235155665" className="text-primary no-underline font-medium text-sm inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> (62) 3515-5665</a>
                <br />
                <span className="text-xs text-guia-text-muted">Av. A, nº 561 – Vila Nova, Goiânia-GO</span>
              </>
            }
          />
        </div>
      </div>

      {/* CREAS */}
      <div className="container" id="creas">
        <section className="py-[72px]">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Assistência Social</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              CREAS — <span className="text-primary">Apoio à Família</span>
            </h2>
          </div>
          <InstitutionCard
            image={creasImg}
            imageAlt="CREAS - Centro de Referência Especializado de Assistência Social"
            badge="Assistência Social • SUS gratuito"
            badgeColor="amber"
            title="O apoio que cuida da família toda"
            paragraphs={[
              'O CREAS (Centro de Referência Especializado de Assistência Social) é muito mais do que um órgão burocrático — é um serviço que <strong>vai até a casa da família</strong> para dar suporte ao cuidador, orientar sobre direitos e ajudar a manter a qualidade de vida de quem cuida e de quem é cuidado.',
              'Para famílias com PCD de alta dependência, o CREAS oferece atendimento domiciliar especializado, aliviando o peso dos cuidadores e garantindo proteção social completa.',
            ]}
            features={[
              'Atendimento domiciliar para PCD com dependência grave',
              'Orientação ao cuidador (como posicionar, alimentar, higiene)',
              'Encaminhamento para benefícios (BPC/LOAS, auxílios)',
              'Suporte emocional para a família',
              'Várias unidades em Goiânia — encontre a mais perto de casa',
            ]}
            contact={
              <span className="text-sm text-guia-text-muted">Procure o CREAS mais próximo da futura residência na Prefeitura de Goiânia</span>
            }
            reverse
          />
        </section>
      </div>

      {/* APC+ */}
      <div className="bg-guia-blue-light py-[72px]" id="apc">
        <div className="container">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Rede de Famílias</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              APC+ — <span className="text-primary">Associação de Acolhimento</span>
            </h2>
          </div>
          <InstitutionCard
            image={apcImg}
            imageAlt="APC+ - Associação de Acolhimento à Pessoa com Paralisia Cerebral"
            badge="Rede de apoio • +150 famílias"
            badgeColor="green"
            title="Você não está sozinho nessa jornada"
            paragraphs={[
              'A APC+ (Associação de Acolhimento à Pessoa com Paralisia Cerebral e Outras Deficiências — Brasil) é uma das maiores redes de apoio para famílias como a de vocês em Goiânia. São mais de <strong>150 famílias</strong> que passaram ou estão passando pelo mesmo caminho.',
              'Aqui vocês vão encontrar pessoas que entendem o dia a dia de cuidar de um jovem com paralisia cerebral grave, sem precisar explicar tudo do zero. É suporte emocional, troca de experiências reais, dicas práticas e amizades verdadeiras.',
            ]}
            features={[
              'Grupos de apoio para pais, mães e cuidadores',
              'Eventos, encontros e atividades inclusivas',
              'Dicas práticas de outros pais que já passaram pela burocracia do CRER',
              'Rede ativa no Instagram com informações atualizadas',
              'Suporte emocional que nenhum hospital consegue dar sozinho',
            ]}
            contact={
              <>
                <a href="https://instagram.com/apc.mais" target="_blank" rel="noreferrer" className="text-primary no-underline font-medium text-sm inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> Instagram: @apc.mais</a>
                <br />
                <span className="text-xs text-guia-text-muted">Telefones atualizados nos posts do Instagram</span>
              </>
            }
          />
        </div>
      </div>

      {/* ADFEGO */}
      <div className="container" id="adfego">
        <section className="py-[72px]">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">Direitos e Adaptações</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              ADFEGO — <span className="text-primary">Deficientes Físicos de Goiás</span>
            </h2>
          </div>
          <InstitutionCard
            image={adfegoImg}
            imageAlt="ADFEGO - Associação dos Deficientes Físicos do Estado de Goiás"
            badge="Defesa de Direitos • Estadual"
            badgeColor="blue"
            title="Seus direitos garantidos em Goiás"
            paragraphs={[
              'A ADFEGO (Associação dos Deficientes Físicos do Estado de Goiás) é uma entidade estadual que atua na <strong>defesa dos direitos das pessoas com deficiência física</strong> em Goiás. É o lugar certo para tirar dúvidas sobre acessibilidade, benefícios, transporte adaptado e qualquer direito que o Matheuzinho tem garantido por lei.',
              'Se a família tiver dúvidas sobre passe livre, adaptações no ônibus, direitos no trabalho para os pais cuidadores, BPC/LOAS ou qualquer outra questão legal ligada à deficiência — a ADFEGO pode orientar gratuitamente.',
            ]}
            features={[
              'Orientação sobre direitos das pessoas com deficiência física',
              'Suporte para passe livre de transporte urbano adaptado',
              'Informações sobre BPC/LOAS e benefícios sociais',
              'Defesa e advocacy em Goiás',
              'Informações sobre acessibilidade urbana',
            ]}
            contact={
              <>
                <a href="tel:6232023313" className="text-primary no-underline font-medium text-sm inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> (62) 3202-3313</a>
                <br />
                <span className="text-xs text-guia-text-muted">Av. Independência, 3026 – Setor Leste Vila Nova, Goiânia-GO</span>
              </>
            }
            reverse
          />
        </section>
      </div>
    </>
  );
};

export default InstitutionsSection;
