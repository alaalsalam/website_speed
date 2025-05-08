
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor = "#293542";
        header.style.transition = "1s ease all";
    }else{
        header.style.backgroundColor = "transparent";
    }
});


if(document.querySelector('.settings-mobile')){
    var settingsMobile = document.querySelector('.settings-mobile')
    var sideBare = document.querySelector('.mobile-bottom .sidebar')
    settingsMobile.addEventListener('click',()=>{
        sideBare.classList.toggle('active');
        settingsMobile.classList.toggle('active');
    });
}

// $(document).ready(function () {
    

//     var isRTL = document.documentElement.dir === 'rtl';
//     var navIcons = isRTL
//         ? ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
//         : ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'];

//     $("#owl-slider-adv").owlCarousel({
//         items: 3,
//         autoplay: false,
//         rtl: isRTL,
//         lazyLoad: true,
//         autoplayTimeout: 3000,
//         dots: false,
//         nav: true,
//         navText: navIcons,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });
    
//     $("#owl-slider-adv").trigger('refresh.owl.carousel');

//     $("#owl-slider-warranties").owlCarousel({
//         items: 6,
//         autoplay: false,
//         rtl: false,
//         lazyLoad:true,
//         autoplayTimeout: 3000,
//         dots: false,
//         nav: true,
//         navText: ['<i class="fa fa-angle-right">', '<i class="fa fa-angle-left">'],
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 6
//             }
//         }
//     });

//     $("#owl-slider-gallry-info").owlCarousel({
//         items: 3,
//         autoplay: false,
//         rtl: true,
//         loop: true,
//         autoplayTimeout: 3000,
//         dots: false,
//         nav: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:3
//             }
//         }
//     });
//     $("#owl-slider-about1").owlCarousel({
//         items: 4,
//         autoplay: false,
//         rtl: false,
//         loop: true,
//         autoplayTimeout: 3000,
//         dots: true,
//         nav: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });
//     $("#owl-slider-about2").owlCarousel({
//         items: 4,
//         autoplay: false,
//         rtl: false,
//         loop: true,
//         autoplayTimeout: 3000,
//         dots: true,
//         nav: false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });


//     $('.gallary-api .item img').on('click', function() {
//         var img = $(this).attr('src');
//         $(this).parent().parent().parent().children().attr('src', img);
//         console.log(img)
//     })
// });

$(document).ready(function () {
    var isRTL = document.documentElement.dir === 'rtl';
    var navIcons = isRTL
        ? ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        : ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'];

    var $owlAdv = $("#owl-slider-adv");

    $owlAdv.owlCarousel({
        items: 3,
        autoplay: false,
        rtl: isRTL,
        lazyLoad: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: navIcons,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    if (isRTL) {
        setTimeout(function () {
            $owlAdv.find('img.owl-lazy').each(function () {
                var $img = $(this);
                var src = $img.attr('data-src');
                if (src) {
                    $img.attr('src', src);
                    $img.removeAttr('data-src');
                    $img.removeClass('owl-lazy');
                }
            });
        }, 500);
    }


    $("#owl-slider-adv").trigger('refresh.owl.carousel');

    var $owlWarranties = $("#owl-slider-warranties");

    $owlWarranties.owlCarousel({
        items: 6,
        autoplay: false,
        rtl: isRTL,
        lazyLoad: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: navIcons,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 6 }
        }
    });

    setTimeout(function () {
        $owlWarranties.find('img.owl-lazy').each(function () {
            var $img = $(this);
            var src = $img.attr('data-src');
            if (src) {
                $img.attr('src', src);
                $img.removeAttr('data-src');
                $img.removeClass('owl-lazy');
            }
        });

        $owlWarranties.trigger('refresh.owl.carousel');
    }, 500);


    $("#owl-slider-gallry-info").owlCarousel({
        items: 3,
        autoplay: false,
        rtl: isRTL,
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
        rtl: isRTL,
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
        rtl: isRTL,
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


