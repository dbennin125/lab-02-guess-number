import compareNumbers from './compareNumber.js';//import compare function from other js script export 

const myButton = document.getElementById('button'); //getting the button element
//const guessOut = document.getElementById('numberGuess');//the number the user guessed
const userInput = document.getElementById('input'); //getting the input element
const answer = document.getElementById('correctNumber');//the correct number or time up 

let countdown = 4 ;
countdown--;


function goNow() {
    const userInput = document.getElementById('input');
    const guessOutput = userInput.value;
    const guessOut = document.getElementById('numberGuess');
    guessOut.textContent = guessOutput;
    //console.log(guessOutput); works
    const clickDecrease = countdown;
    const tries = document.getElementById('remaingTries');
    countdown--;
    tries.textContent = clickDecrease;
    //console.log(clickDecrease); works
    
}
myButton.addEventListener('click', goNow);



//math function found to work
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

let actualNumber = getRandomInt(1, 20);
//console.log(actualNumber);

    
    
function playGame() {
    const actualUserInput = Number(userInput.value);
        //console.log(actualUserInput); works
    const result = compareNumbers(actualUserInput, actualNumber);
        //console.log(comparedNumbers); works
    
        //function timeOut() {
           // if (Number(countdown) = 0) {
           //     answer.textContent ='Game Over!' //I thought I had it..I couldn't figure this out. 
           // }
        //}

    function displayResult(result) {
        if (result === 0) {
            answer.textContent = 'Great Job!';
        } else if (result === 1) {
            answer.textContent = 'Nope, too high';
        } else if (result === -1) {
            answer.textContent = 'Nope, too low';
        } 
    }
            
    displayResult(result);
}
              

myButton.addEventListener('click', playGame);
