function catAndMouse(x, y, z) {
   if(  Math.abs(z - x) > Math.abs(z - y)  ){
    return "Cat B";
   }else if( Math.abs(z - x) < Math.abs(z - y) ){
    return "Cat A";
   }
   return "Mouse C";

}
console.log(catAndMouse(22,75,70));
console.log(catAndMouse(33,86,59));
console.log(catAndMouse(47,29,89));
console.log(catAndMouse(18,19,82));
    