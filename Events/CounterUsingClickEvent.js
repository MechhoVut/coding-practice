let increaseBtn = document.getElementById("increase")
let decreaseBtn = document.getElementById("decrease")
let resetBtn = document.getElementById("reset")
let countDisplay = document.getElementById("count")

let count = 0

increaseBtn.addEventListener("click", function() {
    count = count + 1
    countDisplay.innerHTML = "count :" + count
}) 

decreaseBtn.addEventListener("click", function() {
    count = count - 1
    countDisplay.innerHTML = "count :" + count
}) 

resetBtn.addEventListener("click", function() {
    count = 0
    countDisplay.innerHTML = "count :" + count
})