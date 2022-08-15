// Modified and Adjusted Data Privacy and Integrity Issues
function createBankAccount(initialBalance) {
  let deposits = [];
  let withdrawals = [];
  let balance = initialBalance;
  let transactionId = 0;

  return {
    getTransactionId() {
       transactionId += 1;
       return transactionId;
    },
    getBalance() {
      return balance;
    },
    deposit(amount) {
      balance += amount;
      deposits.push([this.getTransactionId(), amount]);
    },
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      withdrawals.push([this.getTransactionId(), amount]);
    },
    getDeposits() {
      let serializedDeposits = JSON.stringify(deposits);
      let deepCopiedDeposits = JSON.parse(deposits);
      
      return deepCopiedDeposits;
    },
    getWithdrawals() {
      return withdrawals.slice();
    },
  };
}

let elaine = createBankAccount(1000);
elaine.deposit(500);
elaine.withdraw(900);
elaine.deposit(400);
elaine.withdraw(100);
console.log(elaine.getBalance());
console.log(elaine.getDeposits());
console.log(elaine.getWithdrawals());