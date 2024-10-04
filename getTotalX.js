function getTotalX(a, b) {
    let concat = a.concat(b);
    let i = a[a.length - 1];
    let rang = 0 , count = 0 ;
    while( i <= b[0] ){
        for (let j = 0; j < concat.length; j++) {
            if( i > concat[j]  ){
                rang += (i % concat[j] == 0) ? 1 : 0;
            }else if( i <= concat[j] ){
                rang += (concat[j] % i  == 0) ? 1 : 0;
            }
        }  
 
        if( rang == concat.length ){
            count++;
        }
        rang = 0;
        i++;
    }
    return count;

}
console.log(getTotalX([2,4] , [16,32,96]));