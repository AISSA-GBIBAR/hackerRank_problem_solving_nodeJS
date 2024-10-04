function getMoneySpent(keyboards, drives, b) {
    let max = -1 ;
    keyboards.map((num)=>{
        drives.map((num1)=>{
            if( max < num + num1 && num1 + num <= b ){
                max = num + num1;
            }
        })
    }); 

    return max;

}
console.log(getMoneySpent([40,50,60] , [5,8,12] , 60));