/* Grand Line Dle V2.0 — WANTED */
(()=>{
  const panels={classic:document.querySelector('#classicMode'),silhouette:document.querySelector('#silhouetteMode'),connections:document.querySelector('#connectionsMode'),timeline:document.querySelector('#timelineMode'),higherlower:document.querySelector('#higherlowerMode')};
  document.querySelectorAll('.modeTab').forEach(btn=>btn.addEventListener('click',()=>{if(btn.classList.contains('coming'))return;document.querySelectorAll('.modeTab').forEach(x=>x.classList.toggle('active',x===btn));Object.entries(panels).forEach(([key,p])=>p?.classList.toggle('hidden',key!==btn.dataset.mode));if(btn.dataset.mode==='silhouette')document.querySelector('#silQ')?.focus();if(btn.dataset.mode==='connections')window.dispatchEvent(new Event('connections-open'));if(btn.dataset.mode==='timeline')window.dispatchEvent(new Event('timeline-open'));if(btn.dataset.mode==='higherlower')window.dispatchEvent(new Event('higherlower-open'))}));

  const wantedAssetName=name=>name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]+/g,'_').replace(/^_+|_+$/g,'')+'.webp';
  const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const compact=s=>norm(s).replace(/\s+/g,'');
  const todayKey=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
  const seedShuffle=list=>{const a=[...list];let seed=0x51A0E77E;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  const eligible=CHARACTERS.filter(c=>c.daily!==false);
  const d=new Date(),day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000);
  const answer=seedShuffle(eligible)[day%eligible.length];
  const q=document.querySelector('#silQ'),go=document.querySelector('#silGo'),sugs=document.querySelector('#silSugs'),msg=document.querySelector('#silMsg'),stage=document.querySelector('#silStage'),img=document.querySelector('#silImage'),attemptEl=document.querySelector('#silAttempts'),result=document.querySelector('#silResult'),history=document.querySelector('#silHistory'),colorOn=document.querySelector('#wantedColorOn'),colorOff=document.querySelector('#wantedColorOff');
  if(!q||!img)return;
  const silhouetteSrc=`images/wanted/${wantedAssetName(answer.name)}`;
  img.src=silhouetteSrc;
  const STORE='gld_silhouette_v109';
  const COLOR_STORE='gld_wanted_color_v109';
  let useColor=localStorage.getItem(COLOR_STORE)!=='off';
  let state={date:todayKey(),guesses:[],done:false};
  try{const x=JSON.parse(localStorage.getItem(STORE)||'null');if(x&&x.date===state.date&&Array.isArray(x.guesses))state=x}catch(e){}
  const guessed=new Set(state.guesses);
  const matches=(c,v)=>compact(c.name)===compact(v)||(c.aliases||[]).some(a=>compact(a)===compact(v));
  const save=()=>localStorage.setItem(STORE,JSON.stringify(state));
  function updateColorMode(){
    stage.classList.toggle('no-color',!useColor);
    colorOn?.classList.toggle('active',useColor);
    colorOff?.classList.toggle('active',!useColor);
  }
  function visualStage(){
    const errors=state.guesses.filter(n=>n!==answer.name).length,n=Math.min(6,errors);
    stage.className=`silhouetteStage stage-${n}${state.done?' revealed':''}${useColor?'':' no-color'}`;
    updateColorMode();
  }
  function renderHistory(){history.innerHTML=state.guesses.length?`<h3>Tentativas</h3><div class="silGuessList">${state.guesses.map(n=>`<span class="silGuess ${n===answer.name?'hit':'miss'}">${n}</span>`).join('')}</div>`:'';attemptEl.textContent=state.guesses.length}
  function finish(){state.done=true;save();stage.classList.add('revealed');q.disabled=go.disabled=true;msg.textContent='';result.classList.remove('hidden');result.innerHTML=`<img src="${silhouetteSrc}" alt="${answer.name}"><div><strong>Você acertou! ${answer.name}</strong><br>Tentativas: ${state.guesses.length}</div>`;visualStage()}
  function restore(){renderHistory();visualStage();if(state.done||state.guesses.includes(answer.name))finish()}
  function suggest(){const z=norm(q.value);if(!z){sugs.style.display='none';return}const m=eligible.filter(c=>!guessed.has(c.name)&&(norm(c.name).split(' ').some(x=>x.startsWith(z))||norm(c.name).startsWith(z)||(c.aliases||[]).some(a=>norm(a).includes(z)))).slice(0,20);sugs.innerHTML=m.map(c=>`<div class="sug" data-n="${c.name.replace(/"/g,'&quot;')}">${c.image?`<img class="sug-photo" src="images/characters/${c.image}" alt="">`:''}<span class="sug-name">${c.name}</span></div>`).join('');sugs.style.display=m.length?'block':'none';sugs.querySelectorAll('.sug').forEach(el=>el.onclick=()=>{q.value=el.dataset.n;sugs.style.display='none';submit()})}
  function submit(){if(state.done)return;const value=q.value.trim(),c=eligible.find(x=>matches(x,value));if(!c){msg.textContent='Escolha um personagem da lista.';return}if(guessed.has(c.name)){msg.textContent='Você já tentou esse personagem.';return}guessed.add(c.name);state.guesses.push(c.name);q.value='';sugs.style.display='none';save();renderHistory();if(c.name===answer.name){finish();return}msg.textContent=`Não é ${c.name}. A imagem ficou um pouco mais nítida.`;visualStage();q.focus()}
  colorOn?.addEventListener('click',()=>{useColor=true;localStorage.setItem(COLOR_STORE,'on');updateColorMode()});
  colorOff?.addEventListener('click',()=>{useColor=false;localStorage.setItem(COLOR_STORE,'off');updateColorMode()});
  q.addEventListener('input',suggest);q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const first=sugs.querySelector('.sug');if(first&&sugs.style.display!=='none')q.value=first.dataset.n;submit()}});go.addEventListener('click',submit);restore();
})();
