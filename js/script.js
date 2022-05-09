$(document).ready(function () {
    $('.faq__title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
