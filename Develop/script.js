// When Generate Password button is clicked,
// prompt user:

// how long? (between 8 and 128 characters)
// include lowercase?
// include uppercase?
// include numeric?
// include special characters?

// validate input, must include 1 of the above 

// Randomize order displayed

// display generated password in textbox


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
