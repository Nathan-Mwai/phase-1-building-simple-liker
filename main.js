// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.querySelector(`.like-glyph`)
const errorModal = document.querySelector('#modal');
like.addEventListener(`click`, () => {
  mimicServerCall()
  .then( () => {
    like.classList.add(`activated-heart`)
  })
  .catch( error => { 
    console.error(`Error:`, error);
    const hidden = document.querySelector(`h2`)
    hidden.classList.remove(`hidden`);
    const errorMessage = error.message
    const errorContent = document.querySelector(`#modal-message`);
    errorContent.textContent = `Error: ${errorMessage}`

    setTimeout(() => {
    hidden.classList.add(`hidden`);
    errorContent.textContent = ``
    }, 3000)
  })
})
const unlike = like;
unlike.addEventListener(`click`, () => {
  mimicServerCall()
  .then(()=>{
    unlike.classList.remove(`activated-heart`)
  })
})
console.log(like);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
