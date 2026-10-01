(()=>{
  const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
  const SHEET='/assets/oman-landmarks.webp?v=real2';
  const css=document.createElement('style');
  css.textContent=`
    .iam-real-assets .screen{position:relative!important;isolation:isolate!important;background:linear-gradient(180deg,rgba(5,9,31,.20),rgba(5,9,31,.76) 72%,#050819)!important}
    .iam-real-assets .screen>.oman-art{z-index:0!important;pointer-events:none!important;filter:saturate(1.08) contrast(1.04) brightness(.88) drop-shadow(0 0 24px rgba(246,195,91,.30))!important}
    .iam-real-assets .screen>*:not(.oman-art){position:relative;z-index:2}
    .iam-real-assets .floating-trophy{overflow:hidden!important;border:0!important;background:transparent!important;box-shadow:none!important}
    .iam-real-assets .floating-trophy>.oman-art{z-index:1!important;width:100%!important;height:100%!important;border:0!important;background-color:transparent!important}
    .iam-real-assets .mode-card{overflow:hidden!important}
    .iam-real-assets .mode-card>.oman-card-art{position:absolute!important;z-index:0!important;top:0!important;right:0!important;width:48%!important;height:100%!important;opacity:.78!important;filter:saturate(1.12) brightness(.9) drop-shadow(0 0 16px rgba(255,195,91,.35))!important}
    .iam-real-assets .mode-card>*:not(.oman-card-art){position:relative!important;z-index:2!important}
    @media(max-width:760px){
      .iam-real-assets #homeScreen>.home-landmarks{background-size:auto 72%!important;background-position:center 8%!important;opacity:.62!important}
      .iam-real-assets .hero{min-height:610px!important;padding-top:280px!important;justify-content:flex-end!important}
      .iam-real-assets .floating-trophy{top:18px!important;height:280px!important;width:min(360px,94vw)!important}
      .iam-real-assets .mode-grid{margin-top:4px!important}
      .iam-real-assets .mode-card{min-height:190px!important;padding:88px 22px 24px!important}
      .iam-real-assets .mode-card>.oman-card-art{width:58%!important;height:100%!important;opacity:.82!important}
    }
  `;
  document.head.appendChild(css);
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
    document.documentElement.dataset.omanAssets='real2';
  }
  document.title='أنا عُماني';document.body.classList.add('iam-clean','iam-real-assets');if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
