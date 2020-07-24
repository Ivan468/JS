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
  `<hr/><b> Найбільще число із 12349654567</b> </br> ${getMaxDigit(
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
  `<hr/><b> Cтупінь числа - 2 в 10 степені </b> </br> ${pow(2, 10)} </br>`
);

/////великі букви
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.write(
  `<hr/><b>Великі букви</b> </br> ${capitalizeFirstLetter("іван")} </br>`
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
  `<hr/><b>Податок від 1000 грн буде </b> </br> ${podatok(
    1000,
    19.5
  )} грн </br>`
);
/////Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function randomNumb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
}

document.write(
  `<hr/><b>Випадкове число </b> </br> ${randomNumb(1, 10)}  </br>`
);

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
  `<hr/><b>Символ  "а" повторяется в реченні  "коли я був малий то рахував букви " ${count(
    "коли я був малий то рахував букви ",
    "о"
  )}  раз.  </b>    </br>`
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
  `<hr/><b>Конвертацыя 100 грн і 100 $ </b> </br>  ${convertCurrency(
    100,
    "$"
  )}  </br>
  ${convertCurrency(100, "UAN")}
  `
);

// Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(long = 8) {
  if (long == 8) {
    random = randomNumb(99999999, 10000000);
  } else if (long == 7) {
    random = randomNumb(9999999, 1000000);
  } else if (long == 6) {
    random = randomNumb(999999, 100000);
  } else if (long == 5) {
    random = randomNumb(99999, 10000);
  } else if (long == 4) {
    random = randomNumb(9999, 1000);
  } else if (long == 3) {
    random = randomNumb(999, 100);
  } else {
    random = `неможливо згенерувати таку довжину пароля або невірно введені дані`;
  }

  return random;
}

document.write(
  ` <hr/> </br><b>Згенерувати пароль на 8 цифр </b> -  ${getRandomPassword(
    8
  )}  </br>
  <b>Згенерувати пароль на 5 цифр </b>  - ${getRandomPassword(5)}  </br>
  <b>Згенерувати пароль на 2 цифри </b>  - ${getRandomPassword(2)}  </br>
  `
);
//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function remove_char(str, simbol) {
  while (str.includes(simbol)) {
    str = str.replace(simbol, "");
  }
  return str;
}

document.writeln(`<hr/> <b>Замінити у реченні  "<i>every hunter wishes to $ % ^ & * knowhhhh h</i>" літеру h - буде  </br></b>
${remove_char("every hunter wishes to $ % ^ & * knowhhhh h", "h")} `);
///
function isPalindrome(str) {
  let strNoSpace = str.replace(/\s/g, "");
  var strReverse = strNoSpace.split("").reverse().join("");

  if (strReverse.toLowerCase() === strNoSpace.toLowerCase()) {
    return "так";
  } else {
    return "ніт";
  }
}
document.writeln(`<hr/> <b>Чи є слово  мадам паліндромом?-  </b>
${isPalindrome(
  "мадам"
)},</br> чи є слово <b>качка</b> паліндромом? - ${isPalindrome(
  "качка"
)} і "Я несу гусеня" - ${isPalindrome("Я несу гусеня")} .`);

//deleteDuplicateLetter("Бісквіт був дуже ніжним")

function deleteDuplicateLetter(sentenses) {
  let str = sentenses.toLowerCase().split("");
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      output = output + str[i];
    }
  }
  return output;
}

document.writeln(`<hr/> <b>Видалити букви що повторюються-  </b>
 ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}.`);
