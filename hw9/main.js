function getRandomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}
const BOX = () => {
  const box = document.createElement(`div`);
  box.classList.add(`color`);
  box.style.height = `50px`;
  box.style.width = `50px`;
  setInterval(() => {box.style.background = getRandomColor();}, 1000)
  document.body.children[0].insertAdjacentElement(`afterbegin`, box);
};
 
for (let index = 0; index < 25; index++) {
  BOX();
}

// let i = 0;
//  while (i < 25) {
//   BOX();
//   i++
//  }