/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  let result = "";
  const words = input.split(/[\s-_]+/g);
  words.forEach((word) => {
    const cleanWord = word.replace(/\W/g, "");
    if (cleanWord.length > 0) {
      result += cleanWord[0].toUpperCase();
    }
  });
  return result;
}

export { parse };
