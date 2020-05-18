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
    $('.landing-page-link').click(function() {
        $('#modal-landing-page').fadeIn();
        return false;
    });	

    $('.online-shop-link').click(function() {
        $('#modal-online-shop').fadeIn();
        return false;
    });

    $('.corporate-link').click(function() {
        $('#modal-corporate').fadeIn();
        return false;
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