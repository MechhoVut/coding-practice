// function login(username,password){
//      const USER_NAME = "Chandan Biswas";
//      const USER_PASSWORD = "Biswas@123";
    
//     if(username.trim ==="" || password.trim ===""){
//         return("Error: Fields can not be empty");
//     }else if(username.length < 3){
//         return("Error: Atleast 3 charater ");
//     }else if(password.length < 8){
//         return("Error : password should be more than 8 char");
//     }else if(username !== USER_NAME || password !== USER_PASSWORD ){
//         return("Invalid Username or password");
//     }else{
//         return("Login Successfully ");
//     }
// }
// console.log(login("Chandan Biswas","Biswas@123"));

//####################################################################################

// let attempts = 0 ;
// function tryLogin(username,password){
//     const USER_NAME = "Chandan Biswas";
//     const USER_PASSWORD = "Biswas@123";
//    if(attempts > 3) return " Account is Locked";
//    else if(username === USER_NAME && password === USER_PASSWORD){
//     attempts = 0;
//     return ("Login Successfully");
//    }else{
//     attempts ++ 
//     return(`${attempts}`);
//    }

// }
// console.log(tryLogin("Chandan Biswas","Biswas@"));
// console.log(tryLogin("Chandan Biswas", "Biswas@"));
// console.log(tryLogin("Chandan Biswas", "Biswas@"));
// console.log(tryLogin("Chandan Biswas", "Biswas@"));
// console.log(tryLogin("Chandan Biswas", "Biswas@"));

//##################################################################################


// function passStrength(pw) {
//     if (pw.length < 8) return "Weak: too short";

//     const hasDigit = /\d/.test(pw);
//     const hasUpper = /[A-Z]/.test(pw);

//     if (hasDigit && hasUpper) return "Strong";
//     if (hasDigit || hasUpper) return "Medium";

//     return "Weak";
// }

// console.log(passStrength("chandaB23"));


//####################################################################################



// function bill (units){
//     if (units <= 100) return (units*5);
//     else if(units > 100 && units <= 200) return ((100*5) + (units-100)*7 );
//     else return ((100*5) + (100*7) + (units-200)*10 )
// }
// console.log(bill(201));


//#####################################################################################


