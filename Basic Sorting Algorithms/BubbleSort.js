// 冒泡排序
// 會把兩個相鄰的物件互換
// 很簡單但是沒有人在用

function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapping = true;
        step++;
      }
    }
    if (swapping == false) {
      break;
    }
  }
  console.log(step);
  return arr;
}

console.log(bubbleSort([2, 4, 7, 1, 8]));
console.log(bubbleSort([1, 2, 3, 4, 0, 5, 6, 7]));
