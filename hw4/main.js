const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// let a = 10;
// let b = 20;

// let numbers = [a, b];

// const teachers = ["Ivan", "Roman", "Andriy"];

// // console.log(numbers);
// debugger

function getPairs(arr) {
  let onePairs = [];
  let twoPairs = [];
  let threPairs = [];
  let sumMassive = [];
  if (arr) {
    onePairs.push(arr[0], arr[2]);
    twoPairs.push(arr[1], arr[3]);
    threPairs.push(arr[4], arr[5]);

    sumMassive.push(onePairs, twoPairs, threPairs);
  } else {
    return console.log(`Error!`);
  }

  return console.log(sumMassive);
}
console.log(`Перша задача`);
getPairs(students);
//////////////

function getPairsAndThems(arr, arr2, randomF) {
  let onePairs = [];
  let twoPairs = [];
  let threPairs = [];
  let sumMassive = [];

  

  if (arr) {
    onePairs.push(arr[0], arr[2], arr2[0]);
    twoPairs.push(arr[1], arr[3], arr2[1]);
    threPairs.push(arr[4], arr[5], arr2[2]);
    sumMassive.push(onePairs, twoPairs, threPairs);
  } else {
    return console.log(`Error!`);
  };
 

  return console.log(sumMassive);
}

console.log(`Друга задача`);
getPairsAndThems(students, themes);

// зыставити

const assignMarks = function (students, marks) {
  let studentMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentMarks[i] = [];
    studentMarks[i].push(students[i], marks[i]);
  }
  return console.log(studentMarks);
};

console.log(`Третя задача`);
assignMarks(students, marks);


// запушити ТРИ МАСИВА В МАСИВ! function getPairs(arr) {
//     let onePairs = [];

//     if (arr) {

//         onePairs.push(arr[0], arr[2]);
//         onePairs.push(arr[1], arr[3]);
//         onePairs.push(arr[4], arr[5]);
//         }

//         return console.log(onePairs );
//   }

//  getPairs(students)
// console.log(teachers);

// teachers.push();
// console.log(teachers);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
function getPairsAndThems1(arr, arr2, randomF) {
    let onePairs = [];
    let twoPairs = [];
    let threPairs = [];
    let sumMassive = [];
  
    
  
    if (arr) {
      onePairs.push(arr[0], arr[2], arr2[0]);
      twoPairs.push(arr[1], arr[3], arr2[1]);
      threPairs.push(arr[4], arr[5], arr2[2]);
      sumMassive.push(onePairs, twoPairs, threPairs);
    } else {
      return console.log(`Error!`);
    };
  
    if (randomF) {

        function getRandomInt(max) {
            let a = Math.floor(Math.random() * Math.floor(max));
            return a+1;
          }
        

       onePairs.push(getRandomInt(4));
        
      // twoPairs.push(arr[1], arr[3], arr2[1]);
      // threPairs.push(arr[4], arr[5], arr2[2]);
    
  };
  
  
  
    
  
    return console.log(sumMassive);
  }
  


  
console.log(`четверта задача`);
getPairsAndThems1(students, themes, 1);