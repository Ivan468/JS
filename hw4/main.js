
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// let a = 10;
// let b = 20;

// let numbers = [a, b];

// const teachers = ["Ivan", "Roman", "Andriy"];

// // console.log(numbers);


function getPairs(arr) {
    let onePairs = [];
    let twoPairs = [];
    let threPairs = [];
    if (arr) {  
        
        onePairs.push(arr[0], arr[2]);
        twoPairs.push(arr[1], arr[3]);
         threPairs.push(arr[4], arr[5]);
        }

        return console.log(onePairs, twoPairs, threPairs);
  }

 getPairs(students) 
// teachers.pop();


// console.log(teachers);
 
// teachers.push();
// console.log(teachers);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }