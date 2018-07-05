import LinkedListNode from './LinkedListNode'

describe('LinkedListNode', () => {
    it('should set properly the data', () => {
        const node = new LinkedListNode(5)
        expect(node.data).toEqual(5)
        expect(node.next).toBeNull()
    })

    it('should set properly the next link node', () => {
        const nextNode = new LinkedListNode('Hello')
        const node = new LinkedListNode(5, nextNode)
        expect(node.data).toEqual(5)
        expect(node.next).toBe(nextNode)
    })

    it('should properly implement toString method', () => {
        const node = new LinkedListNode('string-test')
        expect(node.toString()).toEqual('string-test')

        const obj = { a: 1, b: '2' }
        const node2 = new LinkedListNode(obj)
        expect(node2.toString()).toEqual(JSON.stringify(obj))

        const arr = [1, 2, 3]
        const node3 = new LinkedListNode(arr)
        expect(node3.toString()).toEqual(JSON.stringify(arr))
    })
})