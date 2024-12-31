const orderedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById('orderedNums')
        .innerHTML = `Ordered numbers: ${orderedNums}`;
         
function performBinarySearch(){
    
    const searchedNum = document.getElementById('searchValue').value;
   if(!searchedNum){
        alert('Please enter a number that is part of Ordered numbers...');
        return;
   }
    console.log(searchedNum);

    let middleNum = Math.round(orderedNums[orderedNums.length - 1] / 2);
    let remainingNums = orderedNums;
    let remainingNumsSize = Math.round(orderedNums.length / 2);
    let iteration = 0;
    
    while(true){
       if(searchedNum < middleNum){
        remainingNums = remainingNums.filter((num)=>{
            if(num < middleNum)
                return true;
            else
                return false;
        });
        remainingNumsSize = remainingNums.length;
        middleNum = middleNum - Math.round(remainingNumsSize / 2);
    }
    else if(searchedNum > middleNum){
        remainingNums = remainingNums.filter((num)=>{
            if(num > middleNum)
                return true;
            else
                return false;
        });   
        remainingNumsSize = remainingNums.length;
        middleNum = middleNum + Math.round(remainingNumsSize / 2);
    }
    else if(middleNum == searchedNum){
        const result = document.getElementById('result');
        result.style.color = 'green';
        result.innerHTML = `Result:  ${middleNum}`;
        console.log(`found number! It's ${middleNum}`);
        break;
        
    }
    

   
    }

}