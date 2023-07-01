function rotateString(s, goal) {
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal));  
