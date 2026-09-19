let num = 121;
let reversed = 0;

for ( let temp = num; temp > 0; temp = Math.floor( temp / 10) ){
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
}

if( num === reversed){
    console.log(`${num} is a palindrome number`);
}
else{
    console.log(`${num} is not a palindrome number`);
}