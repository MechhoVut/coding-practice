let marks = 255;
if ( marks >= 90 && marks <= 100){
    console.log(`scored 'A'`);
}
else if( marks >=80 && marks <=89 ){
    console.log(`scored 'B'`);
}
else if( marks >= 70 && marks <= 79){
    console.log(`scored ''`);
}
else if( marks >= 60 && marks <= 69 ){
    console.log(`scored 'D'`);
}
else if( marks <= 59 && marks >= 0 ){
    console.log(`scored 'F'`);
}
else{
    console.log(`Its not a valid number`);
}

