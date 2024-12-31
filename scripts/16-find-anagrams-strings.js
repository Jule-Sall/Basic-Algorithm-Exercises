function findAnagrams(){
    // inputs
    let inputString1 = document.getElementById('inputString1').value;
    let inputString2 = document.getElementById('inputString2').value;

    // remove spaces and convert to lowercase
    inputString1 = inputString1.replace(/\s+/g, '').toLowerCase();
    inputString2 = inputString2.replace(/\s+/g, '').toLowerCase();


    // check if the two strings have the same length and 
    // set sameLength to true if that's the case and false 
    // otherwise
    const sameLength = inputString1.length === inputString2.length;

    // initialize sameCharacters to true
    let sameCharacters =true;
    if(sameLength){
        // for each element in inputString1, check if 
        // it is contained inside inputString2, if so update
        // sameCharacters and break the loop
        for(let i = 0; i < inputString1.length; i++){

            if(!inputString2.includes(inputString1[i])){
                sameCharacters = false;
                break;
            }
            
        }
    }
    // output result
    const result = document.getElementById('result');
    result.innerHTML = `<b>${inputString1}</b> and <b>${inputString2}</b> are 
                        ${sameLength === true && sameCharacters === true 
                            ?
                        '<b>anagrams</b>' : '<b>not anagrams</b>'}`;
}