import { Component } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  createAccountText: string;
  depositText: string;
  withdrawText: string;
  balanceText: string;
  detailsText: string;
  interestText: string;
  accounts: Account[] = [];

  createAccount(_name) {
    if (!_name) {
      this.createAccountText = "Please enter your name.";
      return;
    }
    let _id = this.accounts.length + 1;
    let _account = new Account(_id, _name);
    this.accounts.push(_account);
    this.createAccountText = "Account Created! Account No: " + _account.acctNo +
      " Name: " + _account.acctName;
  }

  deposit(_acctNo, _amt) {
    if (_acctNo == "" || _amt == "") {
      this.depositText = "Please input both Account No. and Amount.";
      return;
    }

    let _account = this.accounts[_acctNo - 1];
    if (_account) {
      _account.balance += parseInt(_amt);
      this.depositText = "Deposit Completed! `Current Balance: " + _account.balance;
    } else {
      this.depositText = "Account not found!";
    }
  }

  withdraw(_acctNo, _amt) {
    if (_acctNo == "" || _amt == "") {
      this.withdrawText = "Please input both Account Number and Amount.";
      return;
    }

    let _account = this.accounts[_acctNo - 1];
    if (_account.balance < parseInt(_amt)) {
      this.withdrawText = "Not enough balance to withdraw!, Current Balance: " + _account.balance;
    } else {
      _account.balance -= parseInt(_amt);
      this.withdrawText = "Withdraw Completed!, Current Balance: " + _account.balance;
    }

  }

  balance(_acctNo) {
    if (_acctNo == "") {
      this.balanceText = "Please enter the account number.";
      return;
    }

    let _account = this.accounts[_acctNo - 1];
    if (_account) {
      this.balanceText = "Current balance for Account No " + _account.acctNo +
        " " + _account.acctName + " is " + _account.balance;
    } else {
      this.balanceText = "Account not found!";
    }


  }

  details(_acctNo) {
    if (_acctNo == "") {
      this.detailsText = "Please enter the account number.";
      return;
    }

    let _account = this.accounts[_acctNo - 1];
    console.log(_account);

    if (_account) {
      this.detailsText = "Account No: " + _account.acctNo + " Account Name: " + _account.acctName;
    } else {
      this.detailsText = "Account not found!";
    }
  }

  calInterest(_year, _rate) {
    let rateDemical = parseFloat(_rate) / 100;
    if (_year == "" || _rate == "") {
      this.interestText = "Please enter both Increased Year and Interest Rate.";
      return;
    }

    while (_year > 0) {
      for (var i = 0; i < this.accounts.length; i++) {
        this.accounts[i].balance += this.accounts[i].balance * rateDemical;
      }
      _year--;
    }
    this.interestText = "Interest has been calculated.";
    
  }
}
