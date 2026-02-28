import { useState } from "react";
import type { Account, Transaction } from "../types/banking";

export default function BankingDashboard() {
  // Account state
  const [account, setAccount] = useState<Account | null>(null);

  // Transaction history
  const [history, setHistory] = useState<Transaction[]>([]);

  // Form states
  const [name, setName] = useState("");
  const [number, setNumber] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  // Create Account
  const createAccount = () => {
    setAccount({
      accountHolder: name,
      accountNumber: number,
      balance: 0,
    });
  };

  // Deposit
  const handleDeposit = () => {
    if (!account || amount <= 0) return;

    const updatedBalance = account.balance + amount;

    setAccount({ ...account, balance: updatedBalance });

    addTransaction("DEPOSIT", amount);
  };

  // Withdraw
  const handleWithdraw = () => {
    if (!account || amount <= 0 || amount > account.balance) return;

    const updatedBalance = account.balance - amount;

    setAccount({ ...account, balance: updatedBalance });

    addTransaction("WITHDRAW", amount);
  };

  // Settlement (like transfer)
  const handleSettlement = () => {
    if (!account || amount <= 0 || amount > account.balance) return;

    const updatedBalance = account.balance - amount;

    setAccount({ ...account, balance: updatedBalance });

    addTransaction("SETTLEMENT", amount);
  };

  // Add Transaction Helper
  const addTransaction = (type: Transaction["type"], amount: number) => {
    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      amount,
      date: new Date().toLocaleString(),
    };

    setHistory((prev) => [newTransaction, ...prev]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Banking Dashboard</h2>

      {/* Create Account Form */}
      {!account && (
        <div>
          <h3>Create Account</h3>
          <input
            type="text"
            placeholder="Account Holder Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Account Number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <button onClick={createAccount}>Create</button>
        </div>
      )}

      {/* Account Section */}
      {account && (
        <div>
          <h3>Account Details</h3>
          <p>Name: {account.accountHolder}</p>
          <p>Account No: {account.accountNumber}</p>
          <h2>Balance: ₹ {account.balance}</h2>

          <hr />

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
          <button onClick={handleSettlement}>Settlement</button>

          <hr />

          <h3>Transaction History</h3>

          {history.length === 0 && <p>No Transactions Yet</p>}

          {history.map((txn) => (
            <div key={txn.id} style={{ borderBottom: "1px solid gray" }}>
              <p>
                {txn.type} - ₹ {txn.amount}
              </p>
              <small>{txn.date}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
