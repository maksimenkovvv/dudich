$('.popup-open').click(function(){
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
});
$('.popup-close').click(function(){
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
});