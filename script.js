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


let fullName = document.getElementById('fullName')
let contact = document.getElementById('contact-address')
// let jobTitle = document.getElementById('jobtitle')
let message = document.getElementById('msg')
let submit = document.getElementById('submit')

function validate() {
submit.addEventListener('click' , (e) => {
    e.preventDefault();
    
if (fullName.value == "" || contact.value == "" || message.value == "") {
    alert('fill in the required fields')
    fullName.style.border ="1px solid red"
    contact.style.border ="1px solid red"
    message.style.borderColor ="red"
} 
else {
    sendMail(fullName.value , contact.value, message.value)
    alert('message sent')
    fullName.value = ""
    contact.value = ""
    message.value = ""
    fullName.style.border ="none"
    contact.style.border ="none"
    message.style.border ="none"
}
})
}
validate();

function sendMail(name ,email, msg) {
    emailjs.send("service_5qfgava","template_a80ilkm",{
        from_name: email,
        to_name: name,
        message: msg,
});
}

