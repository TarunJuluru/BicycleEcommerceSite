/*global $*/
/*global document*/

//$ = jQuery

$(document).ready(function () {

    "use strict";

    var $viewIcon = $(".view-icon img");
    var $blogContenet = $(".blog-content");

    $blogContenet.hide();

    $viewIcon.on('click', function (event) {
        $(event.currentTarget).closest(".view-info").next(".blog-content").slideToggle();
        $(event.currentTarget).toggleClass("rotate");
    });

});
