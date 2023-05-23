$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        // items:2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    let headerNav = document.querySelector(".header-nav");
    window.addEventListener("scroll",scrollFunction);
    function scrollFunction(){
        if(window.scrollY>50){
            headerNav.classList.add('sticky');
        }else{
            headerNav.classList.remove('sticky');
        }
    }

});