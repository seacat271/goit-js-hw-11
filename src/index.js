
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const axios = require('axios');
import refs from "./js-modules/reference";

import makeGalleryMarkup from "./js-modules/renderMarkup";
import PixabayGallery from "./js-modules/APIGallery"
import {showEmptyMessage, showEndedMessage} from "./js-modules/messages"


let imageGallery = new SimpleLightbox(".gallery a", {
    captionsData : "alt",
    captionDelay : 250,
});

const pixabayGallery = new PixabayGallery()
refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault()
    if(!refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.add("hidden");

    pixabayGallery.query = event.currentTarget.searchQuery.value;

    pixabayGallery.onFetchImages().then(data => {
        refs.form.firstElementChild.focus()
        pixabayGallery.resetPage();
        resetHTML()
    if (data.hits.length !== 0) {
   
        makeGalleryMarkup(data.hits)
        if(refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.remove("hidden");

    } 
    else {
        showEmptyMessage()}
    }).catch(console.log)
}

refs.loadMoreBtn.addEventListener("click", onClickLoadMoreBtn);

function onClickLoadMoreBtn (event) {
    pixabayGallery.onFetchImages().then(data => {
    makeGalleryMarkup(data.hits)
    }).catch(console.log)
}

function resetHTML () {
    refs.gallery.innerHTML = "";
}




