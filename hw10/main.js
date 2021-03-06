window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop function
  audio.currentTime = 0;
  audio.play();
  key.classList.add(`playing`);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
const kbd = document.querySelectorAll("kbd");

keys.forEach((key) =>
  key.addEventListener("click", function (e) {
    const k = e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${k}"]`);
    const key = document.querySelector(`.key[data-key="${k}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);
  })
);

keys.forEach((kbd) =>
  kbd.addEventListener("click", function (e) {
    const k = e.path[1].attributes[0].value;
    const audio = document.querySelector(`audio[data-key="${k}"]`);
    const key = document.querySelector(`.key[data-key="${k}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);
  })
);
