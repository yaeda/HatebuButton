$(function() {
    title = $('title').text();
    hatebuButton = 
        '<a href="http://b.hatena.nejp/entry' + location.href + '"'
        + ' class="hatena-bookmark-button"'
        + ' data-hatena-bookmark-title="' + title + '"'
        + ' data-hatena-bookmark-layout="standard"'
        + ' title="add this entry to hatena-bookmark"'
        + ' width="20" height="20" style="border: none;" /></a>'
        + '<script type="text/javascript"'
        + ' src="http://b.st-hatena.com/js/bookmark_button.js">'
        + ' charset="utr-8" async="async"></script>';
    $('body')
        .children()
        .first()
        .before(hatebuButton);
});
