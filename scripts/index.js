window.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $(function () {
    $("#accordion").accordion();
  });

  
  $("#accordion").accordion({ collapsible: true });
  $("#accordion").accordion("option", "active", null);


  // document.querySelector("#accordion").addEventListener('click', () => {
  //   document.querySelectorAll("#accordion .accordion-heading").forEach(function(el) {
  //   if (el.classList.contains("ui-state-active") && el.classList.contains("ui-accordion-header-active")) {
  //     el.querySelector(".ui-accordion-header-icon").classList.toggle("rotate")
  //   }  else if (!(el.classList.contains("ui-state-active") && el.classList.contains("ui-accordion-header-active"))) {
  //     el.querySelector(".ui-accordion-header-icon").classList.remove("rotate")
  //   }
  //   })
  // })

const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".header__little-nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("flex");
  burger.classList.toggle("x")
})

nav.addEventListener("click", () => {
  nav.classList.toggle("flex");
  burger.classList.toggle("x")
})


})
