
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    })

    // navbar menu btn scripting

    $('.menu-btn').click(function(){
        $('.navbar .nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 48,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
});