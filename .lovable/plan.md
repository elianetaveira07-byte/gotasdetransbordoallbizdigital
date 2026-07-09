
# Próxima seção — "Formação acadêmica e visão estratégica de vida"

Uma seção nova, posicionada **logo após `PerfilProfissionalSection`** e antes de `FamilySection`, para conectar de forma natural: perfil profissional → próximo passo formal (faculdade) → família e localização estratégica.

Sem emojis. Mesmo padrão visual das demais seções (Fraunces + DM Sans, tokens guia-blue / guia-green / guia-amber, cards com shadow-guia, ícones lucide-react).

---

## Estrutura da seção

### 1. Cabeçalho
- Tag: "Próximo passo · formação acadêmica"
- Título: *"Ciência de Dados e Inteligência Artificial — o próximo movimento formal da minha trajetória"*
- Subtítulo curto explicando que a graduação **não é ponto de partida, é validação e aprofundamento** de um caminho já em execução há quase 3 anos.

### 2. Card principal — o curso escolhido (PUC Goiás)
Card de destaque (borda esquerda guia-blue) usando a imagem enviada apenas como **referência visual** (não será embutida — respeitando direitos autorais da PUC). Reproduzimos as informações-chave em formato próprio, elegante:

- **Instituição:** PUC Goiás — Escola Politécnica e de Artes
- **Curso:** Ciência de Dados e Inteligência Artificial (Superior Tecnológico)
- **Modalidade:** Presencial
- **Duração:** 6 semestres
- **Turno:** Noturno
- **Câmpus:** I — Praça Universitária, Setor Universitário, Goiânia/GO
- Breve parágrafo institucional reescrito com voz própria, citando Big Data, Machine Learning, ética e aplicação técnica.

Ícones: `GraduationCap`, `MapPin`, `CalendarDays`, `Clock`, `Building2`.

### 3. Bloco — "Por que essa faculdade complementa (e não substitui) o que já venho fazendo"
Texto estratégico e maduro, deixando claro que:

- Já atuo com **Python** e outras stacks de dados/IA no dia a dia da construção da HostConnectBR e nos estudos aplicados.
- A graduação entra para **estruturar formalmente, dar profundidade acadêmica, acesso a pesquisa, laboratórios, iniciação científica e rede** — pontos que o autodidatismo, por mais intenso que seja, não entrega sozinho.
- Reforço: hoje é totalmente possível se desenvolver muito bem sem faculdade — e cito, como exemplo, formações acessíveis e sólidas que já ajudam qualquer profissional a entrar na área **(sem menção como propaganda, apenas contexto real):**
  - Cursos gratuitos e certificações de **Google (Data Analytics, Advanced Data Analytics, Machine Learning Crash Course)**
  - **IBM SkillsBuild / IBM Cognitive Class** (Data Science, Python for Data Science)
  - **Microsoft Learn** (AI-900, DP-900, Azure AI Fundamentals)
  - **AWS Skill Builder / AWS Cloud Practitioner + ML Foundations**
  - **DeepLearning.AI + Coursera (Andrew Ng)** — Machine Learning Specialization, Deep Learning Specialization
  - **Kaggle Learn** — trilhas curtas e práticas de Pandas, ML, Deep Learning
  - **Hugging Face Learn** (NLP, LLMs, Agents)
  - **fast.ai** — Practical Deep Learning for Coders
  - **Alura, Rocketseat, Data Science Academy (DSA)** no cenário nacional
  - **freeCodeCamp, CS50 (Harvard), MIT OpenCourseWare** — base sólida gratuita

A mensagem central: *"É plenamente possível se formar profissionalmente sem faculdade — eu mesmo já venho fazendo isso há quase 3 anos. Mas a graduação, no meu caso, entra como camada complementar estratégica, não como pré-requisito."*

### 4. Bloco — "Por que Goiânia, Setor Universitário / Vila Nova"
Card com tom mais humano (borda guia-green), explicando a decisão de vida:

- A escolha do **Setor Universitário / Vila Nova** como novo lar da família não é aleatória — é uma decisão estratégica que une **três eixos ao mesmo tempo**:
  1. **Faculdade** — proximidade direta com o Câmpus I da PUC Goiás, permitindo rotina noturna sustentável sem comprometer produtividade e família.
  2. **Filho especial** — região com acesso rápido a centros de saúde, terapias, escolas e infraestrutura urbana consolidada, essencial para o cuidado contínuo.
  3. **Família** — bairro tradicional, seguro, arborizado, com qualidade de vida real para minha esposa e filhos.

- Parágrafo final: primeiro passo é **estabilizar a família nesse endereço estratégico**. A partir dessa base, a faculdade entra como consequência natural do plano — não como sacrifício, mas como continuidade.

### 5. Faixa final — "Onde tudo se conecta"
Três mini-cards horizontais reforçando a leitura estratégica:

- **Base familiar** — Setor Universitário / Vila Nova, Goiânia (ícone `Home`)
- **Base acadêmica** — PUC Goiás, Câmpus I (ícone `GraduationCap`)
- **Base profissional** — Marketing + IA + HostConnectBR em execução (ícone `Rocket`)

Fechamento em uma linha: *"Três frentes, um único plano — construído com clareza, tempo e propósito."*

---

## Detalhes técnicos

- Novo arquivo: `src/components/guia/FormacaoAcademicaSection.tsx`
- Import + inserção em `src/pages/Index.tsx` **entre** `<PerfilProfissionalSection />` e `<FamilySection />`
- Sem emojis, apenas ícones `lucide-react`
- Tokens semânticos existentes (`guia-blue`, `guia-blue-light`, `guia-green`, `guia-green-light`, `guia-amber`, `shadow-guia`, fontes Fraunces/DM Sans)
- Imagem enviada da PUC **não será embutida** (é peça institucional da PUC Goiás) — usada apenas como referência de conteúdo e paleta
- Sem alterações em outros componentes existentes

---

Se aprovado exatamente assim, sigo com a implementação. Se quiser ajustar tom, ordem dos blocos, ou incluir/excluir alguma citação de curso, me diga antes.
