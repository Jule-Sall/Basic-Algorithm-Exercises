const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('arrayElement')
    .innerHTML = array;

// this function rotate an array to the right by k
function rotateArray(){
    
    // get k
    const shiftFactor = document.getElementById('inputElement').value;

    
    const lastElements = [];
    
    for(let i = 0; i < shiftFactor; i++){
        // removes last element from array and add it to lastElements
        lastElements.push(array.pop()); 
    }

    // add last elements to the  top of array
    lastElements.forEach(elem => array.unshift(elem));

    // update arrayElement
    document.getElementById('arrayElement')
    .innerHTML = array;

}