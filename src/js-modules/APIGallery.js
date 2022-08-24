import axios from "axios";





export default class PixabayGallery {
    constructor() {
        this.galleryQuery = "";
        this.page = 1;

    }

    requestConfig = {
        params: {
        key: "29127762-27ecb80fc89c6fc72c273a026",
        per_page: 40,
    }}

    async getFetchImages(){
        const BASE_URL = "https://pixabay.com/api/"
       
        try {
            const response = await axios.get(`${BASE_URL}?page=${this.page}&q=${this.galleryQuery}`, this.requestConfig)
            if(response.status === 200) this.page += 1;
            return response.data
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