//Toggle Menu List
const menu = document.querySelector('#menu-bar');
const navigator = document.querySelector('#navigator');

const toggleList = () => {
    if(navigator.style.display === "block") {
        navigator.style.display = "none"
    }
    else {
        navigator.style.display = "block"
    }
}
menu.addEventListener('click', toggleList);

//Animation gsap
const tl = gsap.timeline({defaults: {duration: .7, opacity: 0}});
tl
.from('.download-file', {stagger: "2", x: "-100%"})
.from('.logo-name', {stagger: "2", x: "100%"})
.from('.profession', {y: "-100%"})
.from('.title-about', {y: "100%"})
.from('.content-about', {y: "100%"})
.from('.profile-image', {x: "-100%"}) 
.from('.info', {y: "-100%"})




