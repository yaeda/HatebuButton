/*
 * simple library for hatebu
 */
hatebu = function() {
    var api_url = "http://b.hatena.ne.jp/entry/jsonlite/?url=";
    var bookmark = {};
    return {
        requestHatenaBookmark: function(site_url) {
            request_url = api_url + encodeURIComponent(site_url);
            $.ajax({
                url: request_url,
                async: false,
                dataType: "json",
                beforeSend: function(xhr) {
                    xhr.overrideMimeType('text/plain; charset=x-user-defined');
                },
                success: function(data) {
                    bookmark = data;
                },
                error: function(data) {
                    console.error(data);
                }
            });
        },
        getBookmark: function() {
            return bookmark;
        },
        getUserImageURL: function(username) {
            return "http://www.st-hatena.com/users/"
                + username.slice(0, 2) + "/" + username + "/profile.gif";
        }
    };
}();
