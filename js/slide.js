$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        800:{
            items:3,
            nav:true,
            loop:true
        },
        1050:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
