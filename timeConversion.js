function timeConversion(s) {
    

    let array = s.split(":");
    let atherArry = array[2].split("");
    let length = array.length;

    if( atherArry[2] == "P" && array[0] != "12" ){
       array[0] = Number(array[0])+12;
    }
    if( array[0] == "12" && atherArry[2] == "A" ){
       array[0] = "00";
    }
    array[length - 1] = atherArry[0] + atherArry[1];
    

    return array.join(':');

}
console.log(timeConversion("12:40:22AM"));