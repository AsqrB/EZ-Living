// To change the blob height when window resizes
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        const shape = document.getElementById("shape");
        const parentHeight = shape.parentElement.clientHeight;
        shape.style.height = "calc(" + parentHeight + "px - 20%)";
    });
});


$(document).ready(function(){
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});