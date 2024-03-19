/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */


class Words {
  count(str: string): { [key: string]: number } {
    const word: string[] = str.toLowerCase().split(/\s+/);

    const occurrences: { [key: string]: number } = {};

    word.forEach((word) => {
      const wordTrimed = word.trim();
      if (wordTrimed) {
        if (!Object.prototype.hasOwnProperty.call(occurrences, wordTrimed)) {
          occurrences[wordTrimed] = 1;
        } else {
          occurrences[wordTrimed]++;
        }
      }
    });

    return occurrences;
  }
}

export { Words };