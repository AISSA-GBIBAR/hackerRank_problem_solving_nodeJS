function findMedian(arr) {
    let sort = arr.sort((a,b)=>{return a -b});
    let lenght =  Math.floor(sort.length / 2) ;
    return sort[lenght];
      
}

console.log(findMedian([0,1,2,4,6,5,3]));