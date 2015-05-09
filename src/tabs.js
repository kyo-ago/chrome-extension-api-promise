export default class _ {
    create(createProperties) {
        return new Promise((resolve) => chrome.tabs.create(createProperties, resolve));
    }
    createActive(createProperties) {
        let prop = Object.assing(createProperties, {'active': true});
        return this.create(prop);
    }
    remove(tabId) {
        return new Promise((resolve) => chrome.tabs.remove(tabId, resolve));
    }
    update(tabId, updateProperties) {
        return new Promise((resolve) => chrome.tabs.update(tabId, updateProperties, resolve));
    }
    sendMessage(tabId, message) {
        return new Promise((resolve) => chrome.tabs.sendMessage(tabId, message, resolve));
    }
    waitComplete(tabId) {
        return new Promise((resolve) => {
            chrome.tabs.get(tabId, (tab) => {
                if (tab.status === 'complete') {
                    return resolve();
                }
                let listener = (loadTabId, changeInfo) => {
                    if (tabId !== loadTabId) {
                        return;
                    }
                    if (changeInfo['status'] !== 'complete') {
                        return;
                    }
                    chrome.tabs.onUpdated.removeListener(listener);
                    resolve();
                };
                chrome.tabs.onUpdated.addListener(listener);
            });
        });
    }
}
