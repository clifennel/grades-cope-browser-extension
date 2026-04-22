gradescope_logo_img_nodes = document.querySelectorAll("a[aria-label='Gradescope: Back to Home']>img[src*='cdn.gradescope.com/assets/logo/']")

// Hack for both Chrome and Firefox support
// Source - https://stackoverflow.com/a/68097090
// Posted by thebamby
// Retrieved 2026-04-21, License - CC BY-SA 4.0
var grades_cope_logo_url;
if (typeof browser === "undefined") {
    // Chrome case
    grades_cope_logo_url = chrome.runtime.getURL("images/grades-cope-logo.svg");
} else {
    // Firefox case
    grades_cope_logo_url = browser.runtime.getURL("images/grades-cope-logo.svg");
}

for (const node of gradescope_logo_img_nodes) {
    node.setAttribute('src', grades_cope_logo_url);
}
