$(document).ready( function() {

    $blog_headings = $('div#blog').find('h3');
    $blog_headings.after('<div class="target"></div>');
    $blog_headings.each( function(index, heading) {
        $(heading).attr('id', index);
        var href = $(heading).children('a')[0].href.replace('#', ' #');
        var id = $(heading).attr('id');
        $(heading).data(id, href);
    });

    $blog_headings.data();

    $blog_headings.click( function() {
        $href = $(this).data($(this).attr('id'));
        $(this).next('div.target').load($href);
    });

});

