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
