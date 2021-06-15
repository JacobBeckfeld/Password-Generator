// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*",]

function generatePassword(){

  var length = parseInt(prompt("How long would you like you password to be?"))
  console.log(length) 
  if (length < 8 || length > 128 ){ 
    alert("Your password length must be between 8 and 128 charecters");
    return;
  }
  var lowerCase = confirm("Would you like lowercase letters?")
  var upperCase = confirm("Would you like to have uppercase letters?")
  var 
    if (lowerCase === false)

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
