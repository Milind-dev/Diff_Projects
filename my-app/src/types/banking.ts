export interface Transaction {
  id: number;
  type: "DEPOSIT" | "WITHDRAW" | "SETTLEMENT";
  amount: number;
  date: string;
}

export interface Account {
  accountHolder: string;
  accountNumber: number;
  balance: number;
}
