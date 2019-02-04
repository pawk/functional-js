const mergeSort = (arr = []) => {
    if (arr.length === 1) {
        return arr
    } else if (arr.length === 2) {
        arr.sort((a, b) => a - b)
        return arr
    }

    const pivot = ~~(arr.length / 2)
    return _mergeSorted(mergeSort(arr.slice(0, pivot)), mergeSort(arr.slice(pivot)))
}

const _mergeSorted = (arr1, arr2) => {
    const a1 = [...arr1]
    const a2 = [...arr2]
    const ret = []

    do {
        ret.push(((a1[0] <= a2[0]) || !a2.length) ? a1.shift() : a2.shift())
    } while (a1.length + a2.length)
 
    return ret
}


console.log(mergeSort([2, 1, 445, 3, 4, 1, 1, 312, 8, 12, 57, 9, 6, 7, 12]));