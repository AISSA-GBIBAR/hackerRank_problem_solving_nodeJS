function sockMerchant(n, ar) {
    // Write your code here

    let count = 0 , reat = 0;
    let newAr = [...new Set(ar)];

    for( let i = 0 ; i < newAr.length ; i++ ){
      ar.map( (num)=>{reat += (num == newAr[i])?1:0;} );  
      if( reat >= 2 ){
        count += (reat % 2==0)? reat / 2 : ((reat + 1) / 2) - 1;
      }
      reat = 0;
    }
    return count;

}
console.log(sockMerchant(7,[10, 20, 20, 10, 10, 30, 50, 10, 20]));