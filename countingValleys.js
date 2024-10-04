function countingValleys(steps, path) {

  let level = 0 ,  count = 0;

  for (let i = 0; i <steps; i++) {
   if( path.charAt(i) == "U" ){
      level += 1;
   }else if(path.charAt(i) == "D" ){
      level -= 1;
   }
   if( level == 0 && path.charAt(i) == "U" ){
      count++;
   }

  }
     return count;
}

console.log(countingValleys(10,"UDUUUDUDDD"));
console.log(countingValleys(10, "DUDDDUUDUU"));
console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
console.log(countingValleys(100, "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"));
