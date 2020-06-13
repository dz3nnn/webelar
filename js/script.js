var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    mousewheel: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

$(document).ready(function($) {
    
    jQuery(".job").mouseover(function() {
        jQuery(this).find(".filter").fadeIn().css('display', 'flex');
    });

    jQuery(".job").mouseleave(function() {
        jQuery(this).find(".filter").fadeOut();
    });

    $('.landing-page-link').click(function() {
        $('#modal-landing-page').fadeIn().css('display', 'flex');
        return false;
    });	

    $('.online-shop-link').click(function() {
        $('#modal-online-shop').fadeIn().css('display', 'flex');
        return false;
    });

    $('.corporate-link').click(function() {
        $('#modal-corporate').fadeIn().css('display', 'flex');
        return false;
    });	

    $('.modal-window-button').click(function() {
        $('.popup-fade').fadeOut();
    });	

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });		
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();					
        }
    });
});