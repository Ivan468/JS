const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4], //3.75
      algorithms: [3, 3, 3, 4, 4, 4], //3.5
      data_science: [5, 5, 3, 4], //4.25
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

////ВИКОРИСТАТИ ЗИС!!!!!!!!!!!! який посилаэться на назви предментыв console.log(students[0].subjects)
///console.log(students[0].subjects.getOBj()) -  працює

//   Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] -
// яка повертає список предметів для конкретного студента. Зверніть увагу
// – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(i) {
  let x = Object.assign(students[i].subjects);
  x = Object.keys(x);

  x = x.map((element) => {
    if (element.includes("_")) {
      element = element.replace("_", " ");
    }
    return element[0].toUpperCase() + element.slice(1);
  });

  return  x.join(", ");
}
 
console.log(`Перший студент: ${getSubjects(0)}`);
 
console.log(`Другий студент: ${getSubjects(1)}`);

console.log(`Третый студент: ${getSubjects(2)}`);
// Створіть функцію getAverageMark(students[0]) --> 3.79 –
// яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
//  Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(stud) {
  let ocinki = Object.values(students[stud].subjects);

  let len = Object.values(students[stud].subjects).length;

  let suma = 0;

  for (let index = 0; index < len; index++) {
    let result = ocinki[index].reduce((sum, current) => sum + current);

    result = result / ocinki[index].length;

    suma = suma + result;
  }

  return (suma / len).toFixed(2);
}

 
 console.log(`Task 2 ----------- averge bal of Tanya: ${getAverageMark(0)}`) ;
console.log(` averge bal of Victor: ${getAverageMark(1)}`);
 
console.log(` averge bal of Anton: ${getAverageMark(2)}`);
 

// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
// яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function  getStudentInfo(student) {
  return `course: ${students[student].course}  name:   ${students[student].name}    averageMark   ${getAverageMark(student)} `   
}

console.log(`  ${getStudentInfo(1)}`);
console.log(`  ${getStudentInfo(0)}`);
// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(index) {

let studentName = [];


 for (let index = 0; index < students.length; index++) {
  studentName.push( students[index].name  );
   
 }

 return studentName.sort().join(', ')
}

console.log(`sort ${getStudentsNames(0)}`)

// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
