/**Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example 1:**

**Input:** nums = [4,3,2,7,8,2,3,1]

**Output:**

[2,3] */

function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const num = Math.abs(nums[i]);
      if (nums[num - 1] < 0) {
        result.push(num);
      } else {
        nums[num - 1] *= -1;
      }
    }
  
    return result;
  }
  

  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const duplicates = findDuplicates(nums);
console.log(duplicates);