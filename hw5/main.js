// zavdannya 1

let getRandomArray = (length, min, max) => {
  let arrRandom = [];

  for (let index = 0; index < length; index++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    arrRandom.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return arrRandom;
};

console.log(getRandomArray(10, 2, 100));

// zavdannya 3

function average() {
  let sum = 0;

  for (index = 0; index < arguments[index]; index++) sum = sum + arguments[index];

  sum = sum / arguments.length;

  return sum;
}

console.log( "середнє арифметичне: ", average(10, 100, 10001, 15, 33));


///MEDIAN

function calcMedian(...ar1) {

  let half = Math.floor(ar1.length / 2);
  
  ar1.sort(function(a, b) { return a - b;});
  
  if (ar1.length % 2) {
    return ar1[half];
  } else {
    return (ar1[half-1] + ar1[half]) / 2.0;
  }
}

console.log('Mediana',  calcMedian( 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//