import React, { useState } from "react";
import "./withdraw.css"; // import the CSS file for styling

const SendForm = () => {
  const [accoeptTag, setaccoeptTag] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [transactionPin, setTransactionPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="form2"
      style={{
        display: !dropdownOpen ? "flex" : "none",
      }}
    >
      <div className="form-group">
        <button
          id="btn3"
          type="submit"
          style={{
            float: "left",
          }}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M19.06 4.94l-1.41-1.41L12 10.59 6.35 4.94 4.94 6.35 10.59 12l-5.65 5.65 1.41 1.41L12 13.41l5.65 5.65 1.41-1.41L13.41 12l5.65-5.65z"
            />
          </svg>
        </button>

        <label htmlFor="account-number">Recipient Tag:</label>

        <input
          type="text"
          id="account-number"
          value={accoeptTag}
          onChange={(event) => setaccoeptTag(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="account-name">Account Name:</label>
        <input
          type="text"
          id="account-name"
          value={accountName}
          onChange={(event) => setAccountName(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount to Withdraw:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="transaction-pin">Transaction PIN:</label>
        <input
          type="password"
          id="transaction-pin"
          value={transactionPin}
          onChange={(event) => setTransactionPin(event.target.value)}
          required
        />
      </div>
      <button id="btn3" type="submit">
        send
      </button>
    </form>
  );
};

export default SendForm;
