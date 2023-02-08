/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
m = (r + l)/2 + 1  
Input: nums = [-1,0,3,5,9,12], target = 9
                l           r
                       m
                    l = m    r
                           m1

  if arr[m] < target  : l = m
  if arr[m] > target  : r = m
  if arr[m] = target  : return m
  
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2

l   r   m 
0   5   2
0   1   0
1   1   1
2   1   X

Output: -1
Explanation: 2 does not exist in nums so return -1

*/

var search = function(arr, target)
{
  let l = 0; 
  let r = arr.length - 1;
  
  while (l <= r) {
    let m = Math.floor((r + l)/2);  
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};

//console.log(search([-1,0,3,5,9,12], 9), 'expect: 4');
//console.log(search([-1,0,3,5,9,12], 2), 'expect: -1');

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

0.  1. 2. 3. 4. 5. 6
[4, 5, 6, 7, 0, 1, 2]
l                  r
l: 0, r: 6 m: 3

l...arr[m-1] and arr[m+1]...r


if (arr[l] <= arr[m-1])
{
  // this is sorted
  if (arr[m-1] > target)
  {

  }
}
*/

var rotated_search = function(arr, target) {
  let l = 0; 
  let r = arr.length - 1;
  
  while (l <= r) {
    let m = Math.floor((r + l)/2);  
    
    if (arr[m] === target) {
      return m;
    } else if (arr[l] <= arr[m]) { // if left section is sorted
      if (arr[l] <= target && arr[m] >= target ) // is target in between l and m
      {
        r = m - 1;
      }
      else
      {
        l = m + 1;
      }
    } else if (arr[m] <= arr[r]) { // if right section is sorted
      if (arr[m] <= target && arr[r] >= target) // is target in between m and r
      {
        l = m + 1;
      }
      else
      {
        r = m - 1;
      }
    }
  }
  return -1;
};
                            // 0  1  2  3  4  5  6
console.log(rotated_search([4, 5, 6, 7, 0, 1, 2], 0), 'expect: 4');

// l   r    m
// 0   6    3
// 4   6    5
// 4   5    4
