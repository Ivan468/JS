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
}

const student = new Student(`Петрущак Іван`, `Києвської православної богословської академії`, `6`);

console.log(  student.getInfo());


 