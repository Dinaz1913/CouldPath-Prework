export {};

// Function for converting to any currency with a given fee percentage
function convertCurrencyWithFee(price: number, feePercentage: number): number {
    const fee = price * (feePercentage / 100);
    return price + fee;
}

// Function for converting to USD with a 1% fee
function convertToUSD(price: number): number {
    return convertCurrencyWithFee(price, 1);
}

// Function for converting to BRL with a 1% fee
function convertToBRL(price: number): number {
    // Assuming 1 USD equals 5 BRL (you should replace this with the actual exchange rate)
   return convertCurrencyWithFee(price, 5)
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));
