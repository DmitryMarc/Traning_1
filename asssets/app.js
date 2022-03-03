$(function() {

    var header = $("#header"),
        top = $("#header__top"),
        headerH = $("#header").innerHeight(),
        topH = $("#header__top").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        if( scrollOffset >= headerH - topH){
            top.addClass("fixed");
        } else {
            top.removeClass("fixed");
        }
    });

});