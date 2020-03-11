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
  preventDefault();
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
window.addEventListener('load', (event) =>{
  console.log('page is loaded')
})
// <-------------------Load---------------------->

// <-------------------Focus---------------------->
 document.querySelector('a:nth-of-type(3)').addEventListener('focus',(event) =>{
   console.log(event.type);
 })
// <-------------------Focus---------------------->

// <-------------------Resize---------------------->

window.addEventListener('resize', (event)=>{
  window.innerHeight = '1000px'
  window.innerWidth = '1500px'
});

// <-------------------Resize---------------------->

// <-------------------Scroll---------------------->
let scrollPosition = 0;
window.addEventListener('scroll', function(e){
  scrollPosition = window.scrollY;
  console.log(scrollPosition)
})
// <-------------------Scroll---------------------->

// <-------------------Select---------------------->
function selection(event){
 let log = document.querySelector('.logo-heading')
 let selected = 'FUN BUS 2'
 log.textContent = `${selected}`
}
let input = document.querySelector('h1');
input.addEventListener('select', selection);
console.log(selection())
// <-------------------Select---------------------->

// <-------------------Dblclick---------------------->
let dblClick = document.querySelector('a:nth-of-type(4)');
dblClick.addEventListener('dblclick', function(e){
  dblClick.style.color= 'orange'

  setTimeout(function(){
    dblClick.style.color='black'
  },1000)
});
// <-------------------Dblclick---------------------->

// <-------------------Stop Propogation---------------------->

let clickEvent = document.querySelector('h2');
clickEvent.addEventListener('click', (event) =>{
  console.log(event.path)
  event.stopPropagation();
  console.log(event.target)


})

let clickImg = document.querySelector('.img-content img');
clickImg.addEventListener('click', (event) =>{
  console.log(event.path)
  event.stopPropagation();
  console.log(event.target)

})

// <-------------------Stop Propogation---------------------->