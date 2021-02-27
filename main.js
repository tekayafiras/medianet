 
 
 /*navbar*/
const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.nav');
const li = document.querySelectorAll('.nav li a');
const title = document.querySelector('.title');
let arr;

nav.addEventListener('mouseenter',function(e){
    navbar.classList.add('background-white')
    li.forEach(function(current){
        current.classList.add('black')
    })
});
nav.addEventListener('mouseleave',function(e){
    navbar.classList.remove('background-white')
    li.forEach(function(current){
        current.classList.remove('black')
    })
    
})



/*hamburger*/

const hamburger = document.querySelector('.hamburger');
const containerSecond = document.querySelector('.container-second');
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const line = document.querySelectorAll('.line')

hamburger.addEventListener('click',function(e){
    line.forEach(function(current){
        current.classList.toggle('color-black');
    });
    nav.classList.toggle('zindex');
    title.classList.toggle('zindex')
    console.log(nav)
    line2.classList.toggle('none');
    line1.classList.toggle('rotate-1');
    line3.classList.toggle('rotate-3');
    containerSecond.classList.toggle('scale');
})