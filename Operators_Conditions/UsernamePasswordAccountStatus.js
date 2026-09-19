let username = "chandan";
let password = "12345";
let isBlocked = false;

let inputUsername = "chandaHH";
let inputPassword = "12345";

if (isBlocked){
    console.log("Account blocked");
}
else if ( username === inputUsername && password === inputPassword ){
    console.log("Login Succesfull");
}
else{
    console.log("Invalid Credentials");
}