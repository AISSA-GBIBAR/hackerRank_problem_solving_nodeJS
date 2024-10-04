// const prompt = require('prompt-sync')();

function commas(str){
    str = str.split(" ");
    a = "";
    for (let i = 0; i < str.length; i++) {
        a += (i != str.length - 1  )?str[i] + " , ":str[i];
    }
    // console.log(str.length)
    return a;
}
// const str = prompt(' Enter string pealse : ');

console.log(
	commas(
		"83 129 140 184 198 300 312 325 341 344 349 356 370 405 423 444 465 471 491 500 506 508 539 543 569 591 607 612 614 623 645 670 689 726 744 747 764 773 777 787 805 811 819 829 841 905 918 918 955 997"
	)
);