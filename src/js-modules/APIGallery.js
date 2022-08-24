export default class PixabayGallery {
    constructor() {
        this.galleryQuery = "";
        this.page = 1;
    }
    async getFetchImages(){
        const BASE_URL = "https://pixabay.com/api/"
        const API_KEY = "29127762-27ecb80fc89c6fc72c273a026"
        try {
            const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${this.galleryQuery}&per_page=40&page=${this.page}`)
            if(response.ok) this.page += 1;
            const json = response.json()
            return json
        } catch {
            showErrorMessage()
            return json = {};
        }
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