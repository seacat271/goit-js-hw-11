

import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '500px',
    fontSize: '20px',
    borderRadius: '10px',
    });

export {showEmptyMessage, showEndedMessage, showTotalMessage, showErrorMessage}
     
    function showEmptyMessage() {
        const empty = "Sorry, there are no images matching your search query. Please try again.";
        return Notiflix.Notify.info(empty)
     
    }
    
    function showEndedMessage() {
        const ended = "We're sorry, but you've reached the end of search results.";
        return Notiflix.Notify.info(ended)
    }


    function showTotalMessage(total) {
        const totalMessage = `Hooray! We found ${total} images.`;
        return Notiflix.Notify.success(totalMessage)
    }

    function showErrorMessage(total) {
        const error = "Ooops, something went wrong. Try again";
        return Notiflix.Notify.failure(error)
    }

    


