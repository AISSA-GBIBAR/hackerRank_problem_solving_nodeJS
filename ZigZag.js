function findZigZagSequence(input) {
    let splitInput = input.split('\n');
    let numberArray = splitInput[1];
    let arraNum = splitInput[2].split(' ');
    arraNum = arraNum.map(str=>Number(str));
    let maxArray = Math.max(...arraNum); 
    let newArray = [];
    arraNum = arraNum.sort((a,b)=>a-b);
    arraNum.pop();
    arraNum.map((num,n)=>{
        if( n < Math.floor(numberArray/ 2) ){
            newArray.push(num);
        }
        if( n == Math.floor(numberArray/ 2)  ){
            newArray.push(maxArray);
        }
      
    })
    arraNum = arraNum.sort((a,b)=>b-a);
    arraNum.map((num,n)=>{
        if( n  < Math.floor(numberArray/ 2) ){
            newArray.push(num)
        }
    })
    
    console.log(...newArray);
} 
findZigZagSequence('1\n7\n1 2 3 4 5 6 7');
findZigZagSequence('1\n5\n2 3 5 1 4');