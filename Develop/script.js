// When Generate Password button is clicked:
//    *** add event listener on button

// prompt user:
//    *** window.prompt/confirm:
// how long? (between 8 and 128 characters)
// include lowercase?
// include uppercase?
// include numeric?
//    *** list all letters and numbers
// include special characters?
//    *** look up charset="UTF-8", list all special characters
//    ***    " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// validate input, must include 1 of the above

// Randomize order variables are displayed

// display generated password in textbox after all prompts are answered

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var length = prompt("Choose a password length between 8 and 128 characters")
  prompt("Choose a password length between 8 and 128 characters");
  confirm("include lowercase letters?");
  confirm("include uppercase letters?");
  confirm("include numbers?");
  confirm("include special characters?");



  document.getElementById("password").innerHTML=length;
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
  
  
  

function getRandLower(){
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandUpper(){
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandNumber(){
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

function getRandSymbol(){
  const symbol = ' !@#$%^&*(){}[]=<>/,.';
  return symbol[Math.floor(Math.random() * symbol.length)];
}