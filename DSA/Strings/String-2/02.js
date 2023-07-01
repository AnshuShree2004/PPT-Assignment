function isStrobogrammatic(num) {
    const rotate = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const charLeft = num[left];
      const charRight = num[right];
  
      if (!(charLeft in rotate) || rotate[charLeft] !== charRight) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }

  
  const num = "69";
console.log(isStrobogrammatic(num));  
