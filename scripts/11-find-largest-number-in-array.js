/**
 * Finds the two largest numbers in an array and displays them in the HTML element with id 'result'.
 * The input array is taken from the value of the HTML element with id 'inputArray'.
 * Assumes the input array has at least two elements.
 */
// this function finds the two largest numbers in an array
function findLargestNumbers(){
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);

    let largestNumbers = [];
    if(inputArray[0] > inputArray[1]){
        largestNumbers.push(inputArray[0]);
        largestNumbers.push(inputArray[1]);
    }
    else{
        largestNumbers.push(inputArray[1]);
        largestNumbers.push(inputArray[0]);
    }
   

    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i] > largestNumbers[0]){
            largestNumbers[1] = largestNumbers[0];
            largestNumbers[0] = inputArray[i];
        }
        else if(inputArray[i] > largestNumbers[1]){
            largestNumbers[1] = inputArray[i];
        }
    }
    const result = document.getElementById('result');
    result.innerHTML = `The two largest numbers in the array are: <b>${largestNumbers}</b>`;

}