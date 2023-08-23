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
