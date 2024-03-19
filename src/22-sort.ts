export {};

const letters = ["a", "n", "c", "e", "z", "f"];

const sortAction: string[] = [];

const sortedLetters = function (letters: string[]): string[] {
    
    for (let i = 0; i < letters.length; i++) {
        // You are allowed to change only this line
        sortAction.push(letters[i]);
    }
    return sortAction.sort();
    
}

console.log(sortedLetters(letters)); // Output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]

