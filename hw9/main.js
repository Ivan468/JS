 function getRandomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

 


//  function color() {
//   const box = document.createElement(`div`);
//   box.style.background = getRandomColor();
//  }

// function setRandomColor() {
//   document.body.children[0].style.background = getRandomColor();
// }
const BOX = () => {
  const box = document.createElement(`div`);
box.classList.add(`color`);
box.style.height = `50px`;
box.style.width = `50px`;
// let a = setInterval(getRandomColor, 1000);
box.style.background = getRandomColor() ;

// document.body.before(box);
// const flex = document.body.getElementsByClassName(`.flex`);
document.body.children[0].insertAdjacentElement(`afterbegin`, box)
}



BOX(); BOX(); BOX();BOX();BOX();BOX();BOX();BOX();BOX();BOX();
BOX(); BOX(); BOX();BOX();BOX();BOX();BOX();BOX();BOX();BOX();
BOX();BOX();BOX();BOX();BOX();