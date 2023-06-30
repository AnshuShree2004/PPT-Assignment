/**<aside>
💡 **Question 8**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

</aside> */

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return []; 
    }
  
    const frequencyMap = new Map();
    const original = [];
  
    for (let i = 0; i < changed.length; i++) {
      if (changed[i] % 2 !== 0) {
        return [];
      }
  
      const half = changed[i] / 2;
  
      if (frequencyMap.has(half) && frequencyMap.get(half) > 0) {
        original.push(half);
        frequencyMap.set(half, frequencyMap.get(half) - 1);
      } else {
        frequencyMap.set(changed[i], (frequencyMap.get(changed[i]) || 0) + 1);
      }
    }
  
    if (frequencyMap.size > 0) {
      return []; 
    }
  
    return original;
  }
  
  const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
