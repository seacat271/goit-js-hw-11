import refs from "./reference";
import photoCardTemplate from "../templates/photoCard.hbs"
import photoCardTemplateWithoutLazyLoad from "../templates/photoCardWithoutLazyLoad.hbs"
export default function makeGalleryMarkup (data) {
    refs.gallery.insertAdjacentHTML("beforeend", lazyLoadMarkupTemplate(data))
}


function lazyLoadMarkupTemplate (data) {
    if (!"loading" in HTMLImageElement.prototype) {
        const scriptLazyLib = document.createElement("script");
        scriptLazyLib.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
        scriptLazyLib.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        scriptLazyLib.crossOrigin = "anonymous";
        scriptLazyLib.referrerPolicy = "no-referrer";
        refs.body.insertAdjacentElement("beforeend", scriptLazyLib)
        return photoCardTemplateWithoutLazyLoad (data)
    }
    return photoCardTemplate(data)
}






