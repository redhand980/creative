/*-----------------------BURGER--------------------------------------*/
const menuBody = document.getElementById('burger-menu');
const iconMenu = document.getElementById('burger-icon');
function openMenu() {
    if (iconMenu) {
        iconMenu.classList.toggle('icon-active');
        menuBody.classList.toggle('menu-active');
        document.body.classList.toggle('scroll-lock');
    }    
}
/*-------------------------SCROLL- FUNCTION---------------------------*/

window.onscroll = () => scrlFunc();
function scrlFunc() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('scroll-id').classList.add('scroll-class');
    } else {
        document.getElementById('scroll-id').classList.remove('scroll-class');
    }
}
/*----------------------------------------------------------------------------*/
/*const el = document.querySelector(".item-gallery__content");

function addFunc() {
    if(window.innerWidth < 768) {
        el.classList.add('touch');
    } else {
    el.classList.remove('touch');
    }
}*/