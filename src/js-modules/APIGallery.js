export default class PixabayGallery {
    constructor() {
        this.galleryQuery = "";
        this.page = 1;
    }
    onFetchImages(){
    
        if(this.galleryQuery.trim() === "") return;
        return fetch(`https://pixabay.com/api/?key=29127762-27ecb80fc89c6fc72c273a026&q=${this.galleryQuery}&per_page=5&page=${this.page}`)
        .then(response => {
            if(response.ok) return response.json()
            this.page += 1;
        }
           
        ).catch(console.log)
    }
    get query() {
        return this.galleryQuery
    }
    set query (newQ){
        this.galleryQuery = newQ;
    }
}