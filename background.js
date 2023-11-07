let url;

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  url = details.url;
});

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === "get_data") {
    sendResponse({ url });
  }
});
