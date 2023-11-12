// 找到一個字串中，最長有幾個字母沒有重複。
function uniqueLetterString(str) {
  let maxLength = -Infinity;
  let start = 0;
  let end = 0;
  let counter = {};

  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength === -Infinity) return null;

  return maxLength;
}

console.log(uniqueLetterString("thisishowwedoit"));
