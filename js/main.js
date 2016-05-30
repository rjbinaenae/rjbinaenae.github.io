var moved = false;
$('.hamburger-icon').click(function() {
    if (moved) {
        $('.mobile-navigation').css('transform', 'translateY(-200px)');

    } else if(!(moved)) {
        $('.mobile-navigation').css('transform', 'translateY(0)');
    }
    moved = !(moved);
});