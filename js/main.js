$(function () {

    function selectItem(evtObj) {

        $('.js-master-container').removeClass('full-height');
        $('.js-link').removeClass('clicked');
        $(evtObj.currentTarget).addClass('clicked');
        let item = $(evtObj.currentTarget).attr('href').replace('#', '');
        $('.content').html($('.js-content-' + item).html());
        $('.js-content-container').addClass('content').addClass('content-background');
    }

    $('.js-link').each(function (idx, obj) {
        $(obj).click(function (evtObj) {
            selectItem(evtObj);
        });

        if(! $(obj).hasClass('no-hover')) {
            $(obj).hover(function (evtObj) {
                selectItem(evtObj);
            });
        }
    });

    let logoTopConstant = $('.js-logo-container').position().top;
    let logoHeightConstant = $('.js-logo-container').height();

    $(window).resize(function () {
        setTimeout(function() {
            logoTopConstant = $('.js-logo-container').position().top;
            logoHeightConstant = $('.js-logo-container').height();
        }, 100);
    })

    $(window).scroll(function () {
        let logoTop = $('.js-logo-container').position().top;
        let scrollTop = $(this).scrollTop();
        let diff = scrollTop - logoTopConstant;

        if (scrollTop > (logoTopConstant + logoHeightConstant)) {
            $('.js-header').removeClass('d-none');
            $('.js-header').hide();
            $('.js-header').show(1000);
        } else {
            $('.js-header').addClass('d-none');
            $('.js-header').hide(5000);
        }
    });

    $('.js-fairy-ball-magnet').each(function(idx, obj){
        $(obj).hover(function() {
            let posY = Math.round(obj.getBoundingClientRect().top + 15 + $(window).scrollTop());
            let posX =  Math.round($($(obj).children()[0]).position().left - 15);
            $('.js-fairy-ball-container').css({
                top: posY,
                left: posX,
            }); 
        });
    });

    $('.js-more-info-close-button').click(function(){
        let wh = $('.js-master-container').width() - 10;
        let hg = $('.js-master-container').height() - 10;
        let tp = 0;
        let lf = 0;
        $('.js-more-info-container').css({
            width: wh,
            height: hg,
            top: tp,
            left: lf, 
            'animation': 'more-info-fade-out 500ms ease-in',
            'animation-fill-mode': 'forwards'
        });
    });

    $('.js-more-info-close-button').hover(function(){

        $(this).css({
            'animation': 'rotate 5s ease infinite',
            'cursor': 'pointer'
        });
    }, function () {
        $(this).css({
            'animation': '',
            'cursor': '' 
        })
    });

    $('a').each(function(idx, obj) {
        $(obj).click(function() {
            
            let wh = $('.js-master-container').width() - 10;
            let hg = $('.js-master-container').height() - 10;
            let tp = hg /2;
            let lf = wh /2;
            console.log('Link clicked!', wh, hg);
            $('.js-more-info-container').css({ 
                width: wh,
                height: hg,
                top: tp,
                left: lf,
                opacity: 0,
                'animation': 'more-info-paper-scroll 500ms ease-in',
                'animation-fill-mode': 'forwards'
            })
        });
    });

     resetFairyBall();

     $(window).resize(function() {
        resetFairyBall();
        resizeMoreInfo();
     });
});

function resizeMoreInfo() {
    let wh = $('.js-master-container').width() - 10;
    let hg = $('.js-master-container').height() - 10; 
    $('.js-more-info-container').css({ 
        width: wh,
        height: hg
    }); 
}

function resetFairyBall() {
    let posY = Math.round($('.js-fairy-ball-magnet-init').position().top + 15 + $(window).scrollTop());
    let posX = Math.round($($('.js-fairy-ball-magnet-init').children()[0]).position().left - 15);
    $('.js-fairy-ball-container').css({
        top: posY,
        left: posX
    });
}

