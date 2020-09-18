$(function () {


    // Menufix

    var navoff = $("header").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $("header").addClass("menu_fix");
        } else {
            $("header").removeClass("menu_fix");
        }
    });
    
    // Closes responsive menu when a scroll link is clicked


    $('.nav-link').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });


    // banner slider 

    $('#banner_part').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 800,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    // gallery

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // counter

    $('.count').counterUp({
        delay: 30,
        time: 3000,
    });


    // team slider 


    $('.team_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });



    //testimonial slider

    $('.test_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
});


// logo slider

$('.client_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 800,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    }
  ]


});


// wow js

new WOW().init();


// scroll top 


$(".scroll_top").click(function () {
    $("html,body").animate({
        scrollTop: 0,
    }, 100);
});
$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $(".scroll_top").fadeIn();
    } else {
        $(".scroll_top").fadeOut();
    }
});
