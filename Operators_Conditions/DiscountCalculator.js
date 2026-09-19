let amount = 5000;
let discountPercent;

if (amount >= 5000) {
    discountPercent = 20;
} else if (amount >= 3000) {
    discountPercent = 15;
} else if (amount >= 1000) {
    discountPercent = 10;
} else {
    discountPercent = 0;
}

let discount = (amount * discountPercent) / 100;
let finalAmount = amount - discount;

console.log(`Original Amount: ${amount}`);
console.log(`Discount: ${discount} (${discountPercent}%)`);
console.log(`Final Amount: ${finalAmount}`);