$('.arrow').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 1000);
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    $('.logo img').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    })

    $('.name h1').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    })

    $('.name h4').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    })

    if (wScroll > $('.about').offset().top - 200) {
        $('.aku').css({
            'transform': 'scale(1,1)',
            'transition': '0.4s'
        })

        $('.saya').css({
            'transform': 'scale(1,1)',
            'transition': '0.5s'
        })

        $('.button').css({
            'transform': 'scale(1,1)',
            'transition': '1s'
        })
    } else {
        $('.aku').css({
            'transform': 'scale(0,0)'
        })

        $('.saya').css({
            'transform': 'scale(0,0)'
        })

        $('.button').css({
            'transform': 'scale(0,0)'
        })
    }

    if (wScroll > $('.skills').offset().top - 200) {
        $('.myskill').css({
            'opacity': '1',
            'transition': '0.5s'
        })

        $('.container .skill').css({
            'opacity': '1',
            'transition': '0.5s'
        })
    } else {
        $('.myskill').css({
            'opacity': '0'
        })

        $('.container .skill').css({
            'opacity': '0'
        })
    }


    if (wScroll > $('.portofolio').offset().top - 250) {
        $('.port').addClass('muncul')
        $('.listportofolio').addClass('rise')
    }else{
        $('.listportofolio').removeClass('rise')
        $('.port').removeClass('muncul')
    }

});