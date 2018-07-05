export default class LinkedListNode {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }

    toString() {
        const isObject = typeof this.data === 'object'
        const isArray = Array.isArray(this.data)
        return isObject || isArray ? JSON.stringify(this.data) : this.data.toString()
    }
}