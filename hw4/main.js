const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(arr) {
  let onePairs = [];
  let twoPairs = [];
  let threPairs = [];
  let sumMassive = [];
  if (arr) {
    onePairs.push(arr[0], arr[2]);
    twoPairs.push(arr[1], arr[3]); ///twoPairs.push(new Array(arr[1], arr[3]).join(" i "));
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
    onePairs.push( new Array(arr[0], arr[2]).join(" i "), arr2[0]);/// .push(new Array(arr[0], arr[2]).join(" i "));
    twoPairs.push(new Array(arr[1], arr[3]).join(" i "), arr2[1]);////другий спосіб запушити з І
    threPairs.push(new Array(arr[4], arr[5]).join(" i "), arr2[2]);
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
           twoPairs.push(getRandomInt(4));
           threPairs.push(getRandomInt(4));
     
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

  
console.log(`четверта задача`);
getPairsAndThems(students, themes, 1);
