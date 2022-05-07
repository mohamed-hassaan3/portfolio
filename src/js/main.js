// LOADER
const loader = document.querySelector('.loader')
window.addEventListener('load', () => {
  loader.style.display = "none"
  // document.getElementsByTagName('body')[0].style.overflowY = "hidden"
})

// CAROUSEL CERTIFICATE
const buttons = document.querySelectorAll("[data-btn]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.btn === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if(newIndex < 0) newIndex = slides.children.length -1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//Toggle Menu List
const menu = document.querySelector('#menu-bar');
const navigator = document.querySelector('#navigator');
const bar = document.querySelector('.bar')

const toggleList = () => {
    if(navigator.style.display === "block") {
      menu.classList.remove('change')
        navigator.style.display = "none"
    }
    else {
        menu.classList.add('change')
        navigator.style.display = "block"
    }
}
menu.addEventListener('click', toggleList);


//Animation gsap
//HOME PAGE
const tl = gsap.timeline({
    defaults: {
        duration: .5, opacity: 0
    }
});
tl
.from('.download-file', {stagger: "2", x: "-100%"})
.from('.menu-bar', {x: "100%"})
.from('.logo-name', {stagger: "2", x: "100%"})
.from('.navigator', {x: "100%"})
.from('.title-about', {y: "100%"})
.from('.content-about', {y: "100%"})
.from('.info', {y: "-100%"})
.from('.profile-image', {x: "-100%", ease: 'slow', duration: 1})
.from('.profession', {z: "0%"})

//PROJECTS PAGE
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create ({
    trigger: text,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'bottom 20%',
    //markers: true
  })
});
const revealImg = gsap.utils.toArray('.src');
revealImg.forEach((img, i) => {
  ScrollTrigger.create ({
    trigger: img,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'bottom 20%',
    //markers: true
  })
});

//RESUME Section
/**gsap.registerPlugin(ScrollTrigger);

const panel = gsap.utils.toArray('.panel')
panel.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
    pin: true,
    pinSpacing: false
  })
})

ScrollTrigger.create({
  snap: 1 / 6
}) */
