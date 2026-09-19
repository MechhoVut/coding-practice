let arr = [ 2, 4, 6, 12, 43, 0, 1, 21];

let largest = arr[0];

for( let i = 1; i < arr.length; i++){
    if( arr[i] > largest ){
        largest = arr[i];
    }
}

console.log(`Largest element in the array is ${largest}`);