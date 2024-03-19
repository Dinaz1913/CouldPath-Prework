export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

function min(Num: number[]): number {
    if (Num.length === 0) { // Check if the array is empty
        return NaN; // Return NaN if the array is empty
    }

    let least: number = Num[0]; // Initialize least with the first element of the array

    for (let i = 0; i < Num.length; i++) { // Loop through the array starting from index 1
        if (Num[i] < least) { // Compare each element with the current least
            least = Num[i]; // Update least if a smaller element is found
        }
    }

    return least; // Return the smallest element found
}


function max(Num2: number[]): number {
    if (Num2.length === 0) { // Check if the array is empty
        return NaN; // Return NaN if the array is empty
    }

    let least2: number = Num2[0]; // Initialize least with the first element of the array

    for (let i = 0; i < Num2.length; i++) { // Loop through the array starting from index 0
        if (Num2[i] > least2) { // Compare each element with the current least
            least2 = Num2[i]; // Update least if a larger element is found
        }
    }

    return least2; // Return the smallest element found
}

//const max = array => {};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
