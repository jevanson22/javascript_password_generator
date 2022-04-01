var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!","@","#","$","%","^","&","*","-","_","+"];
var characterChoice = [];
var newPassword = [];
function generatePassword() {
  //TODO: your code goes here
  //ask a which characters they would like to use
  if (confirm("Would you like to use lowercase letters?") == true) {
    characterChoice.push(lowerCase)
  };
  if (confirm("Would you like to use uppercase letters") == true) {
    characterChoice.push(upperCase)
  };
  if (confirm("Would you like to use numbers?") == true) {
    characterChoice.push(numbers)
  };
  if (confirm("Would you like to use special characters?") == true) {
    characterChoice.push(specialCharacters)
  };
  //ask how long to make password and pass it for loop to generate correct amount of characters
    var passwordLength = parseInt(prompt("How many characters do you want? (Answer must be between 8-128)"));
    if (passwordLength < 7 || passwordLength > 129) {
      alert("Pick a number between 8-128. Refresh to try again")
   }
  
  for (var i=0; i<=passwordLength; i++) {
   
  (characterChoice[Math.floor(Math.random) * characterChoice.length]); 
//place each output to new string for password
}   

   console.log(passwordLength)
   console.log(characterChoice)
  return "password"
}

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
