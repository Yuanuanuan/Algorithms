// 檢查一段字串是不是回文(也就是從前面讀跟從後面讀有沒有一樣)


function palindrome1(str) {
  return str.split("").reverse().join("") === str;
}


function palindrome2(str) {
  let right = str.length - 1;
  let left = 0;

  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
    return true;
  }
}


console.log(palindrome1("tacocat"));
console.log(palindrome1("foobar"));
console.log(palindrome1("amanaplanacanalpanama"));

console.log(palindrome2("tacocat"));
console.log(palindrome2("foobar"));
console.log(palindrome2("amanaplanacanalpanama"));
