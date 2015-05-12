export default class _ {
    getLocal(keys) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(keys, (...args) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError.message);
                }
                resolve.apply(this, args);
            });
        });
    }
    setLocal(items) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set(items, (...args) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError.message);
                }
                resolve.apply(this, args);
            });
        });
    }
}
