const q=document.querySelector("#q"),go=document.querySelector("#go"),sugs=document.querySelector("#sugs"),rows=document.querySelector("#rows"),msg=document.querySelector("#msg"),win=document.querySelector("#win"),wintext=document.querySelector("#wintext");let guessed=new Set(),done=false,sugIndex=-1;const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();function daily(){let d=new Date(),k=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,h=0;for(const c of k)h=((h<<5)-h)+c.charCodeAt(0);const pool=CHARACTERS.filter(x=>x.daily!==false);return pool[Math.abs(h)%pool.length]}const answer=daily();function bounty(n){if(n===0)return"—";if(n>=1e9){let v=Math.floor(n/1e8)/10;return`${Number.isInteger(v)?v.toFixed(0):v.toFixed(1)}B`}if(n>=1e6)return`${Math.floor(n/1e6)}M`;if(n>=1e3)return`${Math.floor(n/1e3)}K`;return String(n)}function height(n){return n>=10?`${n.toFixed(1).replace(".",",")}m`:`${n.toFixed(2).replace(".",",")}m`}function c(v,t){return v===t?"ok":"bad"}function num(v,t,fmt){if(v===0||t===0)return`<div class="cell ${v===t?"ok":"bad"}">${fmt(v)}</div>`;let a=v===t?"":`<span class="arrow">${v<t?"↑":"↓"}</span>`;return`<div class="cell ${v===t?"ok":"bad"}">${fmt(v)}${a}</div>`}function bountyNum(v,t){let a=v===t?"":`<span class="arrow">${v<t?"↑":"↓"}</span>`;return`<div class="cell ${v===t?"ok":"bad"}">${bounty(v)}${a}</div>`}function arcCell(v){let vi=ARC_ORDER.indexOf(v),ti=ARC_ORDER.indexOf(answer.arc),same=v===answer.arc,known=vi>=0&&ti>=0;return`<div class="cell ${same?"ok":"bad"}">${v}${same||!known?"":`<span class="arrow">${vi<ti?"↑":"↓"}</span>`}</div>`}function hakiClass(v,t){const a=v.haki_types||[],b=t.haki_types||[];if(a.length===b.length&&a.every(x=>b.includes(x)))return"ok";if(a.some(x=>b.includes(x)))return"partial";return"bad"}function characterCard(x){const img=x.image?`<img class="character-photo" src="images/characters/${x.image}" alt="${x.name}">`:`<div class="character-placeholder">${x.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>`;return`<div class="cell character-cell">${img}<div class="character-name">${x.name}</div></div>`}function add(x){let r=document.createElement("div");r.className="grid row";r.innerHTML=`${characterCard(x)}<div class="cell ${c(x.gender,answer.gender)}">${x.gender}</div><div class="cell ${c(x.affiliation,answer.affiliation)}">${x.affiliation}</div><div class="cell ${c(x.origin,answer.origin)}">${x.origin}</div><div class="cell ${c(x.fruit,answer.fruit)}">${x.fruit}</div><div class="cell ${hakiClass(x,answer)}">${x.haki}</div>${bountyNum(x.bounty,answer.bounty)}${num(x.height,answer.height,height)}${arcCell(x.arc)}`;rows.prepend(r)}function submit(){if(done)return;let x=CHARACTERS.find(c=>norm(c.name)===norm(q.value.trim()));if(!x){msg.textContent="Escolha um personagem da lista.";return}if(guessed.has(x.name)){msg.textContent="Você já tentou esse personagem.";return}guessed.add(x.name);add(x);q.value="";msg.textContent="";sugs.style.display="none";if(x.name===answer.name){done=true;q.disabled=go.disabled=true;wintext.textContent=`${answer.name} em ${guessed.size} tentativa${guessed.size>1?"s":""}.`;win.classList.remove("hidden")}else q.focus()}function suggest(){let z=norm(q.value.trim());if(!z){sugs.style.display="none";return}let m=CHARACTERS.filter(x=>norm(x.name).startsWith(z)&&!guessed.has(x.name)).slice(0,20);sugIndex=-1;sugs.innerHTML=m.map(x=>`<div class="sug" data-n="${x.name}">${x.image?`<img class="sug-photo" src="images/characters/${x.image}" alt="">`:`<div class="sug-photo sug-placeholder">${x.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>`}<span class="sug-name">${x.name}</span></div>`).join("");sugs.style.display=m.length?"block":"none";document.querySelectorAll(".sug").forEach(e=>e.onclick=()=>{q.value=e.dataset.n;sugs.style.display="none";submit()})}q.oninput=suggest;q.onkeydown=e=>{
  const items=[...sugs.querySelectorAll(".sug")];
  if(e.key==="ArrowDown"&&items.length){
    e.preventDefault();
    sugIndex=(sugIndex+1)%items.length;
    items.forEach((el,i)=>el.classList.toggle("active",i===sugIndex));
    items[sugIndex].scrollIntoView({block:"nearest"});
    return;
  }
  if(e.key==="ArrowUp"&&items.length){
    e.preventDefault();
    sugIndex=(sugIndex<=0?items.length-1:sugIndex-1);
    items.forEach((el,i)=>el.classList.toggle("active",i===sugIndex));
    items[sugIndex].scrollIntoView({block:"nearest"});
    return;
  }
  if(e.key==="Enter"){
    e.preventDefault();
    const chosen=(sugIndex>=0&&items[sugIndex])?items[sugIndex]:items[0];
    if(chosen&&sugs.style.display!=="none"){
      q.value=chosen.dataset.n;
      sugs.style.display="none";
      sugIndex=-1;
      submit();
    }else submit();
  }
};go.onclick=submit;q.focus();