import { useState } from "react";
import type { Account, Transaction } from "../types/banking";

export default function BankingDashboard() {
  // Two Accounts
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 1,
      holder: "Milind Dev",
      balance: 50000,
      history: [],
    },
    {
      id: 2,
      holder: "Rahul Sharma",
      balance: 30000,
      history: [],
    },
  ]);

  const [fromId, setFromId] = useState<number>(1);
  const [toId, setToId] = useState<number>(2);
  const [amount, setAmount] = useState<number>(0);

  const handleTransfer = () => {
    if (fromId === toId) return;
    if (amount <= 0) return;

    const sender = accounts.find((acc) => acc.id === fromId);
    if (!sender || sender.balance < amount) return;

    setAccounts((prev) =>
      prev.map((acc) => {
        // Debit sender
        if (acc.id === fromId) {
          const debitTxn: Transaction = {
            id: Date.now(),
            type: "DEBIT",
            amount,
            description: `Transfer to Account ${toId}`,
            date: new Date().toLocaleString(),
          };

          return {
            ...acc,
            balance: acc.balance - amount,
            history: [debitTxn, ...acc.history],
          };
        }

        // Credit receiver
        if (acc.id === toId) {
          const creditTxn: Transaction = {
            id: Date.now() + 1,
            type: "CREDIT",
            amount,
            description: `Received from Account ${fromId}`,
            date: new Date().toLocaleString(),
          };

          return {
            ...acc,
            balance: acc.balance + amount,
            history: [creditTxn, ...acc.history],
          };
        }

        return acc;
      }),
    );

    setAmount(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bank Transfer System</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Transfer Money</h3>

        <select
          value={fromId}
          onChange={(e) => setFromId(Number(e.target.value))}
        >
          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              From: {acc.holder}
            </option>
          ))}
        </select>

        <select value={toId} onChange={(e) => setToId(Number(e.target.value))}>
          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              To: {acc.holder}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button onClick={handleTransfer}>Transfer</button>
      </div>

      <hr />

      {/* Account Details */}
      {accounts.map((acc) => (
        <div
          key={acc.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>{acc.holder}</h3>
          <p>Balance: ₹ {acc.balance}</p>

          <h4>Transaction History</h4>
          {acc.history.length === 0 && <p>No Transactions</p>}

          {acc.history.map((txn) => (
            <div key={txn.id}>
              <strong>{txn.type}</strong> - ₹ {txn.amount}
              <br />
              <small>{txn.description}</small>
              <br />
              <small>{txn.date}</small>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* const debitTransaction: Transaction = () => ({
      id: Date.now(),
      type: "Debit",
      amount,
      from: fromId,
      to: toId,
      date: new Date().toLocaleString(),
    }); */

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

//   const [transaction, setTransaction] = useState<Transaction[]>([]);
