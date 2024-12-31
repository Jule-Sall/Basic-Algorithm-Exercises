function findLargest(){
    // inputs
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;


    // make an array of the inputs
    const numbers = [num1, num2, num3];

    // initialize max to the first value in the array
    let max = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        max = numbers[i] > max ? numbers[i] : max;
    }
    // set result to max
    const result = document.getElementById('result');
    result.innerHTML = `${max}`;

}

