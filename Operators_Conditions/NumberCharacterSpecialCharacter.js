let ch = "#";

if ( ch >= '0' && ch <= '9' ){
    console.log(`${ch} is a number`);
}
else if ( ch >= 'a' && ch <= 'z' ||  ch >= 'A' && ch <= 'Z' ){
    console.log(`${ch} is a character`);
}
else{
    console.log(`${ch} is a specialChracter`);
}