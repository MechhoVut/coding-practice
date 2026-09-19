let person = {
    name : "Chandan",
    age  : 22,
    city : "kolkata"
};

for ( let key in person){
    console.log(`${key} : ${person[key]}`);
};