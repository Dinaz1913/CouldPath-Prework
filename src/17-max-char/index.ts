/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
  let max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;// this is interesting
      maxChar = char;
    }
  });
  return maxChar;
}
console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));

export { maxChar };
