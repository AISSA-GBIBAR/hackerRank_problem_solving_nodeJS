function flippingMatrix(matrix) {
    // Write your code here
        let arr = matrix[0];
         let max = 0;
    for( let i = 1 ; i < matrix.length ; i++ ){
        
        for( let j = 0 ; j < matrix[i].length ; j++ ){
          if( arr[j] < matrix[i][j] ){
            arr[j] = matrix[i][j];
          }
        }
    }
    // arr.reduce((acc , ele)=>{return acc+ele})
    return arr;

}

console.log(flippingMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]));