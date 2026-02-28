/* export type TransactionType = "Credit" | "Debit";

export interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  from?: number;
  to?: number;
  date: string;
}

export interface Account {
  id: number;
  name: string;
  balance: number;
  transactions: Transaction[];

}

 */ export interface Transaction {
  id: number;
  type: "DEBIT" | "CREDIT";
  amount: number;
  description: string;
  date: string;
}

export interface Account {
  id: number;
  holder: string;
  balance: number;
  history: Transaction[];
}
