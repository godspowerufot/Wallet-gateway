import React from "react";
import "./TransactionPage.css";

function TransactionPage() {
  const transactions = [
    {
      name: "Recent Transactions",
      occupation: "",
      amount: "view",
      time: "",
    },
    {
      name: "John Doe",
      photo: "https://via.placeholder.com/50",
      occupation: "Freelance Writer",
      amount: "$500",
      time: "5:00",
    },
    {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/50",
      occupation: "Graphic Designer",
      amount: "$200",
      time: "4:30",
    },
  ];

  return (
    <div className="transaction-page">
      {transactions.map((transaction, index) => (
        <div className="transaction" key={index}>
          <div className="transaction__left">
            <img src={transaction.photo} alt={transaction.name} />
            <div className="transaction__details">
              <h3>{transaction.name}</h3>
              <p>{transaction.occupation}</p>
            </div>
          </div>
          <div className="transaction__right">
            <h3>{transaction.amount}</h3>
            <p>{transaction.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionPage;
