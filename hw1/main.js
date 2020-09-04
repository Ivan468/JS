const BANANAS = 15.678;
const KIVI = 123.965;
const APPLES = 90.2345;

let massive = [BANANAS, KIVI, APPLES]; //створюємо масив

console.log(`${Math.max(...massive)} ціна найдорожчого товару`); //виводимо максимальне і мінімальне число із масиву
console.log(`${Math.min(...massive)} ціна найдешевшого товару  `);

let sum = BANANAS + KIVI + APPLES; //вивести суму із 3х товарів
console.log(`${sum} сума всіх покупок`);

let rest = 500 - sum;
console.info(
  `${rest} якщо у клієнта 500 грн і він потратив суму пораховану вище`
); // віднімаю суму від 500 гривень і виходить 272

let meanMath = (KIVI + APPLES + BANANAS) / 3;
console.log(`${meanMath.toFixed(2)} середнэ число`);

sum = Math.floor(BANANAS + KIVI + APPLES); //сума округлення

console.log(`${sum} округлення`);

function MyRound100(val) {
  return Math.round(val / 100) * 100;
}
const priceTotalRounded = MyRound100(sum);
console.log("The total price rounded to hundreds is: " + priceTotalRounded);

// Округлення
console.log(`${MyRound100(sum)} округлення до більшого`); ///

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomDiscount = getRandomInt(15); // отримуємо випадкову знижку
console.log(` ${randomDiscount}%  знижка `);

let result = (KIVI / 100) * randomDiscount; //вычисление процентов
console.log(
  ` ${randomDiscount}% від ${KIVI.toFixed(2)} буде ${result.toFixed(2)}`
);

let cost = KIVI / 2;

let netProfit = cost - result;
console.log(`${netProfit.toFixed(2)} - чистий прибуток`);

const even = (n) => !(n % 2); //виводжу парне число
console.info(even(sum)); //виводжу парне число s і це правда

export default hw1;