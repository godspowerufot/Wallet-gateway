import React, { useState } from "react";
import WithdrawForm from "./withdraw";
import SendForm from "./send";
import SettingsIcon from "./setting";
import "../App.css";
function WalletCard() {
  const [balance, setBalance] = useState(50000);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ISOpen, setOpen] = useState(false);
  const [ISsOpen, setsOpen] = useState(false);
  const [ISssOpen, setssOpen] = useState(false);

  const handleWithdrawClick = () => {
    setOpen(!ISOpen);
    setsOpen(false);
    setssOpen(false);
  };

  const handleSendClick = () => {
    setOpen(false);
    setsOpen(!ISsOpen);
    setssOpen(false);
  };
  const SendClick = () => {
    setOpen(false);
    setsOpen(false);
    setssOpen(!ISssOpen);
  };

  return (
    <div>
      <div className="settings-icon">
        {" "}
        <button className="button" onClick={SendClick} id="btn4">
          {ISssOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path
                fill="currentColor"
                d="M19.06 4.94l-1.41-1.41L12 10.59 6.35 4.94 4.94 6.35 10.59 12l-5.65 5.65 1.41 1.41L12 13.41l5.65 5.65 1.41-1.41L13.41 12l5.65-5.65z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-settings">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          )}
        </button>
        {ISssOpen && <SettingsIcon />}
      </div>
      <div className="wallet-card">
        <div className="wallet-card__header">
          <h3>
            <span style={{ marginLeft: "20px" }}> Current Balance:</span>

            <h2 style={{ color: "white" }}>${balance}</h2>
            <div className="wallet-card__buttonss">
              <span className="wallet-card__buttones">
                <span>
                  <button className="wallet-card__dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path
                        fill="currentColor"
                        d="M12 8.59l-4.88 4.88-1.41-1.41L12 5.76l4.88 4.88-1.41 1.41z"
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
                      viewBox="0 0 14 14">
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
              onClick={() => setDropdownOpen(!dropdownOpen)}>
              {dropdownOpen ? (
                "Close"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14">
                  <path
                    fill="#000"
                    d="M12.146 3.146L7 8.293l-5.146-5.147-1.414 1.414L7 10.121l6.56-6.561-1.414-1.414z"
                  />
                </svg>
              )}
            </button>
            {dropdownOpen && (
              <ul className="wallet-card__dropdown-menu">
                <li> Your tag is @username</li>
                <li> Your tag is @username</li>
              </ul>
            )}
          </div>
        </div>
        <div className="wallet-card__buttons">
          <button
            className="wallet-card__button"
            onClick={handleWithdrawClick}
            id="btn1">
            {ISOpen ? "Close" : "Withdraw"}
          </button>
          {ISOpen && <WithdrawForm />}
          <button
            className="wallet-card__button"
            onClick={handleSendClick}
            id="btn2">
            {ISsOpen ? "Close" : "Send"}
          </button>
          {ISsOpen && <SendForm />}
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
