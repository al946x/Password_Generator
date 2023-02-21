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
pwLength=prompt('Please Choose a Password Length Between 10 and 64 Characters')
}
var uppercaseConfirmation = confirm('Would You Like Uppercase Letters in Your Password?')
if (uppercaseConfirmation === true) { 
  userChoices = userChoices.concat(upperCasedCharacters)
  
}
var lowercaseConfirmation = confirm('Would You Like Lowercase Letters in Your Password?')
if (lowercaseConfirmation === true) { 
  userChoices = userChoices.concat(lowerCasedCharacters)
  
}
var numericConfirmation = confirm('Would You Like Numbers in Your Password?')
if (numericConfirmation === true) { 
  userChoices = userChoices.concat(numericCharacters)
  
}
var specialCharConfirmation = confirm('Would You Like Special Characters in Your Password?')
if (specialCharConfirmation === true) { 
  userChoices = userChoices.concat(specialCharacters)
  
}
if (uppercaseConfirmation===false&&lowercaseConfirmation===false&&numericConfirmation===false&&specialCharConfirmation===false) {
  alert('You Have to Choose At Least One Type of Character to Generate Your Password')
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