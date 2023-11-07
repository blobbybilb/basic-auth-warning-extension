let url = null;

chrome.runtime.sendMessage(
  { action: "get_URL_data_for_basic_auth_warning" },
  (response) => {
    url = new URL(response.url);

    if (url.username !== "" || url.password !== "")
      if (
        !alert(
          `The URL you're about to go to uses Basic Authentication, and might be trying to decieve you. You're about to visit the website "${url.hostname}", and if you don't recognise it, you should be careful as this may be a phising attempt.`,
          // Press Cancel to go back to the previous page, or OK to continue.`,
        )
      ) {
        // history.back()
      }
  },
);
