
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
const axios = require('axios');
import refs from "./js-modules/reference";
import onFetchImages from "./js-modules/onFetch";





refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault()
    onFetchImages(event.currentTarget.searchQuery.value).then(data => {
        console.log(data)
    }).catch(console.log)
}



