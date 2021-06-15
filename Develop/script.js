// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*",]

function generatePassword(){

  var passwordLength = parseInt(prompt("How long would you like you password to be?"))
  console.log(passwordLength) 

  if (passwordLength < 8 || passwordLength > 128 ){ 
    alert("Your password length must be between 8 and 128 charecters");
    return;
  }
  else {
    var lowerCase = confirm("Would you like lowercase letters?");
    var upperCase = confirm("Would you like to have uppercase letters?");
    var special = confirm("Would you like special charecters?");
    var numeric = confirm("Would you like numbers?");
    var password = "";
    var finalPass = "";

    for (var i = 0; i < passwordLength; i++) {

        if( lowerCase === true){
          password += letters[Math.floor(Math.random() * letters.length)];

        }
        
        if( upperCase === true){
          password += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        }

        if( special === true){
          password += symbols[Math.floor(Math.random() * symbols.length)];
        }

        if( numeric === true){
          password += numbers[Math.floor(Math.random() * numbers.length)];
        }
    }
    console.log(password);

    for (var i = 0; i < passwordLength; i++) {
      finalPass += password.charAt(Math.floor(Math.random() * password.length));
    } 

    console.log(finalPass);

  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
