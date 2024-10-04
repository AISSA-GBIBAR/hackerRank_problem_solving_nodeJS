function dayOfProgrammer(year) {
  
   let day ;
 
   if(  (year > 1917 && year % 4 == 0  && year % 100 != 0) || ( year % 400 == 0)  || (year <= 1917 && year % 4==0 && year != 1918)){
      day = 12;
   }else if(year > 1917 && year != 1918) {
      day =  13;
   }
   if( year == 1918 ){
      day = 26;
   }
return day + '.09.' + year ;
}
dayOfProgrammer('1800');