import LinkedList from './LinkedList'
import LinkedListNode from './LinkedListNode'

describe('LinkedList', () => {
    it('should set properly the head when initialized', () => {
        const list = new LinkedList()
        expect(list.head).toBeNull()
    })

    describe('insert()', () => {
        it('should properly insert when there is no nodes in list', () => {
            const value = 'value'
            const list = new LinkedList()
            list.insert(value)
            expect(list.head.data).toEqual(value)
        })

        it('should properly insert when there are nodes in list', () => {
            const value = 'value'
            const value2 = 'value2'

            const list = new LinkedList()
            list.insert(value)
            list.insert(value2)

            expect(list.head.data).toEqual(value2)
            expect(list.head.next.data).toEqual(value)
        })
    })

    describe('deleteHead()', () => {
        it('should properly delete when there is no nodes in list', () => {
            const list = new LinkedList()
            list.deleteHead()
            expect(list.head).toBeNull()
        })

        it('should properly delete when there is one node', () => {
            const value = 'value'
            const list = new LinkedList()

            list.insert(value)
            expect(list.head.data).toEqual(value)

            list.deleteHead()
            expect(list.head).toBeNull()
        })

        it('should properly delete when there is more than one nodes', () => {
            const value = 'value'
            const value2 = 'value2'

            const list = new LinkedList()
            list.insert(value)
            list.insert(value2)

            list.deleteHead()
            expect(list.head.data).toEqual(value)
        })
    })

    describe('find()', () => {
        it('should return null when node is not found in empty list', () => {
            const list = new LinkedList()
            expect(list.find(4)).toBeNull()
        })

        it('should return null when node is not found in list with nodes', () => {
            const list = new LinkedList()
            list.insert(1)
            list.insert(2)
            list.insert(3)

            expect(list.find(4)).toBeNull()
        })

        it('should return the LinkedListNode when found', () => {
            const list = new LinkedList()
            list.insert(1)
            list.insert(2)
            list.insert(3)

            const foundNode = list.find(2)
            expect(foundNode.data).toEqual(2)
            expect(foundNode instanceof LinkedListNode).toEqual(true)
        })
    })

    describe('delete()', () => {
        it('should not throw when deleting value that is not present', () => {
            const list = new LinkedList()
            list.delete(4)
        })

        it('should delete item by value', () => {
            const list = new LinkedList()
            list.insert(3)
            list.insert(2)
            list.insert(1)

            expect(list.toString()).toEqual('1, 2, 3')
            list.delete(2)
            expect(list.toString()).toEqual('1, 3')
        })

        it('should delete head properly', () => {
            const list = new LinkedList()
            list.insert(3)
            list.insert(2)
            list.insert(1)

            expect(list.toString()).toEqual('1, 2, 3')
            list.delete(1)
            expect(list.toString()).toEqual('2, 3')
        })

        it('should delete only first occurence of value', () => {
            const list = new LinkedList()
            list.insert(3)
            list.insert(2)
            list.insert(1)
            list.insert(2)

            expect(list.toString()).toEqual('2, 1, 2, 3')
            list.delete(2)
            expect(list.toString()).toEqual('1, 2, 3')
        })
    })

    describe('toString()', () => {
        it('should properly display empty list', () => {
            const list = new LinkedList()
            expect(list.toString()).toEqual('')
        })

        it('should properly display list with one node', () => {
            const list = new LinkedList()
            list.insert(1)
            expect(list.toString()).toEqual('1')
        })

        it('should properly display list with more than one node', () => {
            const list = new LinkedList()
            list.insert(3)
            list.insert(2)
            list.insert(1)

            expect(list.toString()).toEqual('1, 2, 3')
        })
    })
})