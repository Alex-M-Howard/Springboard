function createAccount(pin, amount = 0) {

  return {
    checkBalance(inputPin) {
      if (inputPin === pin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },

    deposit(inputPin, depositAmount) {
      if (inputPin === pin) {
        amount += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`;
      } else {
        return "Invalid PIN.";
      }
    },

    withdraw(inputPin, depositAmount) {
      if (inputPin === pin) {
        if (amount - depositAmount < 0) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          amount -= depositAmount;
          return `Successfully withdrew $${depositAmount}. Current balance: $${amount}.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },

    changePin(oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    }

  }
}



module.exports = { createAccount };
