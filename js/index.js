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

// <-------------------Wheel---------------------->
let scale = 1;
let wheel = document.getElementById('yellow-bus');
wheel.onwheel = zoom;
function zoom(event){
  event.preventDefault();

  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  wheel.style.transform = `scale(${scale})`;
}
// <----------------Wheel------------------------->

// <----------------Drag/Drop------------------------->
var dragged= document.querySelector('a:nth-of-type(2)');
dragged.addEventListener('drag', (event) =>{

});
dragged.addEventListener("dragstart", (event) =>{
  dragged=event.target;
  event.target.style.opacity = .5;
});
dragged.addEventListener('dragend',(event) =>{
  event.target.style.opacity = '';
})
dragged.addEventListener('drop', (event) =>{
  event.preventDefault();
  event.target.style.color = 'black';
});
// <----------------Drag/Drop------------------------->

// <-------------------Load---------------------->

// <-------------------Load---------------------->
