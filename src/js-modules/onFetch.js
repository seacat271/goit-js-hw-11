const axios = require('axios');
// const options = {
//     headers: {"key": '29127762-27ecb80fc89c6fc72c273a026'},
//   };

  const config = {
    // per_page: 40,
    // q: "cat"
  }



export default function onFetchImages(word){
    
    if(word.trim() === "") return;
    return fetch(`https://pixabay.com/api/?key=29127762-27ecb80fc89c6fc72c273a026&q=${word}&per_page=40&page=1`)
    .then(response => {
        if(response.ok) return response.json()
    }
       
    ).catch(console.log)
}

// const options = {
//     key: "29127762-27ecb80fc89c6fc72c273a026",

// }

const BASE_URL = "https://pixabay.com/api/"