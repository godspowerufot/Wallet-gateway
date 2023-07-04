import React, { useState } from "react";
function WalletCard() {
  const [balance, setBalance] = useState(50000);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleIncomeClick = () => {
    // Handle income click logic here
  };

  const handleWithdrawClick = () => {
    // Handle withdraw click logic here
  };

  return (
    <div className="wallet-card">
      <div className="wallet-card__header">
        <h3>
          <span style={{ marginLeft: "20px" }}> Current Balance:</span>

          <h2>${balance}</h2>
          <div className="wallet-card__buttonss">
            <span className="wallet-card__buttones">
              <span>
                <button className="wallet-card__dropdown">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="#000"
                      d="M12.146 3.146L7 8.293l-5.146-5.147-1.414 1.414L7 10.121l6.56-6.561-1.414-1.414z"
                    />
                  </svg>
                </button>
              </span>
              <span>
                {" "}
                N1200
                <p>income</p>
              </span>
            </span>{" "}
            <span className="wallet-card__buttones">
              <span>
                <button className="wallet-card__dropdown">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="#000"
                      d="M12.146 3.146L7 8.293l-5.146-5.147-1.414 1.414L7 10.121l6.56-6.561-1.414-1.414z"
                    />
                  </svg>
                </button>
              </span>
              <span>
                {" "}
                N200
                <p>out</p>
              </span>
            </span>
          </div>
        </h3>

        <div className="wallet-card__dropdown">
          <button
            className="wallet-card__dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? (
              "Close"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  fill="#000"
                  d="M12.146 3.146L7 8.293l-5.146-5.147-1.414 1.414L7 10.121l6.56-6.561-1.414-1.414z"
                />
              </svg>
            )}
          </button>
          {dropdownOpen && (
            <ul className="wallet-card__dropdown-menu">
              <li onClick={handleIncomeClick}>Income</li>
              <li onClick={handleWithdrawClick}>Withdraw</li>
            </ul>
          )}
        </div>
      </div>
      <div className="wallet-card__buttons">
        <button className="wallet-card__button" id="btn1">
          Withdraw
        </button>
        <button className="wallet-card__button" id="btn2">
          Send
        </button>
      </div>
    </div>
  );
}

export default WalletCard;
