(()=>{
  const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
  const SHEET='/assets/oman-landmarks.webp?v=real1';
  function art(cls,pos,size='100% 100%',style={}){const d=document.createElement('div');d.className=`oman-art ${cls}`;d.style.backgroundImage=`url(${SHEET})`;d.style.backgroundRepeat='no-repeat';d.style.backgroundPosition=pos;d.style.backgroundSize=size;Object.assign(d.style,style);return d}
  function add(sel,cls,pos,size,style={}){const h=q(sel);if(!h||h.querySelector('.'+cls))return;h.prepend(art(cls,pos,size,style))}
  function setup(){
    qa('.floating-trophy').forEach(h=>{h.innerHTML='';h.appendChild(art('hero-sahwa','0% 0%','200% 200%',{position:'absolute',inset:'0'}))});
    add('#homeScreen','home-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.62'});
    add('#hostCreateScreen','create-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.64'});
    add('#joinScreen','join-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.64'});
    add('#displayJoinScreen','displayjoin-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.58'});
    add('#hostLobbyScreen','lobby-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.42'});
    add('#playerLobbyScreen','player-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.42'});
    add('#questionScreen','question-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.5'});
    add('#resultScreen','result-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.52'});
    add('#finalScreen','final-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.62'});
    add('#displayScreen','display-landmarks','50% 50%','100% 100%',{position:'absolute',inset:'0',opacity:'.52'});
    [['.host-card','0% 0%'],['.player-card','0% 100%'],['.display-card','100% 100%']].forEach(([s,p])=>{const h=q(s);if(h&&!h.querySelector('.oman-card-art'))h.prepend(art('oman-card-art',p,'200% 200%',{}))});
    document.documentElement.dataset.omanAssets='real';
  }
  document.title='أنا عُماني';document.body.classList.add('iam-clean','iam-real-assets');if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
