/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number): void {
  for (let step = 0; step < n; step++) {
    let step1 = "";
    for (let option = 0; option < n; option++) {
      step1 += option <= step ? "#" : " ";
    }
    console.log(step1);
  }
}
steps(2);
steps(3);
steps(4);

export { steps };
