// Use recursion to find of a number
function power(number, raise){
    if(raise === 1){
        return number;
    }
    return number * power(number, raise - 1);
}
function calculatePower(){
    const inputNumber = document.getElementById('inputNumber').value;
    const inputRaise = document.getElementById('inputRaise').value;
    const result = document.getElementById('result');
    result.innerHTML = `Power of ${inputNumber} is: <b>${power(inputNumber, inputRaise)}</b>`
}