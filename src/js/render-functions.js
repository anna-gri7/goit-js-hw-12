// import { serverApi } from "./pixabay-api"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const createGallery = (images) => {
    const findList = document.querySelector('.gallery');
    if (!findList) return;
    
    const addMarkup = images.map(image => {
        return `<li class = "gallery-item">
         <a class="gallery-link" href="${image.largeImageURL}">
           <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${image.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${image.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${image.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${image.downloads}</span>
  </li>
        </ul> </li>`
    
    }).join('');
    findList.innerHTML = addMarkup;
    lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})


export const clearGallery = () => {
    const findList = document.querySelector('.gallery');
    findList.innerHTML = "";
}


export const showLoader = () => {
    const findLoader = document.querySelector('.loader');
    findLoader.classList.add('is-visible');
}

export const hideLoader = () => {
    const findLoader = document.querySelector('.loader');
    findLoader.classList.remove('is-visible');
}

// 12

export const showLoadMoreButton = () => {
    const findLoadMoreButton = document.querySelector('.load-more');
    findLoadMoreButton.classList.add('is-visible');
}

export const hideLoadMoreButton = () => {
    const findLoadMoreButton = document.querySelector('.load-more');
    findLoadMoreButton.classList.remove('is-visible');
}

