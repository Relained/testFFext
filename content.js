function checkURL() {
    if (window.location.href.includes('/shorts/')) {
        browser.runtime.sendMessage({ action: 'setZoom', zoomLevel: 1.4 }); // 140%
    } else {
        browser.runtime.sendMessage({ action: 'setZoom', zoomLevel: 1.0 }); // 100%
    }
}

window.addEventListener('load', checkURL);
let lastURL = window.location.href;
const observer = new MutationObserver(() => {
    if (window.location.href !== lastURL) {
        lastURL = window.location.href;
        checkURL();
    }
});
observer.observe(document.body, { subtree: true, childList: true });