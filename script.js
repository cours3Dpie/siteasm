const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      dots: true,
      prevArrow: false,
      nextArrow: false
    });
  });