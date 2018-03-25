var pixPer10CM = $('#meter').width();
var CMPerPix = 10 / pixPer10CM;
var widthCM = screen.width * CMPerPix;

//alert(widthCM);
console.log(widthCM)

// Macbook pro retina
// 13.3" inch 2560 x 1600
// so 223.17 PPI
// 

// macbook air:
// 13.3" 1440*900
// 127.68 PPI
// 1cm = 0.393701 inch
// 10cm = 10 * 0.393701 * 127.68
// = 502.677165 px

// iphone 6:
// 4.7" 1334x750
// 326ppi
// For iphone it is different.
// 1inch = 325.6 pixels
// 1mm = how many pixels? 1/10 * 0.393701 * 325.6
// = 12.8 pixels 
// 12.8 / 2 = 6.4
// 1cm = 128 pixels. / 0.8 (经验) = 160pixels
// 128 * 1.307 = 167





// var cm = $('.mm').css({'width':'12px'})
// var cm = $('.mid-cm').css({'width':'12px'})
// var cm = $('.cm').css({'width':'12px'})


var value = window.devicePixelRatio;

var al = window.navigator.userAgent.toLowerCase();
alert(al)

// alert($(window).width()) // 980
// alert($(window).height()) // 1445

// alert(window.screen.width) //375 = 750
// alert(window.screen.height) // 667 = 1334



$(function(){
//document.width / jQuery(document).width()
// alert(document.width)
// alert(jQuery(document).width())
})

// $(function() {
//   console.log( "ready!" );
//   var cm = document.getElementById('cm');
//   var cmstyle = cm.style;
//   console.log(cmstyle)
//   console.log(cm.width())

// });



