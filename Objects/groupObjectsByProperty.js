const students = [
  {name:"chanadan", department: "IT"},
  { name: "Asha", department: "CS" },
  { name: "Ben", department: "Math" },
  { name: "Chitra", department: "CS" },
  { name: "Dev", department: "Physics" },
  { name: "Esha", department: "Math" },
];


const byDepartment = students.reduce((groups,student) =>{
    const  key = student.department;
    ( groups[key] ??= []).push(student);
    return groups;
},
{});

console.log(byDepartment);