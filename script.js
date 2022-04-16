function generatePassword() {
  //TODO: your code goes here

  //establish variables and arrays
var characterChoice = [];//total of all included choices
var newPassword = [];//where generated password will go
var randomChar = [];//where random character is placed
var lowerCase = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
var upperCase = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
var numbers = [49,50,51,52,53,54,55,56,57,48];
var specialCharacters = [33,64,35,36,37,94,38,42,45,95,43];

  //ask which characters user would like to use and store them in array
  if (confirm("Would you like to use lowercase letters?") == true) {
    characterChoice.push(...lowerCase)
  };
  if (confirm("Would you like to use uppercase letters") == true) {
    characterChoice.push(...upperCase)
  };
  if (confirm("Would you like to use numbers?") == true) {
    characterChoice.push(...numbers)
  };
  if (confirm("Would you like to use special characters?") == true) {
    characterChoice.push(...specialCharacters)
  };

  //ask how long to make password and pass it for loop to generate correct amount of characters
  var passwordLength = parseInt(prompt("How many characters do you want? (Answer must be between 8-128)"));
if (passwordLength < 7 || passwordLength > 129) {
      alert("Pick a number between 8-128. Refresh to try again")
   };

  //make a place to put the new password;
  var newPassword= [];

  //for loop to place a random character from chosen characters and apend to newPassword for each character of length chosen;
for (var i=0; i<passwordLength; i++) {
//make a place to put the random characters;
  var randomChar= (characterChoice[(Math.floor(Math.random() * characterChoice.length))]); 
passChar=String.fromCharCode(randomChar);
//place each output to new string for password;
newPassword= (newPassword + passChar);
}; 
  return newPassword;
};

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
