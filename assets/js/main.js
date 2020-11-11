"use strict";

const scrollDown = document.querySelector(".scroll-down");

// home을 투명하게 만들되 버튼에 마우스를 올리면 버튼은 opacity=1
scrollDown.addEventListener("mouseenter", () => {
    scrollDown.style.opacity = 1;
  });
  
  scrollDown.addEventListener("mouseleave", () => {
    scrollDown.style.opacity = 0.5;
  });
  

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