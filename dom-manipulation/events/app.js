// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World Method 2!");

// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", function (e) {
//   console.log(e.target);
//   e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
