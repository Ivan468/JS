let bananas = 15.678;
let kivi = 123.965;
let apples = 90.2345;

let massive = [bananas, kivi, apples]; //створюємо масив

console.log(Math.max(...massive)); //виводимо максимальне і мінімальне число із масиву
console.log(Math.min(...massive));

let sum = bananas + kivi + apples; //вивести суму із 3х товарів
console.log(sum);

bananas = Math.floor(bananas); //округелння
kivi = Math.floor(kivi); //округелння
apples = Math.floor(apples); //округелння

sum = bananas + kivi + apples; //сума округлення

console.log(sum);

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
console.log(Math.ceil10(sum, 2)); ///

let rest = 500 - sum;
console.info(rest); // віднімаю суму від 500 гривень і виходить 272

const even = (n) => !(n % 2); //виводжу парне число
console.info(even(sum)); //виводжу парне число s і це правда

Math.ceil10(-59, 1); // -50
