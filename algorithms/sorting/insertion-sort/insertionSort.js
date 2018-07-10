export default function insertionSort(arr, compare) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [...arr]

    const arrCopy = [...arr]
    let insertInSortedIndex = 0;

    for (let i = 1; i < arrCopy.length; i++) {
        if (compare(arrCopy[i], arrCopy[i - 1]) !== -1) {
            continue;
        }

        for (let j = i; j > 0; j--) {
            if (compare(arrCopy[j], arrCopy[j - 1]) === -1) {
                const temp = arrCopy[j]
                arrCopy[j] = arrCopy[j - 1]
                arrCopy[j - 1] = temp
            }
        }
    }

    return arrCopy
}