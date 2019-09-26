#!/usr/bin/env python
# -*- coding: UTF-8 -*-
def binary_search(nums, target): // 二分法
	low = 0
	high = len(nums) - 1

	while low <= high:
		mid = (low + high)/2
		guess = nums[mid]
		if guess == target:
			return mid
		if guess > target:
			high = mid - 1
		else:
			low = mid + 1
	return None

myList = [1, 3, 4, 6]
print(binary_search(myList, 3))
print(binary_search(myList, 5))

