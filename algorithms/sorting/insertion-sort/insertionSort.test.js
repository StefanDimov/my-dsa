import insertionSort from './insertionSort'

const compareInc = (a, b) => 
    a > b ? 1 :
    a < b ? -1 :
    0

const compareDes = (a, b) =>
    a < b ? 1 :
    a > b ? -1 :
    0

describe('insertionSort', () => {
    it('should return empty array if given array is empty', () => {
        expect(insertionSort([])).toEqual([])
    })

    it('should return array if given array is with only one element', () => {
        expect(insertionSort([5])).toEqual([5])
    })

    it('should sort array by given compare func', () => {
        const arr = [3, 1, 2, 4, 5]
        expect(insertionSort(arr, compareInc)).toEqual([1, 2, 3, 4, 5])
        expect(insertionSort(arr, compareDes)).toEqual([5, 4, 3, 2, 1])
    })
})