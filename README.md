# Grand Line Dle V1.08.1

## V1.08.1 — Comemoração de vitória
- Ao acertar o personagem do dia, são disparados **3 fogos curtos e coloridos** em pontos diferentes da tela.
- O efeito dura cerca de 2 segundos, não bloqueia cliques e não interfere no jogo.
- Os fogos são executados **somente no momento do acerto**. Recarregar a página após uma vitória restaura a partida sem repetir a animação.
- Respeita a preferência do sistema por redução de movimento (`prefers-reduced-motion`).

## Novidades da V1.08
- Adicionado o bloco **Personagem de ontem**, exibindo automaticamente o personagem da data anterior com nome e imagem.
- Primeiro teste de **animação da bandeira de streak**, com uma ondulação sutil no tecido. Esta parte é experimental e foi feita para ajuste visual por etapas.
- Busca por aliases melhorada para ignorar pontuação e espaços em codinomes. Agora formas como **Mr. 1**, **Mr 1** e **Mr1** funcionam como a mesma busca.
- Revisados os codinomes da **Baroque Works** já presentes no elenco, incluindo Mr. 0, Mr. 1, Mr. 2, Mr. 3, Mr. 5, Mr. 8, Miss Doublefinger, Miss Merry Christmas, Miss Valentine, Miss Wednesday e Miss All Sunday.
- Corrigido o **arco de estreia de Portgas D. Ace** de Marineford para Drum Island.

## Compatibilidade com a V1.07
- As chaves de `localStorage` de estatísticas e partida diária foram mantidas como `gld_stats_v107` e `gld_daily_game_v107` de propósito, para **preservar vitórias, streak, recorde e partida em andamento** de quem já jogava a V1.07.
- O sistema de cores da bandeira e as estatísticas da V1.07 permanecem inalterados.

## Recursos atuais
- 252 personagens.
- Personagem diário em ordem pseudoaleatória fixa, igual para todos.
- Busca pelo início de qualquer parte do nome e por aliases/codinomes.
- Comparação por Sexo, Afiliação, Origem, Tipo de fruta, Haki, Recompensa, Altura e Arco de estreia.
- Estatísticas locais: Vitórias, Sequência atual, Melhor sequência e distribuição de tentativas.
- Partida diária restaurada ao recarregar a página.
- Personagem do dia anterior exibido automaticamente.

### Revisão de aliases — Teste 3
- Feita uma varredura geral nos 252 personagens para ampliar alcunhas, epítetos, identidades e codinomes pesquisáveis.
- Incluídos casos úteis como Sogeking, Cutty Flam, Corazon, Joker, Fujitora, Blackbeard/Barba Negra, Whitebeard/Barba Branca, Hakuba, Kamazo, Kyoshiro, Komurasaki, Klahadore, Gangster Gastino e outros.
- O elenco permanece com 252 personagens; esta revisão altera apenas termos de busca.

## Pendências futuras
- Revisão/atualização de fotos dos personagens.
- Arte especial de Jolly Roger para streak 101+.


### V1.08 — Teste 2 da bandeira
- Removida a segunda camada de bandeira que aparecia por trás.
- Substituído o efeito de esticar via CSS por animações WebP quadro a quadro.
- O mastro/chapéu permanecem estáveis e a ondulação cresce em direção à ponta do tecido.

### Teste 2 — comemoração pirata
- Substituído o efeito discreto de fogos por uma comemoração temática.
- Dois canhões aparecem nos cantos inferiores, disparam com recuo, clarão e fumaça.
- O disparo gera uma explosão central com chuva de confetes coloridos.
- O efeito continua sem bloquear cliques e só ocorre no acerto real.

### Teste 3 — explosões na base + confetes em tela cheia
- Removidos os canhões visíveis.
- Cinco disparos/explosões surgem diretamente da base da tela, distribuídos pela largura.
- Cada explosão lança confetes para cima e para os lados, cobrindo praticamente toda a tela antes de caírem.
- Mantidos clarão e fumaça discretos na origem do disparo.

### Teste 4 — comemoração mais encorpada
- Mantida a ideia aprovada de explosões partindo diretamente da base, sem canhões visíveis.
- Os disparos agora acontecem em três ondas sucessivas pela largura da tela.
- Adicionados clarões mais fortes, fumaça, faíscas de subida e um pulso visual curto no primeiro impacto.
- Confetes ganharam trajetórias mais variadas, balanço lateral e queda menos uniforme para evitar sensação mecânica/seca.

### Teste 5 — queda suave dos confetes
- Mantido o visual do Teste 4.
- A trajetória dos confetes agora possui mais etapas intermediárias, evitando mudanças perceptíveis de posição durante a queda.
- A subida desacelera gradualmente e a queda acelera de forma contínua, simulando melhor a gravidade.
- O balanço lateral ficou menor e progressivo.
- A duração foi levemente aumentada e as transformações usam `translate3d` para favorecer animação mais fluida no navegador.

### Teste 6 — movimento contínuo por frame
- A queda dos confetes deixou de usar keyframes CSS para posição.
- Cada confete agora é atualizado a cada frame com `requestAnimationFrame`, velocidade vertical, gravidade, arrasto e rotação contínua.
- O balanço lateral é calculado continuamente por seno, em vez de alternar entre posições predefinidas.
- Objetivo: eliminar a sensação de “pular quadros” percebida nos Testes 4 e 5.
