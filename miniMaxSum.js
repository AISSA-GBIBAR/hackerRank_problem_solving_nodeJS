function miniMaxSum(arr) {
    // let up = 0 , min = 0  , max = 0  , sum = 0;

    // for( let i = 0 ; i < arr.length ; i++ ){

    //     for( let j = 0 ; j < arr.length ; j++ ){
    //         if( j === up ){
    //             continue;
    //         }
    //         sum += arr[j];

    //     }
    //         up++;
    //         min = ( min == 0 ) ? sum : min ;
    //         min = (min < sum) ? min : sum;
    //         max = (max > sum ) ? max : sum;
    //         sum = 0;
    // }

    // console.log( min , max);
    // // console.log( max );

    let min = 0 , max  = 0 , valeu ;
    for( let i = 0 ; i < arr.length ; i++ ){
      valeu =  arr.reduce((acc , currElemny) =>{return acc + currElemny;}) - arr[i];
      max = (max < valeu)? valeu : max;
      min = ( min == 0 || min > valeu)? valeu : min;
    }

    console.log( min , max);

    
}

miniMaxSum([396285104,573261094,759641832,819230764,364801279]);