browser.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'setZoom') {
        browser.tabs.setZoom(sender.tab.id, message.zoomLevel);
    }
});