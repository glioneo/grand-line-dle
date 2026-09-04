const q=document.querySelector("#q"),go=document.querySelector("#go"),sugs=document.querySelector("#sugs"),rows=document.querySelector("#rows"),msg=document.querySelector("#msg"),win=document.querySelector("#win"),wintext=document.querySelector("#wintext");
let guessed=new Set(),done=false,sugIndex=-1;
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

function seededShuffle(list){
  const a=[...list];
  let seed=0x47A1D1E5;
  const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function daily(){
  const pool=seededShuffle(CHARACTERS.filter(x=>x.daily!==false));
  const d=new Date();
  const day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000);
  return pool[day%pool.length];
}
const answer=daily();

function bounty(n){
  if(n===0)return"—";
  if(n>=1e9){let v=Math.floor(n/1e8)/10;return`${Number.isInteger(v)?v.toFixed(0):v.toFixed(1)}B`}
  if(n>=1e6)return`${Math.floor(n/1e6)}M`;
  if(n>=1e3)return`${Math.floor(n/1e3)}K`;
  return String(n)
}
function height(n){return n===0?"—":n>=10?`${n.toFixed(1).replace(".",",")}m`:`${n.toFixed(2).replace(".",",")}m`}
function c(v,t){return v===t?"ok":"bad"}
function num(v,t,fmt){
  if(v===0||t===0)return`<div class="cell ${v===t?"ok":"bad"}">${fmt(v)}</div>`;
  let a=v===t?"":`<span class="arrow">${v<t?"↑":"↓"}</span>`;
  return`<div class="cell ${v===t?"ok":"bad"}">${fmt(v)}${a}</div>`
}
function bountyNum(v,t){
  let a=v===t?"":`<span class="arrow">${v<t?"↑":"↓"}</span>`;
  return`<div class="cell ${v===t?"ok":"bad"}">${bounty(v)}${a}</div>`
}
function arcCell(v){
  let vi=ARC_ORDER.indexOf(v),ti=ARC_ORDER.indexOf(answer.arc),same=v===answer.arc,known=vi>=0&&ti>=0;
  return`<div class="cell ${same?"ok":"bad"}">${v}${same||!known?"":`<span class="arrow">${vi<ti?"↑":"↓"}</span>`}</div>`
}
function hakiClass(v,t){
  const a=v.haki_types||[],b=t.haki_types||[];
  if(a.length===b.length&&a.every(x=>b.includes(x)))return"ok";
  if(a.some(x=>b.includes(x)))return"partial";
  return"bad"
}
function characterCard(x){
  const img=x.image?`<img class="character-photo" src="images/characters/${x.image}" alt="${x.name}">`:`<div class="character-placeholder">${x.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>`;
  return`<div class="cell character-cell">${img}<div class="character-name">${x.name}</div></div>`
}
function add(x){
  let r=document.createElement("div");r.className="grid row";
  r.innerHTML=`${characterCard(x)}<div class="cell ${c(x.gender,answer.gender)}">${x.gender}</div><div class="cell ${c(x.affiliation,answer.affiliation)}">${x.affiliation}</div><div class="cell ${c(x.origin,answer.origin)}">${x.origin}</div><div class="cell ${c(x.fruit,answer.fruit)}">${x.fruit}</div><div class="cell ${hakiClass(x,answer)}">${x.haki}</div>${bountyNum(x.bounty,answer.bounty)}${num(x.height,answer.height,height)}${arcCell(x.arc)}`;
  rows.prepend(r)
}

function dayKey(d=new Date()){return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
const STATS_KEY="gld_stats_v107",GAME_KEY="gld_daily_game_v107";
function defaultStats(){return{wins:0,streak:0,bestStreak:0,lastWin:null,distribution:{"1":0,"2":0,"3":0,"4":0,"5":0,"6+":0}}}
function loadStats(){try{return{...defaultStats(),...JSON.parse(localStorage.getItem(STATS_KEY)||"{}")}}catch{return defaultStats()}}
function saveStats(s){localStorage.setItem(STATS_KEY,JSON.stringify(s))}
function yesterdayKey(){const d=new Date();d.setDate(d.getDate()-1);return dayKey(d)}
function effectiveStreak(s){return s.lastWin&&(s.lastWin===dayKey()||s.lastWin===yesterdayKey())?s.streak:0}
function flagTier(streak){
  if(streak>=101)return"jolly";
  if(streak>=91)return"black";
  if(streak>=81)return"purple";
  if(streak>=71)return"blue-dark";
  if(streak>=61)return"blue-light";
  if(streak>=51)return"green";
  if(streak>=41)return"red";
  if(streak>=31)return"orange";
  if(streak>=21)return"pink";
  if(streak>=11)return"yellow";
  return"white"
}
function updateStats(){
  const s=loadStats(),streak=effectiveStreak(s);
  const flag=document.querySelector("#streakFlag"),num=document.querySelector("#streakCount");
  if(flag){
    const tier=flagTier(streak),img=flag.querySelector(".flagArt"),assetTier=tier==="jolly"?"black":tier;
    flag.dataset.tier=tier;
    if(img)img.src=`images/flags/days-flag-${assetTier}.png`;
  }
  if(num){num.textContent=streak;num.dataset.digits=String(streak).length;}
  const vals={statWins:s.wins,statStreak:streak,statBest:s.bestStreak};
  Object.entries(vals).forEach(([id,v])=>{const el=document.querySelector(`#${id}`);if(el)el.textContent=v});
  const max=Math.max(1,...Object.values(s.distribution||{}));
  ["1","2","3","4","5","6+"].forEach(k=>{const v=(s.distribution||{})[k]||0,id=k==="6+"?"6p":k;const bar=document.querySelector(`#bar${id}`),n=document.querySelector(`#dist${id}`);if(bar)bar.style.width=`${v/max*100}%`;if(n)n.textContent=v});
}
function recordWin(attempts){
  const s=loadStats(),today=dayKey();if(s.lastWin===today)return;
  s.streak=s.lastWin===yesterdayKey()?s.streak+1:1;s.bestStreak=Math.max(s.bestStreak,s.streak);s.lastWin=today;s.wins++;
  const bucket=attempts>=6?"6+":String(attempts);s.distribution={...defaultStats().distribution,...s.distribution};s.distribution[bucket]++;
  saveStats(s);updateStats()
}
function loadGame(){try{const g=JSON.parse(localStorage.getItem(GAME_KEY)||"null");return g&&g.day===dayKey()?g:null}catch{return null}}
function saveGame(won=false){localStorage.setItem(GAME_KEY,JSON.stringify({day:dayKey(),answer:answer.name,guesses:[...guessed],won}))}
function restoreGame(){
  const g=loadGame();if(!g||g.answer!==answer.name)return;
  (g.guesses||[]).forEach(name=>{const x=CHARACTERS.find(c=>c.name===name);if(x){guessed.add(x.name);add(x)}});
  if(g.won){done=true;q.disabled=go.disabled=true;wintext.textContent=`${answer.name} em ${guessed.size} tentativa${guessed.size>1?"s":""}.`;win.classList.remove("hidden")}
}
function matchesInput(x,value){
  const z=norm(value);
  return norm(x.name)===z||(x.aliases||[]).some(a=>norm(a)===z)
}
function submit(){
  if(done)return;
  let x=CHARACTERS.find(c=>matchesInput(c,q.value.trim()));
  if(!x){msg.textContent="Escolha um personagem da lista.";return}
  if(guessed.has(x.name)){msg.textContent="Você já tentou esse personagem.";return}
  guessed.add(x.name);add(x);q.value="";msg.textContent="";sugs.style.display="none";
  if(x.name===answer.name){
    done=true;q.disabled=go.disabled=true;
    wintext.textContent=`${answer.name} em ${guessed.size} tentativa${guessed.size>1?"s":""}.`;
    win.classList.remove("hidden");recordWin(guessed.size);saveGame(true)
  }else{saveGame(false);q.focus()}
}
function startsWithAnyPart(value,z){
  return norm(value).split(/\s+/).some(part=>part.startsWith(z))
}
function suggest(){
  let z=norm(q.value.trim());
  if(!z){sugs.style.display="none";return}
  let m=CHARACTERS.filter(x=>(startsWithAnyPart(x.name,z)||(x.aliases||[]).some(a=>startsWithAnyPart(a,z)))&&!guessed.has(x.name)).slice(0,20);
  sugIndex=-1;
  sugs.innerHTML=m.map(x=>{
    const nameMatch=startsWithAnyPart(x.name,z);
    const alias=(x.aliases||[]).find(a=>startsWithAnyPart(a,z));
    const aliasText=alias&&!nameMatch?` <small>(${alias})</small>`:"";
    return`<div class="sug" data-n="${x.name}">${x.image?`<img class="sug-photo" src="images/characters/${x.image}" alt="">`:`<div class="sug-photo sug-placeholder">${x.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>`}<span class="sug-name">${x.name}${aliasText}</span></div>`
  }).join("");
  sugs.style.display=m.length?"block":"none";
  document.querySelectorAll(".sug").forEach(e=>e.onclick=()=>{q.value=e.dataset.n;sugs.style.display="none";submit()})
}
q.oninput=suggest;
q.onkeydown=e=>{
  const items=[...sugs.querySelectorAll(".sug")];
  if(e.key==="ArrowDown"&&items.length){e.preventDefault();sugIndex=(sugIndex+1)%items.length;items.forEach((el,i)=>el.classList.toggle("active",i===sugIndex));items[sugIndex].scrollIntoView({block:"nearest"});return}
  if(e.key==="ArrowUp"&&items.length){e.preventDefault();sugIndex=(sugIndex<=0?items.length-1:sugIndex-1);items.forEach((el,i)=>el.classList.toggle("active",i===sugIndex));items[sugIndex].scrollIntoView({block:"nearest"});return}
  if(e.key==="Enter"){e.preventDefault();const chosen=(sugIndex>=0&&items[sugIndex])?items[sugIndex]:items[0];if(chosen&&sugs.style.display!=="none"){q.value=chosen.dataset.n;sugs.style.display="none";sugIndex=-1;submit()}else submit()}
};
go.onclick=submit;
restoreGame();
updateStats();
if(!done)q.focus();
