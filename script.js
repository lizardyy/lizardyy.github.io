// Paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    $('.textbox h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });
    $('.textbox p').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });
    $('.textbox a').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });


    // facilities-col
    if( wScroll > $('.facilities-col').offset().top - 400 )  {
        $('.facilities-col').each(function(i) {
            setTimeout(function() {
                $('.facilities-col').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }


});

    
