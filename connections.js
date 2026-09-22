/* Grand Line Dle V2.0 — Conexões */
(()=>{
  const CHALLENGES=[
    {characters:['Kuzan','Nico Robin'],answer:'Ohara',accepted:['Ohara','Incidente de Ohara','Buster Call de Ohara','Buster Call em Ohara'],hints:['A conexão envolve o passado de um deles.','Está relacionada a uma ilha.','Um Buster Call faz parte dessa história.']},
    {characters:['Monkey D. Garp','Gol D. Roger'],answer:'God Valley',accepted:['God Valley','Incidente de God Valley'],hints:['A conexão envolve um acontecimento do passado.','Piratas e Marinha lutaram do mesmo lado.','O incidente ocorreu em God Valley.']},
    {characters:['Caesar Clown','Vinsmoke Judge'],answer:'MADS',accepted:['MADS'],hints:['A conexão envolve ciência.','Os dois fizeram parte do mesmo grupo de pesquisa.','Vegapunk também esteve ligado a esse grupo.']},
    {characters:['Shanks','Buggy'],answer:'Piratas do Roger',accepted:['Piratas do Roger','Roger','Gol D Roger','Tripulação do Roger'],hints:['A conexão vem da juventude dos dois.','Os dois foram aprendizes na mesma tripulação.','Essa tripulação chegou a Laugh Tale.']},
    {characters:['Portgas D. Ace','Yamato'],answer:'Luffy',accepted:['Luffy','Monkey D Luffy'],hints:['A conexão é uma pessoa.','Um deles falou bastante sobre essa pessoa ao outro.','Essa pessoa é irmão de Ace.']},
    {characters:['Donquixote Rosinante','Trafalgar D. Water Law'],answer:'Ope Ope no Mi',accepted:['Ope Ope no Mi','Ope Ope','Fruta da Operação'],hints:['A conexão envolve uma Akuma no Mi.','Um deles arriscou tudo para que o outro obtivesse essa fruta.','É a fruta atualmente usada por Law.']},
    {characters:['Nami','Arlong'],answer:'Bell-mère',accepted:['Bell-mère','Bellmere','Bell Mere'],hints:['A conexão é uma pessoa do passado de Nami.','Essa pessoa vivia em Cocoyasi.','Arlong foi responsável pela morte dessa pessoa.']},
    {characters:['Sanji','Queen'],answer:'Vinsmoke Judge',accepted:['Judge','Vinsmoke Judge'],hints:['A conexão é uma pessoa.','Ela está ligada à ciência e à família de Sanji.','Queen conheceu esse cientista no passado.']},
    {characters:['Crocodile','Nico Robin'],answer:'Pluton',accepted:['Pluton','Plutão','Plutao'],hints:['A conexão envolve uma Arma Ancestral.','A busca por ela foi central em Alabasta.','Robin podia ler a informação que Crocodile procurava.']},
    {characters:['Donquixote Doflamingo','Donquixote Rosinante'],answer:'Ope Ope no Mi',accepted:['Ope Ope no Mi','Ope Ope','Fruta da Operação'],hints:['A conexão envolve uma Akuma no Mi.','Os dois estiveram envolvidos na disputa por essa fruta.','Law acabou recebendo seus poderes.']},
    {characters:['Kaido','Gecko Moria'],answer:'Wano',accepted:['Wano','País de Wano','Pais de Wano'],hints:['A conexão envolve um lugar.','Os dois se enfrentaram no passado.','O confronto ocorreu no país dominado posteriormente por Kaido.']},
    {characters:['Charlotte Linlin','Sanji'],answer:'Charlotte Pudding',accepted:['Pudding','Charlotte Pudding'],hints:['A conexão é uma pessoa.','Ela faz parte da família de um deles.','Foi escolhida para se casar com Sanji.']},
    {characters:['Jinbe','Fisher Tiger'],answer:'Piratas do Sol',accepted:['Piratas do Sol','Sun Pirates'],hints:['A conexão envolve uma tripulação.','Os dois foram membros dela.','Fisher Tiger foi seu fundador.']},
    {characters:['Sabo','Fujitora'],answer:'Dressrosa',accepted:['Dressrosa','Reino de Dressrosa'],hints:['A conexão envolve um lugar.','Os dois estiveram presentes durante a queda de Doflamingo.','Luffy também estava nesse reino.']},
    {characters:['Enel','Urouge'],answer:'Birka',accepted:['Birka','Biruka'],hints:['A conexão envolve o local de origem.','Não fica em nenhum dos quatro Blues.','É uma ilha do céu.']},
    {characters:['Koby','Alvida'],answer:'Luffy',accepted:['Luffy','Monkey D Luffy'],hints:['A conexão é uma pessoa.','Essa pessoa mudou o rumo da vida de Koby.','Ela derrotou Alvida no começo da história.']},
    {characters:['Marshall D. Teach','Portgas D. Ace'],answer:'Banaro',accepted:['Banaro','Ilha Banaro','Banaro Island'],hints:['A conexão envolve um confronto.','O resultado teve consequências enormes para a história.','A luta aconteceu em uma ilha antes de Marineford.']},
    {characters:['Rob Lucci','Franky'],answer:'Enies Lobby',accepted:['Enies Lobby'],hints:['A conexão envolve um lugar.','Os dois participaram dos acontecimentos ligados ao resgate de Robin.','É uma das três grandes instalações do Governo Mundial.']},
    {characters:['Smoker','Crocodile'],answer:'Alabasta',accepted:['Alabasta','Reino de Alabasta'],hints:['A conexão envolve um reino.','Os dois estiveram diretamente envolvidos nos acontecimentos desse arco.','Crocodile tentou tomar esse reino.']},
    {characters:['Marco','Charlotte Linlin'],answer:'Sphinx',accepted:['Sphinx','Ilha Sphinx','Sphinx Island'],hints:['A conexão envolve uma ilha.','Um deles protege esse local ligado a Whitebeard.','Os dois se encontraram ali antes dos eventos de Wano.']}
  ];
  const $=s=>document.querySelector(s),left=$('#connLeft'),right=$('#connRight'),q=$('#connQ'),go=$('#connGo'),errorsEl=$('#connErrors'),msg=$('#connMsg'),hintsEl=$('#connHints'),result=$('#connResult');
  if(!left||!right)return;
  const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const char=n=>CHARACTERS.find(c=>c.name===n);
  const d=new Date(),day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000),challenge=CHALLENGES[day%CHALLENGES.length],KEY=`gld_connections_v201_${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  let state={errors:0,tried:[],done:false};try{state={...state,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{}
  function card(el,name){const c=char(name);el.innerHTML=c?`<img src="images/characters/${c.image}" alt="${c.name}"><h3>${c.name}</h3>`:`<h3>${name}</h3>`}
  function save(){localStorage.setItem(KEY,JSON.stringify(state))}
  function renderHints(){const count=Math.min(3,Math.floor(state.errors/2));hintsEl.innerHTML=challenge.hints.slice(0,count).map((h,i)=>`<div class="connHint">💡 <b>Dica ${i+1}:</b> ${h}</div>`).join('')}
  function render(){card(left,challenge.characters[0]);card(right,challenge.characters[1]);errorsEl.textContent=state.errors;renderHints();q.disabled=go.disabled=state.done;result.classList.toggle('hidden',!state.done);if(state.done)result.innerHTML=`🏴‍☠️ Conexão encontrada: <strong>${challenge.answer}</strong>`}
  function submit(){if(state.done)return;const raw=q.value.trim(),n=norm(raw);if(!n){msg.textContent='Digite uma resposta.';msg.className='connMsg info';return}if(state.tried.includes(n)){msg.textContent='Você já tentou essa resposta.';msg.className='connMsg info';return}state.tried.push(n);q.value='';const ok=challenge.accepted.some(a=>norm(a)===n);if(ok){state.done=true;msg.textContent='Acertou!';msg.className='connMsg ok';save();render();return}state.errors++;msg.textContent='Não é essa conexão.';msg.className='connMsg bad';save();render();q.focus()}
  go.addEventListener('click',submit);q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();submit()}});window.addEventListener('connections-open',()=>{render();if(!state.done)q.focus()});render();
})();
