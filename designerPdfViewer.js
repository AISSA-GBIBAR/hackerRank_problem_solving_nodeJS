function designerPdfViewer(h, word) {
 
    if( h.length == 26 ){
         let letter = "abcdefghijklmnopqrstuvwxyz".split("");
          word = word.split("");
        let max = 0;
         for( let i = 0 ; i < word.length ; i++ ){
            for( let j = 0 ; j < letter.length ; j++ ){
                if( word[i] == letter[j] ){
                    max = (max > h[j] )?max:h[j];
                }
            }
         }
         return word.length * max;
    }

}
console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7] , 'zaba'));