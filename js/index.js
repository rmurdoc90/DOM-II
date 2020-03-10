// Your code goes here
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)

// <----------------Mouse Over------------------------->

let mouseHover = document.querySelector('a');
mouseHover.addEventListener('mouseover', (event) =>{
  event.target.style.color = 'red';

  setTimeout(function(){
    event.target.style.color='black'
  },500)
})

// <----------------Mouse Over------------------------->

// <----------------Keydown------------------------->

document.addEventListener('keydown', logKey);

function logKey(e){
  console.log(e.key)
}

// <----------------Keydown------------------------->