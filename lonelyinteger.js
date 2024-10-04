function lonelyinteger(a) {
//    let count = 0 , num;
//     a.map((number) => {
//         for( let i =0 ;i < a.length ;i++ ){
//             count += (number == a[i] )?1:0;
//         }
//         num = (count == 1) ? number : num;
//         count = 0;
//     } )
//     return num;

let unique = a.filter((valeu)=>{
   
    return a.indexOf(valeu) == a.lastIndexOf(valeu);
});

return unique[0];

}

console.log(lonelyinteger([1,2,3,8,3,2,1]));