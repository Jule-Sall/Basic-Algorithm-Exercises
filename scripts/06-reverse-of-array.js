function reverseArray(){
    // input

    const inputString = document.getElementById('arrayInput').value;
    
    // split the input string by commas and convert to numbers
    let inputArray = inputString.split(',').map(Number);

    const lastPos = inputArray.length - 1;
    for(let currentPos = 0; currentPos < inputArray.length / 2; currentPos++){
        const temp = inputArray[currentPos];
        inputArray[currentPos] = inputArray[lastPos - currentPos];
        inputArray[lastPos - currentPos] = temp;
        
    }
    console.log(inputArray);

    // output result
    const result = document.getElementById('result');
    result.innerHTML = `reverse array: ${inputArray}`;
    
    
}