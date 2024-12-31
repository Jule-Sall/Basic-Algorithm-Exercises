
function calculateFactorial(){
    // input
    const number = document.getElementById('number').value;
    // initialize factorial to number
    let factorial = number;
    
    // find the factorial
    for(let i = (number - 1 ); i > 0; i--){
        factorial = factorial * (number - i);
    }
    // set result to factorial
    const result = document.getElementById('result');
    result.innerHTML = `${factorial}`;

}