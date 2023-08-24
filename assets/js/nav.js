
var navbar = `
<div class="max-width">
            <div class="logo">Blissful<span>Knots</span></div>
            <ul class="nav-links">
                <li class="nav-item underline-hover"><a href="index.html">Home</a></li>
                <li class="nav-item underline-hover"><a href="about.html">About</a></li>
                <li class="nav-item underline-hover"><a href="gallery.html">Gallery</a></li>
                <li class="nav-item underline-hover"><a href="contact.html">Contacts</a></li>
                <li class="nav-item underline-hover show-in-mobile "><a href="login.html">Login</a></li>
                <li class="nav-item show-in-mobile"><button class="reg-btn"><a href="reg-form.html">Registration</a></button></li>
            </ul>
            <ul class="nav-btns">
                <li class="nav-item underline-hover"><a href="login.html">Login</a></li>
                <li class="nav-item"><button class="reg-btn"><a href="reg-form.html">Registration</a></button></li>
            </ul>
            <div class="menu-btn">
                <i class="fa-solid fa-bars fa-xs"></i>
            </div>
        </div>
`
$(document).ready(function(){
 
  
    $(".main-navbar").html(navbar);
    
});