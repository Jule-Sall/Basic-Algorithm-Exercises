function reverseArray(){
    // input

    const inputString = document.getElementById('arrayInput').value;
    
    let inputArray = inputString.split("");
    inputArray = inputArray.filter(el=>{
        if(el === ' ' || el === ','){
            return false;
        }
        else{
            return true;
        }
    });
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