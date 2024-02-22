# basic-auth-warning-extension

Displays a warning when you are about to visit a URL that contains basic
auth credentials, to help prevent possible phishing attacks.
<br /><br />
Clicking on a link to a URL like
`example.com∕file@something.zip`* would take you to a website with
the domain something.zip, which may not be what you expect, and may
allow an attacker to conduct a phishing attack by imitatiing
example.com. This extension should display a warning when this is
happening, and may help prevent that. Of course, it is not a guarantee,
and you are still responsible for your own security.

*Note that the `∕` char is not the regular slash but a different character that looks like it.


---


**Update:**

The first draft got rejected from the Chrome Webstore for using `["webNavigation", "activeTab", "scripting"]` rather than just webNavigation, but at least in Arc having those two permissions lets it stop the page from loading while the popup is showing (not sure why (didn't investigate)). This means JS from the page could possibly try to interfere with the extension. The chrome webstore version just has the webNavigation permission, but the package from Github Releases has all 3 permissions (not all may be necessary/I might be doing something incorrectly, so feel free to experiment and tell me if you find anything).