(()=>{
  const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
  const A={sahwa:'/assets/sahwa.webp?v=clean2',municipality:'/assets/municipality.webp?v=clean2',opera:'/assets/opera.webp?v=clean2',riyam:'/assets/riyam.webp?v=clean2'};
  const make=(type,cls='')=>{const i=document.createElement('img');i.src=A[type];i.alt='';i.className=`oman-art ${type} ${cls}`.trim();i.decoding='async';i.draggable=false;return i};
  function add(sel,type,cls,style={}){const h=q(sel);if(!h||h.querySelector('.'+cls))return;const i=make(type,cls);Object.assign(i.style,style);h.prepend(i)}
  function setup(){
    qa('.floating-trophy').forEach(h=>{h.innerHTML='';h.appendChild(make('sahwa','hero-sahwa'))});
    add('#homeScreen','municipality','home-municipality',{left:'50%',bottom:'-3%',width:'112%',transform:'translateX(-50%)',opacity:'.42'});add('#homeScreen','riyam','home-riyam',{right:'-7%',top:'12%',width:'31%',opacity:'.56'});
    add('#hostCreateScreen','municipality','create-municipality',{left:'50%',bottom:'-5%',width:'118%',transform:'translateX(-50%)',opacity:'.82'});add('#hostCreateScreen','sahwa','create-sahwa',{left:'50%',top:'0',width:'31%',transform:'translateX(-50%)'});
    add('#joinScreen','opera','join-opera',{left:'-12%',bottom:'-4%',width:'86%',opacity:'.95'});add('#joinScreen','sahwa','join-sahwa',{left:'36%',top:'0',width:'31%'});add('#joinScreen','riyam','join-riyam',{right:'-5%',top:'4%',width:'26%',opacity:'.84'});
    add('#displayJoinScreen','riyam','displayjoin-riyam',{left:'-8%',bottom:'0',width:'54%',opacity:'.9'});add('#displayJoinScreen','sahwa','displayjoin-sahwa',{right:'3%',top:'3%',width:'31%',opacity:'.92'});
    add('#hostLobbyScreen','municipality','lobby-municipality',{left:'50%',bottom:'-14%',width:'96%',transform:'translateX(-50%)',opacity:'.4'});add('#playerLobbyScreen','opera','player-opera',{left:'-8%',bottom:'-13%',width:'92%',opacity:'.48'});
    add('#questionScreen','riyam','question-riyam',{left:'-10%',bottom:'1%',width:'46%',opacity:'.92'});add('#questionScreen','opera','question-opera',{left:'29%',bottom:'-12%',width:'62%',opacity:'.74'});add('#questionScreen','sahwa','question-sahwa',{right:'-1%',top:'2%',width:'21%',opacity:'.9'});
    add('#resultScreen','municipality','result-municipality',{left:'-8%',bottom:'-11%',width:'60%',opacity:'.7'});add('#resultScreen','opera','result-opera',{right:'-9%',bottom:'-12%',width:'60%',opacity:'.66'});add('#resultScreen','sahwa','result-sahwa',{left:'50%',top:'0',width:'23%',transform:'translateX(-50%)'});
    add('#finalScreen','municipality','final-municipality',{left:'-6%',bottom:'-8%',width:'62%',opacity:'.76'});add('#finalScreen','opera','final-opera',{right:'-8%',bottom:'-9%',width:'60%',opacity:'.72'});add('#finalScreen','sahwa','final-sahwa',{left:'50%',top:'0',width:'26%',transform:'translateX(-50%)'});add('#finalScreen','riyam','final-riyam',{right:'-3%',top:'8%',width:'22%',opacity:'.72'});
    add('#displayScreen','riyam','display-riyam',{left:'-10%',bottom:'1%',width:'44%',opacity:'.9'});add('#displayScreen','opera','display-opera',{left:'31%',bottom:'-11%',width:'60%',opacity:'.7'});add('#displayScreen','sahwa','display-sahwa',{right:'0',top:'1%',width:'20%',opacity:'.9'});
    [['.host-card','municipality'],['.player-card','opera'],['.display-card','riyam']].forEach(([s,t])=>{const h=q(s);if(h&&!h.querySelector('.oman-card-art'))h.prepend(make(t,'oman-card-art'))});
    document.documentElement.dataset.omanAssets='ready';
  }
  document.title='أنا عُماني';document.body.classList.add('iam-clean');if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
