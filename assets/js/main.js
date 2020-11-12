"use strict";

// scrollDown
const scrollDown = document.querySelector(".scroll-down");

scrollDown.addEventListener("mouseenter", () => {
    scrollDown.style.opacity = 1;
  });
  
scrollDown.addEventListener("mouseleave", () => {
    scrollDown.style.opacity = 0.5;
  });

scrollDown.addEventListener("click", () => {
  scrollIntoView("#about");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth"
  });
}

// navbar 내려오면 bg 클래스 추가
const navbar = document.querySelector("header.section");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-bg");
  } else {
    navbar.classList.remove("navbar-bg");
  }
});

  const toggles = document.querySelectorAll('.toggle');
  const toggleBtn = document.querySelector('.toggle-btn');
  const toggleBtnOn = document.querySelector('header.section');



toggleBtn.addEventListener("click", () => {
      toggleElements();
      toggleLine();
      
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        offElements();
    }
});

function toggleElements() {
    [].forEach.call(toggles, function (toggle) {
        toggle.classList.toggle('on');
        
    });
}

function offElements() {
    [].forEach.call(toggles, function (toggle) {
        toggle.classList.remove('on');
    });
}

function toggleLine() {
    if (toggleBtn.classList.contains('on')){
      toggleBtn.classList.remove('on');
      toggleBtnOn.classList.remove('active');
    } else {
      toggleBtn.classList.add('on');
      toggleBtnOn.classList.add('active');
      // toggleBtnOn.style.backgroundColor = "#000000cc";
    }
}

  



// Flickity.js
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    // autoPlay: 1500,
    prevNextButtons: false
  });

  var elemPhoto = document.querySelector('.photo-carousel');
  var flktyPhoto = new Flickity( elemPhoto, {
    // options
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
  });

  var elemBlog = document.querySelector('.carousel-cell-blog');
  var flktyBlog = new Flickity( elemBlog, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    // autoPlay: 1500,
    prevNextButtons: false,
  });