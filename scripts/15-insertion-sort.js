const array = [1, 2, 4, 5, 7, 8, 10];

document.getElementById('arrayElement').innerHTML = array;

// this function inserts an element into array
// while keeping array sorted
function insert() {
    const inputElement = Number(document.getElementById('inputElement').value);
    let inserted = false;

    for (let i = 0; i < array.length; i++) {
        if (inputElement < array[i]) {
            array.splice(i, 0, inputElement);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        array.push(inputElement);
    }

    document.getElementById('arrayElement').innerHTML = array;
    document.getElementById('result').innerHTML = `Array after insertion: <b>${array}</b>`;
}