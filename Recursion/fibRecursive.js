// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

// function fib(n) {
//   if (n <= 2) return 1;

//   let prevPrev = 1;
//   let prev = 1;
//   let current = 0;

//   for (let i = 3; i <= n; i++) {
//     current = prev + prevPrev;
//     prevPrev = prev;
//     prev = current;
//   }

//   return current;
// }