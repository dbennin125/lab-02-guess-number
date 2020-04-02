const compareNumbers = (guess, correctNumber) => {
    if (correctNumber === guess) {
        return 0;
    } else if (guess < correctNumber) {
        return -1;
    } else {
        return 1;
    }};
export default compareNumbers;