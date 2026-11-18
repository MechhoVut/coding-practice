const students = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Priya", age: 21 },
    { id: 3, name: "Amit", age: 23 }
];


const studentName = students.map((student) => {
    return student.name;
});

console.log(studentName);