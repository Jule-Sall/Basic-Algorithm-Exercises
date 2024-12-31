// Use recursion to find of a number
function power(number, raise){
    if(raise === 0){
        return 1;
    }
    if (raise < 0) {
        return 1 / power(number, -raise);
    }

    return number * power(number, raise - 1);
}
function calculatePower(){
    const inputNumber = Number(document.getElementById('inputNumber').value);
    const inputRaise =  Number(document.getElementById('inputRaise').value);
    const result = document.getElementById('result');
    result.innerHTML = `Power of ${inputNumber} is: <b>${power(inputNumber, inputRaise)}</b>`
}