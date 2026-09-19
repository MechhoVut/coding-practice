let arr = [1, 32, 56, 32, 996];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(`Smallest element in the array is ${smallest}`);