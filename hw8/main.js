//
//
//
//
//
//
//
// "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер"

class Student {
  constructor(fullName, university, course) {
    this.university = university;
    this.fullName = fullName;
    this.course = course;
  }

  getInfo() {
    return (
      "Студент " +
      this.course +
      "го курсу " +
      this.university +
      " " +
      this.fullName
    );
  }

  //    @param {number[]} marksStudents
  set marks(marksStudents) {
    //  встановлюємо оцінки
 if (Object.isFrozen(this)) {
   return "Студент виключений"
 } else  return (this.marksStudents = marksStudents);
  }

  

  getAverageMark() {
    let a = this.studMark;

    const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    //    const b = a.forEach;
    return arrAvg(a); ///  a / a.length;
  }
  get studMark() {
    //   виводить на консоль оцінки
    return  this.marksStudents;
   
  }

  get dismiss(){
    let a = this.marksStudents;
         a = null ;
         

       Object.freeze(this);
    //  Object.defineProperty(this, "marksStudents", { configurable: false, writable: false });
     return   this.fullName + " був виключений із навчального закладу";
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

student.marks = [5, 4, 4, 5]; //   встановлюємо оцінки за допомогою сетера
studentTwo.marks = [3, 2, 4, 5, 3, 5, 5, 3];

console.log("Оцінки студента Івана", student.studMark); //   виводимо оцінки за допомогою гетера

console.log("Середній бал", student.getAverageMark());


console.log("Студент 2: " + studentTwo.getInfo());
console.log("Середній бал другого студента: ", studentTwo.getAverageMark());
console.log("Обнулити оцінки: " + studentTwo.dismiss);
studentTwo.marks = [2, 3, 4];
console.log("Оцінки студента Петра", studentTwo.studMark);
console.log("Фрізі", Object.isFrozen(studentTwo)  );
 
///Створіть метод this.dismiss, який "виключить" студента. 
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)