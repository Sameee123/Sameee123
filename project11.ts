class Customer {
    public firstName: string;
    public lastName: string;
    public gender: string;
    public age: number;
    public mobileNumber: number;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }

    // Getters and Setters if needed
}

interface BankAccount {
    debit(amount: number): void;
    credit(amount: number): void;
    checkBalance(): number;
}


function runTests() {
    const customer = new Customer("John", "Doe", "Male", 30, 112334);
    const bankAccount = 500;

    console.log(`Customer: ${customer.firstName} ${customer.lastName}`);
    console.log(`Gender: ${customer.gender}`);
    console.log(`Age: ${customer.age}`);
    console.log(`Mobile Number: ${customer.mobileNumber}`);

    console.log("Initial Balance:", bankAccount.checkBalance());

    bankAccount.debit(200);
    console.log("Balance after debit:", bankAccount.checkBalance());

    bankAccount.credit(50);
    console.log("Balance after credit:", bankAccount.checkBalance());

    bankAccount.credit(150);
    console.log("Balance after large credit:", bankAccount.checkBalance());
}

runTests();