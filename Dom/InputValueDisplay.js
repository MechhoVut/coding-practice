let input = document.getElementById("name");
let button = document.getElementById("btn");
let output = document.getElementById("out");

button.addEventListener("click", function(){
    output.innerText ="Hello," + input.value;

});

