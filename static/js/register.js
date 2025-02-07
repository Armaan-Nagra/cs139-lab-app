alert("register.js has loaded");

let button = document.getElementById("BUTTON");
let text = document.getElementById("TEXT");

button.addEventListener("click", () => {
    text.style.color = changeColour();
})

function changeColour() {
    return "#0EE5D0";
};