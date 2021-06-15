// Assignment Code

var generateBtn = document.querySelector("#generate");

//My arrays.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*",]

function generatePassword(){


  //Prompt asking for the length of the password the user would like.

  var passwordLength = parseInt(prompt("How long would you like you password to be?"))
  console.log(passwordLength) 

  //Alert telling the user to pick between 8 and 128 charecters.
  //Returns with alert if the user doesnt pick an acceptable amount of charecters for the password
  if (passwordLength < 8 || passwordLength > 128 ){ 
    alert("Your password length must be between 8 and 128 charecters");
    return;
  }
  else {

  //variables for choosing the types of charecters that the user wants

    var lowerCase = confirm("Would you like lowercase letters?");
    var upperCase = confirm("Would you like to have uppercase letters?");
    var special = confirm("Would you like special charecters?");
    var numeric = confirm("Would you like numbers?");
    var password = "";
    var finalPass = "";

    //This for will randomize all the types of charecters that the user chose

    for (var i = 0; i < passwordLength; i++) {

    //This is for lowercase

        if( lowerCase === true){
          password += letters[Math.floor(Math.random() * letters.length)];

        }

    //This is for uppercase

        if( upperCase === true){
          password += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        }

    //This is for special charecters

        if( special === true){
          password += symbols[Math.floor(Math.random() * symbols.length)];
        }

    //This is for numbers

        if( numeric === true){
          password += numbers[Math.floor(Math.random() * numbers.length)];
        }
    }
    console.log(password);

    //This for takes the length of the variable passWord length and shortens it to the users desired amount of charecters and then randomizes it
    
    for (var i = 0; i < passwordLength; i++) {
      finalPass += password.charAt(Math.floor(Math.random() * password.length));
    } 

    console.log(finalPass);

    return finalPass;
  }
  return;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
