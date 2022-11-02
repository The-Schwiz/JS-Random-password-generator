// Define characters the password can contain:

const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

let userPasswordLength;
let userCharLower;
let userCharUpper;
let userSpecChar;
let userNumber;

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); // "&@-++#=^-_"
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptMe);



// Prompts
function promptMe() {
  // loop until length is valid
  // let lengthInvalid = true;
  let completed = promptForPassLength();
  if (!completed) {
    return; // exit the function
  }

  completed = promptForCharacterTypes();
  if (!completed) {
    return; 
  }

  // all inputs are valid
  writePassword();

}


function promptForPassLength() {
  while (true) {
    userPasswordLength = prompt("Choose a password length between 8-128 characters."); 
    if (userPasswordLength === null) {
      return false; // canclled prompt
    }
    if (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) { // check invalidity
      alert("Please enter a valid value");
    } else { // input is valid
      // lengthInvalid = false;
      break;
    }
  }
  return true; // completed the promprt
}

function promptForCharacterTypes(){
  while (true) { // loop until at least one character type is selected as "y"
    while (true) {
      userCharUpper = prompt("Do you wish to include upper case characters (y/n)?");
      if (userCharUpper === null) { // cancelled prompt
        return false; // exit from the function
      } 
      userCharUpper = userCharUpper.toLowerCase();
      if (userCharUpper === "y" || userCharUpper === "n") {
        break;
      } else {
        alert("Please enter y or n");
      }
    }

    while (true) {
      userCharLower = prompt("Do you wish to include lower case characters (y/n)?");
      if (userCharLower === null) {
        return false;
      }
      userCharLower = userCharLower.toLowerCase()
      if (userCharLower === "y" || userCharLower === "n") {
        break;
      } else {
        alert("Please enter y or n");
      }
    }

    while (true) {
      userSpecChar = prompt("Do you wish to include special characters (y/n)?");
      if (userSpecChar === null) {
        return false;
      }
      userSpecChar = userSpecChar.toLowerCase();
      if (userSpecChar === "y" || userSpecChar === "n") {
        break;
      } else {
        alert("Please enter y or n");
      }
    }

    while (true) {
      userNumber = prompt("Do you wish to include numbers (y/n)?");
      if (userNumber === null) {
        return false; 
      }
      userNumber = userNumber.toLowerCase();
      if (userNumber === "y" || userNumber === "n") {
        break;
      } else {
        alert("Please enter y or n");
      }
    }

    // validate that one of the character types selected as a "y"
    if (userCharLower === "y" || userCharUpper === "y" || userSpecChar === "y" || userNumber === "y") {
      break;

    } else {
      alert("Please select y for at least one variable.");
    }
  }
  return true;
}

function generatePassword() {
  let availableCharacters = "";
  if (userCharLower === "y") {
    availableCharacters += alphaLower;
  } 
  
  if (userCharUpper === "y") {
    availableCharacters += alphaUpper;
  }

  if (userSpecChar === "y") {
    availableCharacters += symbols;
  }

  if (userNumber === "y") {
    availableCharacters += numbers;
  }


  // availableCharacter = "abcd"
  let randomPassword = "";

  for (let i = 0; i < userPasswordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    const randomChar = availableCharacters[randomIndex];
    randomPassword += randomChar;
  }
  // generate random password
  return randomPassword;
}




function add(a, b) { // a, b are parameters
  return a + b;
}


add(1, 2); // when invoking the function add, we pass arguments (like 1, and 2) so the parameter a = 1 and b = 2
add(3, 4);


// Assignment code here


// // Get references to the #generate element

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);


// Define prompt questions:

// var userPasswordLength = prompt ("Choose a password length between 8-128 characters.");
// var userCharUpper = prompt ("Do you wish to include upper case characters (y/n)?")
// var userCharLower = prompt ("Do you wish to include lower case characters (y/n)?")
// var userSpecChar = prompt ("Do you wish to include special characters (y/n)?")