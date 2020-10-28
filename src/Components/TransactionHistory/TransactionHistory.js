import "./TransactionHistory.css";
import TransactionItem from "../TransactionItem/TransactionItem";
import React from "react";

const TransactionHistory = ({ items }) => {
  return (
    <div className="transaction">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, type, amount, currency } = item;
            return (
              <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
