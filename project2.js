var promptSync = require('prompt-sync');
var myPrompt = promptSync();
function checkAmount(balance) {
    console.log("your account balance: ".concat(balance));
}
function depositMoney(balance, amount) {
    return balance + amount;
}
function withdrawlMoney(balance, amount) {
    if (amount <= 0) {
        console.log("invalid number. Please enetr right num");
    }
    if (amount > balance) {
        console.log("balance is not enough");
        return balance;
    }
    return balance - amount;
}
function main() {
    var balance = 2000;
    console.log("welcome to AtM Machine");
    while (true) {
        console.log("\n Options");
        console.log("1. Check Amount");
        console.log("2. Deposite Money");
        console.log("3. WithDrawl Money");
        console.log("4. Exits");
        var choice = parseInt(myPrompt("enetr your option (1-4"), 10);
        switch (choice) {
            case 1:
                checkAmount(balance);
                break;
            case 2:
                var depositAmount = parseFloat(myPrompt("enter the amount deposite money"));
                balance = depositMoney(balance, depositAmount);
                console.log("".concat(depositAmount, " depsoite sucessfully"));
                break;
            case 3:
                var withdrwalAmount = parseFloat(myPrompt("enter the amount withdrawl money"));
                balance = withdrawlMoney(balance, withdrwalAmount);
                console.log("".concat(withdrwalAmount, " depsoite sucessfully"));
                break;
            case 4:
                console.log(" thank you for using the ATM. Have a nice day");
                break;
            default:
                console.log("invalid choice .Please enter valid options(1-4)");
        }
    }
}
main();
