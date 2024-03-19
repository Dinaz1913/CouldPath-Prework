/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string): boolean {
  let front: string[] = str.split("");
  let back: string[] = str.split("");
  for (let i = 0; i < Math.floor(str.length / 2); i++) {

    const temp = front[i];
    front[i] = back[str.length - 1 - i];
    back[str.length - 1 - i] = temp;
  }

  const frontString = front.join("");
  const backString = back.join("");
  
  return frontString === backString;
}
// Test cases
console.log(palindrome("abba")); // true
console.log(palindrome("abcdefg")); // false

export { palindrome };
