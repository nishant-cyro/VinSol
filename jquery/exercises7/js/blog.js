
/*
$('div#blog').children('h3').click(function() {
console.log($(this));
});*/

$(document).ready(function() {
$shown_p = $('div#blog ul').find('p').first();
$('div#blog ul').find('h3').click(function() {
$shown_p.slideUp();
$shown_p = $(this).next('p');
$shown_p.slideDown();
});
//});
/*
$('ul#nav li').hover(function() {
$(this).children('ul').show()},
function() { $(this).children('ul').hide()}
);

/*
$slideshow_images = $('ul#slideshow');
console.log($slideshow_images);
$slideshow_images.prependTo($('body'));
$slideshow_images = $slideshow_images.children('li');
$slideshow_images.fadeOut();
var length = $slideshow_images.length;
var i = 0;
setInterval(function() {
$($slideshow_images[i]).fadeIn(1000,function() {
$($slideshow_images[i]).fadeOut(1000);
i = (i + 1) % length;
 })
},2000);*/
});

