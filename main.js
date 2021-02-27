 
 
 /*navbar*/
const navbar = document.querySelector('.navbar');
const navMain = document.querySelector('.nav');
const li = document.querySelectorAll('.nav li a');
const title = document.querySelector('.title');
let arr;

navMain.addEventListener('mouseenter',function(e){
    navbar.classList.add('background-white')
    li.forEach(function(current){
        current.classList.add('black')
    })
});
navMain.addEventListener('mouseleave',function(e){
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
    line2.classList.toggle('none');
    line1.classList.toggle('rotate-1');
    line3.classList.toggle('rotate-3');
    containerSecond.classList.toggle('scale');
})


/*carousel*/

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nav = document.querySelector('.carousel-nav');
const navbutton = Array.from(nav.children);

const slidesize = slides[0].getBoundingClientRect().width; //  nchoufou l width w height w hajet okhra men screen ma7toutin fo object

// bech n7ottou slides next to each other

slides[0].style.left = 0;
slides[1].style.left = slidesize*1 +'px';
slides[2].style.left = slidesize*2 +'px';
slides[3].style.left = slidesize*3 +'px';

const movetoslide = (track, currentslide, targetslide)=>{
    track.style.transform = 'translateX(-'+targetslide.style.left;
    currentslide.classList.remove('current');
    targetslide.classList.add('current');
}




nav.addEventListener('click', e =>{
    //console.log(e.target.closest('button'));
    const targetbutton = e.target.closest('button');

    if(!targetbutton) return;

    const currentslide = track.querySelector('.current');
    const currentbutton = nav.querySelector('.current');
    const targetindex = navbutton.findIndex(navbutton => navbutton === targetbutton);
    const targetslide = slides[targetindex];
    movetoslide(track, currentslide, targetslide);

    currentbutton.classList.remove('current');
    targetbutton.classList.add('current');
});
