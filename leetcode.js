var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let maxLen = 1;
  let start = 0;

  // Функция для расширения вокруг центра
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLen = right - left + 1;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // Нечётный палиндром (центр — символ)
    expandAroundCenter(i, i + 1); // Чётный палиндром (центр — между символами)
  }

  return s.slice(start, start + maxLen);
};

console.log(longestPalindrome('abbaя'));
