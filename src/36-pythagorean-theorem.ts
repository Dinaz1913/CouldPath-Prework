export {};

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is:
 * c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_
 * theorem
 *
 * You should be able to deduce which function arguments are which sides of a triangle
 * and name them in your function accordingly.
 */

const pythagoreanTheorem = (a: number, b: number): number => {
  // Pytagoras theorem use comparison of 3 squares which one of biggest is C^2(square formula c*c)(hipotenuze) and other legs a^2 and b^2
  let c: number = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  if (Math.max(a, b, c) === c) {
    return c;
  } else {
    c = Math.sqrt(b + a) - 2 * a * b;
    return c;
  }
};
// return Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)))
//};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5
