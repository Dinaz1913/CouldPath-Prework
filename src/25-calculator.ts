export {};

function add(Num: number, Num2: number):number {
    return Num + Num2;
}

function subtract (a: number, b: number): number {
    return a - b;
}


function sum(array: number[]): number {
 let sumTogether: number = 0;
for (let i = 0; i < array.length; i++){
sumTogether += array[i];
}
return sumTogether
}

function multiply(array: number[]): number {
    let Multiplication: number = 1;
    for (let i = 0; i < array.length; i++){
        Multiplication *= array[i]
    }
    return Multiplication
}


function power(a: number, b: number): number {
   return Math.pow(a,b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
