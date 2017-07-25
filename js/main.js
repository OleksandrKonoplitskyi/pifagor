$(document).ready(function(){
    $('.single-slide').slick({
        dots: true,
        speed: 300,
        infinite:true,
        initialSlide:2,
        slidesToShow: 1,
        responsive:true,
        arrows:false,
        autoplaySpeed:3000,
        autoplay:true,
        fade:true,
        adaptiveHeight: false
    });
});