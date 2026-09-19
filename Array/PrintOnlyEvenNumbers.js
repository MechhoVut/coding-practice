/*let arr = [ 22, 34, 65, 71, 8, 1, 3, 10, 21];

for ( let i = 0; i< arr.length; i++){
    if( arr[i] % 2 === 0){
        console.log(`these are the even number${arr[i]}`);
    }
} */

let arr = [22, 34, 65, 71, 8, 1, 3, 10, 21];
let evens = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evens.push(arr[i]);
    }
}
console.log(`these are the even number${evens}`);