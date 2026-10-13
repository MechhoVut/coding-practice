

const user = {
    name:"Chandan Biswas",
    age:22,
   
}

const {name, city = "Kolkata"} = user;
console.log(name);
console.log(city);