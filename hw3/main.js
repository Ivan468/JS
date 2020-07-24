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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.write(
  `<hr/><b>Великі букви</b> </br> ${capitalizeFirstLetter("іван")} </br>`
);

function podatok(pod, widsotok) {

  pod = pod - (pod / 100) * widsotok;

  return pod;
}

document.write(
  `<hr/><b>Податок від 1000 грн буде </b> </br> ${podatok(
    1000,
    19.5
  )} грн </br>`
);

function randomNumb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

document.write(
  `<hr/><b>Випадкове число </b> </br> ${randomNumb(1, 10)}  </br>`
);

function count(str, symb) {
  var str = str.toLowerCase();
  for (
    var count = -1, index = 0;
    index != -1;
    count++, index = str.indexOf(symb, index + 1)
  );

  return count;
}

document.write(
  `<hr/><b>Символ  "а" повторяется в реченні  "коли я був малий то рахував букви " ${count(
    "коли я був малий то рахував букви ",
    "о"
  )}  раз.  </b>    </br>`
);

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

function remove_char(str, simbol) {
  while (str.includes(simbol)) {
    str = str.replace(simbol, "");
  }
  return str;
}

document.writeln(`<hr/> <b>Замінити у реченні  "<i>every hunter wishes to $ % ^ & * knowhhhh h</i>" літеру h - буде  </br></b>
${remove_char("every hunter wishes to $ % ^ & * knowhhhh h", "h")} `);

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
