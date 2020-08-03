// zavdannya 1

let getRandomArray = (length, min, max) => {
  let arrRandom = [];

  for (let index = 0; index < length; index++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    arrRandom.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return arrRandom.join(", ");
};

document.write("Рандомне число:  <b> ", getRandomArray(10, 2, 100), "  </b> <hr> <br>");

// zavdannya 3

function average() {
  let sum = 0;

  for (index = 0; index < arguments[index]; index++)
    sum = sum + arguments[index];

  sum = sum / arguments.length;

  return sum;
}

document.write(
  "середнє арифметичне: із 10, 100, 10001, 15, 33 буде:  <b>",
  average(10, 100, 10001, 15, 33),
  " </b> <hr> <br>"
);

///MEDIAN --- 4

function calcMedian(...ar1) {
  let half = Math.floor(ar1.length / 2);

  ar1.sort(function (a, b) {
    return a - b;
  });

  if (ar1.length % 2) {
    return ar1[half];
  } else {
    return (ar1[half - 1] + ar1[half]) / 2.0;
  }
}

document.write(
  "Медіана із 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 буде: <b>",
  calcMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2),
  "</b><hr> <br>"
);
 
//Filter --- 5 arrRandom.join(", ")

function filterEvenNumbers(...number) {
  return number.filter((el) => el % 2).join(", ");
}

document.write(
  "Парні числа пропустити із  1, 2, 3, 4, 5, 6 буде: <b>",
  filterEvenNumbers(1, 2, 3, 4, 5, 6),
  "</b> <hr> <br>"
);

//Filter --- 6 - Більше за нуль

function countPositiveNumbers(...number) {
  a = number.filter((el) => el > 0);
  return a.length;
}

document.write(
  "Кількість чисел більших за 0 серед 1, -2, 3, -4, -5, 6 буде <b>",
  countPositiveNumbers(1, -2, 3, -4, -5, 6),
  "</b> <hr> <br>"
);
//Filter --- 7 - ділення Фільтр тільки тих що діляться на 5

function getDividedByFive(...number) {
  return number.filter((num) => num % 5 === 0).join(", ");
}

document.write(
  "Фільтр тільки тих що діляться на 5: <b>",
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2),
  "</b><br><hr> "
);
