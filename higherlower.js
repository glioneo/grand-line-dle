/* Grand Line Dle V2.0 — Higher / Lower */
(()=>{
  const left=document.querySelector('#hlLeft'),right=document.querySelector('#hlRight'),scoreEl=document.querySelector('#hlScore'),bestEl=document.querySelector('#hlBest'),msg=document.querySelector('#hlMsg'),restart=document.querySelector('#hlRestart');
  if(!left||!right)return;
  const pool=CHARACTERS.filter(c=>Number(c.bounty)>0);
  const BEST='gld_higherlower_best_v109';
  let best=Number(localStorage.getItem(BEST)||0),score=0,current=null,next=null,queue=[],over=false,busy=false;
  bestEl.textContent=best;
  const fmt=n=>`${Number(n).toLocaleString('pt-BR')} ฿`;
  const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  function refill(exclude){queue=shuffle(pool.filter(c=>c.name!==exclude?.name))}
  function takeDifferent(from){if(!queue.length)refill(from);let i=queue.findIndex(c=>c.name!==from.name&&c.bounty!==from.bounty);if(i<0){refill(from);i=queue.findIndex(c=>c.bounty!==from.bounty)}return i>=0?queue.splice(i,1)[0]:null}
  function card(c,known){return `<img src="images/characters/${c.image}" alt="${c.name}"><h3>${c.name}</h3><div class="hlBounty ${known?'':'hiddenValue'}">${known?fmt(c.bounty):'???'}</div>`}
  function render(){
    left.innerHTML=card(current,true);right.innerHTML=card(next,over);
    scoreEl.textContent=score;bestEl.textContent=best;restart.classList.toggle('hidden',!over);
    left.classList.toggle('hlClickable',!over&&!busy);right.classList.toggle('hlClickable',!over&&!busy);
    left.setAttribute('aria-disabled',String(over||busy));right.setAttribute('aria-disabled',String(over||busy));
  }
  function start(){score=0;over=false;busy=false;msg.textContent='';msg.className='hlMsg';queue=shuffle(pool);current=queue.shift();next=takeDifferent(current);render()}
  function choose(side){
    if(over||busy||!next)return;
    busy=true;render();
    const picked=side==='right'?next:current;
    const other=side==='right'?current:next;
    const correct=picked.bounty>other.bounty;
    right.innerHTML=card(next,true);right.classList.add('hlReveal');
    if(correct){
      score++;if(score>best){best=score;localStorage.setItem(BEST,best)}scoreEl.textContent=score;bestEl.textContent=best;
      msg.textContent='Acertou!';msg.className='hlMsg ok';
      setTimeout(()=>{current=next;next=takeDifferent(current);busy=false;right.classList.remove('hlReveal');msg.textContent='';render()},650)
    }else{
      over=true;busy=false;msg.textContent=`Errou! ${next.name} tem recompensa ${next.bounty>current.bounty?'maior':'menor'}.`;msg.className='hlMsg bad';render()
    }
  }
  left.addEventListener('click',()=>choose('left'));right.addEventListener('click',()=>choose('right'));
  left.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose('left')}});
  right.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose('right')}});
  left.tabIndex=0;right.tabIndex=0;left.setAttribute('role','button');right.setAttribute('role','button');
  restart.onclick=start;
  window.addEventListener('higherlower-open',()=>{if(!current)start()});
})();
