function* gen() {
  for (let index = 1; index < Infinity; index++) {
    yield index;
  }
}

const myGen = gen();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

 
