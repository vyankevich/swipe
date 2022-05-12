$(document).ready(function () {
    $('.faq__title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

new Swiper('.image-slider', {
    spaceBetween: 10,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    loop: true,
    breakpoints: {
        700: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    },
});

