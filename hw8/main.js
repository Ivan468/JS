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

student.marks = [5, 4, 4, 5]; //   встановлюємо оцінки за допомогою сетера
studentTwo.marks = [3, 2, 4, 5, 3, 5, 5, 3];

console.log("Оцінки студента Івана", student.studMark); //   виводимо оцінки за допомогою гетера

console.log(`Середній бал`, student.getAverageMark());

console.log(`Студент 2: ${studentTwo.getInfo()}`);
console.log("Середній бал другого студента: ", studentTwo.getAverageMark());
console.log(`Обнулити оцінки: ${studentTwo.dismiss}`); //Заморожуємо
studentTwo.marks = [2, 3, 4]; ///оцынки  не присвоюються - студент виключений
console.log(
  "Оцінки студента Петра не можуть бути присвоєні",
  studentTwo.studMark
); //виводимо оцінки Петра і показує "нуль"
 

console.log(" " + studentTwo.unfreze);
console.log("Ставимо оцінки Петру  ", (studentTwo.marks = [2, 3, 4]));
console.log("Тепер оцінки студента Петра  ", studentTwo.studMark);

 
