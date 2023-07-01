function findOriginalArray(changed) {
    const countMap = new Map();
  
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    const original = [];
  
    for (const num of changed) {
      if (countMap.get(num) === 0) {
        continue;
      }
      if (countMap.get(num * 2) === 0) {
        return [];
      }
      original.push(num);
      countMap.set(num, countMap.get(num) - 1);
      countMap.set(num * 2, countMap.get(num * 2) - 1);
    }
  
    for (const count of countMap.values()) {
      if (count !== 0) {
        return [];
      }
    }
  
    return original;
  }
  

  const changed = [1, 3, 4, 2, 6, 8];
console.log(findOriginalArray(changed));
