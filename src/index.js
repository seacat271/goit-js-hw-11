
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
const axios = require('axios');
import refs from "./js-modules/reference";
// import onFetchImages from "./js-modules/onFetch";
import {makeGalleryMarkup, resetHTML, addMoreLoad} from "./js-modules/renderMarkup";
import PixabayGallery from "./js-modules/APIGallery"

const pixabayGallery = new PixabayGallery()
refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault()
    resetHTML();
    pixabayGallery.query = event.currentTarget.searchQuery.value;

    pixabayGallery.onFetchImages().then(data => {
        console.log(data.hits)
        makeGalleryMarkup(data.hits)
        if(refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.remove("hidden");
     
    }).catch(console.log)
}

refs.loadMoreBtn.addEventListener("click", onClickLoadMoreBtn);

function onClickLoadMoreBtn (event) {

    pixabayGallery.onFetchImages().then(data => {
        addMoreLoad(data.hits)

    }).catch(console.log)
}


