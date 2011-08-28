var bookmarks = {};
chrome.tabs.getSelected(null, function(tab) {
    // request bookmark
    hatebu.requestHatenaBookmark(tab.url);
    // get bookmark
    bookmark = hatebu.getBookmark();
    if (bookmark !== null) {
        bookmarks = bookmark.bookmarks;
    }
    // create image
    $(bookmarks).each(function(){
        imagepath = hatebu.getUserImageURL(this.user);
        $div = $('<div class="img_wrap">')
            .append('<image src="' + imagepath + '"/>')
            .appendTo($('#result'));
        if (this.comment != "") {
            $.data($div.get(0), 'hatebu_comment', this.comment);
            $div
                .addClass('pushable')
                .hover(function() {
                    var comment = $.data(this, 'hatebu_comment');
                    $('<p class="comment">' + comment  + '</p>')
                        .hide()
                        .fadeIn()
                        .appendTo($('body'));
                }, function() {
                    $('p.comment')
                        .remove();
                });
        }
    });
});
