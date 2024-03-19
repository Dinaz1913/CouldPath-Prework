/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string): number {
  const VowelArray: string[] = s.toLowerCase().split("");
  let count: number = 0;
  for (let char of VowelArray) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count++;
}

export { vowels };
