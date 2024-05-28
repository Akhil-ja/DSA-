// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, n) {
  if (n === 0) {
    return 1;
  }

  return a * power(a, n - 1);
}

console.log(power(2, 2));
