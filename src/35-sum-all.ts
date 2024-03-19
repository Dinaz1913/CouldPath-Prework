export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (num1: number, num2: number): number => {
  let sum: number = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4)); // Expected output: 10
console.log(sumAll(2, 8));
