/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */
//1.captitalize first char in each string
//2.return as string
//3.
//4.
//5.
//6.

function capitalize(str: string): string {
  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1); // tika modificēti jaunā map array elementi un izmainīta vērtība, līdz ar to pievienoju vārda otru daļu
  });
  return capitalizedWords.join(" ");// savienoju lielo burtu ar pārējo atlikušo daļu no jaunā array
}

console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working!"));

export { capitalize };
