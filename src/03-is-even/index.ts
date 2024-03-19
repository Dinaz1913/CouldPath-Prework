/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true]
 * isEven(3) === false]
 */
const EVEN_NUMS = [0, 2, 4, 6, 8];

function isEven(n: number): boolean {


  const wholeNum: string = n.toString().split(".")[0];
  console.log(wholeNum);
  const LastDigit: string = wholeNum[wholeNum.length - 1];
  return EVEN_NUMS.includes(Number(LastDigit));
}

export { isEven };
