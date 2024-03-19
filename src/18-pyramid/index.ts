/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {
  const maxWidth: number = 2 * n - 1;
  for (let i: number = 1; i <= n; i++) {
    let str: string = "";
    const numSymbols: number = 2 * i - 1;
    const numSpaces: number = (maxWidth - numSymbols) / 2;

    for (let j: number = 0; j < numSpaces; j++) {
      str += " ";
    }
    for (let k: number = 0; k < numSymbols; k++) {
      str += "#";
    }
    for (let j: number = 0; j < numSpaces; j++) {
      str += " ";
    }
    console.log(str);
  }
}

// Test the function with different values of n
pyramid(1);
pyramid(2);
pyramid(3);

export { pyramid };
