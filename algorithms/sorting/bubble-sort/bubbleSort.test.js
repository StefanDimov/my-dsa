import bubbleSort from './bubbleSort'

const compareInc = (a, b) => 
    a > b ? 1 :
    a < b ? -1 :
    0

const compareDes = (a, b) =>
    a < b ? 1 :
    a > b ? -1 :
    0

describe('bubbleSort', () => {
    it('should return empty array if given array is empty', () => {
        expect(bubbleSort([])).toEqual([])
    })

    it('should return array if given array is with only one element', () => {
        expect(bubbleSort([5])).toEqual([5])
    })

    it('should sort array by given compare func', () => {
        const arr = [3, 1, 2, 4, 5]
        expect(bubbleSort(arr, compareInc)).toEqual([1, 2, 3, 4, 5])
        expect(bubbleSort(arr, compareDes)).toEqual([5, 4, 3, 2, 1])
    })
})