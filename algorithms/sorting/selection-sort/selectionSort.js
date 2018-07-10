export default function selectionSort(arr, compare) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [...arr]

    const arrCopy = [...arr]

    for (let i = 0; i < arrCopy.length; i++) {
        let currSmallest = arrCopy[i]
        let currSmallestIndex = i
        for (let j = i + 1; j < arrCopy.length; j++) {
            if (compare(arrCopy[j], currSmallest) === -1) {
                currSmallest = arrCopy[j]
                currSmallestIndex = j
            }
        }

        if (currSmallestIndex !== i) {
            arrCopy[currSmallestIndex] = arrCopy[i]
            arrCopy[i] = currSmallest
        }
    }

    return arrCopy
}