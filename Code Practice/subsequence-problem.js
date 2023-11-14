// 比較第二個個字串有沒有包含第一個字，不能調換順去，但可以砍掉不要的字。

function sub(str1, str2) {
  if (str1.length === 0) return true;

  let P1 = 0;
  let P2 = 0;

  while (P2 < str2.length) {
    if (str1[P1] === str2[P2]) {
      P1++;
    }
    P2++;
    if (P1 >= str1.length) return true;
  }
  return false;
}

console.log(sub("book", "brooklyn")); // true
console.log(sub("hello", "hello Dear")); // true
console.log(sub("abc", "bac")); //false
