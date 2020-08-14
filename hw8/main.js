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

  getInfo(){

    return  "Студент " + this.course + 'го курсу ' + this.university + " " + this.fullName  ;
  }

//   /**
//      * @param {number[]} marksStudents
//      */
  set marks(marksStudents) {             //  встановлюємо оцінки
    return  this.marksStudents = marksStudents;
  }

  get studMark() {         //   виводить на консоль оцінки
 
    return  this.marksStudents ;
  }
}

const student = new Student(`Петрущак Іван`, `Києвської православної богословської академії`, `6`);

console.log(  student.getInfo());

student.marks = [5, 4, 4, 5]; //   встановлюємо оцінки за допомогою сетера


console.log( "Оцінки студента", student.studMark);  //   виводимо оцінки за допомогою гетера