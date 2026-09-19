let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", function () {
    if (para.style.display === "none"){
        para.style.display = "block";
        btn.innerText = "Hide";
    }
    else{
        para.style.display = "none";
        btn.innerText ="Show";
    }

});