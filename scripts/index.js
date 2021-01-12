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

  let headList = document.querySelectorAll('.how-we-work__left-heading');
  let btnList = document.querySelector('.how-we-work__steps');
  let contentList = document.querySelectorAll('.how-we-work__left-content');
  let links = document.querySelectorAll('.how-we-work__step-btn');
  let pics = document.querySelectorAll('.how-we-work__right');
  let wrapper = document.querySelector('.how-we-work__wrapper');
  let pos;

  btnList.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'A') {

      pos = 1;
      wrapper.style.opacity = pos;

      let id = setInterval(() => {
        pos = pos - 0.1; 
        if (pos < 0.01) {
          clearInterval(id);
          i();
        } else {
          wrapper.style.opacity = pos;
        }
      }, 30);
    function i () {
      let id = setInterval(() => {
        pos = pos + 0.1; 
        if (pos > 0.99) {
          clearInterval(id)
        } else {
          wrapper.style.opacity = pos;
        }
      }, 30);
    }


      links.forEach((e) => {
        e.classList.remove('how-we-work__btn--active');
      })
      ev.target.classList.add('how-we-work__btn--active');

      headList.forEach((elem) => {
        elem.classList.add('display-none');
        if (elem.dataset.head === ev.target.dataset.step) {
          elem.classList.remove('display-none');
        }
      })

      pics.forEach((elem) => {
        elem.classList.add('display-none');
        if (elem.dataset.pic === ev.target.dataset.step) {
          elem.classList.remove('display-none');
        }
      })

      contentList.forEach((el) => {
        el.classList.add('display-none');
        if (el.dataset.text === ev.target.dataset.step) {
          el.classList.remove('display-none');
        }
      })
    }
  })

  links.forEach((el) => {
    el.addEventListener('focus', (ev) => {

      pos = 1;
      wrapper.style.opacity = pos;

      let id = setInterval(() => {
        pos = pos - 0.1; 
        if (pos < 0.01) {
          clearInterval(id);
          i();
        } else {
          wrapper.style.opacity = pos;
        }
      }, 30);
    function i () {
      let id = setInterval(() => {
        pos = pos + 0.1; 
        if (pos > 0.99) {
          clearInterval(id)
        } else {
          wrapper.style.opacity = pos;
        }
      }, 30);
    }


    if (ev.target.tagName == 'A') {
      links.forEach((e) => {
        e.classList.remove('how-we-work__btn--active');
      })
      ev.target.classList.add('how-we-work__btn--active');

      headList.forEach((elem) => {
        elem.classList.add('display-none');
        if (elem.dataset.head === ev.target.dataset.step) {
          elem.classList.remove('display-none');
        }
      })

      pics.forEach((elem) => {
        elem.classList.add('display-none');
        if (elem.dataset.pic === ev.target.dataset.step) {
          elem.classList.remove('display-none');
        }
      })

      contentList.forEach((el) => {
        el.classList.add('display-none');
        if (el.dataset.text === ev.target.dataset.step) {
          el.classList.remove('display-none');
        }
      })
    }
    })
  })

})
