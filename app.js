import compareNumbers from './compareNumber.js';//import compare function from other js script export 

const myButton = document.getElementById('button'); //getting the button element
//const guessOut = document.getElementById('numberGuess');//the number the user guessed
const usersNumber = document.getElementById('input'); //getting the input element
const answer = document.getElementById('correctNumber');//the correct number or time up 

let countdown = 4;
countdown--;
//math function found to work
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

let actualNumber = getRandomInt(1, 20);
//console.log(actualNumber); this works

    
    
function playGame() {
    const actualUserInput = Number(usersNumber.value);
        //console.log(actualUserInput); works
    const result = compareNumbers(actualUserInput, actualNumber);
        //console.log(comparedNumbers); works

    function displayResult(compNum) {
        if (compNum === 0) {
            answer.textContent = 'Great Job!';
        } else if (compNum === 1) {
            answer.textContent = 'Nope, too high';
        } else if (compNum === -1) {
            answer.textContent = 'Nope, too low';
        } 
        //function endGame(countdown) {
            //if (countdown === 0) {
                //return alert('You have lost.');
            //}       
        //}
        const usersNumber = document.getElementById('input');
        const guessOutput = usersNumber.value;
        const guessOut = document.getElementById('numberGuess');
        guessOut.textContent = guessOutput;
    //console.log(guessOutput); works
        const clickDecrease = countdown;
        const tries = document.getElementById('remaingTries');
        countdown--;
        tries.textContent = clickDecrease;
    //console.log(clickDecrease); works    
       // endGame(countdown);
    }
    displayResult(result);
    
}

myButton.addEventListener('click', playGame);