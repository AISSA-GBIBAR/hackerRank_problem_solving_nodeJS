function migratoryBirds(arr) {
   
    let number  ,max = 0 , min = 0 ;

    for (let i = 1; i <= 5; i++) {
        if( i != number ){

        for( let j = 0 ; j < arr.length ; j++ ){
            if( i == arr[j]  ){
                min++;
            }
        }
        if( max < min  ){
            max = min;
            number = i;
         }
            min = 0;
        }

        
    }

    return number;

}

// console.log(migratoryBirds([1 , 2 , 3 , 4 , 5 , 4 , 3 , 2 , 1 , 3 , 4]));
// console.log(migratoryBirds([1 , 4 , 4 , 4 , 5 , 3]));
console.log(migratoryBirds([1,2,4,5,4,3,2,1,3,4]));