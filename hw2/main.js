let N = +prompt("ведіть перше число");
let M = +prompt("ведіть друге число (більше за перше)");

while (isNaN(N) || isNaN(M)) {
  alert("Це не цифри!");
  N = prompt("ведіть перше число");
  M = prompt("ведіть друге число (більше за перше)");
}

N = Math.floor(N);
M = Math.floor(M);
//S = Math.floor(S);

//  while (N === NaN || M === NaN ) {
//    alert(`введіть числа а не букви!`);
//    N = +prompt();
//    M = +prompt();
//  }

// while (N = NaN) { // выводит 0, затем 1, затем 2
//   alert(`введіть число а не букви`);
//   M = +prompt();
// }

while (M > 999999 || N > 999999) {
  alert(`введіть менші  числа за попередні`);
  N = +prompt();
  M = +prompt();
}

while (N > M) {
  alert(`введіть більше число за попереднє`);
  M = +prompt();
}

let str = 0;

for (let i = N; i <= M; i++) {
  // можна і без let
  str = str + i;
}

console.log(`${str} ваш результат якби ви не не обрали парних чисел`);

console.log(`${N} перше число`);
console.log(`${M} дрруге число`);

const isPaired = confirm(`Пропускати парні числа?`);

let sum = 0;
for (let i = N; i <= M; i++) {
  //нехай і дорівнює скажімо 10 , тоді якщо і менше за 100 (наприклад) то додати до і одну цифру
  if (isPaired && i % 2 === 0) continue;
  sum = sum + i;
}

console.log(`Ваш результат із пропуском парних чисел: ${sum}`);
