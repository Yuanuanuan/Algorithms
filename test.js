function foo(x) {
  console.log(x);
}

const arr = new Array(1);
arr.length = 2;
arr.push(2);
arr.push(0);

for (const num in arr) {
  foo(num);
  foo(arr[num]);
}
