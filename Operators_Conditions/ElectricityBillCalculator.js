let units = 250;
let bill = 0;

if (units > 0) {
    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = 100 * 5 + (units - 100) * 7;
    } else if (units <= 300) {
        bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
    } else {
        bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 15;
    }
    console.log(`Electricity bill for ${units} units is ${bill}`);
} else {
    console.log("Invalid input");
}