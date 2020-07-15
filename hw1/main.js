const BANANAS = 15.678;
const KIVI = 123.965;
const APPLES = 90.2345;

let massive = [BANANAS, kivi, APPLES]; //створюємо масив

console.log(`${Math.max(...massive)} ціна найдорожчого товару`); //виводимо максимальне і мінімальне число із масиву
console.log(`${Math.min(...massive)} ціна найдешевшого товару  `);

let sum = BANANAS + KIVI + APPLES; //вивести суму із 3х товарів
console.log(`${sum} сума всіх покупок`);

let meanMath = (KIVI + APPLES + BANANAS) / 3;
console.log(`${meanMath.toFixed(2)} середнэ число`);

sum = Math.floor(BANANAS + KIVI + APPLES); //сума округлення

console.log(`${sum} округлення`);

(function () {
  /**
   * Десяткове округлення числа до необхідної точності.
   *
   * @param {String}  type  Тип округлення.
   * @param {Number}  value Число.
   * @param {Integer} exp   Степінь (десятковий логарифм від основи округлення).
   * @returns {Number} Округлене число.
   */
  function decimalAdjust(type, value, exp) {
    // Якщо exp невизначений або дорівнює нулю...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Якщо value не є числом, або ж степінь exp не являється цілим...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Зсув
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Зворотній зсув
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Десяткове округлення
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Десяткове округлення до меншого
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Десяткове округлення до більшого
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Округлення
console.log(`${Math.ceil10(sum, 2)} округлення до більшого`); ///

let rest = 500 - sum;
console.info(
  `${rest} якщо у клієнта 500 грн і він потратив суму пораховану вище`
); // віднімаю суму від 500 гривень і виходить 272

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomDiscount = getRandomInt(15); // отримуємо випадкову знижку
console.log(` ${randomDiscount}%  знижка `);

let result = (KIVI / 100) * randomDiscount; //вычисление процентов
console.log(
  ` ${randomDiscount}% от ${KIVI.toFixed(2)} будет ${result.toFixed(2)}`
);

let cost = KIVI / 2;

let netProfit = cost - result;
console.log(`${netProfit.toFixed(2)} - чистий прибуток`);

const even = (n) => !(n % 2); //виводжу парне число
console.info(even(sum)); //виводжу парне число s і це правда

Math.ceil10(-59, 1); // -50
