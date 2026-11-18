const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" }
];
 const updatedUser = users.map ((user) =>{
    return{
          ...user,
          status : "Active"
    }
 });
 console.log(updatedUser);