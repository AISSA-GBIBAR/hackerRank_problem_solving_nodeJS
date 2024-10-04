function plusMinus(arr){
//    let lengthArr = arr.length;
//    let pos = 0 , nega = 0 , zero = 0;
//    for( let i = 0 ; i < lengthArr ; i++ ){
//         if( arr[i] > 0 ){
//             pos++;
//         }else if(arr[i] < 0 ){
//             nega++;
//         }else if(arr[i] == 0){
//             zero++;
//         }
//    }
//    pos = (pos / lengthArr).toFixed(6);
//    nega = (nega / lengthArr).toFixed(6);
//    zero = (zero / lengthArr).toFixed(6);
//    console.log( pos  );
//    console.log( nega  );
//    console.log( zero   );
let p = 0 , n = 0 , z = 0;
    arr.map( (number) => {
        p += (number > 0) ? 1 : 0;
        n += (number < 0) ? 1 : 0;
        z += (number == 0) ? 1 : 0;
    })
    console.log((p / arr.length).toFixed(6));
    console.log((n / arr.length).toFixed(6));
    console.log((z / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
