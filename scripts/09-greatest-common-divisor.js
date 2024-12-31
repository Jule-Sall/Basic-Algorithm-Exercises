// Find the Greatest Common Divisor between 2 numbers using the Euclidean Algorithm
function findGCD(){
    const number1 = Number(document.getElementById('inputNumber1').value);
    const number2 = Number(document.getElementById('inputNumber2').value);

    let smallerNumber, largerNumber;
   
    if(number1 < number2){
        smallerNumber = number1;
        largerNumber  = number2;
    }
    else{
        smallerNumber = number2;
        largerNumber  = number1;
    }
    

    let remainder;
    while (smallerNumber !== 0) {
        remainder = largerNumber % smallerNumber;
        largerNumber = smallerNumber;
        smallerNumber = remainder;
    }
    const result = document.getElementById('result');
    result.innerHTML = `Greatest Common Divisor: <b>${largerNumber}</b>`;
    
}