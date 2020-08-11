const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



// Створіть функцію getMyTaxes.call(country, salary) -> number; – 
// яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this


function getMyTaxes (params) {
    return   ( this.tax*this.middleSalary  )
}

document.write ( `ІТ Спеціаліст в Україні заплатить : <b>
   ${getMyTaxes.call(ukraine)} податку</b> <br>`
)

document.write ( ` ІТ Спеціаліст в Латвії заплатить : <b>
   ${getMyTaxes.call(latvia)} податку </b> <br>`
)
 
document.write ( `ІТ Спеціаліст в Литві заплатить : <b>
   ${getMyTaxes.call(litva)} податку</b> <br>`
)

