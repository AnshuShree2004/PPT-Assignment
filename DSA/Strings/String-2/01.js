function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const charMapS = {};
    const charMapT = {};
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (charS in charMapS && charMapS[charS] !== charT) {
        return false;
      }
  
      if (charT in charMapT && charMapT[charT] !== charS) {
        return false;
      }
  
      charMapS[charS] = charT;
      charMapT[charT] = charS;
    }
  
    return true;
  }

  
  const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t));  // Output: true
