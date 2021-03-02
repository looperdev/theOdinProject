const divContainer = document.getElementById("container");

// Create a grid using a table of elements.
//const boxes = divContainer.getElementsByClassName("box");

const size = 16;
const pixelSize = 1;

let gridTemplate = "";
for (let i = 0; i < size; i++) {
  gridTemplate += pixelSize.toString() + "rem ";
}

divContainer.style.gridTemplateColumns = gridTemplate;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    // Create div box
    const aBox = document.createElement("div");
    aBox.classList.add("box");
    aBox.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    divContainer.appendChild(aBox);
  }
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function (event) {
  const boxes = divContainer.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "";
  }
});

// boxClass.style.width = pixelSize.toString() + "px";
// boxClass.style.height = pixelSize.toString() + "px";
