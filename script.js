console.log("Script.js is running!");

const button = document.querySelector(".card-btns button");
const card = document.querySelector(".card");

console.log("Button element:", button);
console.log("Card element:", card);

if (button) {
    button.addEventListener("click", function() {
        console.log("Button clicked!");
        const red = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const randomColors = `rgb(${red}, ${blue}, ${green})`;
        console.log("Random color:", randomColors);
        card.style.backgroundColor = randomColors;
        console.log("New background color:", randomColors);
    });
} else {
    console.log("Button element not found!");
}