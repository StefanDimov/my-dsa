import LinkedListNode from './LinkedListNode'

// TODO: Introduce `comperator` function for proper find and delete method implementation

export default class LinkedList {
    constructor() {
        this.head = null
    }

    insert(value) {
        const node = new LinkedListNode(value, this.head)
        this.head = node
    }

    deleteHead() {
        if (this.head === null) return
        this.head = this.head.next
    }

    find(value) {
        let current = this.head
        while(current !== null) {
            if (current.data === value) {
                return current
            }
            current = current.next
        }

        return null
    }

    delete(value) {
        // if list is empty
        if (this.head === null) {
            return;
        }

        // if head is the node to delete
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        // if the value is on some other node
        let current = this.head
        while(current !== null) {
            if (current.next.data === value) {
                current.next = current.next.next
                break;
            }
            current = current.next
        }
    }

    toString() {
        const allData = [];
        let current = this.head
        while(current !== null) {
            allData.push(current.data)
            current = current.next
        }

        return allData
            .map(x => x.toString())
            .join(', ')
    }
}