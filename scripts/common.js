$(document).ready(function () {

    //    $("ul.toggleNav").slideToggle();

    var $button = $('#menu-btn');
    $button.on('click', function (e) {
        e.preventDefault();
        if ($button.hasClass('open')) {
            $button.removeClass('open');
            $button.addClass('close');
        } else {
            $button.removeClass('close');
            $button.addClass('open');
        }
    });
    $("#menu-btn").on("click", function () {
        $("ul.toggleNav").slideToggle();
    })

    $(".tabs_btn_wrap button").on("click", function () {
        var index = $(this).index();
        console.log(index);
        $(".show_Toggle").removeClass("show_Toggle");
        $(".tab_item").eq(index).toggleClass("show_Toggle");
        $(".tabs_btn_wrap button.show_Toggle_tabs_btn").removeClass("show_Toggle_tabs_btn");
        $(this).toggleClass("show_Toggle_tabs_btn");
    });

    function formFade() {
        $(".formWrap form").removeClass("fadeInRightBig").addClass("swing")
    }

    window.setTimeout(formFade, 3000);


    $(window).on("scroll", function () {
        var target = $('.sub_list_img_wrap img');
        var targetPos = target.offset().top + 200;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem) {
                $(".sub_list_img_wrap img").removeClass("preAnim").addClass("animated flipInX");

                $(".title_content").removeClass("preAnim").addClass("animated lightSpeedIn");
            }
        });
    });
    $(window).on("scroll", function () {
        var target = $('.standart_picture_img_wrap img');
        var targetPos = target.offset().top + 300;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem) {
                $(".standart_picture_img_wrap img").removeClass("preAnim").addClass("animated flipInX");
            }
        });
    });

    $(window).on("scroll", function () {
        var target = $('section.comments .pricing_header');
        var targetPos = target.offset().top + 100;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem) {
                $("section.comments .pricing_header").removeClass("preAnim").addClass("animated rotateInDownLeft");
            }
        });
    });

    $(window).on("scroll", function () {
        var target = $('.basic'); 
        var targetPos = target.offset().top + 100;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem) {
                $(".mostly_toggle").addClass("mostly_show");
                $(".basic,.enterprice").addClass("pricing_margitTop");
            }
        });
    });



    $(window).on("scroll", function () {
        var target = $('.stylish_design');
        var targetPos = target.offset().top;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem) {
                $(".stylish_design").addClass("bg_sizeAnim");
            }
        });
    });

    /*Toggle Form*/

    $(".get_started_toggle_btn button").on("click", function () {
        $(".toggle_form_container").fadeToggle();
    });
    
    $(".close_toggle_form i").on("click", function(){
        $(".toggle_form_container").fadeToggle();
    });
    
    $(".to_Top i").on("click", function () {
        var scr = $(window).scrollTop();
        console.log(scr);
        $('body,html').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    $(window).on("scroll", function(){
        if($(window).scrollTop()>100){
            $(".to_Top").fadeIn();
        }
        else{
           $(".to_Top").fadeOut(); 
        }
    });


})
