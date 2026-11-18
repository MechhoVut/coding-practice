const employees = [
    { firstName: "Rahul", lastName: "Sharma" },
    { firstName: "Priya", lastName: "Das" },
    { firstName: "Amit", lastName: "Roy" }
];

const employeeFullNmae = employees.map((employee) =>{
    return{
        fullname: employee.firstName + " " + employee.lastName 
    };
});

console.log(employeeFullNmae);