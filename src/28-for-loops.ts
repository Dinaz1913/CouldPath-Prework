export {};

/**
 * Psst! Want a hint? Try using a for loop for this exercise.
 * If you need some more theory first, here are a few resources that will definitely help:
 *  - https://www.w3schools.com/js/js_loop_for.asp
 *  - https://javascript.info/while-for#the-for-loop
 *  - https://www.youtube.com/watch?v=wxds6MAtUQ0 (Intro to Programming: Loops)
 *  - https://www.youtube.com/watch?v=Kn06785pkJg (JavaScript Loops Made Easy)
*/

function goThroughNumbers(start: number, end: number): void {
    if (start > end) {
        console.log('invalid input');
        return; // Exit the function if start is greater than end
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(`${i} - even`);
        } else {
            console.log(`${i} - odd`);
        }
    }
}
// 1. step = compare if first letter greater than second and return to exit function, that means I start comparing 
// 2. step = for loop numbers comparing if pair or not 
// 3. step = log out looped numbers and display if pair or not
goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
