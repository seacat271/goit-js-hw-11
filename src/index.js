
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
const axios = require('axios');
import refs from "./js-modules/reference";
import onFetchImages from "./js-modules/onFetch";
import photoCardTemplate from "./templates/photoCardTemplate.hbs"





refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault()
    onFetchImages(event.currentTarget.searchQuery.value).then(data => {
        markupPhotoCard(data.hits)
        console.log(data.hits)
    }).catch(console.log)
}


function markupPhotoCard (hits) {
    refs.gallery.insertAdjacentHTML("beforeend", photoCardTemplate(hits))
}


