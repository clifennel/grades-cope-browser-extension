gradescope_logo_img_nodes = document.querySelectorAll("a[aria-label='Gradescope: Back to Home']>img[src*='cdn.gradescope.com/assets/logo/']")
const grades_cope_logo_url = browser.runtime.getURL("images/grades-cope-logo.svg");
for (const node of gradescope_logo_img_nodes) { 
    node.setAttribute('src', grades_cope_logo_url)
}
