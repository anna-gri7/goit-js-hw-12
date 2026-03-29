import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 



import { getImagesByQuery } from './js/pixabay-api'
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { showLoadMoreButton } from "./js/render-functions";
import { hideLoadMoreButton } from "./js/render-functions";


const findForm = document.querySelector('form');




findForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const query = e.currentTarget.elements['search-text'].value.trim();
    if (query === "") {
        return;
    }
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    getImagesByQuery(query).then(res => {
        hideLoader();
        if (res.hits.length === 0) {
            return iziToast.error({
        message: `Sorry, there are no images matching your search ${query}. Please try again!`, messageColor: 'white',
            position: 'topRight',
            })
        } else {
            createGallery(res.hits);
            showLoadMoreButton();
        }
    }).catch(error => {
        hideLoader();
        hideLoadMoreButton();
        return iziToast.error({
        message: `ERROR`, messageColor: 'red',
            position: 'topRight',
            })
    })
}
)