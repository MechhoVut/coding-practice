let num = 3;

for ( let i = 2; i <= 9; i++){
    if( num > 1 && num % i === 0){
        console.log(`${num} is a prime number`);
    }
    else{
        console.log(`${num} is not a prime number`);
    }
}
