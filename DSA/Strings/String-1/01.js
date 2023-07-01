function reconstructPermutation(s) {
    const n = s.length;
    const perm = [...Array(n + 1).keys()];
    const result = [];
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        result.push(perm.shift());
      } else {
        result.push(perm.pop());
      }
    }
  
    result.push(perm[0]);
  
    return result;
  }
 
  const s = 'IDID';
console.log(reconstructPermutation(s));
