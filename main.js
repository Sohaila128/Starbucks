
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=() => {
    navbar.classList.toggle('active')
}
window.onscroll =() => {
        //  menu.classList.remove('fa-solid');
         navbar.classList.remove('active');
     }








