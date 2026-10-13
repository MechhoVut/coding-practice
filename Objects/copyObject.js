
const originalObject = {
      name: " chanadan Biswas",
      age: 22,
      fatherName: "Mihir Kr Biswas",
      address:{
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
        pinCode: 700001,
      },
};
 const copiedObject = { ...originalObject };
    copiedObject.city = "Delhi";
    copiedObject.address.pinCode = 110001;

   
    console.log(copiedObject);