let num = 2354635545;
let smallest = 9;

for ( let temp = num; temp > 0; temp = Math.floor (temp / 10)){
    let lastDigit = temp % 10;
    if ( lastDigit < smallest){
        smallest = lastDigit;
    }
}

console.log(`the smallest digit is${smallest}`);