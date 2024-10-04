function birthday(s, d, m) {
  // Write your code here
  let count = 0 , larg = 0;
  let a = 0;
  for (let i = 0; i < s.length; i++) {
    a = 0;
    larg = 0;
        for( let j = i; j <= s.length ;  j++ ){
            a += s[j];
            larg++;
                if( a == d && larg == m ){
                    count++;
                    break;
                }else if(larg > m){
                    break;
                }
        }
  }

   return count;
}
console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7));
// console.log(birthday([5,2,2,1,5,3,2], 9, 3));
// console.log(birthday([1,2,1,3,2], 3, 2));
