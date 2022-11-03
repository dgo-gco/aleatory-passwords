const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];

let firstPassword = document.querySelector('.password-one');
let secondPassword = document.querySelector('.password-two');
let passwordLength = 15;


function getRandomPassword() {
   let getRandomCharacter = Math.floor(Math.random() * characters.length);
   return characters[getRandomCharacter];
}

function createPasswords() {
    let randomPassword = " ";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomPassword();
    } return randomPassword;
}

function generateUserPassword() {
    let passwordOne = createPasswords();
    let passwordTwo = createPasswords();
    firstPassword.textContent = passwordOne;
    secondPassword.textContent = passwordTwo;
}



