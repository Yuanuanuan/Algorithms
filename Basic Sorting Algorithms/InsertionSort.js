// Worst Case Performance: O(n^2)
// Best Case Performance: O(n)
// Average Case Performance: O(n^2)

let unsorted = [14, -4, 17, 6, 22, 1, -5];

function insertSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }

  return arr;
}

console.log(insertSort(unsorted));
