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
const findBtnLoadMore = document.querySelector('.load-more');

let query;
let page;


findForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    query = e.currentTarget.elements['search-text'].value.trim();
    if (query === "") {
        return;
    }
    page = 1;
    findForm.reset();
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
       const res = await getImagesByQuery(query, page)
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
        }catch (error) {
        hideLoader();
        hideLoadMoreButton();
        return iziToast.error({
            message: `ERROR`, messageColor: 'red',
            position: 'topRight',
        })
    }
});


findBtnLoadMore.addEventListener('click', async (e) => {
    e.preventDefault();
    page += 1;
    showLoader();
    try {
        const res = await getImagesByQuery(query, page)
        hideLoader();
        createGallery(res.hits);

            scrollPage() 

        let totalHits = res.totalHits;
        if (page*15 >= totalHits) {
            hideLoadMoreButton();
            return iziToast.error({
                message: `We're sorry, but you've reached the end of search results.`, messageColor: 'white',
                position: 'topLeft',
            })
        }
        } catch (error) {
            hideLoader();
            hideLoadMoreButton();
            return iziToast.error({
                message: `ERROR`, messageColor: 'red',
                position: 'topRight',
            })
        }
    
    } );

function scrollPage() {
    const elems = document.querySelector('.gallery-item');
    const h = elems.getBoundingClientRect().height;
    window.scrollBy({
        behavior: 'smooth',
        top: h * 2
    })
}

