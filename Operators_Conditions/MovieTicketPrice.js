function calculateFinalPrice(baseTicket, age, isWednesday) {
    let price = baseTicket;
    let discountPercent = 0;

    if (age < 12) {
        discountPercent = 50;
    } else if (age >= 60) {
        discountPercent = 30;
    }

    price = price - (price * discountPercent) / 100;

    if (isWednesday) {
        price = price - (price * 20) / 100;
    }

    return price;
}

let baseTicket = 200;
let age = 10;
let isWednesday = true;

let finalPrice = calculateFinalPrice(baseTicket, age, isWednesday);
console.log(`Final Price is ${finalPrice}`);