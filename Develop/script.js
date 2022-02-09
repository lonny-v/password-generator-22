// When Generate Password button is clicked:
//    *** add event listener on button

// prompt user:
//    *** window.prompt/confirm:
// how long? (between 8 and 128 characters)
// include lowercase?
// include uppercase?
// include numeric?
//    *** list all letters and numbers
// include symbols?
//    *** look up charset="UTF-8", list all special characters
//    ***    " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// validate input, must include 1 of the above

// Randomize order variables are displayed

// display generated password in textbox after all prompts are answered



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

function generatePassword() {

  var length = parseInt(prompt("Choose a password length between 8 and 128 characters"));

  // if (length < 8 || length > 128) {
    if (length < 8 || length > 128 || typeof length === 'string') {
    return "Please enter a valid number";
  }
  else {
    var includeLower = confirm("Include lowercase letters?");
    var includeUpper = confirm("Include uppercase letters?");
    var includeNumber = confirm("Include numbers?");
    var includeSymbol = confirm("Include special characters?");

    if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
      return "Please select at least one option";
    }
    else {
      var counter = 0;
      var password = '';

      while (counter < length) {
        if (includeLower && counter <= length) {
          password += getRandLower() // add random lowercase letter to password
          counter++ //increase generated password length up to this point by 1
        }
        if (includeUpper && counter <= length) {
          password += getRandUpper()
          counter++
        }
        if (includeNumber && counter <= length) {
          password += getRandNumber()
          counter++
        }
        if (includeSymbol && counter <= length) {
          password += getRandSymbol()
          counter++
        }

        // add randomizer here 
        
      }
      return password
    }
  }
}

//Get random i of arrays
function getRandLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

function getRandSymbol() {
  const symbol = '!@#$%^&*(){}[]=<>/,.';
  return symbol[Math.floor(Math.random() * symbol.length)];
}