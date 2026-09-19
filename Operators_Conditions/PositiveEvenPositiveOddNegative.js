let num =  -7 ;

if ( num % 2 == 0 && num > 0 ){
    console.log(`${num} is a positive Even number`);
}
else if ( num % 2 != 0 && num > 0){
    console.log(`${num} is a positive Odd number`);
}
else if ( num % 2 == 0 && num < 0 ){
    console.log(`${num} is a negative Even number`);
}
else if ( num % 2 != 0 && num < 0){
    console.log(`${num} is a negative Odd number`);
}
else if ( num === 0){
    console.log(`${num} is a zero`);
}
else{
    console.log("Invalid input")
}