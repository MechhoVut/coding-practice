let salary = 30000;
let experience = 5;
let bonus;
let finalSalary;

if ( experience >= 10 ){
    bonus = (salary * 20) / 100 ; 
    finalSalary = ( salary + bonus);

    console.log(`Bonus is ${bonus}`);
    console.log(`Final Salary is ${finalSalary}`);
}
else if ( experience >= 5 ){
    bonus = (salary * 10) / 100 ; 
    finalSalary = ( salary + bonus);

    console.log(`Bonus is ${bonus}`);
    console.log(`Final Salary is ${finalSalary}`);
}
else if ( experience >= 2 ){
    bonus = (salary * 5) / 100 ; 
    finalSalary = ( salary + bonus);

    console.log(`Bonus is ${bonus}`);
    console.log(`Final Salary is ${finalSalary}`);
}
else{
    console.log(`Final Salary is ${salary}`);
}
