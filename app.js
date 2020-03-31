import compareNumbers from './compareNumber.js';//import compare function from other js script export 

const myButton = document.getElementById('button'); //getting the button element
const userInput = document.getElementById('input'); //getting the input element
const userGuessSpan = document.getElementById('numberGuess');//the number the user guessed
const triesLeftOutput = document.getElementById('remaingTries');//the remaining tries left

//const numberTest =10;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
let actualNumber = getRandomInt(1, 20);
console.log(actualNumber);

function playGame() {
    const actualUserInput = userInput.value;
    //console.log(actualUserInput);
    const comparedNumbers = compareNumbers(actualUserInput, actualNumber);
    console.log(comparedNumbers);


 }
myButton.addEventListener('click',playGame);
//Gus = userInput.value
//let = 5;
//creat function which has win/loss/out of tries


//
//console.log(triesLeftOutput); //giving the tries left back to the element.