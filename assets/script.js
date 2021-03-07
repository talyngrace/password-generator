// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (randomLower, randomUpper, randomSymbol, randomNumber)

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//dominate elements

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//object of all functions

const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

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

//return

console.log(randomNumber());
console.log(randomLower());
console.log(randomUpper());
console.log(randomUpper());
console.log(randomSymbol());