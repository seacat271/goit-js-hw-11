export default function onFetchImages(word){
    const BASE_URL = "https://pixabay.com/api/"
    if(word.trim() === "") return;
    return fetch(`${BASE_URL}?key=29127762-27ecb80fc89c6fc72c273a026&q=${word}`)
    .then(response => {
        if(response.ok) return response.json()
    }
       
    ).catch(console.log)
}