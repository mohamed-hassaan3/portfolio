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
menu.addEventListener('click', toggleList)
