/*global $*/
/*global window*/
/*global location*/
/*global document*/
/*global event*/

//$ = jQuery

$(document).ready(function () {

    "use strict";

    //by declaring DOM elements into variables, can be used as objects
    var $figcaption = $("figcaption"),
        $figure = $("figure"),
        $hamburgerMenu = $("#on-click-menu-list"),
        $hamburgerOpen = $(".open"),
        $hamburgerClose = $(".close"),
        $backToTop = $(".back-to-top");

    //figure-figcaption
    $figcaption.css({
        opacity: "0"
    });

    $figure.on("mouseenter", function () {
        $(event.currentTarget).children("figcaption").animate({
            opacity: "1"
        }, "slow");
    }).on("mouseleave", function () {
        $(event.currentTarget).children("figcaption").animate({
            opacity: "0"
        }, "fast");
    });

    //refershing window on resize
    $(window).on("resize", function () {
        location.reload();
    });

    //targeting the window width
    if (window.matchMedia("(max-width: 1024px)").matches) {

        //hamburger-hamburgerMenu
        $hamburgerMenu.hide();
        $hamburgerClose.hide();

        $hamburgerOpen.on("click", function () {
            $hamburgerMenu.slideDown();
            $hamburgerClose.fadeIn(400);
            $hamburgerOpen.hide();
        });

        $hamburgerClose.on("click", function () {
            $hamburgerMenu.slideUp();
            $hamburgerClose.hide();
            $hamburgerOpen.fadeIn();
        });

    }

    $backToTop.hide();

    $(window).on("scroll", function () {

        //hiding the navigation on scroll position
        if ($(document).scrollTop() > 80) {
            $("nav").fadeOut();
        } else {
            $("nav").fadeIn();
        }

        //showing the back-to-top on scroll position
        if ($(this).scrollTop() > 400) {
            $backToTop.fadeIn(800);
        } else {
            $backToTop.fadeOut();
        }

        //scroll animation on click
        $backToTop.on("click", function () {
            $("html, body").stop().animate({scrollTop:0}, 1000);
            return false;
        });
    });
    
});
