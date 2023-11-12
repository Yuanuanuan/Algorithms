// Worst Case Performance: O(n^2)
// Best Case Performance: O(n^2)
// Average Case Performance: O(n^2)

const arr = [4, 7, 9, 12, 6, 5, 1, 0];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
