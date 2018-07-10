export default function bubbleSort(arr, compare) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [...arr]

    const arrClone = [...arr]

    for (let i = 0; i < arrClone.length; i++) {
        let isSwapped = false

        for (let j = 0; j < arrClone.length; j++) {
            if (compare(arrClone[j], arrClone[j + 1]) === 1) {
                const temp = arrClone[j]
                arrClone[j] = arrClone[j + 1]
                arrClone[j + 1] = temp
                isSwapped = true
            }
        }

        if (isSwapped === false) return arrClone
    }

    return arrClone
}