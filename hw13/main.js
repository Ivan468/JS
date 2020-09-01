function* gen() {
  for (let index = 1; index < Infinity; index++) {
    yield index;
  }
}

const myGen = gen();
 

const kbd = document.querySelector(".btn");
const ID = document.querySelector(`.id`);

kbd.addEventListener("click", function (e) {
return (ID.innerHTML = myGen.next().value )  ;

});

 