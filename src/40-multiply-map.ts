export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = <T, U>(array1: T[], array2: (value: T) => U): U[] => {
  const newArray: U[] = [];
  for (const item of array1) {
    newArray.push(array2(item));
  }
  return newArray;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
