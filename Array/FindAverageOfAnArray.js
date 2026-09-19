let arr = [1, 2, 20,45,76];
let sum = 0;
let avg;
for ( let i = 0; i < arr.length; i ++){
    sum += arr[i];
    
}
avg = (sum / arr.length);
console.log(`Average of the array is ${avg}`);
