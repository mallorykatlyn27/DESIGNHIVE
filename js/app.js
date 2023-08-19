var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])




// stickynavbar 
const navBar = document.querySelector('header');

  function toggleStickyNav() {
    if (window.scrollY > navBar.offsetTop) {
      navBar.classList.add('sticky');
      document.body.classList.add('sticky-nav-active');
    } else {
      navBar.classList.remove('sticky');
      document.body.classList.remove('sticky-nav-active');
    }
  }

 
  window.addEventListener('scroll', toggleStickyNav);