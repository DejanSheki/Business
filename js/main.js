$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('.sticky').addClass('stickyAdd');
    } else {
        $('.sticky').removeClass('stickyAdd');
    }
});