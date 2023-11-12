// 找兩個數組的超集
// 概念:一一數數組的數字出現幾次，如果出現過，就將他加1，如果沒出現過就將他設為1

function Intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};
  for (let i = 0; i < arr3.length; i++) {
    // 如果該key沒有值，代表還沒出現過，就設成1
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  // 遍歷記數好的資料，看看哪個出現超過1次
  for (let key in counter) {
    if (counter[key] > 1) {
      result.push(Number(key));
    }
  }

  return result;
}

console.log(Intersection([1, 2, 3], [5, 16, 1, 3]));
