// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


//Get random lowercase letter function

function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//random upper case letter function

function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//random number function

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//random symbol

function randomSymbol() {
  const symbols = '!@#$%^&*(){}.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomNumber());


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

var randomPassword = prompt("How long would you like your password to be? Between 8-128");
// THEN I choose a length of at least 8 characters and no more than 128 characters

randomPassword >= 8 && randomPassword <= 128




// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page