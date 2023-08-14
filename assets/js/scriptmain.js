
//Navbar scroll effect & navbar menu btn scripting

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.main-navbar').addClass('sticky');
        }else{
            $('.main-navbar').removeClass('sticky');
        }
    })

    $('.menu-btn').click(function(){
        $('.main-navbar .nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})

// About page team member section scripting

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    speed: 500,
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
        640: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
});

