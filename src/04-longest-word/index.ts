/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */
//
function longestWord(sen: string): string {
  const words: string[] = sen.split(" ");

  if (sen === "") {
    return "Empty string";
  } else {
    let longest = "";
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i].replace(/[^\w]/g, ""); 
      if (currentWord.length > longestLength) {
        longest = currentWord;
        longestLength = currentWord.length;
      }
    }
    
    return longest;
  }
}

console.log(longestWord("Hello there")); 
console.log(longestWord("My name is Adam")); 
console.log(longestWord("fun&!! time")); 

export { longestWord };
