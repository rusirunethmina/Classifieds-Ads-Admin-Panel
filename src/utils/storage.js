
export default {
    setItem(key, val) {
        console.log(val.data)
        // let storage = this.getStorage()
        // storage[key] = val
        window.localStorage.setItem(key,JSON.stringify(val.data.data))
    },
    getItem(key) {
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem() || "{}")
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.clear()
    }
}
