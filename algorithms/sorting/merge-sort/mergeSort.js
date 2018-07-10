export default function mergeSort(arr, compare) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [...arr]

    const mid = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, mid)
    const rightArray = arr.slice(mid, arr.length)

    const sortedLeftArray = mergeSort(leftArray, compare)
    const sortedRightArray = mergeSort(rightArray, compare)

    const resultArr = []
    let leftIndex = 0
    let rightIndex = 0
    let isLeftArrayFinished = false
    let isRightArrayFinished = false

    for (let i = 0; i < arr.length; i++) {
        const leftItem = sortedLeftArray[leftIndex]
        const rightItem = sortedRightArray[rightIndex]
        
        const compareResult = compare(leftItem, rightItem)
        const compareInLeftFavour = leftItem ? compareResult === -1 || compareResult === 0 : false
        const comapreInRightFavour = rightItem ? compareResult === 1 : false

        if (compareInLeftFavour || isRightArrayFinished) {
            resultArr.push(leftItem)
            leftIndex++
        } else if (comapreInRightFavour || isLeftArrayFinished) {
            resultArr.push(rightItem)
            rightIndex++
        }

        isLeftArrayFinished = leftIndex === sortedLeftArray.length
        isRightArrayFinished = rightIndex === sortedRightArray.length
    }

    return resultArr
}