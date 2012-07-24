
$(document).ready(function() {

    $slideshow_images = $('ul#slideshow');
    $total_window = $('<input type = "text"/>');
    $slideshow_images.after($total_window);
    $current_window = $('<input type = "text"/>');
    $slideshow_images.prependTo($('body'));
    $slideshow_images.after($total_window);
    $slideshow_images.after($current_window);
    $slideshow_images = $slideshow_images.children('li');
    $slideshow_images.fadeOut();
    var length = $slideshow_images.length;
    $total_window.attr('value', length);
    var i = 0;
    setInterval(function() {
        $current_window.attr('value', i);
        $($slideshow_images[i]).fadeIn(1000,function() {
            $($slideshow_images[i]).fadeOut(1000);
            i = (i + 1) % length;
        })
    },2000);

});
