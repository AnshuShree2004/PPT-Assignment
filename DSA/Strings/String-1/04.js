function findMaxLength(nums) {
    const n = nums.length;
    let maxLen = 0;
    let count = 0;
    const sumIndices = { 0: -1 };
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 1 ? 1 : -1;
  
      if (count === 0) {
        maxLen = i + 1;
      } else if (count in sumIndices) {
        const prevIndex = sumIndices[count];
        const subarrayLen = i - prevIndex;
        maxLen = Math.max(maxLen, subarrayLen);
      } else {
        sumIndices[count] = i;
      }
    }
  
    return maxLen;
  }

  const nums = [0, 1];
console.log(findMaxLength(nums));

