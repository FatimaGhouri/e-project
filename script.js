// typing animation script
var typed = new Typed(".typing", {
    strings: ["Gorgeous Photography","Exquisite Catering"],
    typeSpeed: 100,
    backSpeed:60,
    loop : true
});

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