
const person1 ={
    name: "Chandan Biswas",
    age:22,
    fatherName:"Mihir Kr Biswas",
    city:"Kolkata",
};

const person2 = {
    name: "Prince Biswas",
    age: 13,
    fatherName:"Mihir Kr Biswas",
    city:"Kolkata",
}

const mergedPerson = {...person1, ...person2};
console.log(mergedPerson);