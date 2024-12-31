// This function sorts an array using bubble sort
function sort(){
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);

    for(let i = 0; i < inputArray.length - 1; i++){
       for(let j = 0; j < inputArray.length; j++){
        if(inputArray[i] < inputArray[j]){
            const temp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = temp; 
        }
       }
      
    }
    const result = document.getElementById('result');
    result.innerHTML = `Sorted array: <b>${inputArray}</b>`;
}