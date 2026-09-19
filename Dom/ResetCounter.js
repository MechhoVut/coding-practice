let count = 0;

let countText = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function(){
    count = count + 1;
    countText.innerText = "Count: " + count;
});

decreaseBtn.addEventListener("click", function(){
    count = count - 1;
    countText.innerText = "Count: " + count;
});

resetBtn.addEventListener("click", function(){
    count = 0;
    countText.innerText = "Count: " + count;
});