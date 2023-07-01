function reverseWords(s) {
    const words = s.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const reversedWord = word.split('').reverse().join('');
      words[i] = reversedWord;
    }
  
    return words.join(' ');
  }

  const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
