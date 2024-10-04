function breakingRecords(scores) {

    let min = 0 , max = 0;
    let countMin = 0 , countMax = 0 ;

    for( let i = 0 ; i < scores.length ; i++ ){
        min = (i==0)?scores[i]:min;
        if( max < scores[i] ){
            max = scores[i];
            countMax += (max != scores[0])?1:0;
        }
        if( min > scores[i] ){
            min = scores[i];
            countMin += (min != scores[0])?1:0;
        }
    }

    return [countMax , countMin];
}
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));