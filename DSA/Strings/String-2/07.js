function processString(str) {
    const stack = [];
  
    for (const ch of str) {
      if (ch !== '#') {
        stack.push(ch);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
  
    return stack.join('');
  }
  
  function backspaceCompare(s, t) {
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }

  const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));  // Output: true
