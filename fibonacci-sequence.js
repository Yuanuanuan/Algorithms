function fs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fs(n - 1) + fs(n - 2);
}

console.log(fs(15));
