function towSum(array , sum){
    let  a = "";

    for( let i = 0 ; i < array.length ; i++ ){
            for( let j = i + 1  ; j < array.length ; j++ ){
                if( array[i] + array[j] == sum ){
                    a += (a.length > 1)?"\n=============\n":"";
                    a +=  array[i];
                    a += "\n" + array[j];
                    break;
                }
            }
            
    }
    return a;
}
console.log(towSum([1,4,7,2,13,3] , 5));