export {};

const count = (string1: string, string2: string): number => {
  const newArrCount: string[] = string1.toLowerCase().split(" ");
  let frequency = 0;
  for (const word of newArrCount) {
    if (word === string2) {
      frequency++; // kad statments atrada vārdu, tas saskaita daudzumu
    }
  }
  return frequency;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
