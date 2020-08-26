//
//Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

// Запускається цикл(підказка: можна
// використовувати while) length раз, кожен прохід циклу дивимось
//  на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length)
//  з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

function getRandomChinese(length) {
  return new Promise((resolve) => {
    
    let i = 0;
    let a = "";
    
        while (i < length) {
           
            setTimeout(() => {  
            
            const sign = Date.now().toString().slice(-5);
           
             a = a + String.fromCharCode(sign);
             resolve(a);
             
            }, 1000);
            i++; 
           
          }
        //   return a;
       

    
   
    // return console.log(a);
  });
}

const  prom = getRandomChinese(4);
console.log("prom", prom)

// .then((a) => {
//     console.log(a);
// }

// );
