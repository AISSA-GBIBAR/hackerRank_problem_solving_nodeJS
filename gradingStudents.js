function gradingStudents(grades){
 
    for( let i = 0 ; i < grades.length ; i++ ){
       if( grades[i] < 38 ){
         continue;
       }

       for(let j = 40 ; j <= 100 ; j += 5 ){
            if( j >=  grades[i]     ){
                grades[i] = (j - grades[i] < 3 )? j :  grades[i];
               break;
            }
        }   
    }

    return grades;

}
console.log(gradingStudents([73,67, 38,33]));

// tari9a wahadakhra 

// let finalGrades = grades.map((grade) => { 
//     return grade >= 38 && grade % 5 >= 3  ? grade - (grade % 5) + 5 : grade;         
//   }); 
// return finalGrades; 