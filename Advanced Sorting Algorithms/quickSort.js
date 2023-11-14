// Worst Case Performance: O(n^2)
// Best Case Performance: O(nlogn)
// Average Case Performance: O(nlogn)

const arr = [2, 4, 1, 5, 7, 10, 8, 3, 9];

function exchange(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function partition(p, r) {
  let x = arr[r];
  let i = p - 1;

  for (let j = p; j <= r - 1; j++) {
    if (arr[j] < x) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[r];
  arr[r] = arr[i + 1];
  arr[i + 1] = temp;
  return i + 1;
}

function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

quickSort(0, arr.length - 1);
console.log(arr);
