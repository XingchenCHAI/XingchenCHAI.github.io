(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-3 .slide0').hasAttr('src')) { a='src'; } $('.js-3 .slide0').attr(a, (dpi>1) ? 'images/1638958305-880.jpg' : 'images/1638958305-440.jpg');
var a='data-src'; if($('.js-3 .slide1').hasAttr('src')) { a='src'; } $('.js-3 .slide1').attr(a, (dpi>1) ? 'images/1809418270-880.jpg' : 'images/1809418270-440.jpg');
var a='data-src'; if($('.js-3 .slide2').hasAttr('src')) { a='src'; } $('.js-3 .slide2').attr(a, (dpi>1) ? 'images/1874500418-880.jpg' : 'images/1874500418-440.jpg');
var a='data-src'; if($('.js-3 .slide3').hasAttr('src')) { a='src'; } $('.js-3 .slide3').attr(a, (dpi>1) ? 'images/2147181196-880.jpg' : 'images/2147181196-440.jpg');



$('.js-8').attr('src', (dpi>1) ? 'images/she-jiaoqq-60.png' : 'images/she-jiaoqq-30.png');
$('.js-9').attr('src', (dpi>1) ? 'images/she-jiao-wei-xin-60.png' : 'images/she-jiao-wei-xin-30.png');
$('.js-10').attr('src', (dpi>1) ? 'images/she-jiao-wei-bo-60.png' : 'images/she-jiao-wei-bo-30.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-11').mouseenter(function() { $.loadImages('images/2147181196-1080.jpg', function() { }) });
$('.js-11').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-11-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2147181196-1080.jpg'; } } });
$('.js-3 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: true,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 2000});$('.js-4 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});