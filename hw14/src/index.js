import "./main.js";
import "./style.css";

import imagesFon from "./images/marco-assmann.jpg";

console.log(`Hello world im here build`);

  const backGroundIm = document.createElement(`div`);

  backGroundIm.style.height = `184px`;
  backGroundIm.style.width = `250px`;
   backGroundIm.style.backgroundImage = `url(${imagesFon})`
  backGroundIm.style.backgroundSize = `cover`

  document.body.children[1].insertAdjacentElement(`afterbegin`, backGroundIm);
 
