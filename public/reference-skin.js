(()=>{
  document.body.classList.add('reference-skin');
  document.documentElement.dataset.visualIdentity='approved-reference-ref1';
  async function loadHome(){
    try{
      const t=(await (await fetch('/assets/home-mobile-ref1.b64?v=ref1',{cache:'no-store'})).text()).replace(/\s+/g,'');
      const bin=atob(t), bytes=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
      const url=URL.createObjectURL(new Blob([bytes],{type:'image/jpeg'}));
      document.documentElement.style.setProperty('--home-ref',`url("${url}")`);
      document.documentElement.dataset.referenceHome='ready';
    }catch(e){console.error('reference home failed',e);document.documentElement.dataset.referenceHome='error';}
  }
  loadHome();
})();
