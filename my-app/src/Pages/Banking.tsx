import type { bankingType } from "../types/bankingType";

// interface Props extends bankingType

// interface Props {
//   id: number;
//   account_id: number;
//   ifsc_code: string;
//   account_name: string;
//   branch_name: string;
// }

export default function Banking({
  id,
  account_id,
  ifsc_code,
  account_name,
  branch_name,
}: bankingType) {
  return (
    <div>
      <div>
        <h1> Banking Details </h1>
      </div>
      <div>
        <p>ID: {id}</p>
        <p>Account ID: {account_id}</p>
        <p>Account Name: {account_name}</p>
        <p>IFSC Code: {ifsc_code}</p>
        <p>Branch Name: {branch_name}</p>
      </div>
    </div>
  );
}
