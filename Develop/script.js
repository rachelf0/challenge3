// Array of special characters to be included
var SpecialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included
var NumericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included
var LowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included
var UpperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get password options function here
function getPasswordOptions() {

  var length = parseInt(
    prompt("Please enter the number of characters you want for a new password.")
  );

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number.");
    return;
  }

  if (length < 8) {
    alert("Password length must be greater than 8 characters.");
    return;
  }

  if (length > 128) {
    alert("Password length must be less than 128 characters.");
    return;
  }

  var specialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );


  var numbers = confirm(
    'Click OK to confirm including special characters.'
  );

  var lowerCased = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var upperCased = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (
    specialCharacters === false &&
    numbers === false &&
    lowerCased === false &&
    upperCased === false
  ) {
    alert('Must select at least one characters type.');
    return;
  }

  var passwordOptions = {
    length: length,
    specialCharacters: specialCharacters,
    numbers: numbers,
    lowerCased: lowerCased,
    upperCased: upperCased,
  };

  return passwordOptions;

}

//Function for random math selection
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.lenght);
  var randElement = arr[randIndex];

  return randElement;
}

//Function to generate password
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];

  if (options.specialCharacters) {
    possibleCharacters.push.apply(possibleCharacters, SpecialCharacters);
  }

  if (options.numbers) {
    possibleCharacters.push.apply(possibleCharacters, NumericCharacters);
  }

  if (options.lowerCased) {
    possibleCharacters.push.apply(possibleCharacters, LowerCasedCharacters);
  }

  if (options.upperCased) {
    possibleCharacters.push.apply(possibleCharacters, UpperCasedCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

//String all the characters together
  return result.join('');

}

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

