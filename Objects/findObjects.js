const employees = [
  { id: 1, name: 'Alice', department: 'Engineering' },
  { id: 2, name: 'Bob', department: 'Marketing' },
  { id: 3, name: 'Charlie', department: 'Engineering' },
  { id: 4, name: 'David', department: 'Sales' },
];

const employee = employees.find((emp) => emp.id === 3);

console.log(employee);

