import React, { useState } from "react";
import "./withdraw.css";
function TransactionPinForm() {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmNewPin, setConfirmNewPin] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: !dropdownOpen ? "flex" : "none",
      }}
      id="form3"
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
        {}
        <label htmlFor="current">current pin:</label>

        <input
          type="text"
          id="password"
          value={currentPin}
          onChange={(event) => setCurrentPin(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="account-name">New pin:</label>
        <input
          type="text"
          id="password"
          value={newPin}
          onChange={(event) => setNewPin(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bank-name">Confirm pin:</label>
        <input
          type="text"
          id="bank-name"
          value={confirmNewPin}
          onChange={(event) => setConfirmNewPin(event.target.value)}
          required
        />
      </div>

      <button id="btn3" type="submit">
        update
      </button>
    </form>
  );
}

export default TransactionPinForm;
