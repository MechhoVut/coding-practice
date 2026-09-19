let count = 0;

let countText = document.getElementById("count");
let decreaseBtn = document.getElementById("decrease");
let increaseBtn = document.getElementById("increase");

increaseBtn.addEventListener("click", function(){
    count = count + 1;
    countText.innerText = "Count" + count;

});
decreaseBtn.addEventListener("click", function (){
    count = count - 1;
    countText.innerText = "Count" + count;
});
