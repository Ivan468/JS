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
  `<b> Cтупінь числа - 2 в 10 степені </b> </br> ${pow(2,10)} </br>`
);
