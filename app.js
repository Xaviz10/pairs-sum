const prompt = require("prompt-sync")({ sigint: true });

console.log(
  "Please enter the list of numbers and the target integer(separated by space) \n-> (e.g.: 1,9,5,0,20,-4,12,16,7 12): \n "
);

const input = prompt();
const [listOfNumbers, inputSum] = input.split(" ");

if (listOfNumbers && inputSum) {
  const arrayOfNumbers = listOfNumbers.trim().split(",");
  const totalNeeded = Number(inputSum.trim());
  console.log("\n");

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const firstNumber = Number(arrayOfNumbers[i]);
    for (let y = i + 1; y < arrayOfNumbers.length; y++) {
      const secondNumber = Number(arrayOfNumbers[y]);
      if (firstNumber + secondNumber === totalNeeded) {
        console.log(`+ ${firstNumber},${secondNumber}`);
      }
    }
  }
} else {
  console.log("Try again");
}
