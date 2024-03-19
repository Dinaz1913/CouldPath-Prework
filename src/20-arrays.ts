export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

const stringToArray = function(names: string[]): string[][] {
    const result: string[][] = [];
    for (let i = 0; i < names.length; i++) {
        const persons = names[i];
         result.push(persons.split(' '))
}
return result
}
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']vconsole.log(stringToArray(["John Doe"]));
console.log(stringToArray(["John Doe", "Jānis Kalniņš", "Marija Elizabete Kalniņa - Liepiņa Doe"]));

