let btn = document.getElementById("btn");
let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

btn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});