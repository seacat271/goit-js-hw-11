export default class PixabayGallery {
    constructor() {
        this.galleryQuery = "";
        this.page = 1;
    }
    onFetchImages(){
        const BASE_URL = "https://pixabay.com/api/"
        const API_KEY = "29127762-27ecb80fc89c6fc72c273a026"
        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.galleryQuery}&per_page=40&page=${this.page}`)
        .then(response => {
            if(response.ok) {
                this.page += 1;
                return response.json()
            }
        }).catch(console.log)
    }

    get query() {
        return this.galleryQuery
    }

    set query (newQ){
        this.galleryQuery = newQ;
    }

    resetPage () {
        this.page = 1;
    }

}