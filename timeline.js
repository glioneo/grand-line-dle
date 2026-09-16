/* Grand Line Dle V2.0 — Timeline */
(()=>{
  const board=document.querySelector('#timelineBoard'),prompt=document.querySelector('#timelinePrompt');
  if(!board||!prompt)return;
  const themeEl=document.querySelector('#timelineTheme'),livesEl=document.querySelector('#timelineLives'),scoreEl=document.querySelector('#timelineScore'),bestEl=document.querySelector('#timelineBest'),msg=document.querySelector('#timelineMsg'),restart=document.querySelector('#timelineRestart');
  const d=new Date(), day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000);
  const themes=['arcs','bounty','height','debut'];
  const labels={arcs:'🗺️ Arcos',bounty:'💰 Recompensas',height:'📏 Altura',debut:'⭐ Estreia'};
  const theme=themes[day%themes.length];
  const hashSeed=(day*2654435761 + themes.indexOf(theme)*9973)>>>0;
  const shuffle=(list,seed=hashSeed)=>{const a=[...list];let x=seed||1;const rnd=()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296};for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  const money=n=>n>=1e9?(n/1e9).toLocaleString('pt-BR',{maximumFractionDigits:3})+' bi':n>=1e6?(n/1e6).toLocaleString('pt-BR',{maximumFractionDigits:3})+' mi':n.toLocaleString('pt-BR');
  const arcIndex=a=>ARC_ORDER.indexOf(a);
  let pool=[];
  if(theme==='arcs') pool=ARC_ORDER.map((name,i)=>({name,value:i,detail:`${i+1}º arco`,arcOnly:true}));
  if(theme==='bounty') pool=CHARACTERS.filter(c=>c.bounty>0).map(c=>({name:c.name,image:c.image,value:c.bounty,detail:`฿ ${money(c.bounty)}`}));
  if(theme==='height') pool=CHARACTERS.filter(c=>c.height>0).map(c=>({name:c.name,image:c.image,value:c.height,detail:`${String(c.height).replace('.',',')} m`}));
  if(theme==='debut'){
    const byArc=new Map();shuffle(CHARACTERS.filter(c=>arcIndex(c.arc)>=0),hashSeed^0xABCDEF).forEach(c=>{if(!byArc.has(c.arc))byArc.set(c.arc,c)});
    pool=[...byArc.values()].map(c=>({name:c.name,image:c.image,value:arcIndex(c.arc),detail:c.arc}));
  }
  // Valores iguais criariam mais de uma posição correta; mantém um representante por valor.
  const seen=new Set();pool=pool.filter(x=>!seen.has(x.value)&&(seen.add(x.value),true));
  let queue=[],line=[],current=null,lives=3,score=0,over=false;
  const bestKey=`gld_timeline_best_${theme}_v109`;
  let best=Number(localStorage.getItem(bestKey)||0);
  themeEl.textContent=`Tema: ${labels[theme]}`;bestEl.textContent=best;
  function itemHTML(x,klass='timelineCard'){
    if(x.arcOnly)return `<div class="${klass} timelineArcCard"><strong>${x.name}</strong></div>`;
    return `<div class="${klass}">${x.image?`<img src="images/characters/${x.image}" alt="">`:''}<strong>${x.name}</strong></div>`;
  }
  function updateMeta(){livesEl.textContent='❤️'.repeat(lives)+'🖤'.repeat(3-lives);scoreEl.textContent=score;bestEl.textContent=best}
  function render(){
    updateMeta();
    if(over){prompt.innerHTML=`<div class="timelineGameOver">Fim de jogo!<br>Você fez ${score} ponto${score===1?'':'s'}.</div>`;restart.classList.remove('hidden');board.innerHTML=line.map(x=>itemHTML(x)).join('');return}
    prompt.innerHTML=itemHTML(current,'timelineCurrent');
    let html='';for(let i=0;i<=line.length;i++){html+=`<button class="timelineSlot" data-pos="${i}" title="Inserir aqui">+</button>`;if(i<line.length)html+=itemHTML(line[i])}board.innerHTML=html;
    board.querySelectorAll('.timelineSlot').forEach(b=>b.onclick=()=>place(Number(b.dataset.pos)));
  }
  function correctPos(x){let i=0;while(i<line.length&&line[i].value<x.value)i++;return i}
  function next(){if(!queue.length)queue=shuffle(pool,hashSeed^(score+1)*7919).filter(x=>!line.some(y=>y.name===x.name));current=queue.shift();if(!current){over=true;render();return}render()}
  function place(pos){if(over)return;const right=correctPos(current);const chosen=current;if(pos===right){line.splice(right,0,chosen);score++;msg.textContent='Acertou!';msg.className='timelineMsg ok';if(score>best){best=score;localStorage.setItem(bestKey,best)}}else{lives--;line.splice(right,0,chosen);msg.textContent=`Posição errada — ${chosen.name} foi colocado no lugar correto.`;msg.className='timelineMsg bad'}if(lives<=0){over=true;render()}else next()}
  function start(){lives=3;score=0;over=false;msg.textContent='';msg.className='timelineMsg';restart.classList.add('hidden');queue=shuffle(pool);const a=queue.shift(),b=queue.shift();line=[a,b].sort((x,y)=>x.value-y.value);current=queue.shift();render()}
  restart.onclick=start;
  window.addEventListener('timeline-open',()=>{if(!line.length)start()});
  start();
})();
