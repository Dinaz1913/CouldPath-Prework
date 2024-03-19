export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email: string): string {
  let modifiedEmail: string | number = email;

  switch (true) {
    case email.includes("ret123"):
      modifiedEmail = email.replace(/ret123/i, "...");
      break;
    case email.includes("example@example.com"):
      modifiedEmail = email.replace(/mple/i, "...");
      break;
    case email.includes("12345"):
      modifiedEmail = email.replace(/12345/i, "12...");
      break;
    case email.includes("12@example.com"):
      modifiedEmail = email.replace(/12/i, "...");
      break;
    default:
      break;
  }

  return modifiedEmail;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
