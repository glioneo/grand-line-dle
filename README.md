# Grand Line Dle V1.07

## Novidades da V1.07
- O contador da bandeira agora representa a **sequência diária de vitórias (streak)**.
- A sequência só aumenta quando o personagem do dia é encontrado; apenas entrar ou fazer tentativas não conta.
- Se um dia for perdido, a sequência atual reinicia na próxima vitória, enquanto a **melhor sequência** permanece salva.
- A bandeira evolui conforme o streak: Branco (1–10), Amarelo (11–20), Rosa (21–30), Laranja (31–40), Vermelho (41–50), Verde (51–60), Azul Claro (61–70), Azul Escuro (71–80), Roxo (81–90), Preto (91–100) e estágio especial a partir de 101.
- As cores alteram apenas o tecido da bandeira, preservando chapéu, mastro, medalhão, contornos e detalhes dourados.
- Nova caixa de **Estatísticas** no final da página com Vitórias, Sequência atual e Melhor sequência.
- Nova distribuição de vitórias por número de tentativas: **1, 2, 3, 4, 5 e 6+**. O jogo continua com tentativas ilimitadas.
- Depois de acertar, a partida do dia fica encerrada e é restaurada ao recarregar/voltar ao site, evitando refazer a partida para alterar as estatísticas.
- Tentativas feitas antes de acertar também são restauradas no mesmo dia.

## Recursos atuais
- 252 personagens.
- Personagem diário em ordem pseudoaleatória fixa, igual para todos.
- Busca pelo início de qualquer parte do nome e por aliases.
- Comparação por Sexo, Afiliação, Origem, Tipo de fruta, Haki, Recompensa, Altura e Arco de estreia.
- Dados e estatísticas salvos localmente no navegador (`localStorage`).

- Ajuste visual final V1.07: número diretamente no tecido da bandeira, sem medalhão ou máscara.

- Ajuste visual V1.07: bandeiras de sequência ficaram mais compactas, reduzindo o excesso de tecido vazio sem alterar a altura.

### Correção V1.07.1
- Corrigido o dimensionamento da bandeira quando arquivos da V1.06 e V1.07 ficam temporariamente misturados em cache ou durante a atualização do GitHub Pages.
- A imagem da bandeira agora é limitada pelo contêiner mesmo sem a classe `flagArt`.
- Adicionado cache-busting aos arquivos CSS e JavaScript para reduzir a chance de o navegador carregar uma versão antiga junto da nova.
