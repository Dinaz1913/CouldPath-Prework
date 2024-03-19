/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
  const sortedArray = array.sort((a, b) => b - a);
  if (sortedArray.length < 2) {
    null;
  }
  return sortedArray[1];
}

export { secondLargest };
