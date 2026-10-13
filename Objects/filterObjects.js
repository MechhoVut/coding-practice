const students = [
  { id: 1, name: "Ravi", score: 72 },
  { id: 2, name: "Asha", score: 85 },
  { id: 3, name: "Chandan", score: 96 },
  { id: 4, name: "Priya", score: 91 },
  { id: 5, name: "Amit", score: 65 },
];

const toppers = students.filter((student) => student.score >= 80);

console.log(toppers);