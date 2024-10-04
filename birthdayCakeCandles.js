function birthdayCakeCandles(candles) {
    let round = 0 , number = null , a1 = 0;
        for( let i = 0 ; i < candles.length ; i++ ){
            for( let j = i + 1 ;  j < candles.length  ; j++ ){
                if( number !== candles[i] && candles[i] === candles[j] ){
                    round += (a1 == 0) ? 1 : 0;
                    round++;
                    a1 += 1;
                }
            }
            if( a1 >= 1){
                number = candles[i];
            }
            a1 = 0;
        }
       return round;
}
console.log(birthdayCakeCandles([18,90,90,13,90,75,90,8,90,43]))