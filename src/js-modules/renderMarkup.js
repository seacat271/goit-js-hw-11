import refs from "./reference";
export {makeGalleryMarkup, resetHTML, addMoreLoad}
function makeGalleryMarkup (data) {
let markup = "";
data.forEach(({webformatURL, tags, likes, comments, downloads, views}) => {
    markup += `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
    <div class="info">
      <p class="info-item">
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments: ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div>`
})

refs.gallery.innerHTML =  markup;
}

function resetHTML () {
    refs.gallery.innerHTML = "";
}

function addMoreLoad (data) {
    let markup = "";
data.forEach(({webformatURL, tags, likes, comments, downloads, views}) => {
    markup += `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
    <div class="info">
      <p class="info-item">
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments: ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div>`
})
    refs.gallery.insertAdjacentHTML("beforeend", markup)
}


