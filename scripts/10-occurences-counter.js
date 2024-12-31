function sentenceToArray(sentence){
    return sentence.trim().split(/\s+/);
}

function countOccurences(){
    const inputSentence = document.getElementById('sentence').value;
    let inputWord = document.getElementById('word').value;

    const wordsArray = sentenceToArray(inputSentence);

    let counter = 0;

    for(let i = 0; i < wordsArray.length; i++){
        if(wordsArray[i] == inputWord)
            counter++;
    }

    console.log(`Number of occurrences of the word ${inputWord} is: ${counter}`);
}