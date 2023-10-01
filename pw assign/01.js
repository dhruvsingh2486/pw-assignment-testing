
    const input = "hello world";

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Define a function to reverse the string after a 2-second delay
function reverseAfterDelay(input) {
  setTimeout(() => {
    const reversedString = reverseString(input);
    console.log("Reversed string:", reversedString);
  }, 2000); // 2 seconds in milliseconds
}

console.log("Input string:", input);
reverseAfterDelay(input);
