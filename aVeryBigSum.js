function aVeryBigSum(ar){
    let longOutput = 0;
    for( let i = 0 ; i < ar.length ; i++ ){
        longOutput += ar[i];
    }
    return longOutput;
}