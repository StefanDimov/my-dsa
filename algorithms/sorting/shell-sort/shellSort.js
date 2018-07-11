import insertionSort from '../insertion-sort/insertionSort'

export default function shellSort(arr, compare) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [...arr]

    const arrCopy = [...arr]

    let interval = Math.floor(arr.length / 2)

    while(interval > 1) {

        for (let i = 0; i < arrCopy.length - interval; i++) {
            const compareResult = compare(arrCopy[i], arrCopy[i + interval])
    
            if (compareResult === 1) {
                const temp = arrCopy[i]
                arrCopy[i] = arrCopy[i + interval]
                arrCopy[i + interval] = temp
            }
        }

        interval = Math.floor(interval / 2)
    }

    return insertionSort(arrCopy, compare)
}