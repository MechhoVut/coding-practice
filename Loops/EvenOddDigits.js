let num = 1234454678;
let even = 0;
let odd = 0;

for ( let temp = num; temp > 0; temp = Math.floor( temp /10)){
    let lastdigit = temp % 10;
    if( lastdigit % 2 === 0){
        even ++ ;
    }
    else{
        odd ++ ;
    }

}

console.log(`Even digits ${even}`);
console.log(`Odd digits ${odd}`);