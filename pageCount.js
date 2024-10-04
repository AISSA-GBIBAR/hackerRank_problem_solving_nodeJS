function pageCount(n, p) {
    // Write your code here

  let  a = Math.floor(p / 2);
  let  b = Math.floor((n/2) - a);

  return Math.min(a , b);



}
console.log(pageCount(6,4));