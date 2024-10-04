 function diagonalDifference(arr) {
    let a = 0 , b = 0 , d1 = 0 , d2 = null;
    for( let i = 0 ; i < arr.length ; i++ ){
        if( i != arr.length - 1 &&  arr[i].length != arr[i+1].length  ){
            continue;
        }
        d2 = (d2 === null) ? arr[i].length - 1 : d2;
                a += arr[i][d1];
                b += arr[i][d2];
                d1++;
                d2--;
    }

    return Math.abs(a-b);

  
 }
console.log(diagonalDifference([3 , [11,2,4] , [4,5,6] , [10 , 8 , -12] ]));