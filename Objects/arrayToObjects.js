const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ben" },
  { id: 3, name: "Chitra" },
];

const byId = Object.fromEntries(users.map((user) => [user.id, user]));

console.log(byId);