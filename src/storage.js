export default class _ {
    getLocal(keys) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(keys, (items) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError.message);
                }
                resolve(items);
            });
        });
    }
    setLocal(items) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set(items, () => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError.message);
                }
                resolve();
            });
        });
    }
}
