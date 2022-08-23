import refs from "./reference";
export {makeGalleryMarkup, lazyLoadLibraryAdd}
function makeGalleryMarkup (data) {
let markup = "";
data.forEach(({webformatURL, largeImageURL, tags, likes, comments, downloads, views}) => {
 
    markup += `<a href=${largeImageURL}>
    <div class="photo-card">
    <img class="lazyload" ${lazyLoadMarkupFixed(webformatURL)} alt="${tags}" loading="lazy"/>
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

function lazyLoadMarkupFixed (url) {
    if ("loading" in HTMLImageElement.prototype) return `src="${url}"`
return `data-src="${url}"`

}

function lazyLoadLibraryAdd () {
    if (!"loading" in HTMLImageElement.prototype) {
        const scriptLazyLib = document.createElement("script");
        scriptLazyLib.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
        scriptLazyLib.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        scriptLazyLib.crossOrigin = "anonymous";
        scriptLazyLib.referrerPolicy = "no-referrer";
        refs.body.insertAdjacentElement("beforeend", scriptLazyLib)
    }

}






