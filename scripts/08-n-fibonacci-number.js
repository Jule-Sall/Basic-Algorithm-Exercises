function fibonacci(n){
    if(n === 0 || n === 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci(n){
    const fibNumbers = [];
    for(let i = 1; i <= n; i++){
        const fibNumber = fibonacci(i);
        fibNumbers.push(fibNumber);
    }
    return fibNumbers;
}
function displayFibonacci(n) {
    const fibList = document.getElementById('fibonacci-list');
    const fibNumbers = generateFibonacci(n);
    fibNumbers.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        fibList.appendChild(li);
    });
}

// Display the first 10 Fibonacci numbers
displayFibonacci(10);