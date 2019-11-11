// 数组只需要交换下标即可，同c++代码
function reverse(arr) {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        changedIndex(left, right, arr)
        left++
        right--
    }
    return arr
}

function changedIndex(left, right, arr) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

console.log(reverse([1,2,23,12]))