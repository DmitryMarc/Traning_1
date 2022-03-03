$(function() {

    var header = $("#header"),
        top = $("#header__top"),
        headerH = $("#header").innerHeight(),
        topH = $("#header__top").innerHeight(),
        scrollOffset = $(window).scrollTop();;

    //  Fixed Header (top)
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){

        if( scrollOffset >= headerH - topH){
            top.addClass("fixed");
        } else {
            top.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

});

// will add active class for a link; maybe