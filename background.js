let url;

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  url = details.url;
});

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === "get_URL_data_for_basic_auth_warning") {
    sendResponse({ url });
  }
});
