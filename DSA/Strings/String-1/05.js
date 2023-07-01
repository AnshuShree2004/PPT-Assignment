function findMinProductSum(nums1, nums2) {
    const n = nums1.length;
    const sortedNums1 = nums1.sort((a, b) => a - b);
    const sortedNums2 = nums2.sort((a, b) => a - b);
    let minProductSum = Infinity;
  
    function swap(i, j) {
      const temp = sortedNums1[i];
      sortedNums1[i] = sortedNums1[j];
      sortedNums1[j] = temp;
    }
  
    function calculateProductSum() {
      let productSum = 0;
      for (let i = 0; i < n; i++) {
        productSum += sortedNums1[i] * sortedNums2[i];
      }
      return productSum;
    }
  
    function generatePermutations(k) {
      if (k === 1) {
        const productSum = calculateProductSum();
        minProductSum = Math.min(minProductSum, productSum);
      } else {
        generatePermutations(k - 1);
        for (let i = 0; i < k - 1; i++) {
          if (k % 2 === 0) {
            swap(i, k - 1);
          } else {
            swap(0, k - 1);
          }
          generatePermutations(k - 1);
        }
      }
    }
  
    generatePermutations(n);
    return minProductSum;
  }
  

  const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
console.log(findMinProductSum(nums1, nums2));
