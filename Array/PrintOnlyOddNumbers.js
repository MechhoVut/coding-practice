let arr = [22, 34, 65, 71, 8, 1, 3, 10, 21];
let odd = [];

for (let i = 0; i < arr.length; i++){
    if( arr[i] % 2 !== 0){
        odd.push(arr[i]);
    }
}

console.log(`${odd} these are the odd elements`);