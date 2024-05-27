/* Adding the click effect for the drop down menu*/
/* Targeting the mobile menu */
const menu = document.querySelector('#mobile-menu');
/* Targeting the bullet list and everything in it */
const menuLinks = document.querySelector('.navbar__menu');

/* Makes the website activate the drop down menu when the user clicks */
menu.addEventListener('click', function(){
    /*Essentially we call the is-active functions for the thre bars */
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

