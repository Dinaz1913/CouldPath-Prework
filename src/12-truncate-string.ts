export {};

function truncateString(str: string, length: number) : string {
    let truncateStr = "";
    for (let i = 0; i < length && i < str.length; i++) {
        truncateStr += str[i];
    }
    return truncateStr;
}

console.log(truncateString("CODLEX", 6));
console.log(truncateString("CODLEX", 4));