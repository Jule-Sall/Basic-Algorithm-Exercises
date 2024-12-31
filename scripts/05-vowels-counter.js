function countVowels(){
    // input
    const inputString = document.getElementById('text').value;

    // set charArray to inputString as a list of characters
    let charArray = inputString;

    // initialize charVowels to an array of vowels
    const charVowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    // initialize the vowels counter to 0
    let vowelsCounter = 0;
   for(let i = 0; i < charArray.length; i++){
      if(charVowels.includes(charArray[i])){
        vowelsCounter++;
      }
   }
    // output result
    const result = document.getElementById('result');
    result.innerHTML = `Number of vowels: <b>${vowelsCounter} </b>`
}