// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var pwLength = 0; 
var userChoices = [ ];
var results = "";

// Function to prompt user for password options
function getPasswordOptions() {
while (parseInt(pwLength)<10||parseInt(pwLength)>64||parseInt(pwLength)==''||isNaN(parseInt(pwLength))) { 
pwLength=prompt('please choose a password length between 10 and 64 characters')
}
var uppercaseConfirmation = confirm('would you like uppercase letters in your password?')
if (uppercaseConfirmation === true) { 
  userChoices = userChoices.concat(upperCasedCharacters)
  
}
var lowercaseConfirmation = confirm('would you like lowercase letters in your password?')
if (lowercaseConfirmation === true) { 
  userChoices = userChoices.concat(lowerCasedCharacters)
  
}
var numericConfirmation = confirm('would you like numbers in your password?')
if (numericConfirmation === true) { 
  userChoices = userChoices.concat(numericCharacters)
  
}
var specialCharConfirmation = confirm('would you like special characters in your password?')
if (specialCharConfirmation === true) { 
  userChoices = userChoices.concat(specialCharacters)
  
}
if (uppercaseConfirmation===false&&lowercaseConfirmation===false&&numericConfirmation===false&&specialCharConfirmation===false) {
  alert('you have to choose at least one type of character to generate your password')
  window.location.reload()
}
}

// Function for getting a random element from an array
// function getRandom(arr) {
//   arr[Math.floor(Math.random()*arr.length)]
// }

// Function to generate password with user input
function generatePassword() {
getPasswordOptions() 

for (let i=0, n=userChoices.length; i<parseInt(pwLength); i++) {
results+=userChoices[Math.floor(Math.random()*n)]
}
return results
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);