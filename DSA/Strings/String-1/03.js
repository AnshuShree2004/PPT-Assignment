function validMountainArray(arr) {
    const n = arr.length;
    let i = 1;
  
    if (n < 3) {
      return false;
    }
  
    while (i < n && arr[i] > arr[i - 1]) {
      i++;
    }
  
    if (i === n || i === 1) {
      return false;
    }
  
    while (i < n && arr[i] < arr[i - 1]) {
      i++;
    }
  
    return i === n;
  }
  

  console.log(validMountainArray([2, 1]));