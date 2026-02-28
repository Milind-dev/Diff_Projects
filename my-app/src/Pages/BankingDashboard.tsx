import React, { useState } from "react";
import type { Account, Transaction } from "../types/banking";

export default function BankingDashboard() {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 1,
      name: "Milind Dev",
      balance: 10000,
      transactions: [],
    },
    {
      id: 2,
      name: "Rahul Singh",
      balance: 5000,
      transactions: [],
    },
  ]);
  //   const [transaction, setTransaction] = useState<Transaction[]>([]);

  const [fromId, setFromId] = useState<number>(1);
  const [toId, setToId] = useState<number>(2);
  const [amount, setAmount] = useState<number>(2);

  const handleTransfer = (): void => {
    if (amount < 0) {
      return;
    }
    const sender = accounts.find((acc) => acc.id === fromId);
    const receiver = accounts.find((acc) => acc.id === toId);
    if (!sender || !receiver) return;
    if (sender.balance < 0) {
      alert("Insufficient balance");
    }

    const creditTransaction: Transaction = {
      id: Date.now() + 1,
      type: "Credit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString(),
    };
    /* const debitTransaction: Transaction = () => ({
      id: Date.now(),
      type: "Debit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString(),
    }); */
    const debitTransaction: Transaction = {
      id: Date.now(),
      type: "Debit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString(),
    };

    /* 
    const updatedAccounts = accounts.map((acc) => {
      if (acc.id === fromId) {
        return {
          ...acc,
          balance: acc.balance - amount,
          transactions: [debitTransaction, ...acc.transactions],
        };
      }

      if (acc.id === toId) {
        return {
          ...acc,
          balance: acc.balance + amount,
          transactions: [creditTransaction, ...acc.transactions],
        };
      }

      return acc;
    }); */

    const updatedAccount = accounts.map((acc) => {
      if (acc.id === fromId) {
        return {
          ...acc,
          balance: acc.balance - amount,
          transactions: [creditTransaction, ...acc.transactions],
        };
      }
      if (acc.id === toId) {
        return {
          ...acc,
          balance: acc.balance + amount,
          transactions: [debitTransaction, ...acc.transactions],
        };
      }
      return acc;
    });

    setAccounts(updatedAccount);
    setAmount(0);

    /* 
    const debitTransaction: Transaction = {
      id: Date.now(),
      type: "Debit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString(),
    }; */

    /*   const debitTransaction: Transaction = {
      id: Date.now(),
      type: "Debit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString()
    }; */
  };

  return (
    <div>
      <h1> BankingDashboard</h1>
      <div>
        {accounts.map((acc) => (
          <div key={acc.id}>
            <p key={acc.id}>account name : ${acc.name}</p>
            <p>balance : {acc.balance}</p>
            {acc.transactions.length === 0 && <p>No Transaction</p>}
            {acc.transactions.map((txn) => (
              <>
                {txn.type} - {txn.amount}
              </>
            ))}
          </div>
        ))}
        <hr />
        <h3>Transfer Money</h3>
        <div>
          <label>From:</label>
          <select
            value={fromId}
            onChange={(e) => setFromId(Number(e.target.value))}
          >
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.name}>
                {acc.name}
              </option>
            ))}
          </select>
          <label>To:</label>
          <select
            value={toId}
            onChange={(e) => setToId(Number(e.target.value))}
          >
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
}
