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
            let posX =  Math.round($($(obj).children()[0]).position().left - 25);
            $('.js-fairy-ball-container').css({
                top: posY,
                left: posX,
            }); 
        });
    });

     resetFairyBall();

     $(window).resize(function() {
        resetFairyBall();
     })
});

function resetFairyBall() {
    let posY = Math.round($('.js-fairy-ball-magnet-init').position().top + 15 + $(window).scrollTop());
    let posX = Math.round($($('.js-fairy-ball-magnet-init').children()[0]).position().left - 25);
    $('.js-fairy-ball-container').css({
        top: posY,
        left: posX
    });
}

