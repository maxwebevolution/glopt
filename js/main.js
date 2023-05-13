$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            }
        ]
      }  
    );

    const menu = document.querySelector('.navigation__menu'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation__menu_active');
        })
    })
  });