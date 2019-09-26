// https://leetcode-cn.com/problems/binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 二分法，二分下标
    var left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) right = mid - 1 // 最大值为mid-1
        else left = mid + 1 // 最小值为mid + 1
    }
    return -1
};