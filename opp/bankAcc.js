class BankAccount {
  // Initialize balance to 0
  constructor() {
    this.balance = 0;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Deposit amount must be positive');
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient balance');
    } else if (amount <= 0) {
      console.log('Withdraw amount must be positive');
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  }

  // Method to get current balance
  getBalance() {
    return this.balance;
  }
}

// Usage example
const account = new BankAccount();

account.deposit(150);     // Deposited $150. New balance: $150
account.withdraw(50);     // Withdrew $50. New balance: $100
account.withdraw(200);    // Insufficient balance
console.log(account.getBalance());  // Output: 100
