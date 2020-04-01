import compareNumbers from './compareNumber.js';//import compare function from other js script export 

const myButton = document.getElementById('button'); //getting the button element
const guessOut = document.getElementById('numberGuess');//the number the user guessed
const userInput = document.getElementById('input'); //getting the input element

function goNow() {
    const userInput = document.getElementById('input');
    const guessOutput = userInput.value;
    const guessOut = document.getElementById('numberGuess');
    guessOut.textContent = guessOutput;
    //console.log(guessOutput);
}
myButton.addEventListener('click', goNow);

function trybutton() {
    let countdown = 4;
    const clickDecrease = countdown --;
    const tries = document.getElementById('remaingTries');
    tries.textContent = clickDecrease;
    //console.log(trybutton); works
}
myButton.addEventListener('click', trybutton);

//const triesLeftOutput = document.getElementById('remaingTries');//the remaining tries left
const answer = document.getElementById('correctNumber');

//math function found to work
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

let actualNumber = getRandomInt(1, 20);
//console.log(actualNumber);


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
              

myButton.addEventListener('click', playGame);
