import refs from "./js-modules/reference";
import {makeGalleryMarkup, lazyLoadLibraryAdd} from "./js-modules/renderMarkup";
import PixabayGallery from "./js-modules/APIGallery"
import {showEmptyMessage, showEndedMessage, showTotalMessage, showErrorMessage} from "./js-modules/messages"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

lazyLoadLibraryAdd()

const imageGallery = new SimpleLightbox('.gallery a', {
    captionsData : "alt",
    captionDelay : 250,
});

const pixabayGallery = new PixabayGallery()
refs.form.addEventListener("submit", onSubmitForm);

async function onSubmitForm(event) {
    event.preventDefault()
    if(!refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.add("hidden");
    pixabayGallery.query = event.currentTarget.searchQuery.value;
    pixabayGallery.resetPage();
    try {
        const data = await pixabayGallery.getFetchImages()
        refs.form.firstElementChild.focus()
        resetHTML()
            if (data.hits.length !== 0) {
                showTotalMessage(data.totalHits)
                softRenderedMarkup(data.hits, 0.3)
                if(refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.remove("hidden");
                if ((pixabayGallery.page - 1) === Math.ceil(data.totalHits / pixabayGallery.perPage)) onloadLastImage();
            } 
            else {
                showEmptyMessage()}
    } catch {
        showErrorMessage()
        return data = {};
    }
}

refs.loadMoreBtn.addEventListener("click", onClickLoadMoreBtn);

async function onClickLoadMoreBtn (event) {
    try {
        const data = await pixabayGallery.getFetchImages()      
        softRenderedMarkup (data.hits, 2)
    if ((pixabayGallery.page - 1) === Math.ceil(data.totalHits / pixabayGallery.perPage)) onloadLastImage();
    } catch {
        showErrorMessage()
        return data = {};
    }
} 

function resetHTML () {
    refs.gallery.innerHTML = "";
}

function smoothyScroll (distance) {
    const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * distance,
        behavior: "smooth",
  });
}

function softRenderedMarkup (data, distance) {
    makeGalleryMarkup(data);
    imageGallery.refresh();
    smoothyScroll (distance);
}

function onloadLastImage () {
    showEndedMessage();
    if(!refs.loadMoreBtn.classList.contains("hidden")) refs.loadMoreBtn.classList.add("hidden");
}
