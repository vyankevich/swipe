$(document).ready(function () {
    $('.faq__titles').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

new Swiper('.items-slider ', {
    spaceBetween: 10,
    loop: false,
    autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
}
});

new Swiper('.image-slider', {
    spaceBetween: 10,
    // navigation: {
    //     prevEl: '.swiper-button-prev',
    //     nextEl: '.swiper-button-next'
    // },
    autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
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

new Swiper('.press-slider', {
    spaceBetween: 50,
    loop: true,
    initialSlide: 0,
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },
})

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
    observer.observe(elm);
};

var mybutton = document.getElementById("top__button");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const form = document.getElementById('form__items');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[name="nameInput"]'),
        email = form.querySelector('[name="emailInput"]'),
        message = form.querySelector('[name="messageInput"]');
    const data = {
        name: name.value,
        email: email.value,
        message: message.value,
    }
    form.reset();
    console.log(data);
};

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});