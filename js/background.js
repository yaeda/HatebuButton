function onPopupClicked(tab) {
    // opent the pupup.html
    chrome.browserAction.setPopup({tabId: tab.id, pupup: "pupup.html"});
}
chrome.browserAction.onClicked.addListener(onPopupClicked);

function onSelectionChangedOrUpdated(tabId, info, tab) {
    // count up and set to badge
    count = "";
    chrome.tabs.get(tabId, function(tab) {
        hatebu.requestHatenaBookmark(tab.url);
        bookmark = hatebu.getBookmark();
        if (bookmark !== null) {
            count = bookmark.count;
        }
        chrome.browserAction.setBadgeText({"text": count});
        chrome.browserAction.setBadgeBackgroundColor({"color": [0,255,0,255]});
    });
}
// Selection
chrome.tabs.onSelectionChanged.addListener(onSelectionChangedOrUpdated);
// Load
chrome.tabs.onUpdated.addListener(onSelectionChangedOrUpdated);
