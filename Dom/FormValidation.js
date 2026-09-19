let form = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");


form.addEventListener("submit", function(e){
    e.preventDefault();

    let isValid = true;

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

     if (nameInput.value.trim() === "") {
        nameError.innerText = "Name cannot be empty";
        isValid = false;
    }
     if (emailInput.value.trim() === "") {
        emailError.innerText = "Email cannot be empty";
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
});