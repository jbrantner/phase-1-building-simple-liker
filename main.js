// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here
// Hides ERROR message
const error = document.getElementById('modal');
const hide = () => {error.className = "hidden"};
const callServer = serverCall(mimicServerCall)


function setHidden() {
  return setTimeout(hide, 3000);
}





// fetch server
function serverCall(url) {
  fetch(url)
  .then(() => console.log('did this work?'))
  .then((response) => response.json())
  .catch((err) => {
    const text = document.getElementById("modal").querySelector('h2');
    text.textContent = err
    const modalDiv = document.getElementById('modal');
    modalDiv.removeAttribute('hidden')
    setHidden();
  })
}




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
