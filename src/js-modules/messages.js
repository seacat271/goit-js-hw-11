

import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '500px',
    fontSize: '20px',
    borderRadius: '10px',
    });

export {showEmptyMessage, showEndedMessage}
     
    function showEmptyMessage() {
        const Empty = "Sorry, there are no images matching your search query. Please try again.";
        return Notiflix.Notify.info(Empty)
     
    }
    
    function showEndedMessage() {
        const Ended = "We're sorry, but you've reached the end of search results.";
        return Notiflix.Notify.info(Ended)
    }
    


