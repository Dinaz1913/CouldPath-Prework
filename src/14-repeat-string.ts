export {};

const repeatString = (str: string, n: number) => {
return str.repeat(n)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
