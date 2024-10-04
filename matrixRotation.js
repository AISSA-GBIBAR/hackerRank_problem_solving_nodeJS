function matrixRotation(matrix, r) {
    
    let lenghtMatrix = matrix.length;
    let  n = 0 , lenghtN , saveIndex;

    for( let i = 0 ; i < r ; i++ ){
        for( let j = 0 ; j < lenghtMatrix ; j++ ){
            lenghtN= matrix[j].length;
            if( j < lenghtMatrix - 1 && n == 0 ){
                saveIndex = matrix[j+1][n];
                matrix[j+1][n] = matrix[j][n];
            }
            // if( j == lenghtMatrix - 1 || n != lenghtN -1  ){
            //     matrix[j][n+1] = matrix[j][n];
            //     n++;

            // }
            // if( n == lenghtN - 1 ){
            //     matrix[j-1][n] = matrix[j][n];

            // }
            // if( j < lenghtMatrix &&  n <= lenghtN - 1  ){
            //     matrix[j][n-1] = matrix[j][n];
            //     n--;

            // }

        }
    }

    let a = "";

    for( let i = 0 ; i < matrix.length ; i++ ){
        for( let j = 0 ; j < matrix[i].length ; j++ ){
            a += " " + matrix[i][j];
        }
        a += "\n";

   
    }
    console.log(a);
}

matrixRotation([[1,2,3] , [5,6,7] , [8,9,9]], 1);
