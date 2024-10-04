function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let lengthApple = 0 , lengthOrange = 0;

    for( let i = 0 ; i < apples.length ; i++ ){
        lengthApple += (a+apples[i] >= s && a+apples[i] <= t )?1:0;
    }
    for( let i = 0 ; i < oranges.length ; i++ ){
        lengthOrange += (b+oranges[i] >= s && b+oranges[i] <= t )?1:0;
    }

    console.log(lengthApple);
    console.log(lengthOrange);
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);