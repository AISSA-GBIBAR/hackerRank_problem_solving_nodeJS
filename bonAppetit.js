function bonAppetit(bill, k, b) {
    // Write your code here
    let a ;
    let Bactual = bill.filter((num , index)=>{ return num <= 10000 && index != k }).reduce((a,b)=>{return a+b; });
    Bactual = Math.round(Bactual / 2);
    let result = ( Bactual == b )?"Bon Appetit" : Math.abs(b -Bactual );
    console.log( result);

}

bonAppetit([3,10,2,9] , 1 ,12);