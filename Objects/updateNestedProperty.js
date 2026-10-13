const student = {
  name: "Chandan Biswas",
  age: 22,
  address: {
    city: "Delhi",
    state: "West Bengal",
    country: "India",
    pinCode: 700001,
  },
};

student.address.city = "Kolkata";

console.log(student.address.city); 
console.log(student);