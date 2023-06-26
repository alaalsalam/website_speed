$(document).ready(function () {
    
    $("#owl-slider-adv").owlCarousel({
        items: 3,
        autoplay: false,
        rtl: false,
        lazyLoad:true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-right">', '<i class="fa fa-angle-left">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    $("#owl-slider-warranties").owlCarousel({
        items: 6,
        autoplay: false,
        rtl: false,
        lazyLoad:true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-right">', '<i class="fa fa-angle-left">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });

    $("#owl-slider-gallry-info").owlCarousel({
        items: 3,
        autoplay: false,
        rtl: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $("#owl-slider-about1").owlCarousel({
        items: 4,
        autoplay: false,
        rtl: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $("#owl-slider-about2").owlCarousel({
        items: 4,
        autoplay: false,
        rtl: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


    $('.gallary-api .item img').on('click', function() {
        var img = $(this).attr('src');
        $(this).parent().parent().parent().children().attr('src', img);
        console.log(img)
    })
});

$( '.select2' ).select2( {
    theme: 'bootstrap-5'
} );


