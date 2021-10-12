export class Storage {

    static storageType = {
        localStorage: window.localStorage,
        sessionStorage: window.sessionStorage,
    }

    static get(item){
        return localStorage.getItem(item) || sessionStorage.getItem(item)
    }

    static set(item, value, type = 'localStorage') {
        Storage.storageType[type].setItem(item, value)
    }

    static clear() {
        localStorage.clear()
        sessionStorage.clear()
    }
}