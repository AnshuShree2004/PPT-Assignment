/**Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6 */


function maxProduct(nums){
    let maxProducts = nums[0];
for(let i =0;i<nums.length;i++){
if(nums[i]>maxProducts){
    maxProducts*=nums[i]
}
}
return maxProducts
}

const nums= [1,2,3]
const result = maxProduct(nums)
console.log(result)