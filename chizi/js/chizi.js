var pixPer10CM = $('#meter').width();
var CMPerPix = 10 / pixPer10CM;
var widthCM = screen.width * CMPerPix;

//alert(widthCM);
console.log(widthCM)


// mac:
// 13.3" 1440*900
// 127.68 PPI
// 1cm = 0.393701 inch
// 10cm = 10 * 0.393701 * 127.68
// = 502.677165 px