let timeO = Date.now();
let timeLast = "";
function getRandomChinese() {
  return new Promise((num) => {
    setTimeout(() => {
      +num(String.fromCharCode(Date.now().toString().slice(-5)));
    }, 50);
  });
}

async function myGenPasw(length) {
  let result = "";
  let i = 0;
  while (i < length) {
    result += await getRandomChinese();
    i++;
    timeLast = Date.now();
  }

  function Time() {
    let timeFull = timeLast - timeO;
    return timeFull;
  }

  return console.log(`${result} ${Time()} ms`);
}

myGenPasw(4);
