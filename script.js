// Assignment Code
var generateBtn = document.querySelector("#generate");

// Putting the generate password function into the write password function
function writePassword () {
function generatePassword () {

// Prompt to get desired character length 
var charLength = prompt("How many characters would you like in your new password? (Pick between 8-80)");

// Run program if character length is between 8-80
if ((charLength >=8 ) && (charLength <= 80)) {
}

// Create variables for password generator 
var symbols = "1@#$%^&*";
var numbers = "123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Prompt user with which type of characters that they would like to use
var genSymbols = confirm("Would you like to use special characters?");
var genNumbers = confirm("Would you like to use numbers?");
var genLowerCase = confirm("Would you like to use lowercase letters?");
var genUpperCase = confirm("Would you like to use uppercase letters?");

// Create an array that combines the new characters together
var password = [10];
i = 0;
newPassword= "";
while( i < password.length) {
  
password[i] = symbols + numbers +lowerCase + upperCase;
  if ((genSymbols === true ) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
    for (j = 0; j < charLength; j++) {
      var character = Math.floor(Math.random() * password[i].length);
      newPassword += password[i].charAt(character, character + 1);
  }
  console.log(newPassword);
  i++;
   document.getElementById('password').innerHTML = newPassword;
}
}
}
var password = generatePassword();
var passwordText = document.querySelector('password');
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);