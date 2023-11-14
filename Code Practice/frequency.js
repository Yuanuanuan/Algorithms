// 檢查兩個字串出現的字母有沒有一樣，順序不重要

function frequency(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let counter1 = {};
  let counter2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  console.log(counter1, counter2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
    if (!counter2[key]) return false;
  }

  return true;
}

console.log(frequency('abbc', 'aabc')) // false
console.log(frequency('abba', 'abab')) // true