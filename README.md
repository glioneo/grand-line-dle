# Grand Line Dle V2.01

## V2.01 — revelação sequencial + SEO

- Corrigida a virada diária do modo **Conexões** para usar a mesma referência de data local dos modos Clássico, Wanted e Timeline.
- No modo **Clássico**, cada tentativa agora revela os nove campos um de cada vez, criando suspense antes do resultado completo.
- A busca fica temporariamente bloqueada durante a revelação para impedir tentativas sobrepostas.
- A vitória e a comemoração só aparecem após a revelação do último campo.
- A animação respeita `prefers-reduced-motion`; partidas restauradas continuam aparecendo imediatamente.
- SEO atualizado com descrição dos cinco modos, URL canônica, diretiva de indexação e metadados sociais.
- Adicionado `robots.txt` apontando para o `sitemap.xml`, que recebeu data de atualização.

# Histórico — V2.0

## V2.0 — lançamento dos cinco modos
- **Clássico**: modo diário original, com comparações, estatísticas, streak e personagem de ontem.
- **Wanted**: adivinhação pela imagem progressivamente menos desfocada, com opções Com cor / Sem cor e banco completo de 252 imagens.
- **Conexões**: desafio diário entre dois personagens, com respostas textuais objetivas, aliases e dicas após 2, 4 e 6 erros. Banco inicial experimental com 20 conexões.
- **Timeline**: ordenação progressiva com tema diário entre Arcos, Recompensas, Altura e Estreia, 3 vidas e recordes por tema.
- **Higher/Lower**: modo infinito de comparação de recompensas; a escolha é feita clicando diretamente no personagem que o jogador acredita ter a maior recompensa.
- Mantida a compatibilidade das estatísticas e partidas do modo Clássico com as chaves anteriores de `localStorage`.
- A fase experimental V1.09 foi encerrada e consolidada nesta versão V2.0.

## Histórico de desenvolvimento
## V1.09 EXP — Teste 2.5
- Banco real do modo **WANTED** integrado.
- **252/252 personagens** do `characters.js` possuem imagem específica em `images/wanted/`.
- Imagens duplicadas dos pacotes de coleta foram consolidadas em uma única imagem por personagem.
- Nomes divergentes foram normalizados para os nomes canônicos do jogo.
- O WANTED não usa mais as fotos quadradas do modo Clássico como fallback.
- Mantidos os 7 níveis de desfoque e as opções **Com cor / Sem cor**.
- Auditoria do vínculo das imagens disponível em `WANTED-AUDITORIA.md`.


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

## V1.09 EXP — novos modos (teste local)
- Adicionada navegação por modos: **Clássico**, **Silhueta**, **Conexões**, **Timeline** e **Higher/Lower**.
- O **Clássico** mantém a lógica, estatísticas e chaves de armazenamento da V1.08.1.
- Primeira versão funcional do **Silhueta**, com personagem diário, busca por nome/alias, contador de tentativas e revelação ao acertar.
- **Conexões**, **Timeline** e **Higher/Lower** aparecem na interface como próximos modos, ainda sem alterar o jogo principal.
- A pasta `images/silhouettes/` foi criada separadamente para não misturar as imagens de corpo/pose com os retratos do modo Clássico.
- Este pacote é experimental e foi preparado para teste local antes de qualquer publicação.


### V1.09 EXP — Teste 2 (Silhueta funcional)
- O sorteio do Silhueta agora usa todo o elenco diário do `characters.js`; quando a imagem dedicada ainda não está no pacote, o retrato existente é usado temporariamente para o modo continuar jogável.
- Adicionada revelação visual progressiva em até cinco estágios conforme os erros.
- Adicionado histórico de palpites, bloqueio de tentativas repetidas e contador persistente.
- O progresso diário do Silhueta é salvo em `localStorage` e restaurado ao recarregar a página.
- Ao acertar, a imagem é revelada e o resultado permanece concluído durante o dia.
- As imagens de corpo/pose disponíveis continuam tendo prioridade sobre os retratos do Clássico.

### V1.09 EXP — Teste 2.3
- Modo **Silhueta** renomeado visualmente para **Wanted**.
- Revelação alterada de preto/cinza para desfoque progressivo.
- A imagem começa muito borrada e fica mais nítida a cada erro.
- Mantido o dimensionamento ampliado do Teste 2.2.


### V1.09 EXP — Teste 2.4
- Removida a barra/texto que informava o estágio de nitidez do Wanted.
- O desfoque agora possui **7 níveis**, com progressão mais lenta entre os erros.
- A imagem permanece parcialmente desfocada mesmo no último nível e só fica totalmente nítida ao acertar.
- Adicionada a opção **Com cor / Sem cor** para o jogador escolher a dificuldade visual.
- A preferência de cor fica salva no navegador e pode ser alterada a qualquer momento.

### V1.09 EXP — Teste 3 (Timeline)
- Aba Timeline agora jogável em modo progressivo.
- Tema diário rotativo entre Arcos, Recompensas, Altura e Estreia.
- Linha começa com 2 itens e cresce a cada rodada.
- 3 vidas; erro revela e insere o item na posição correta.
- Pontuação e recorde local separados por tema.

- Timeline: cartas agora exibem apenas o item/personagem, sem revelar arco de estreia, recompensa, altura ou número ordinal do arco.

### V1.09 EXP — Teste 4: Higher / Lower
- Novo modo infinito e rejogável de comparação de recompensas.
- Usa apenas personagens com recompensa conhecida.
- O jogador decide se a próxima recompensa é maior ou menor.
- Confrontos com recompensas idênticas são evitados.
- Sem repetição de personagem dentro da sequência enquanto houver opções.
- Pontuação atual e recorde pessoal salvo localmente.
- Ao errar, a recompensa é revelada e a partida termina; é possível jogar novamente.


### V1.09 EXP — Teste 4.1: Higher / Lower
- Mantida a mesma mecânica do Teste 4.
- Removidos os botões **MAIOR** e **MENOR**.
- A escolha agora é feita clicando diretamente no personagem que o jogador acredita ter a maior recompensa.
- As cartas receberam indicação visual de clique/hover e suporte a teclado.

### V1.09 EXP — Teste 5: Conexões
- Aba **Conexões** habilitada para teste local.
- Banco inicial com **20 desafios diários**.
- Cada desafio mostra dois personagens e exige uma resposta textual objetiva.
- Respostas são comparadas após normalização de maiúsculas, acentos, pontuação e espaços, mas sem aceitar correspondência parcial.
- Cada desafio possui resposta principal e aliases aceitos.
- Resposta errada inédita soma 1 erro; resposta repetida não soma erro.
- Dicas são liberadas progressivamente com 2, 4 e 6 erros.
- O progresso do desafio diário fica salvo no navegador.
- Esta primeira grade é experimental e deve ser auditada durante os testes para remover conexões ambíguas ou forçadas.
