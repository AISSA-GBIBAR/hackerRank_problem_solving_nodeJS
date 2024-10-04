function angryProfessor(k, a) {
    let count = 0;
    a.map((element)=>{
        count += (element <= 0 ) ? 1 : 0;
    })
    console.log(count);
    return (count >= k ) ? "NO" : "YES";
}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2]));
console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));

const test = [
    {
        id:"93",
        name:"Della Love",
        email:"duvini@ziv.kp",
        zipCode:"Mozambique"
    },
    {
        id:"61",
        name:"Minnie Kennedy",
        email:"ib@poez.tr",
        zipCode:"Namibia"
    },
    {
        id:"31",
        name:"Elnora Sanders",
        email:"gopba@umu.dj",
        zipCode:"St. Martin"
    }
]