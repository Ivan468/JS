console.log (`---==== HW 1 ---===`);
const BANANAS = 15.678;
const KIVI = 123.965;
const APPLES = 90.2345;

let massive = [BANANAS, KIVI, APPLES]; //створюємо масив

console.log(`${Math.max(...massive)} ціна найдорожчого товару`); 

// import  hw1 from "./hw1/main.js";
console.log (`---==== HW 2 ---===`);////


let N = 3;// +prompt("ведіть перше число");
let M = 12//+prompt("ведіть друге число (більше за перше)");

while (isNaN(N) || isNaN(M)) {
  alert("Це не цифри!");
  N = prompt("ведіть перше число");
  M = prompt("ведіть друге число (більше за перше)");
}

N = Math.floor(N);
M = Math.floor(M);

while (M <= -1 || N <= -1) {
  alert(`введіть не від'ємні числа`);
  N = +prompt(`введіть перше число`);
  M = +prompt(`введіть друге число`);
}

while (N > M) {
  alert(`введіть більше число за попереднє`);
  M = +prompt(`введіть друге число більше число за попереднє`);
}

while (M === 0 || N === 0) {
  alert(`введіть число більше за нуль`);
  N = +prompt(`введыть перше число`);
  M = +prompt(`введіть друге число`);
}

while (M > 999999 || N > 999999) {
  alert(`введіть менші  числа за попередні`);
  N = +prompt(`введіть перше число`);
  M = +prompt(`введіть друге число`);
}

console.log(`${N} перше число`);
console.log(`${M} дрруге число`);

const isPaired = true;

let sum1 = 0;
for (let i = N; i <= M; i++) {
  if (isPaired && i % 2 === 0) continue;
  sum1 = sum1 + i;
}

console.log(`Ваш результат: ${sum1}`);

//////////////////////////////// HW 3///
console.log (`---==== HW 3---===`);////////////////////////////////

function pow(base, exp) {
  var result = 1;
  for (var i = 0; i < exp; i++) {
    result = result * base;
  }
  return result;
}

document.write(
  `<hr/><b> Cтупінь числа - 2 в 10 степені </b> </br> ${pow(2, 10)} </br>`
);
console.log (`---==== HW 4---===`);////


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


console.log (`---==== HW 5---===`);////

let getRandomArray = (length, min, max) => {
  let arrRandom = [];

  for (let index = 0; index < length; index++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    arrRandom.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return arrRandom.join(", ");
};

document.write(
  "<hr> Рандомне число:  <b> ",
  getRandomArray(10, 2, 100),
  "  </b>  "
);


console.log (`---==== HW 6---===`);////
function calculateWordLetters(arr) {
  arr = arr.split("");
  var arr2 = [];
  let i;
  for (i in [...arr]) {
    if (arr2[arr[i]] != undefined) {
      arr2[arr[i]]++;
    } else {
      arr2[arr[i]] = 1;
    }
  }

  return console.log(arr2);
}

`тест цієї стрінги ${calculateWordLetters("тест цієї стрінги")}`;

console.log (`---==== HW 7---===`);////

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
  return salary * this.tax;
}

document.write(`<br> <hr> Якщо зарплата буде 2000 то ІТ працівник отримає : <b>
   ${getMyTaxes.call(ukraine, 2000)} податку</b> <br>`);

//2

function getMiddleTaxes(params) {
  return this.tax * this.middleSalary;
}

document.write(`ІТ Спеціаліст в Україні заплатить : <b>
   ${getMiddleTaxes.call(ukraine)} податку</b> <br>`);

document.write(` ІТ Спеціаліст в Латвії заплатить : <b>
   ${getMiddleTaxes.call(latvia)} податку </b> <br>`);

document.write(`ІТ Спеціаліст в Литві заплатить : <b>
   ${getMiddleTaxes.call(litva)} податку</b> <br>`);

console.log (`---==== HW 8---===`);////
class Student {
  constructor(fullName, university, course) {
    this.university = university;
    this.fullName = fullName;
    this.course = course;

    this.dismisStud = false;
  }

  getInfo() {
    return (
      `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
    );
  }

  
  set marks(marksStudents) {
    //  встановлюємо оцінки
    if (this.dismisStud) {
      return "Студент виключений";
    } else return (this.marksStudents = marksStudents);
  }

  getAverageMark() {
    let a = this.studMark;

    const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
 
    return arrAvg(a); ///  a / a.length;
  }
  get studMark() {
    //   виводить на консоль оцінки
    return this.marksStudents;
  }

  get dismiss() {
    this.marksStudents = null;
    this.dismisStud = true;
    
    //  Object.defineProperty(this, "marksStudents", { configurable: false, writable: false });
    return this.fullName + " був виключений із навчального закладу";
  }

  get unfreze() {
    this.dismisStud = false;

    return "Студента поновлено";
  }
}

const student = new Student(
  `Петрущак Іван`,
  `Києвської православної богословської академії`,
  `6`
);

const studentTwo = new Student(
  `Радоманський Петро`,
  `Львівської політехніки`,
  `2`
);

console.log(student.getInfo());

console.log (`---==== HW 9---===`);////
function getRandomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}
const BOX = () => {
  const box = document.createElement(`div`);
  box.classList.add(`color`);
  box.style.height = `50px`;
  box.style.width = `50px`;
  setInterval(() => {box.style.background = getRandomColor();}, 1000)
  document.body.children[0].insertAdjacentElement(`afterbegin`, box);
};
 
for (let index = 0; index < 25; index++) {
  BOX();
}


console.log (`---==== HW 11---===`);////
let timeO = Date.now();
let timeLast = "";
function getRandomChinese() {
  return new Promise((num) => {
    setTimeout(() => {
      +num(String.fromCharCode(Date.now().toString().slice(-5)));
    }, 50);
  });
}

async function myGenPasw(length) {
  let result = "";
  let i = 0;
  while (i < length) {
    result += await getRandomChinese();
    i++;
    timeLast = Date.now();
  }

  function Time() {
    let timeFull = timeLast - timeO;
    return timeFull;
  }

  return console.log(`${result} ${Time()} ms`);
}

myGenPasw(4);



// export default pow;