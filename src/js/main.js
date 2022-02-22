'use strict'; 

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu_active');
});

menu.addEventListener('click', function(e) {
    if (e.target.closest('li')) {
        hamburger.classList.remove('hamburger__active');
        menu.classList.remove('menu_active');
    };
});