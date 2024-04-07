import inquirer from "inquirer";
function generateRandomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}
let systemGeneratedAlphabet = generateRandomAlphabet();
let answer = await inquirer.prompt({
    type: "input",
    name: "userGuess",
    message: "Guess an alphabet between 'a' to 'z'",
});
let userGuess = answer.userGuess.toLowerCase();
if (userGuess === systemGeneratedAlphabet) {
    console.log("Congratulations! Your guessed alphabet is correct.");
}
else {
    console.log(`Oops! The correct alphabet was '${systemGeneratedAlphabet}'. Please try again.`);
}
