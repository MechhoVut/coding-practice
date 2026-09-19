let balance = 10000;
let withdrawl = 350;
let remainingBalance;

if (withdrawl > 0 && withdrawl <= balance && withdrawl % 100 === 0) {
    remainingBalance = balance - withdrawl;
    console.log("Withdrawal successful");
    console.log(`Remaining balance: ${remainingBalance}`);
} else {
    console.log("Withdrawal failed: invalid amount");
}