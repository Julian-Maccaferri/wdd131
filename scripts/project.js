document.addEventListener('DOMContentLoaded', function () {

    // Make hamburguer menu function
    const hamburger = document.getElementById('hamburger');
    const container = document.querySelector('header');
  
    hamburger.addEventListener('click', function () {
      container.classList.toggle('menu-active');
      hamburger.classList.toggle('active');    
    });

});