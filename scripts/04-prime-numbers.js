function checkPrime(){
    // input
    const number = document.getElementById('numberInput').value;

    // result
    const result = document.getElementById('result');
    
    // check if input is greater than 1
    if(number <= 1){
        result.style.color = 'red';
        result.innerHTML = 'must enter a value greater than 1';
        return;
    }
    // reset the styling
    result.style.color = 'black';

    // check if input is a prime number
    if(number != 2 && number % 2 === 0 ||
       number != 3 && number % 3 === 0
    ){
        result.innerHTML = `${number} is <b>not a prime number</b>`;  
    }
    else{
        result.innerHTML = `${number} is <b>a prime number</b>`;  
    }
}