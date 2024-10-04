function kangaroo(x1, v1, x2, v2) {
    // let check = 0 ;

    // let i = x1 , j = x2;
    // while( check == 0 ){
    //     if( i == j ){
    //         check++;
    //     }
    
    //     if( i >= v1 * x2 || j >= v1 * x2 ){
    //         break;
    //     }

    //     i += v1;
    //     j += v2;
     
    // }
    // return (check != 0) ? "YES": "NO";
 
    
    if( v1 < v2 ) return "NO";
    else if ((x2-x1) % (v1-v2) === 0) return "YES";
    return "NO";


}
console.log(kangaroo(0,3,4,2));
// kangaroo(112,9563,8625,244);