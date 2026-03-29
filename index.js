import{a as y,S as h,i as l}from"./assets/vendor-C2ySes1p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const L=y.create({baseURL:"https://pixabay.com/api/",params:{key:"55176910-b129664d9c533e9cf4d6ff537",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}}),f=async(t,e)=>{try{return(await L.get("",{params:{q:t,page:e}})).data}catch(a){throw console.error(a),a}},p=t=>{const e=document.querySelector(".gallery");if(!e)return;const a=t.map(s=>`<li class = "gallery-item">
         <a class="gallery-link" href="${s.largeImageURL}">
           <img
      class="gallery-image"
      src="${s.webformatURL}"
      alt="${s.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${s.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${s.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${s.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${s.downloads}</span>
  </li>
        </ul> </li>`).join("");e.insertAdjacentHTML("beforeend",a),v.refresh()},v=new h(".gallery a",{captionsData:"alt",captionDelay:250}),b=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},g=()=>{document.querySelector(".loader").classList.add("is-visible")},c=()=>{document.querySelector(".loader").classList.remove("is-visible")},w=()=>{document.querySelector(".load-more").classList.add("is-visible")},d=()=>{document.querySelector(".load-more").classList.remove("is-visible")},m=document.querySelector("form"),R=document.querySelector(".load-more");let n,i;m.addEventListener("submit",async t=>{if(t.preventDefault(),n=t.currentTarget.elements["search-text"].value.trim(),n!==""){i=1,m.reset(),b(),d(),g();try{const e=await f(n,i);if(c(),e.hits.length===0)return l.error({message:`Sorry, there are no images matching your search ${n}. Please try again!`,messageColor:"white",position:"topRight"});p(e.hits),w()}catch{return c(),d(),l.error({message:"ERROR",messageColor:"red",position:"topRight"})}}});R.addEventListener("click",async t=>{t.preventDefault(),i+=1,g();try{const e=await f(n,i);c(),p(e.hits),q();let a=e.totalHits;if(i*15>=a)return d(),l.error({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",position:"topLeft"})}catch{return c(),d(),l.error({message:"ERROR",messageColor:"red",position:"topRight"})}});function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:e*2})}
//# sourceMappingURL=index.js.map
