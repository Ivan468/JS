const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію getMyTaxes.call(country, salary) -> number; –
// яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
  return salary * this.tax;
}

document.write(`Якщо зарплата буде 2000 то ІТ працівник отримає : <b>
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

////3 скыльки платять у кожній країні

function getTotalTaxes(params) {
  return this.tax * this.middleSalary * this.vacancies;
}

document.write(`У Литві всі ІТ спеціалісти платять <b>
   ${getTotalTaxes.call(litva)} податку</b> <br>`);

// Створіть функцію getMySalary(country) – яка буде писати в
// консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
  let salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;

  let taxes = (this.tax * salary).toFixed(2);
  let profit = (salary - taxes).toFixed(2);

  return `  Пдаток: ${taxes}  Зарплата:  ${salary} Чистий прибуток:  ${profit} `;
}



function Interval() {
  
   console.log(getMySalary.call(ukraine));
}
setInterval(Interval, 10000);

// function sayHi() {
//     console.log('Привет');
//   }
  
//   setInterval(sayHi, 1000);