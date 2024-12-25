function excludePaidPromotion({ tabId }) {
  chrome.scripting
    .insertCSS({
      target: { tabId },
      css: '.ytmPaidContentOverlayHost { display: none !important }'
    });
}

const urlFilter = { url: [{ hostSuffix: 'youtube.com' }] };

chrome.webNavigation.onCompleted.addListener(excludePaidPromotion, urlFilter);
chrome.webNavigation.onHistoryStateUpdated.addListener(excludePaidPromotion, urlFilter);
