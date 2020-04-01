import compareNumbers from './compareNumber.js';//import compare function from other js script export 

const myButton = document.getElementById('button'); //getting the button element
const userInput = document.getElementById('input'); //getting the input element
const userGuessSpan = document.getElementById('numberGuess');//the number the user guessed
const triesLeftOutput = document.getElementById('remaingTries');//the remaining tries left
const answer = document.getElementById('correctNumber');
//get
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}




let actualNumber = getRandomInt(1, 20);
console.log(actualNumber);

//making a function to decrease 4-0

//let countdown = 4; 
//countdown--;
//countdown.textContent = triesLeftOutput;
    
    
function playGame() {
    const actualUserInput = Number(userInput.value);
        //console.log(actualUserInput); works
    const result = compareNumbers(actualUserInput, actualNumber);
        //console.log(comparedNumbers); works
        
        
    function displayResult(result) {
        if (result === 0) {
            answer.textContent = 'Great Job!';
        } else if (result === 1) {
            answer.textContent = 'Nope, too high';
        } else if (result === -1) {
            answer.textContent = 'Nope, too low';
        }}
            
    displayResult(result);
}
        
        //function youGotIt() {
            //answer.textContent = 'Great Job!';
            //}
//function noDice() {
    //answer.textContent = 'Nope, try again';
//}

myButton.addEventListener('click', playGame);
