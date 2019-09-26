// 算法：递归（js可以取中间值，所以直接拿取中间值）

function quickSort(arr) {
    if (arr.length <= 1) return arr

    let left = []
    let right = []
    let middleIndex = Math.floor(arr.length / 2)
    let middle = arr.splice(middleIndex, 1) // 数组取用/连接较为方便
    arr.forEach(item => middle > item ? left.push(item) : right.push(item))

    return quickSort(left).concat(middle).concat(quickSort(right))
}
console.log(quickSort([12,2,3, 23,8]))