let url = null;

chrome.runtime.sendMessage({ action: "get_data" }, (response) => {
  url = new URL(response.url);
  console.log(3, url);

  if (url.username !== "" || url.password !== "")
    if (
      !alert(
        `The URL you're about to go to uses Basic Authentication, and might be trying to decieve you. You're about to visit the website "${url.hostname}", and if you don't recognise it, you should be careful as this may be a phising attempt.`,
        // Press Cancel to go back to the previous page, or OK to continue.`,
      )
    ) {
      // history.back()
    }

  console.log(location.href);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    console.log(currentUrl);
  });
});
