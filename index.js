import{a as h,S as L,i}from"./assets/vendor-C2ySes1p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const v=h.create({baseURL:"https://pixabay.com/api/",params:{key:"55176910-b129664d9c533e9cf4d6ff537",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}}),m=async(t,e)=>{try{return(await v.get("",{params:{q:t,page:e}})).data}catch(a){throw console.error(a),a}},p=t=>{const e=document.querySelector(".gallery");if(!e)return;const a=t.map(o=>`<li class = "gallery-item">
         <a class="gallery-link" href="${o.largeImageURL}">
           <img
      class="gallery-image"
      src="${o.webformatURL}"
      alt="${o.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${o.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${o.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${o.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${o.downloads}</span>
  </li>
        </ul> </li>`).join("");e.insertAdjacentHTML("beforeend",a),b.refresh()},b=new L(".gallery a",{captionsData:"alt",captionDelay:250}),w=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},g=()=>{document.querySelector(".loader").classList.add("is-visible")},d=()=>{document.querySelector(".loader").classList.remove("is-visible")},y=()=>{document.querySelector(".load-more").classList.add("is-visible")},l=()=>{document.querySelector(".load-more").classList.remove("is-visible")},f=document.querySelector("form"),R=document.querySelector(".load-more");let n,c;f.addEventListener("submit",async t=>{if(t.preventDefault(),n=t.currentTarget.elements["search-text"].value.trim(),n!==""){c=1,f.reset(),w(),l(),g();try{const e=await m(n,c);if(d(),e.hits.length===0)return i.error({message:`Sorry, there are no images matching your search ${n}. Please try again!`,messageColor:"white",position:"topRight"});p(e.hits),e.totalHits>15?y():i.error({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topLeft"})}catch{return d(),l(),i.error({message:"ERROR",messageColor:"red",position:"topRight"})}}});R.addEventListener("click",async t=>{t.preventDefault(),c+=1,l(),g();try{const e=await m(n,c);d(),p(e.hits),q();let a=e.totalHits;if(c*15>=a)return l(),i.error({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topLeft"});y()}catch{return d(),l(),i.error({message:"ERROR",messageColor:"red",position:"topRight"})}});function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:e*2})}
//# sourceMappingURL=index.js.map
