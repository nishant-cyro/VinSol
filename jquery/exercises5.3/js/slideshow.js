
$(document).ready(function() {

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
    },2000);
});
