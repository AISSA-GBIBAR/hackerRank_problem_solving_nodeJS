function staircase(n) {
            let a = "";
            for(let i = n - 1 ; i >=  0; i--){            
                for(  let j = 0 ; j < n ;j++ ){
                    if( j >= i ){
                        a += "#";
                    }else{
                        a += " ";
                    }
                } 
                a += "\n";
            }
            console.log(a);

}
staircase(6);