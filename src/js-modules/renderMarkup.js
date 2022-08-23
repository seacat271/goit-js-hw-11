import refs from "./reference";
export default function makeGalleryMarkup (data) {
let markup = "";
data.forEach(({webformatURL, largeImageURL, tags, likes, comments, downloads, views}) => {
    markup += `<a href=${largeImageURL}>
    <div class="photo-card">
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
  </div>
  </a>`
})

refs.gallery.insertAdjacentHTML("beforeend", markup)
}




