/**
 * The Collatz Conjecture or 3x+1 problem can be summarized as follows:
 *
 * Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
 *
 * Given a number n, return the number of steps required to reach 1.
 *
 * Examples:
 * Starting with n = 12, the steps would be as follows:
 *
 *     0. 12
 *     1. 6
 *     2. 3
 *     3. 10
 *     4. 5
 *     5. 16
 *     6. 8
 *     7. 4
 *     8. 2
 *     9. 1
 *    10.
 *    11.-9
 *
 * Resulting in 9 steps. So for input n = 12, the return value would be 9.
 */

function steps(n: number): number {
  let num: number = n;
  let count = 0;

  if (num <= 0 || isNaN(num)) {
    throw new Error("Only positive numbers are allowed");
  }
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return count;
}

export { steps };
