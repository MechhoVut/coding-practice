let arr = [22, 34, 65, 71, 8, 1, 3, 10, 21];
let target = 71;
let found = false;

for(let i = 0; i < arr.length; i++){
    if( arr[i] === target){
        found = true;
        break;
    }
}

if(found){
    console.log(`Found`);
}
else{
    console.log(`not found`);
}