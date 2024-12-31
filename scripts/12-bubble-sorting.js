// This function sorts an array using bubble sort
function sort() {
    const inputString = document.getElementById('inputArray').value;

    // split the input string by commas and convert to numbers
    let inputArray = inputString.split(',').map(Number);

    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = 0; j < inputArray.length - 1 - i; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                const temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `Sorted array: <b>${inputArray}</b>`;
}