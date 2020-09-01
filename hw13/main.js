function* gen() {
  for (let index = 1; index < Infinity; index++) {
    yield index;
  }
}

const myGen = gen();

const kbd = document.querySelector(".btn");
const ID = document.querySelector(`.id`);
const upText = document.querySelector(`.upText`)
const downText = document.querySelector(`.downText`)

kbd.addEventListener("click", function (e) {
  return (ID.innerHTML = myGen.next().value);
});

upText.addEventListener("click", function (e) {
  return renderFontUp();
});

downText.addEventListener("click", function (e) {
  return renderFontDown();
});


function* FontGenerator(value) {
  let a;
  for(let i = 0; i < Infinity ; i++) {
      a = yield value;
      if(a === 'up') {
          value += 2;

      } else if (a === 'down') {
          value -= 2;
      }
  }
}
const fontGenerator = FontGenerator(14);




function renderFontUp() {
  document.querySelector(".text").style.fontSize = `${fontGenerator.next('up').value}px`;

}
function renderFontDown() {
 document.querySelector(".text").style.fontSize = `${fontGenerator.next('down').value}px`;

}



// function idTwo() {
//    let a = myGen.next().value;

//    let b = `ID-` + a; 
//    return b;
// }

// console.log(idTwo());