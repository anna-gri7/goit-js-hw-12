import{a as d,S as u,i}from"./assets/vendor-C2ySes1p.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f=d.create({baseURL:"https://pixabay.com/api/",params:{key:"55176910-b129664d9c533e9cf4d6ff537",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}}),p=async(t,s)=>{try{return(await f.get("",{params:{q:t,page:s}})).data}catch(r){throw console.error(r),r}},m=t=>{const s=document.querySelector(".gallery");if(!s)return;const r=t.map(a=>`<li class = "gallery-item">
         <a class="gallery-link" href="${a.largeImageURL}">
           <img
      class="gallery-image"
      src="${a.webformatURL}"
      alt="${a.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${a.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${a.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${a.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${a.downloads}</span>
  </li>
        </ul> </li>`).join("");s.innerHTML=r,g.refresh()},g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},h=()=>{document.querySelector(".loader").classList.add("is-visible")},l=()=>{document.querySelector(".loader").classList.remove("is-visible")},L=()=>{document.querySelector(".load-more").classList.add("is-visible")},c=()=>{document.querySelector(".load-more").classList.remove("is-visible")},v=document.querySelector("form");v.addEventListener("submit",t=>{t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();s!==""&&(y(),c(),h(),p(s).then(r=>{if(l(),r.hits.length===0)return i.error({message:`Sorry, there are no images matching your search ${s}. Please try again!`,messageColor:"white",position:"topRight"});m(r.hits),L()}).catch(r=>(l(),c(),i.error({message:"ERROR",messageColor:"red",position:"topRight"}))))});
//# sourceMappingURL=index.js.map
