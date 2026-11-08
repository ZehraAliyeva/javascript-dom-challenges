const colorBox = document.querySelector("#colorBox");
const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");
const resetBtn = document.querySelector("#resetBtn");

function setColor(color,name){
    colorBox.style.backgroundColor = color;
    colorBox.textContent = name;
}

redBtn.addEventListener("click",() => setColor("red","Red"));
greenBtn.addEventListener("click",() => setColor("green","Green"));
blueBtn.addEventListener("click",() => setColor("blue","Blue"));
resetBtn.addEventListener("click",() => setColor("gray","Gray"));