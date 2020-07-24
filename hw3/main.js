/////
///
////
////
////
///
///
// function getMaxDigit(number) {
//   console.log(number);
// }

// const str = "12658";

// const words = str.split(" ");
// console.log(Math.max(...str));

/////
function getMaxDigit(number) {
  const str = number;
  return Math.max(...str);
}
document.write(
  `<b> Найбільще число із 12349654567</b> </br> ${getMaxDigit(
    "12349654567"
  )} </br>`
);

function pow(base, exp) {
  var result = 1;
  for (var i = 0; i < exp; i++) {
    result = result * base;
  }
  return result;
}

document.write(
  `<b> Cтупінь числа - 2 в 10 степені </b> </br> ${pow(2, 10)} </br>`
);

/////великі букви
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.write(
  `<b>Великі букви</b> </br> ${capitalizeFirstLetter("іван")} </br>`
);
/*////4 завдання Створити функцію, яка вираховує суму, 
що залишається після оплати податку від зарабітньої 
плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805*/

function podatok(pod, widsotok) {
  // const a = pod;
  pod = pod - (pod / 100) * widsotok;

  return pod;
}

document.write(
  `<b>Податок від 1000 грн буде </b> </br> ${podatok(1000, 19.5)} грн </br>`
);
/////Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function randomNumb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
}

document.write(`<b>Випадкове число </b> </br> ${randomNumb(1, 10)}  </br>`);

///

function count(str, symb) {
  // var symb = "о", str = "Астрономия это наука о небесных объектах";
  var str = str.toLowerCase();
  for (
    var count = -1, index = 0;
    index != -1;
    count++, index = str.indexOf(symb, index + 1)
  );

  return count;

  // document.writeln(count(str, symb)) // 5
}

document.write(
  `<b>Символ  а  повторяется    раз.  </b> </br> ${count(
    "коли я був малий то рахував букви ОООООО",
    "о"
  )}  </br>`
);

// Створіть функцію, яка конвертує долари в
// гривні та навпаки в залежності від наявності символа $
// або UAH в рядку. Приклад: convertCurrency("100$") ->
//2500 грн. або convertCurrency("2500UAH") -> 100$

function convertCurrency(sum, currency) {

  currency = currency.toLowerCase();

  if (currency.includes(`uan`)) {
    sum = sum * 0.0358;
  } else if (currency.includes(`$`)) {
    sum = sum * 27;
  } else if (currency.includes(" ")) {
    console.log("ви ввели неправельний символ");
  } else {
    console.log("ви ввели неправельний символ");
  }

  return sum;
}
document.write(
  `<b>Конвертацыя 2700 грн і 200 $ </b> </br>  ${convertCurrency(100, "$" )}  </br>
  ${convertCurrency(100, "UAN" )}
  `
);