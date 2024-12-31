function checkPalindrome(){
    // input string
    const inputString = document.getElementById('inputString').value;

   // reverse of input string
   const reverseString = [];
   for(let i = inputString.length - 1; i >= 0 ; i--){
    reverseString.push(inputString[i]);
   }

   // check if two input strings are symmetric
   let isSymmetric = true;
   for(let i = 0; i < inputString.length; i++){
    if(inputString[i].toLowerCase() != reverseString[i].toLowerCase()){
        isSymmetric = false;
        break;
    }
   }

   console.log(inputString[0]);
   console.log(reverseString);
   console.log(isSymmetric);

   // output result
   const result = document.getElementById('result');
   if(isSymmetric){
      result.innerHTML = `${inputString} is <b>a palindrome</b>.`;
   }
   else{
      result.innerHTML = `${inputString} is <b>not a palindrome</b>.`;
   }


}

// handle event for key down on the input
const input = document.querySelector('input');
input.addEventListener('keydown', (event)=>{
        if(event.key === 'Enter'){
            checkPalindrome();
        }
    })