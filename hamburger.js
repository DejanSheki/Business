$(function() {

    $(".bars").on("click", function() {
        $(".bars").toggleClass('bars-open');
        $('.nav-menu').slideToggle(400);
    });

});