# Atualização da página /food-service com "A Estrutura Invisível"

O e-book traz um posicionamento mais forte do que o texto atual da página: **governança digital**. Ele dá autoridade (fatos com fonte, datas, decisões judiciais), um produto de entrada claro (auditoria/diagnóstico gratuito) e um método próprio (11 fases). Vou usar isso como espinha dorsal da página.

## O que muda, na ordem da página

1. **Abertura (topo)**
   Nova frase de força: "Quem não é visto, não é lembrado" — e a explicação de que hoje a decisão do cliente acontece na tela do celular (Google, iFood, ChatGPT, Instagram). Posiciona você como especialista em estrutura, não em post bonito.

2. **Faixa de credenciais**
   Acrescento "Auditoria de estrutura digital" ao lado do que já existe (10+ anos de operação, setup Meta + Google, acervo gratuito).

3. **Nova seção: os 9 pontos que toda casa precisa ter**
   Substitui/absorve a seção "Básico bem feito" atual, agora com os nove itens do e-book: Google Perfil da Empresa, WhatsApp organizado, redes no nome certo, canal próprio de delivery, marketplace bem configurado, ficha técnica com margem real, lista de clientes, senha forte + verificação em duas etapas, e um responsável.

4. **Nova seção: "Por que agora" — os fatos de 2026**
   Cinco cartões com data e fonte: Meta condenada por bloqueio de conta (TJMT, fev/2026), WhatsApp muda cobrança duas vezes no ano, 9,1 milhões de CNPJs negativados (Serasa), ANPD virando agência reguladora com o setor de alimentação citado, e a Reforma Tributária com prazo em jan/2027. É a parte que mais gera autoridade — tudo com fonte à vista.

5. **Nova seção: "Parece ativo, mas não está seguro"**
   O contraste Restaurante A x Restaurante B em duas colunas, mais os números do e-book: impulsionar rende até 4x menos que anúncio configurado; até 30% da verba desperdiçada sem rastreamento; CRM levando recompra de 18% para 42%.

6. **Nova seção: "Como funciona uma auditoria de verdade"**
   As fases agrupadas (diagnóstico e recuperação de acesso → segurança e reorganização → LGPD, fiscal e contratos → performance e concorrência) e o vocabulário de status (sem acesso, risco de bloqueio, recuperado + seguro, decisão tomada).

7. **Autoavaliação em 4 perguntas**
   Bloco interativo simples: as quatro perguntas do e-book, o visitante marca "sim / não sei", e ao final aparece uma leitura do risco e o botão de WhatsApp. Nada é salvo, é só na tela.

8. **Download do e-book**
   Botão "Baixar o guia A Estrutura Invisível (PDF)" em dois pontos: logo depois da seção de fatos e no fechamento — igual ao que já existe para a apresentação do Programa de Parcerias.

9. **Fechamento**
   Substituo o CTA atual por: "Antes que a estrutura pare por conta própria, vamos organizar ela juntos" + diagnóstico gratuito, resposta em até 24h úteis, Goiânia e região, WhatsApp (62) 99968-8700.

10. **Enxugar o que já existe**
    Listas muito longas (IA, setup técnico, salão/PDV) reduzidas aos itens que realmente pesam, para a página não virar catálogo. O Programa de Parcerias continua onde está.

11. **Índice do topo** atualizado com as novas seções.

## Imagens
Duas ou três imagens cinematográficas novas no mesmo estilo das atuais (tom escuro + dourado): a tela do celular decidindo onde comer, e uma de "fundação/estrutura" para a auditoria.

## Detalhes técnicos
- O PDF entra como asset via `lovable-assets` e é referenciado por um `.asset.json`, como o PDF de parcerias.
- Tudo em componentes novos dentro de `src/components/guia/` para a página não inchar; a autoavaliação usa estado local em React, sem backend.
