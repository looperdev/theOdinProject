// function changeColor(key) {
//   key.className += " playing";
// }
// // const keys = Array.from(document.querySelectorAll(".key"));
// // keys.forEach((key) =>
// //   key.addEventListener("transitioned", changeColor(key))
// // );

// window.addEventListener("keydown", function (event) {
//   // Get the key div
//   // Get the key sound
//   const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
//   const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
//   key.className += " playing";
//   //element.classList.remove("mystyle");
//   key.addEventListener("transitionend", function (event) {
//     key.classList.remove("playing");
//   });

//   sound.play();
//   console.log(sound);
// });

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  console.log(key);
}

function removeTransition(e) {
  this.classList.remove("playing");
  console.log(e);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
