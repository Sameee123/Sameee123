var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
    return Customer;
}());
function runTests() {
    var customer = new Customer("John", "Doe", "Male", 30, 112334);
    var bankAccount = new BankAccountImpl(500);
    console.log("Customer: ".concat(customer.firstName, " ").concat(customer.lastName));
    console.log("Gender: ".concat(customer.gender));
    console.log("Age: ".concat(customer.age));
    console.log("Mobile Number: ".concat(customer.mobileNumber));
    console.log("Initial Balance:", bankAccount.checkBalance());
    bankAccount.debit(200);
    console.log("Balance after debit:", bankAccount.checkBalance());
    bankAccount.credit(50);
    console.log("Balance after credit:", bankAccount.checkBalance());
    bankAccount.credit(150);
    console.log("Balance after large credit:", bankAccount.checkBalance());
}
runTests();
