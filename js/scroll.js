
/* $(window).scroll(function(){
if ($(this).scrollTop() > window.innerHeight-50) {
    $('body').addClass('body_black');
} else {
    $('body').removeClass('body_black');
}
});


$(window).on('wheel', function(){
  currentScrollTop = $(this).scrollTop();

  if (tempScrollTop < currentScrollTop ) {
      if (currentScrollTop < window.innerHeight) {
      
          window.scroll({ top: $('.about').offset().top, left: 0, behavior: 'smooth' });
        return false;
    }
  }
  //scrolling down
  else
      if (currentScrollTop >= window.innerHeight - 100) {
        if (currentScrollTop < window.innerHeight) {          
          window.scroll({ top: $('#menu').offset().top, left: 0, left: 0, behavior: 'smooth' });        
      }
    }
  //scrolling up
  tempScrollTop = currentScrollTop;

});
var tempScrollTop, currentScrollTop = 0;
var matched, browser;
jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();
 
    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie)[\s?]([\w.]+)/.exec( ua ) ||
        /(trident)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];
 
    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};
matched = jQuery.uaMatch( navigator.userAgent );
//IE 11+ fix (Trident)
matched.browser = matched.browser == 'trident' ? 'msie' : matched.browser;
browser = {};
if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
} */