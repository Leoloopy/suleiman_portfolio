let burgerNav = document.getElementById('burger-nav')
let navLinks = document.getElementById('nav-links')
const mediaQuery = window.matchMedia('(min-width: 650px)')


burgerNav.addEventListener('click' , openNav)
navLinks.addEventListener('click' , closeNav)

function openNav() {
    burgerNav.style.display ="none"
    navLinks.style.height = "100%"
}

function closeNav() {
       navLinks.style.height = '0%'
       mediaQuery.matches  ?  burgerNav.style.display = 'none'  : burgerNav.style.display = 'block' ;
}


let scrollPos;
const serviceContainers = document.querySelectorAll('.services_containers')
const serviceContainersHeight = serviceContainers.offSetHeight


window.addEventListener('scroll' , addScrollEffect)

function addScrollEffect(){
    scrollPos = window.scrollY
    scrollPos >= 500 ? serviceContainers.forEach(item => item.classList.add('scrollEffects')) :   
    serviceContainers.forEach(item => item.classList.remove('scrollEffects')) ;
}


