function formingMagicSquare(s) {
    let possibility = {
        1:[ [4, 3, 8], [9, 5, 1], [2, 7, 6] ],
        2:[ [8, 3, 4], [1, 5, 9], [6, 7, 2] ],
        3:[ [8, 1, 6], [3, 5, 7], [4, 9, 2] ],
        4:[ [4, 9, 2], [3, 5, 7], [8, 1, 6] ],
        5:[ [2, 7, 6], [9, 5, 1], [4, 3, 8] ],
        6:[ [6, 7, 2], [1, 5, 9], [8, 3, 4] ],
        7:[ [6, 1, 8], [7, 5, 3], [2, 9, 4] ],
        8:[ [2, 9, 4], [7, 5, 3], [6, 1, 8] ]
    }
    let min = 0, max = 0;
    for(let i in possibility ){
        possibility[i].map((numbers, j)=>{
            numbers.map((num, m)=>{
                max += Math.abs(num - s[j][m] );
                
            })
        });
        if( max == 0 ){
            min = max;
            break;
        }
        if( min == 0 || max <= min){
            min = max;
        }
        max = 0;
    }
    return min; 
}

console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]));
console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])); 
console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]])); 
console.log(formingMagicSquare([[2, 9, 8], [4, 2, 7], [5, 6, 7]])); 

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 6]]));
